"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, LogIn, UserPlus, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // Prevent hydration mismatch

  // Ensure dark mode state only runs on the client
  useEffect(() => {
    const storedTheme = localStorage.getItem("dark-mode");
    const isDark = storedTheme ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode === null) return; // Prevent hydration errors
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode]);

  if (darkMode === null) return null; // Avoid SSR-client mismatch

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide pr-4">
          🚗 <span className="text-blue-600">Car</span>Auction
        </Link>

        {/* SEARCH BAR (Hidden on small screens) */}
        <div className="hidden md:flex flex-grow justify-center pr-3">
          <div className="relative w-full max-w-md">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <Search size={20} />
            </div>
            <Input
              type="text"
              placeholder="Search cars..."
              className="w-full pl-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* NAVIGATION & BUTTONS */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/userdashboard" className="hover:text-blue-600 transition">Dashboard</Link>
          <Link href="/aboutus" className="hover:text-blue-600 transition">About Us</Link>
          <Link href="/contactus" className="hover:text-blue-600 transition">Contact Us</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {darkMode ? <Sun size={20} className="text-blue-500" /> : <Moon size={20} className="text-gray-800" />}
          </button>
          <Link href="/login">
            <Button variant="outline" className="px-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              <LogIn size={18} /> Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="px-4 bg-blue-600 text-white hover:scale-105 transition">
              <UserPlus size={18} /> Register
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg py-5 px-6">
          <div className="relative mb-4">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <Search size={20} />
            </div>
            <Input 
              type="text" 
              placeholder="Search cars..." 
              className="w-full pl-10 rounded-full border-gray-300 dark:border-gray-600 py-2 dark:bg-gray-800 dark:text-white" 
            />
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/userdashboard" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Dashboard</Link>
            <Link href="/about" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">About Us</Link>
            <Link href="/contact" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Contact Us</Link>
            <button onClick={() => setDarkMode(!darkMode)} className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {darkMode ? <Sun size={20} className="text-blue-500" /> : <Moon size={20} className="text-gray-800" />} Toggle Dark Mode
            </button>
            <Link href="/login">
              <Button className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <LogIn size={20} /> Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="w-full bg-blue-600 text-white hover:scale-105 transition">
                <UserPlus size={20} /> Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
