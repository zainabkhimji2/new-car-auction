"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Gavel, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const auctionData = [
  {
    id: 1,
    name: "Lamborghini Huracan",
    images: ["/images/bmw.avif", "/images/bmw.avif", "/images/bmw.avif"],
    price: "$250,000",
    endTime: "2d 8h 30m",
    status: "Live",
  },
  {
    id: 2,
    name: "Ferrari 488 GTB", 
    images: ["/images/audi.avif", "/images/audi.avif", "/images/audi.avif"],
    price: "$230,000",
    endTime: "1d 12h 15m",
    status: "Live",
  },
  {
    id: 3,
    name: "Porsche 911 Turbo",
    images: ["/images/porsche.avif", "/images/porsche.avif", "/images/porsche.avif"],
    price: "$180,000",
    endTime: "3d 6h 50m", 
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Porsche 911 Turbo",
    images: ["/images/a.webp", "/images/a.webp", "/images/a.webp"],
    price: "$180,000",
    endTime: "4d 4h 20m",
    status: "Upcoming",
  },
  {
    id: 5,
    name: "Porsche 911 Turbo",
    images: ["/images/b.webp", "/images/ab.webp", "/images/b.webp"],
    price: "$180,000",
    endTime: "5d 9h 45m",
    status: "Upcoming",
  },
];

const FeatureAuction = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [likedAuctions, setLikedAuctions] = useState<number[]>([]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("dark-mode");
    const isDark = storedTheme ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleLike = (auctionId: number) => {
    setLikedAuctions(prev => 
      prev.includes(auctionId) 
        ? prev.filter(id => id !== auctionId)
        : [...prev, auctionId]
    );
  };

  if (darkMode === null) return null;

  return (
    <section className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Featured Auctions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover and bid on exclusive luxury vehicles from around the world
        </p>
      </motion.div>

      <div className="relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1536: { slidesPerView: 4, spaceBetween: 32 },
          }}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={{ 
            nextEl: ".next-btn", 
            prevEl: ".prev-btn" 
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            el: '.swiper-pagination'
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="px-1 py-4"
        >
          {auctionData.map((auction, index) => (
            <SwiperSlide key={auction.id} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] h-full flex flex-col"
              >
                <div className="relative group aspect-[4/3]">
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      nextEl: `.next-image-${auction.id}`,
                      prevEl: `.prev-image-${auction.id}`,
                    }}
                    modules={[Navigation]}
                    className="h-full"
                  >
                    {auction.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">
                          <Image 
                            src={img} 
                            alt={auction.name} 
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-2 bg-black/60 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium text-sm">{auction.endTime}</span>
                          </div>
                          <div className={`prev-image-${auction.id} absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 cursor-pointer`}>
                            <ChevronLeft className="w-4 h-4" />
                          </div>
                          <div className={`next-image-${auction.id} absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 cursor-pointer`}>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Badge
                    className={`absolute top-4 left-4 z-10 px-3 py-1.5 text-sm font-semibold rounded-lg shadow-lg ${
                      auction.status === "Live" 
                        ? "bg-red-500 text-white animate-pulse" 
                        : "bg-gray-700/90 text-white"
                    }`}
                  >
                    {auction.status}
                  </Badge>

                  <button 
                    onClick={() => toggleLike(auction.id)}
                    className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        likedAuctions.includes(auction.id) 
                          ? "fill-red-500 text-red-500" 
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {auction.name}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      Starting at {auction.price}
                    </p>
                  </div>
                  
                  <Link href="/cardetails" className="mt-6 block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600  hover:bg-blue-700  text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      <span className="text-sm sm:text-base">View Vehicle Details</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="swiper-pagination mt-8"></div>
    </section>
  );
};

export default FeatureAuction;
