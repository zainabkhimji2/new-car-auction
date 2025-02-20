import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-black dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              Welcome to our car auction platform, where you can discover, bid, and win the car of your dreams. We connect car enthusiasts worldwide, offering a seamless and exciting auction experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/auctions" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                  Auctions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>123 Auction Street, Car City, USA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>support@carauctions.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 hover:bg-blue-500 dark:bg-gray-700 dark:hover:bg-blue-400 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-800 dark:text-gray-100" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 hover:bg-pink-500 dark:bg-gray-700 dark:hover:bg-pink-400 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-800 dark:text-gray-100" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-200 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-blue-500 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-800 dark:text-gray-100" />
              
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Car Auctions. Developed by{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-100">Zainab Khimji</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
