import { Link, useParams } from "react-router-dom";
import { Trophy } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import OrderPuzzle from "../components/puzzles/OrderPuzzle";
import { getPuzzleById } from "../data/biblePuzzles";

function BiblePuzzlePlay() {
  const { id } = useParams();
  const puzzle = getPuzzleById(id);

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <p className="text-center text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-2">
            Puzzle {puzzle.number}
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 dark:text-white text-center mb-4">
            {puzzle.title}
          </h1>

          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-4">
            {puzzle.description}
          </p>

          <div className="flex justify-center mb-10">
            <Link
              to={`/bible-puzzle/${puzzle.id}/leaderboard`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline"
            >
              <Trophy size={16} />
              View Leaderboard
            </Link>
          </div>

          <OrderPuzzle key={puzzle.id} puzzleId={puzzle.id} answerKey={puzzle.items} />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BiblePuzzlePlay;
