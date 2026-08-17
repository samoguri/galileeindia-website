import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/ThemeContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/bible-puzzle", label: "Bible Puzzle" },
  { to: "/pastors", label: "Our Pastors" },
  { to: "/contact", label: "Contact" },
  { to: "/join-us", label: "Join Us" },
  { to: "/admin", label: "View Requests" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-28">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Galilee Prayer Fellowship"
              className="w-20 h-20 object-contain"
            />

            <div>
              <h1 className="text-xl font-bold text-blue-900 dark:text-white leading-tight">
                Galilee Prayer Fellowship
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Lawsons Bay Colony • Visakhapatnam
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-blue-700 dark:hover:text-blue-400">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              aria-label={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
            >
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            <button
              className="lg:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden flex flex-col gap-1 pb-6 font-medium text-gray-700 dark:text-gray-300">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 px-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;