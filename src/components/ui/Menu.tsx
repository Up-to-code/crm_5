'use client';

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Menu() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-zinc-900 text-white h-full">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 shadow-md md:hidden">
       
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`absolute top-0 left-0 h-screen w-64 bg-zinc-900 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex flex-col gap-4 p-6 py-8">
            
          <Link
            href="/dashboard"
            className="text-lg font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/files"
            className="text-lg font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Files
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        {/* Footer */}
        <div className="mt-auto p-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company
        </div>
      </div>
    </nav>
  );
}

export default Menu;
