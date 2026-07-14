import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/pastors", label: "Our Pastors" },
  { to: "/contact", label: "Contact" },
  { to: "/join-us", label: "Join Us" },
  { to: "/admin", label: "View Requests" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-28">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Galilee Prayer Fellowship"
              className="w-24 h-24 rounded-full object-cover border border-gray-200"
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
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-blue-700">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button
              className="lg:hidden"
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
          <nav className="lg:hidden flex flex-col gap-1 pb-6 font-medium text-gray-700">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 px-2 rounded-lg hover:bg-blue-50 hover:text-blue-700"
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