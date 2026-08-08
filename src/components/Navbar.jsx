import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../public/images/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      type: "link",
      to: "/",
    },
    {
      name: "About Us",
      type: "hash",
      to: "/#about",
    },
    {
      name: "Tour Packages",
      type: "hash",
      to: "/#tours",
    },
    {
      name: "Popular Destinations",
      type: "hash",
      to: "/#popularDestinations",
    },
    {
      name: "popularTours",
      type: "hash",
      to: "/#popularTours",
    },
    {
      name: "Contact Us",
      type: "hash",
      to: "/#contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="max-w-7xl px-8 py-4 mx-auto">
        <div className="mx-auto flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl shadow-2xl">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((item) => (
                <li
                  key={item.name}
                  className="group relative cursor-pointer text-white font-semibold transition duration-300"
                >
                  {item.type === "link" ? (
                    <Link to={item.to} className="flex items-center gap-1">
                      {item.name}
                    </Link>
                  ) : (
                    <HashLink
                      smooth
                      to={item.to}
                      className="flex items-center gap-1"
                    >
                      {item.name}

                      {item.name === "Tour Packages" && (
                        <FaChevronDown className="text-xs transition group-hover:rotate-180" />
                      )}
                    </HashLink>
                  )}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Button */}
          <HashLink
            smooth
            to="/#contact"
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105 lg:block"
          >
            Book Now
          </HashLink>

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
          {navLinks.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.name}
                to={item.to}
                onClick={closeMenu}
                className="block cursor-pointer border-b border-white/10 py-4 text-white transition hover:text-blue-400"
              >
                {item.name}
              </Link>
            ) : (
              <HashLink
                key={item.name}
                smooth
                to={item.to}
                onClick={closeMenu}
                className="block cursor-pointer border-b border-white/10 py-4 text-white transition hover:text-blue-400"
              >
                {item.name}
              </HashLink>
            ),
          )}

          <HashLink
            smooth
            to="/#contact"
            onClick={closeMenu}
            className="mt-5 block w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center font-semibold text-white"
          >
            Book Now
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
