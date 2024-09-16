import React, { useState } from "react";
import logo from "../assets/Logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on hamburger icon click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#F40404] py-4">
      <div className="max-w-container mx-auto flex items-center justify-between flex-wrap lg:flex-nowrap px-4">
        <div className="w-1/2 lg:w-1/4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-full lg:w-3/4 flex justify-end font-pops">
          <div className="block lg:hidden cursor-pointer" onClick={toggleMenu}>
            ☰
          </div>

          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex flex-wrap lg:flex-nowrap items-center justify-end gap-x-6`}
          >
            <li
              className="text-base font-semibold text-white hover:text-black duration-300 ease-in-out p-3"
              onClick={closeMenu}
            >
              Home
            </li>
            <li
              className="text-base font-semibold text-white hover:text-black duration-300 ease-in-out p-3"
              onClick={closeMenu}
            >
              About
            </li>
            <li
              className="text-base font-semibold text-white hover:text-black duration-300 ease-in-out p-3"
              onClick={closeMenu}
            >
              Services
            </li>
            <li
              className="text-base font-semibold text-white hover:text-black duration-300 ease-in-out p-3"
              onClick={closeMenu}
            >
              Gallery
            </li>
            <li
              className="text-base font-semibold text-white hover:text-black duration-300 ease-in-out p-3"
              onClick={closeMenu}
            >
              Blog
            </li>
            <li
              className="text-base font-semibold text-white px-8 py-1 hover:text-black duration-300 ease-in-out border-2 border-[#fff] p-3 shadow-lg shadow-cyan-500/50 rounded-lg"
              onClick={closeMenu}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
