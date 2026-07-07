import { Menu, Play } from "lucide-react";
import logo from "../../assets/logo.png"; 

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Galilee Prayer Fellowship"
              className="w-16 h-16 rounded-full object-cover border border-gray-200"
            />

            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-tight">
                Galilee Prayer Fellowship
              </h1>

              <p className="text-sm text-gray-500">
                Lawsons Bay Colony • Visakhapatnam
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#" className="hover:text-blue-700">About</a>
            <a href="#" className="hover:text-blue-700">Ministries</a>
            <a href="#" className="hover:text-blue-700">Sermons</a>
            <a href="#" className="hover:text-blue-700">Events</a>
            <a href="#" className="hover:text-blue-700">Contact</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button className="hidden md:flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-lg transition">
              <Play size={18} />
              Watch Sermons
            </button>

            <button className="lg:hidden">
              <Menu size={28} />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;