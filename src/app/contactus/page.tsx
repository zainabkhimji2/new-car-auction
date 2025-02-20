"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function ContactUs() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16">
        {/* Hero Section */}
        <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full">
          <Image
            src="/images/mercedes.avif"
            alt="Contact Us Hero"
            fill
            sizes="100vw"
            style={{objectFit: "cover"}}
            className="brightness-[0.3] transform scale-105 hover:scale-100 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-2 sm:mb-4 tracking-tight"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-200 text-center text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl font-light px-4"
            >
              Let us help you discover your perfect vehicle and guide you through our auction process
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white/90 backdrop-blur-lg dark:bg-gray-800/90 rounded-2xl shadow-lg p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm">
                  Our dedicated team is available 24/7 to assist you with any inquiries.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: MapPin, text: "123 Auction Boulevard, Car City, ST 12345", label: "Location" },
                    { icon: Phone, text: "+1 (555) 123-4567", label: "Support" },
                    { icon: Mail, text: "support@carauctions.com", label: "Email" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-1.5 sm:p-2 rounded-lg">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white text-xs sm:text-sm">{item.label}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-white/90 backdrop-blur-lg dark:bg-gray-800/90 rounded-2xl shadow-lg p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300 text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300 text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full mt-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300 text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full mt-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300 resize-none text-xs sm:text-sm"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-xs sm:text-sm flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md"
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
