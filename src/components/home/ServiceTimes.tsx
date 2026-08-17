import { Clock, Sparkles } from "lucide-react";

const SERVICES = [
  {
    title: "Sunday Worship",
    day: "Every Sunday",
    time: "10:30 AM – 12:30 PM",
    color: "#0B4F9C",
  },
  {
    title: "Sunday School",
    day: "Every Sunday",
    time: "11:30 AM – 12:30 PM",
    note: "Children will be taken to Sunday School at 11:30 AM and safely returned to their parents at 12:30 PM.",
    color: "#198754",
  },
  {
    title: "Women's Fellowship",
    day: "Every Friday",
    time: "11:00 AM – 1:30 PM",
    color: "#6F42C1",
  },
  {
    title: "Fasting Prayer",
    day: "Every Saturday",
    time: "7:30 PM – 9:00 PM",
    color: "#FD7E14",
  },
  {
    title: "Wednesday Prayer Meeting",
    day: "Launching Soon",
    time: "7:30 PM – 8:30 PM",
    color: "#DC3545",
  },
];

function ServiceTimes({ layout = "grid" }: { layout?: "grid" | "list" }) {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-900 dark:text-blue-300">
            <Sparkles size={18} />
          </span>
          <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase">
            Join Us
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-12">
          Weekly Services
        </h2>

        {layout === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border-t-4 border border-gray-100 dark:border-gray-700 p-6 transition hover:-translate-y-1"
                style={{ borderTopColor: service.color }}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {service.day}
                </p>

                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Clock size={16} />
                  {service.time}
                </p>

                {service.note && (
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {service.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-6 border-l-4"
                style={{ borderLeftColor: service.color }}
              >
                <div className="sm:w-64 shrink-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">
                    {service.day}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock size={16} />
                    {service.time}
                  </p>

                  {service.note && (
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {service.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ServiceTimes;
