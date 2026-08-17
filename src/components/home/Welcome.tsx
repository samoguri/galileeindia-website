import { BookOpen, HandHeart, Music, Users } from "lucide-react";

const PILLARS = [
  { icon: Music, label: "Worship" },
  { icon: HandHeart, label: "Prayer" },
  { icon: Users, label: "Fellowship" },
  { icon: BookOpen, label: "God's Word" },
];

function Welcome() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-20 flex justify-center">
      <div className="w-full max-w-4xl px-6 flex flex-col items-center">

        <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-4">
          Who We Are
        </span>

        <h2 className="w-full text-center text-5xl font-bold text-blue-900 dark:text-white mb-8">
          Welcome to Galilee Prayer Fellowship
        </h2>

        <p className="w-full text-center text-xl leading-9 text-gray-700 dark:text-gray-300 mb-12">
          Galilee Prayer Fellowship is a Bible-believing church in
          Visakhapatnam committed to proclaiming the Gospel of Jesus Christ,
          making disciples, and glorifying God through worship, prayer,
          fellowship, and the teaching of God's Word.
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6">
          {PILLARS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 py-6 rounded-2xl bg-blue-50/60 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-800/80 transition"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 dark:bg-blue-700 text-white">
                <Icon size={22} />
              </span>
              <span className="font-semibold text-blue-900 dark:text-gray-100">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Welcome;
