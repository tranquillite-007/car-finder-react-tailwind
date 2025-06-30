import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  MoonIcon,
  SunIcon,
  HeartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("darkMode") === "true" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          localStorage.getItem("darkMode") !== "false")
      );
    }
    return false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-[#0B192C] border-b border-gray-100 dark:border-[#1E3E62]">
      <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1E3E62]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Logo - Center on mobile */}
          <Link
            to="/"
            className="flex flex-col items-center mx-auto lg:mx-4 group"
          >
            <svg
              className="w-8 h-8 text-gray-900 dark:text-gray-100 group-hover:rotate-12 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 16H8M4 15H6M18 15H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 15V10C16 9.33333 15.6 8 14 8H10C8.4 8 8 9.33333 8 10V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L3 10.5H5.5M22 12L21 10.5H18.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-2xl font-bold text-gray-900 dark:text-white font-['Inter'] tracking-tight">
              CARFINDER
            </span>
          </Link>

          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="relative text-gray-800 dark:text-gray-200 font-medium text-sm uppercase tracking-wider group transition-colors duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E3E62] dark:bg-[#FF6500] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative text-gray-800 dark:text-gray-200 font-medium text-sm uppercase tracking-wider group transition-colors duration-300"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E3E62] dark:bg-[#FF6500] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative text-gray-800 dark:text-gray-200 font-medium text-sm uppercase tracking-wider group transition-colors duration-300"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E3E62] dark:bg-[#FF6500] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/faq"
              className="relative text-gray-800 dark:text-gray-200 font-medium text-sm uppercase tracking-wider group transition-colors duration-300"
            >
              FAQ
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E3E62] dark:bg-[#FF6500] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right side icons (always visible) */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link
              to="/wishlist"
              className="flex items-center text-gray-800 dark:text-gray-200 group lg:hidden" // Hidden on desktop if you want
              aria-label="Wishlist"
            >
              <HeartIcon className="w-6 h-6 group-hover:text-[#1E3E62] dark:group-hover:text-[#FF6500] transition-colors duration-300" />
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#1E3E62] hover:bg-gray-200 dark:hover:bg-[#FF6500] transition-colors duration-300 group"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-gray-800 dark:text-white group-hover:rotate-12 transition-transform duration-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-800 dark:text-white group-hover:rotate-12 transition-transform duration-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (shown when toggled) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#0B192C] py-4 px-4 border-t border-gray-100 dark:border-[#1E3E62]">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-800 dark:text-gray-200 font-medium uppercase tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 dark:text-gray-200 font-medium uppercase tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 dark:text-gray-200 font-medium uppercase tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="text-gray-800 dark:text-gray-200 font-medium uppercase tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center text-gray-800 dark:text-gray-200 font-medium uppercase tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HeartIcon className="w-5 h-5 mr-2" />
                Wishlist
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
