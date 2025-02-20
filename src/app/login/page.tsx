"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Login() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log("Login Submitted", formData);
  };

  return (
    <>
    <Navbar/>
   
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-900 mt-10">
      {/* Left Section - Image/Brand */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative flex flex-col justify-center items-center w-full p-8 xl:p-12 text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl"
          >
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">🚗 CarAuction</h1>
            <p className="text-xl xl:text-2xl mb-8 text-gray-100">Your Premier Destination for Online Car Auctions</p>
            <div className="relative w-full h-72 xl:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/mercedes.avif"
                alt="Car Auction"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Please sign in to your account</p>
          </div>

          <div className="flex flex-col space-y-6">
            {/* Social Login Button */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full p-3 sm:p-4 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 space-x-3"
              >
                <FaGoogle className="text-red-500 text-xl sm:text-2xl" />
                <span className="text-gray-700 dark:text-gray-300">Continue with Google</span>
              </motion.button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 transition-all duration-200"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 transition-all duration-200"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                </div>
                <Link href="/forgot-password" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </motion.button>
            </form>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
