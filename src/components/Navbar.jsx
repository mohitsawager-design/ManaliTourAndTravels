import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../public/images/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "Tour Packages",
    "Blog",
    "Hotel",
    "Bike Rent",
    "Cab Hire",
    "Contact Us",
  ];

  return (
    <header className="absolute top-8 left-0 z-50 w-full">
      <div className="max-w-7xl px-8 py-4 mx-auto">
        <div className="mx-auto flex  items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl shadow-2xl">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((item) => (
                <li
                  key={item}
                  className="group relative cursor-pointer text-white font-semibold transition duration-300"
                >
                  <div className="flex items-center gap-1">
                    {item}
                    {item === "Tour Packages" && (
                      <FaChevronDown className="text-xs transition group-hover:rotate-180" />
                    )}
                  </div>
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Button */}
          <button className="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105 lg:block">
            Book Now
          </button>

          {/* Mobile Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[600px] mt-3" : "max-h-0"
        }`}
      >
        <div className="mx-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          {navLinks.map((item) => (
            <div
              key={item}
              className="cursor-pointer border-b border-white/10 py-4 text-white transition hover:text-blue-400"
            >
              {item}
            </div>
          ))}
          <button className="mt-5 w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
