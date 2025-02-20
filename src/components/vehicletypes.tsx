"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCar, FaTruck, FaMotorcycle, FaTruckMoving } from "react-icons/fa";

const vehicleTypes = [
  { 
    name: "Automobiles",
    count: 10000,
    icon: FaCar,
    color: "from-blue-600 to-indigo-600",
    description: "Browse our extensive collection of cars, from luxury to economy"
  },
  { 
    name: "Commercial Trucks",
    count: 1152,
    icon: FaTruck,
    color: "from-purple-600 to-pink-600",
    description: "Explore medium and heavy-duty commercial vehicles"
  },
  { 
    name: "Motorcycles",
    count: 627,
    icon: FaMotorcycle,
    color: "from-emerald-600 to-teal-600",
    description: "Discover sport bikes, cruisers, and touring motorcycles"
  },
  { 
    name: "Trailers & Equipment",
    count: 218,
    icon: FaTruckMoving,
    color: "from-orange-600 to-red-600",
    description: "Find utility trailers and specialized equipment"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const VehicleTypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="w-full bg-gray-50 dark:bg-gray-900/50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Vehicle Categories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive inventory across multiple vehicle categories, each offering unique opportunities for buyers and sellers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {vehicleTypes.map((vehicle, index) => {
            const Icon = vehicle.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${vehicle.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="mb-6 text-gray-900 dark:text-white">
                      <Icon className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {vehicle.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                      {vehicle.description}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100 font-medium text-sm">
                        {vehicle.count.toLocaleString()} Listed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-all duration-200 hover:translate-y-[-2px]">
            Browse All Categories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleTypes;
