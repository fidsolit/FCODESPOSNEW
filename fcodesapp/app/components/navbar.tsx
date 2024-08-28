"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-200  shadow-md fixed w-full  z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <Link href={"/"} className="flex items-center">
          <img src="fcodeslogo.png" width={40} height={40} alt="Logo" />
          {/* <span className="ml-2 text-xl font-bold">MySite</span> */}
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href={"/admindashboard"}
            className="text-gray-700 hover:text-blue-600 transition font-semibold"
          >
            ADMIN DASHBOARD
          </Link>
          <Link
            href={"/store"}
            className="text-gray-700 hover:text-blue-600 transition font-semibold"
          >
            STORE
          </Link>
          <Link
            href={"/pages/About"}
            className="text-gray-700 hover:text-blue-600 transition font-semibold"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="text-gray-700 hover:text-blue-600 transition font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              href={"/login"}
              className="text-gray-700 hover:text-blue-600 transition font-semibold"
            >
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-gray-700 hover:text-blue-600 transition p-2"
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
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-slate-200 rounded-lg shadow-lg w-11/12 p-4">
            <div className="flex justify-end">
              <button
                onClick={handleMenuToggle}
                className="text-gray-700 hover:text-blue-600 transition"
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-4">
              <Link
                href={"/admindashboard"}
                className="text-gray-700 hover:text-blue-600 transition font-semibold"
                onClick={handleMenuToggle}
              >
                ADMIN DASHBOARD
              </Link>
              <Link
                href={"/store"}
                className="text-gray-700 hover:text-blue-600 transition font-semibold"
                onClick={handleMenuToggle}
              >
                STORE
              </Link>
              <Link
                href={"/pages/About"}
                className="text-gray-700 hover:text-blue-600 transition font-semibold"
                onClick={handleMenuToggle}
              >
                About
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    onLogout();
                    handleMenuToggle();
                  }}
                  className="text-gray-700 hover:text-blue-600 transition font-semibold"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href={"/login"}
                  className="text-gray-700 hover:text-blue-600 transition font-semibold"
                  onClick={handleMenuToggle}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
