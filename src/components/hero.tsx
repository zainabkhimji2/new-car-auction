"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 🚗 Slide Data
const slides = [
  {
    id: 1,
    image: "/images/a.webp",
    title: "Premium Auto Auctions",
    subtitle: "USA & German Imports",
    bid: "$2,400",
    description: "Access to 300,000+ Luxury Vehicles"
  },
  {
    id: 2,
    image: "/images/b.webp",
    title: "Ferrari 488 Pista",
    subtitle: "2024 Edition", 
    bid: "$5,500",
    description: "Pure Racing Excellence",
  },
  {
    id: 3,
    image: "/images/c.webp",
    title: "Lamborghini Huracán",
    subtitle: "2024 Evo",
    bid: "$4,700", 
    description: "Engineered for Performance",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        loop
        direction="horizontal"
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
          enabled: true
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-2 sm:w-3 md:w-4 h-1 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/90 transition-all duration-300"></span>`;
          }
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh]">
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    filter: 'brightness(0.8)'
                  }}
                ></div>
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 sm:from-black/70 to-transparent"></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
                <motion.div
                  className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 md:p-7 lg:p-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.p 
                    className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.h1
                    className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.h2
                    className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.h2>

                  {/* Bid Price */}
                  <motion.p
                    className="text-white/90 text-base sm:text-lg md:text-xl mb-4 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Starting at <span className="font-bold text-lg sm:text-xl md:text-2xl text-white">{slide.bid}</span>
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <button className="px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all">
                      Place Bid
                    </button>
                    <button className="px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base font-medium rounded-full border border-blue-600 text-white hover:bg-blue-600/10 transition-all">
                      Learn More
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex justify-between items-center px-2 sm:px-4 md:px-6">
        <button className="custom-swiper-button-prev w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/30 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="custom-swiper-button-next w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/30 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
