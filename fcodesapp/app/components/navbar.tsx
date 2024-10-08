// <nav className="bg-slate-200  shadow-md w-full  z-50">
//     <div className="container mx-auto px-4 flex justify-between items-center py-3">
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg  flex flex-wrap w-full z-50 transition-all duration-300  ease-in-out">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo with White Background Fix */}
        <Link href={"/"} className="flex items-center space-x-2">
          <img
            src="/fcodeslogo.png"
            width={40}
            height={40}
            alt="
            o"
            className="bg-white p-1 rounded-sm border-2 border-gray-200 shadow-md" // Handle white background with border
          />
          <span className="text-2xl hidden md:block font-bold">FCODES</span>
        </Link>

        {/* Main Menu - Desktop */}
        <div className="hidden  md:flex space-x-6 items-center">
          <Link
            href={"/admindashboard"}
            className="hover:text-yellow-300 transition duration-300 font-semibold"
          >
            ADMIN DASHBOARD
          </Link>
          <Link
            href={"/pages/TopAgent"}
            className="hover:text-yellow-300 transition duration-300 font-semibold"
          >
            TOP AGENTS
          </Link>
          <Link
            href={"/store"}
            className="hover:text-yellow-300 transition duration-300 font-semibold"
          >
            STORE
          </Link>
          <Link
            href={"/pages/About"}
            className="hover:text-yellow-300 transition duration-300 font-semibold"
          >
            About
          </Link>
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="hover:text-yellow-300 transition duration-300 font-semibold"
              >
                Profile
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50 opacity-0 transition-opacity duration-300 ease-in-out transform scale-95"
                  style={{
                    opacity: isDropdownOpen ? 1 : 0,
                    transform: isDropdownOpen ? "scale(1)" : "scale(0.95)",
                  }} // Smooth opening
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={onLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={"/login"}
              className="hover:text-yellow-300 transition duration-300 font-semibold"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="p-2 hover:text-yellow-300 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-500 transition-all  duration-500 ease-in-out overflow-hidden flex justify-end ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center rounded-sm shadow-md space-y-6 py-4">
          <Link
            href={"/admindashboard"}
            onClick={handleMenuToggle}
            className="text-white hover:text-blue-300 hover:bg-sky-50  transition duration-500 ease-in-out font-semibold"
          >
            ADMIN DASHBOARD
          </Link>
          <Link
            href={"/store"}
            onClick={handleMenuToggle}
            className="text-white hover:text-yellow-300 transition duration-300 font-semibold"
          >
            STORE
          </Link>
          <Link
            href={"/pages/About"}
            onClick={handleMenuToggle}
            className="text-white hover:text-yellow-300 transition duration-300 font-semibold"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogout();
                handleMenuToggle();
              }}
              className="text-white hover:text-yellow-300 transition duration-300 font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              href={"/login"}
              onClick={handleMenuToggle}
              className="text-white hover:text-yellow-300 transition duration-300 font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
