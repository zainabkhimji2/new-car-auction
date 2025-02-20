"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { TrendingUp, Users, Car, DollarSign } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    title: "Growth Rate",
    value: "127%",
    description: "Year over year growth",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Global Community",
    value: "50K+", 
    description: "Active members worldwide",
  },
  {
    icon: <Car className="w-8 h-8 text-blue-500" />,
    title: "Premium Vehicles",
    value: "15K+",
    description: "Luxury cars listed",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-500" />,
    title: "Total Value", 
    value: "$250M+",
    description: "In successful transactions",
  }
];

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      });
    }
  }, [isInView, controls]);

  return (
    <section className="relative w-full overflow-hidden mt-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/c.webp"
          alt="Luxury Car Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500/20 p-3 rounded-full mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-base font-semibold text-blue-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-xs text-gray-300">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
