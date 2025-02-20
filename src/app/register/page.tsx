"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Register() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Submitted", formData);
  };

  return (
    <>
    <Navbar/>
   
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center mt-10"
      style={{
        backgroundImage: "url('/images/ty.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.6)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 text-white space-y-6 text-center lg:text-left mb-8 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Join Our Community
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Create an account and unlock exclusive features. Connect with others, share your experiences, and be part of something special.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">✨</span>
                <p className="text-lg">Personalized Experience</p>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">🔒</span>
                <p className="text-lg">Secure & Private</p>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">🌟</span>
                <p className="text-lg">Premium Features</p>
              </div>
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-white/90 shadow-xl dark:bg-gray-800"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-white"
            >
              Create Your Account
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "fullname", type: "text", placeholder: "Full Name", icon: <FaUser />, autoComplete: "name" },
                { name: "username", type: "text", placeholder: "Username", icon: <FaUser />, autoComplete: "username" },
                { name: "email", type: "email", placeholder: "Email Address", icon: <FaEnvelope />, autoComplete: "email" },
                { name: "password", type: "password", placeholder: "Password", icon: <FaLock />, autoComplete: "new-password" }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div className="flex items-center border-b-2 border-gray-300 py-2 px-3 focus-within:border-blue-500 transition-all duration-500">
                    <span className="text-gray-500">
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full ml-3 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 dark:text-white"
                      required
                    />
                  </div>
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-500"
              >
                Register
              </motion.button>
            </form>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center mt-6 text-gray-600"
            >
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="text-blue-600 hover:underline"
              >
                Sign in
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
