import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import type { LeaderboardEntry } from "../../services/leaderboardService";
import { formatDuration } from "../../utils/time";

const MEDALS = ["🥇", "🥈", "🥉"];

type Props = {
  puzzleId: string;
  entries: LeaderboardEntry[];
  currentScoreUuid: string | null;
  loading: boolean;
  error: boolean;
};

function Leaderboard({ puzzleId, entries, currentScoreUuid, loading, error }: Props) {
  return (
    <div className="mt-8 text-left">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Trophy size={18} className="text-blue-900 dark:text-blue-300" />
        <h3 className="font-bold text-blue-900 dark:text-white">Leaderboard</h3>
      </div>

      {loading && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Loading leaderboard…
        </p>
      )}

      {!loading && error && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Leaderboard isn't available right now, but your time still counts!
        </p>
      )}

      {!loading && !error && entries.length === 0 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          You're the first one on the leaderboard!
        </p>
      )}

      {!loading && !error && entries.length > 0 && (
        <ol className="flex flex-col gap-2">
          {entries.map((entry, index) => {
            const isCurrent = entry.score_uuid === currentScoreUuid;
            return (
              <li
                key={entry.score_uuid}
                className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${
                  isCurrent
                    ? "border-blue-400 bg-blue-50 dark:bg-blue-950/40"
                    : "border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60"
                }`}
              >
                <span className="w-7 shrink-0 text-center font-bold text-blue-900 dark:text-blue-300">
                  {MEDALS[index] ?? `#${index + 1}`}
                </span>

                <span
                  className={`flex-1 truncate ${
                    isCurrent
                      ? "font-bold text-blue-900 dark:text-blue-200"
                      : "font-medium text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {entry.player_name}
                  {isCurrent && <span className="ml-2 text-xs">(you)</span>}
                </span>

                <span className="shrink-0 text-sm text-gray-600 dark:text-gray-400">
                  {formatDuration(entry.time_taken_ms)}
                </span>
              </li>
            );
          })}
        </ol>
      )}

      {!loading && !error && (
        <div className="flex justify-center mt-4">
          <Link
            to={`/bible-puzzle/${puzzleId}/leaderboard`}
            className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            See full leaderboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
