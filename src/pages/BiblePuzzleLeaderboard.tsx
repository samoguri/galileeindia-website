import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getPuzzleById } from "../data/biblePuzzles";
import {
  fetchLeaderboard,
  type LeaderboardEntry,
} from "../services/leaderboardService";
import { formatDuration } from "../utils/time";

const MEDALS = ["🥇", "🥈", "🥉"];

function BiblePuzzleLeaderboard() {
  const { id } = useParams();
  const puzzle = getPuzzleById(id);

  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!puzzle) return;
    setLoading(true);
    setError(false);
    fetchLeaderboard(puzzle.id, 25)
      .then(setEntries)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [puzzle]);

  if (!puzzle) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-white">
            Puzzle not found
          </h1>
          <Link to="/bible-puzzle" className="text-blue-700 dark:text-blue-400 font-semibold">
            Back to all puzzles
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">

          <Link
            to={`/bible-puzzle/${puzzle.id}`}
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold mb-6"
          >
            <ArrowLeft size={18} />
            Back to Puzzle {puzzle.number}
          </Link>

          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy size={22} className="text-blue-900 dark:text-blue-300" />
            <p className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase">
              Leaderboard
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-white text-center mb-10">
            {puzzle.title}
          </h1>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-6">
            {loading && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-6">
                Loading leaderboard…
              </p>
            )}

            {!loading && error && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-6">
                Leaderboard isn't available right now. Please try again later.
              </p>
            )}

            {!loading && !error && entries.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-6">
                No one has completed this puzzle yet. Be the first!
              </p>
            )}

            {!loading && !error && entries.length > 0 && (
              <ol className="flex flex-col gap-2">
                {entries.map((entry, index) => (
                  <li
                    key={entry.score_uuid}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 px-4 py-3"
                  >
                    <span className="w-8 shrink-0 text-center font-bold text-blue-900 dark:text-blue-300">
                      {MEDALS[index] ?? `#${index + 1}`}
                    </span>
                    <span className="flex-1 truncate font-medium text-gray-900 dark:text-gray-100">
                      {entry.player_name}
                    </span>
                    <span className="shrink-0 text-sm text-gray-600 dark:text-gray-400">
                      {formatDuration(entry.time_taken_ms)}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to={`/bible-puzzle/${puzzle.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-900 dark:bg-blue-700 text-white font-semibold hover:bg-blue-800 dark:hover:bg-blue-600 transition"
            >
              Play This Puzzle
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BiblePuzzleLeaderboard;
