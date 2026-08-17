import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-[600px] md:h-[750px] overflow-hidden">
      <img
        src={hero}
        alt="Galilee Prayer Fellowship"
        className="w-full h-full object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,61,145,.55), rgba(0,0,0,.65))",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-5">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-5">
            Galilee Prayer Fellowship
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-[#FFD54F] mb-6">
            A Bible-believing Church in Visakhapatnam
          </h2>

          <p className="text-xl md:text-2xl italic mb-2">
            "Follow Me, and I will make you fishers of men."
          </p>

          <p className="text-sm md:text-base text-white/80 mb-9">
            Matthew 4:19
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/sermons"
              className="inline-block bg-[#FFD54F] text-[#0B3D91] px-8 py-4 rounded-lg font-bold hover:brightness-95 transition"
            >
              ▶ Watch Sermons
            </Link>

            <Link
              to="/contact"
              className="inline-block border-2 border-white/80 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>

      <ChevronDown
        size={30}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-bounce"
      />
    </section>
  );
}

export default Hero;
