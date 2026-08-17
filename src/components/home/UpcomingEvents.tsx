import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { CHURCH_EVENTS } from "../../data/events";

const PREVIEW_COUNT = 4;

function UpcomingEvents() {
  const preview = CHURCH_EVENTS.slice(-PREVIEW_COUNT);

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-900 dark:text-blue-300">
            <CalendarDays size={18} />
          </span>
          <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase">
            Mark Your Calendar
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-12">
          Upcoming Events
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((item, index) => {
            const [day, month, year] = item.date.split(" ");
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col items-center text-center transition hover:-translate-y-1"
              >
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-blue-900 dark:bg-blue-800 text-white mb-4">
                  <span className="text-xl font-bold leading-none">{day}</span>
                  <span className="text-xs uppercase tracking-wide">{month}</span>
                </div>

                <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
                  {year}
                </p>

                <p className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  {item.event}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-blue-900 dark:bg-blue-700 text-white font-semibold hover:bg-blue-800 dark:hover:bg-blue-600 transition"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;
