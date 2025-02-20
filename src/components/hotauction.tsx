"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

const makes = [
  { make: "Nissan", count: "7,059", logo: "/images/nissan.png" },
  { make: "Chevrolet", count: "5,965", logo: "/images/chervolet.jpg" },
  { make: "Toyota", count: "6,574", logo: "/images/toyota.jpg" },
  { make: "Honda", count: "5,112", logo: "/images/honda.jpg" },
  { make: "BMW", count: "1,094", logo: "/images/bmw.jpg" },
  { make: "Audi", count: "650", logo: "/images/audi.png" },
  { make: "Dodge", count: "2,002", logo: "/images/dodge.png" },
  { make: "Jeep", count: "1,975", logo: "/images/jeep.png" },
  { make: "Subaru", count: "1,258", logo: "/images/suparu.jpg" },
  { make: "Tesla", count: "401", logo: "/images/tesla.png" },
  { make: "Volkswagen", count: "1,211", logo: "/images/volkswagan.png" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HotAuctionMakes() {
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(5);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 5, makes.length));
  };

  return (
    <section ref={ref} className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Popular Brands
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our extensive collection of premium automotive brands
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
      >
        {makes.slice(0, visibleItems).map((item) => (
          <motion.div
            key={item.make}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-transparent dark:bg-transparent backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-24 h-24 mx-auto mb-3 sm:mb-4">
              <div className="w-24 h-24 bg-white">
              <Image 
                src={item.logo} 
                alt={item.make} 
            
                className="object-contain"
               fill

                priority
              />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white text-center mb-2">
              {item.make}
            </h3>
            <div className="flex justify-center">
              <span className="px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold">
                {item.count} listings
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {visibleItems < makes.length && (
        <motion.div 
          className="flex justify-center mt-8 sm:mt-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <button
            onClick={loadMore}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-200 text-sm sm:text-base"
          >
            View More Brands
          </button>
        </motion.div>
      )}

      {visibleItems === makes.length && (
        <motion.div 
          className="flex justify-center mt-8 sm:mt-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <button
            onClick={() => setVisibleItems(5)}
            className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white  font-semibold transition-all duration-200 text-sm sm:text-base"
          >
            Show Less
          </button>
        </motion.div>
      )}
    </section>
  );
}
