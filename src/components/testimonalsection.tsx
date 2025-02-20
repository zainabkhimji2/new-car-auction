"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback: "CarAuction made it so easy to find my dream car! Highly recommend.",
    image: "/images/user_1.jpg",
  },
  {
    name: "Jane Smith", 
    feedback: "I sold my car at a great price. The process was smooth and transparent!",
    image: "/images/user_2.jpg",
  },
  {
    name: "Mark Johnson",
    feedback: "Amazing platform with a fantastic selection of cars. Loved the experience!",
    image: "/images/user_3.jpg",
  },
  {
    name: "Emily Davis",
    feedback: "Superb experience! The bidding process was smooth, and customer service was helpful.",
    image: "/images/user_2.jpg",
  },
  {
    name: "David Wilson",
    feedback: "Highly trusted platform! I got my car at a great price without any hassle.",
    image: "/images/user_3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-black py-6 sm:py-8 md:py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Customer Testimonials
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            What our valued customers say about their experience
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12 md:mt-16 flow-root">
          <div className="relative -mx-4 h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden">
            <div className="absolute left-0 top-0 flex w-max animate-scroll space-x-4 sm:space-x-6 py-4 hover:pause">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaQuoteLeft className="absolute top-3 sm:top-4 left-3 sm:left-4 text-2xl sm:text-3xl text-gray-300 dark:text-gray-700" />

                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 mt-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-3 sm:border-4 border-blue-500 shadow-md"
                    />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-md text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {testimonial.feedback}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * 5 - 1rem * 5));
          }
        }

        @media (min-width: 640px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * 5 - 1.25rem * 5));
            }
          }
        }

        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-350px * 5 - 1.5rem * 5));
            }
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
