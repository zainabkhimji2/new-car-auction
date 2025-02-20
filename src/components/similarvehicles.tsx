"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const vehicles = [
  {
    id: 1,
    image: "/images/mercedes.avif",
    title: "2017 AUDI Q5 PREMIUM",
    lot: "82050244", 
    bid: "Start the bidding",
    location: "FL - MIAMI NORTH",
  },
  {
    id: 2,
    image: "/images/bmw.avif",
    title: "2017 BMW 320 XI",
    lot: "80675114",
    bid: "Start the bidding", 
    location: "SC - COLUMBIA",
  },
  {
    id: 3,
    image: "/images/ty.jpg",
    title: "2016 BMW X1 XDRIVE28I",
    lot: "89245925",
    bid: "$1,500.00 USD",
    location: "GA - SAVANNAH",
  },
  {
    id: 4,
    image: "/images/mercedes.avif", 
    title: "2016 MERCEDES-BENZ CLA 250",
    lot: "84638504",
    bid: "$4,500.00 USD",
    location: "SC - COLUMBIA",
  },
  {
    id: 5,
    image: "/images/tyo.jpg",
    title: "2018 TOYOTA CAMRY XSE",
    lot: "73219025",
    bid: "$6,200.00 USD",
    location: "TX - HOUSTON",
  },
];

const ITEMS_PER_PAGE = {
  mobile: 1,
  tablet: 2,
  laptop: 3,
  desktop: 4
};

const SimilarVehiclesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(ITEMS_PER_PAGE.desktop);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(ITEMS_PER_PAGE.mobile);
      } else if (width < 1024) {
        setItemsPerView(ITEMS_PER_PAGE.tablet);
      } else if (width < 1280) {
        setItemsPerView(ITEMS_PER_PAGE.laptop);
      } else {
        setItemsPerView(ITEMS_PER_PAGE.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= vehicles.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerView < 0 ? vehicles.length - itemsPerView : prev - itemsPerView
    );
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          Similar Vehicles You May Like
        </motion.h2>

        {/* Vehicle Cards Container */}
        <div className="relative overflow-hidden px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            >
              {vehicles.slice(currentIndex, currentIndex + itemsPerView).map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.title}
                      fill
                      className="object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                      {vehicle.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Lot # <span className="text-blue-600 dark:text-blue-400 font-medium">{vehicle.lot}</span>
                      </p>
                      <p className={`text-lg font-semibold ${
                        vehicle.bid.includes("$") ? "text-green-600 dark:text-green-400" : "text-gray-600 dark:text-gray-400"
                      }`}>
                        {vehicle.bid}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <span className="w-4 h-4">📍</span> {vehicle.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg">
                        View Details
                      </button>
                      <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                        ☆
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 px-4">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all text-gray-800 dark:text-gray-200"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Previous</span>
          </motion.button>

          <span className="text-gray-600 dark:text-gray-300 font-medium">
            {currentIndex + 1}-{Math.min(currentIndex + itemsPerView, vehicles.length)} of {vehicles.length}
          </span>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all text-gray-800 dark:text-gray-200"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRightIcon className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SimilarVehiclesSlider;
