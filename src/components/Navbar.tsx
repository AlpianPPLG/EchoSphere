import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-[#7C3AED] flex items-center justify-center rounded">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">Treact</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Blog
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Login
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </a>
            <a
              href="#"
              className="bg-[#7C3AED] text-white px-6 py-2 rounded-md hover:bg-[#6D28D9] transition-colors"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
