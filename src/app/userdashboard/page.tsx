"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiSearch, FiBell, FiChevronDown, FiHome, FiBarChart2, FiShoppingBag, FiGrid, FiLayers, FiBox, FiFileText, FiPieChart, FiList, FiSettings, FiLogOut, FiShield, FiDollarSign, FiMessageSquare, FiHeart, FiClock, FiTruck, FiStar, FiAlertCircle, FiUpload } from "react-icons/fi";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "@/components/dashboardstatics";

export default function UserDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  const username = "Alex Johnson";
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("dark-mode");
    const isDark = storedTheme ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode]);

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  if (!mounted || darkMode === null) {
    return null;
  }

  const menuItems = [
    { icon: FiHome, label: "Home", href: "/", active: false },
    { icon: FiDollarSign, label: "Active Bids", active: true },
    { icon: FiHeart, label: "Watchlist", active: false }
  ];

  const userMenuItems = [
    { icon: FiSettings, label: "Account Settings" },
    { icon: FiShield, label: "Privacy & Security" },
    { icon: FiLogOut, label: "Logout" }
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navbar */}
      <header className="h-16 bg-white dark:bg-gray-800 shadow-sm fixed top-0 right-0 left-0 z-30 flex items-center justify-between px-2 sm:px-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: sidebarOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiMenu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
            </motion.div>
          </motion.button>
          <h2 className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">
            {greeting}, <span className="font-medium">{username}</span>
          </h2>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-6">
          <div className="relative hidden sm:block">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search auctions..."
              className="w-48 sm:w-64 pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          
          <div className="relative">
            <button className="p-1 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <FiBell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="p-1 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {darkMode ? <Sun size={18} className="text-blue-500 sm:w-5 sm:h-5" /> : <Moon size={18} className="text-gray-800 sm:w-5 sm:h-5" />}
          </button>

          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 sm:space-x-3 p-1 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
                <Image
                  src="/images/user_1.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="hidden sm:inline text-gray-700 dark:text-gray-200">{username}</span>
              <motion.div
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </motion.div>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
                >
                  {userMenuItems.map((item) => (
                    <button
                      key={item.label}
                      className="w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-200">{item.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black z-20"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-64 bg-white dark:bg-gray-800 shadow-lg fixed h-full z-30"
            >
              <div className="p-6">
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide pr-4">
          🚗 <span className="text-blue-600">Car</span>Auction
        </Link>
              </div>
              
              <nav className="mt-6">
                <div className="px-4 mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Main Menu</p>
                </div>
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`w-full px-6 py-3 flex items-center space-x-3 transition-colors relative
                        ${item.active ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"}`}
                    >
                      {item.active && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r" />
                      )}
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20 px-2 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-500 dark:border-blue-400"
              >
                <Image
                  src="/images/user_1.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-200">{username}</h2>
              <span className="text-blue-600 dark:text-blue-400 font-medium">Premium Member</span>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input type="text" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <input type="text" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input type="email" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input type="tel" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">DSA Number</label>
                  <input type="text" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Postcode</label>
                  <input type="text" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                <textarea className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" rows={2}></textarea>
              </motion.div>

              <div className="flex justify-center">
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-full max-w-xl h-36 sm:h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center space-y-3 sm:space-y-4 transition-colors ${
                    isDragging 
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  <FiUpload className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 dark:text-gray-500" />
                  <div className="text-center px-2">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Drag and drop your files here, or</p>
                    <label className="mt-2 inline-block">
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <span className="px-3 sm:px-4 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                        Browse Files
                      </span>
                    </label>
                  </div>
                  {selectedFile && (
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
                  <input type="password" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
                  <input type="password" className="w-full px-3 sm:px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 transition-all duration-200 text-sm sm:text-base" />
                </motion.div>
              </div>

              <div className="flex justify-end mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                >
                  Update Profile
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
    <div>
      <Dashboard/>
    </div>
    </>
  );
}
