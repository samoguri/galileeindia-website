import { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { RotateCcw } from "lucide-react";
import PuzzleColumn from "./PuzzleColumn";
import SortableItem from "./SortableItem";
import Celebration from "./Celebration";
import Leaderboard from "./Leaderboard";
import {
  fetchLeaderboard,
  submitScore,
  type LeaderboardEntry,
} from "../../services/leaderboardService";
import { formatDuration } from "../../utils/time";

type Containers = { pool: string[]; answer: string[] };
type Phase = "name" | "playing" | "complete";

const NAME_STORAGE_KEY = "biblePuzzlePlayerName";

function shuffle(items: string[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function OrderPuzzle({
  puzzleId,
  answerKey,
}: {
  puzzleId: string;
  answerKey: string[];
}) {
  const [phase, setPhase] = useState<Phase>("name");
  const [name, setName] = useState(
    () => localStorage.getItem(NAME_STORAGE_KEY) ?? ""
  );
  const [containers, setContainers] = useState<Containers>(() => ({
    pool: shuffle(answerKey),
    answer: [],
  }));
  const [activeId, setActiveId] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());
  const [finishedMs, setFinishedMs] = useState<number | null>(null);

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [leaderboardError, setLeaderboardError] = useState(false);
  const [currentScoreUuid, setCurrentScoreUuid] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    if (containers.pool.length > 0) return;
    if (containers.answer.length !== answerKey.length) return;

    const isCorrect = containers.answer.every((id, index) => id === answerKey[index]);
    if (isCorrect && startTime) {
      const elapsed = Date.now() - startTime;
      setFinishedMs(elapsed);
      setPhase("complete");
      recordScore(elapsed);
    }
  }, [containers, phase, answerKey, startTime]);

  async function recordScore(timeTakenMs: number) {
    setLeaderboardLoading(true);
    setLeaderboardError(false);
    try {
      const { score_uuid } = await submitScore(puzzleId, name, timeTakenMs);
      setCurrentScoreUuid(score_uuid);
      const entries = await fetchLeaderboard(puzzleId);
      setLeaderboard(entries);
    } catch (err) {
      console.error("Leaderboard submit/fetch failed:", err);
      setLeaderboardError(true);
    } finally {
      setLeaderboardLoading(false);
    }
  }

  function startPuzzle() {
    const trimmed = name.trim();
    if (!trimmed) return;
    localStorage.setItem(NAME_STORAGE_KEY, trimmed);
    setName(trimmed);
    setContainers({ pool: shuffle(answerKey), answer: [] });
    setStartTime(Date.now());
    setNow(Date.now());
    setFinishedMs(null);
    setCurrentScoreUuid(null);
    setPhase("playing");
  }

  function restart() {
    setContainers({ pool: shuffle(answerKey), answer: [] });
    setStartTime(Date.now());
    setNow(Date.now());
    setFinishedMs(null);
    setCurrentScoreUuid(null);
    setPhase("playing");
  }

  function findContainer(id: string): keyof Containers | undefined {
    if (id === "pool" || id === "answer") return id;
    if (containers.pool.includes(id)) return "pool";
    if (containers.answer.includes(id)) return "answer";
    return undefined;
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(String(event.active.id));
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeContainer = findContainer(String(active.id));
    const overContainer = findContainer(String(over.id));

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }

    setContainers((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      const overId = String(over.id);
      const overIndex = overItems.indexOf(overId);
      const newIndex = overIndex >= 0 ? overIndex : overItems.length;

      return {
        ...prev,
        [activeContainer]: activeItems.filter((item) => item !== active.id),
        [overContainer]: [
          ...overItems.slice(0, newIndex),
          String(active.id),
          ...overItems.slice(newIndex),
        ],
      };
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);
    if (!over) return;

    const activeContainer = findContainer(String(active.id));
    const overContainer = findContainer(String(over.id));
    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
      return;
    }

    const items = containers[activeContainer];
    const activeIndex = items.indexOf(String(active.id));
    const overIndex = items.indexOf(String(over.id));

    if (activeIndex !== overIndex && overIndex !== -1) {
      setContainers((prev) => ({
        ...prev,
        [activeContainer]: arrayMove(prev[activeContainer], activeIndex, overIndex),
      }));
    }
  }

  function moveItem(id: string, from: keyof Containers, to: keyof Containers) {
    setContainers((prev) => ({
      ...prev,
      [from]: prev[from].filter((item) => item !== id),
      [to]: [...prev[to], id],
    }));
  }

  const elapsedMs = startTime ? now - startTime : 0;

  if (phase === "name") {
    return (
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8 text-center">
        <h2 className="text-xl font-bold text-blue-900 dark:text-white mb-2">
          What's your name?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          We'll cheer for you by name when you finish!
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && startPuzzle()}
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          onClick={startPuzzle}
          disabled={!name.trim()}
          className="w-full px-6 py-3 rounded-lg bg-blue-900 dark:bg-blue-700 text-white font-semibold hover:bg-blue-800 dark:hover:bg-blue-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Start Puzzle
        </button>
      </div>
    );
  }

  if (phase === "complete") {
    return (
      <div className="max-w-lg mx-auto text-center">
        <Celebration />

        <div className="relative z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-10 animate-pop-in">
          <p className="text-5xl mb-4">🎉🌸✨</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-white mb-3">
            Congratulations, {name}!
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            You placed all {answerKey.length} books in the correct order in{" "}
            <span className="font-bold text-blue-900 dark:text-blue-300">
              {formatDuration(finishedMs ?? 0)}
            </span>
            . Well done! 🙌
          </p>

          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-900 dark:bg-blue-700 text-white font-semibold hover:bg-blue-800 dark:hover:bg-blue-600 transition"
          >
            <RotateCcw size={18} />
            Play Again
          </button>

          <Leaderboard
            puzzleId={puzzleId}
            entries={leaderboard}
            currentScoreUuid={currentScoreUuid}
            loading={leaderboardLoading}
            error={leaderboardError}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Go, <span className="font-semibold text-blue-900 dark:text-blue-300">{name}</span>!
        </p>
        <p className="font-mono text-lg font-bold text-blue-900 dark:text-blue-300">
          ⏱ {formatDuration(elapsedMs)}
        </p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col gap-6">
          <PuzzleColumn
            id="answer"
            title="Your Order"
            items={containers.answer}
            emptyHint="Tap or drag books here, in order"
          >
            {containers.answer.map((id, index) => (
              <SortableItem
                key={id}
                id={id}
                label={id}
                index={index}
                onTap={() => moveItem(id, "answer", "pool")}
              />
            ))}
          </PuzzleColumn>

          <PuzzleColumn
            id="pool"
            title="All Books (jumbled)"
            items={containers.pool}
            emptyHint="All books placed!"
          >
            {containers.pool.map((id) => (
              <SortableItem key={id} id={id} label={id} onTap={() => moveItem(id, "pool", "answer")} />
            ))}
          </PuzzleColumn>
        </div>

        <DragOverlay>
          {activeId ? (
            <div className="rounded-xl border border-blue-400 bg-white dark:bg-gray-800 px-3 py-3 shadow-lg font-medium text-gray-900 dark:text-gray-100">
              {activeId}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <div className="flex justify-center mt-8">
        <button
          type="button"
          onClick={restart}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <RotateCcw size={16} />
          Start Over
        </button>
      </div>
    </div>
  );
}

export default OrderPuzzle;
