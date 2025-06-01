import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Our Works", path: "/ourworks" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 sm:px-8 md:px-16 font-sans">
        {/* Logo */}
        <div className="text-white text-2xl font-extrabold tracking-tight select-none cursor-pointer">
          <Link to="/">B4bizz</Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map(({ name, path }, idx) => (
            <Link
              key={idx}
              to={path}
              className="text-gray-300 hover:text-[#b54e3c] transition-colors duration-300 font-medium text-lg"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-300 hover:text-[#b54e3c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b54e3c]"
        >
          {menuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800">
          <div className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map(({ name, path }, idx) => (
              <Link
                key={idx}
                to={path}
                className="text-white font-semibold text-xl hover:text-[#b54e3c] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
