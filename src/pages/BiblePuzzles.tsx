import { Link } from "react-router-dom";
import { Puzzle } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { BIBLE_PUZZLES } from "../data/biblePuzzles";

function BiblePuzzles() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 dark:bg-gray-950 min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-blue-900 dark:text-white text-center mb-4">
            Bible Puzzles
          </h1>

          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
            A new puzzle from time to time. Tap a puzzle below to play.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {BIBLE_PUZZLES.map((puzzle) => (
              <Link
                key={puzzle.id}
                to={`/bible-puzzle/${puzzle.id}`}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 p-6 transition hover:-translate-y-1"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 dark:bg-blue-700 text-white mb-4">
                  <Puzzle size={22} />
                </span>

                <p className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-1">
                  Puzzle {puzzle.number}
                </p>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {puzzle.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400">
                  {puzzle.description}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BiblePuzzles;
