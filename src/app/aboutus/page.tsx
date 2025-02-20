"use client";

import { motion } from "framer-motion";
import { FaUsers, FaAward, FaHandshake, FaLightbulb, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";
import Navbar from "@/components/navbar";

export default function AboutUs() {
  const { theme } = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        {/* Hero Section with Parallax */}
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/c.webp"
              alt="Luxury Cars"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-center max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Where Passion Meets Innovation in the World of Automotive Excellence
            </motion.p>
          </div>
        </div>

        {/* Mission Statement */}
        <motion.section 
          className="py-20 px-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/audi.avif"
                alt="Modern Auction Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At <span className="font-bold text-blue-600 dark:text-blue-400">Car Auction</span>, 
                we're revolutionizing the way people buy and sell vehicles. Our platform combines 
                cutting-edge technology with decades of automotive expertise to create an 
                unparalleled auction experience.
              </p>
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg 
                  shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Our Core Values
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <FaUsers />, title: "Trust & Transparency", desc: "Building lasting relationships through honest dealings" },
                { icon: <FaAward />, title: "Quality Assurance", desc: "Rigorous verification of every vehicle listed" },
                { icon: <FaHandshake />, title: "Customer Success", desc: "Dedicated support at every step of your journey" },
                { icon: <FaLightbulb />, title: "Digital Innovation", desc: "Leveraging technology for seamless experiences" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-xl hover:shadow-2xl 
                  transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-600 dark:border-blue-400"
                >
                  <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonial Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl 
                    transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={`/images/user_${index}.jpg`}
                        alt="Testimonial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Michael Chen</h4>
                      <p className="text-gray-600 dark:text-gray-400">Luxury Car Dealer</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-3xl text-blue-600 dark:text-blue-400 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    "Car Auction has transformed our business. Their platform's efficiency and 
                    reliability have helped us reach more buyers than ever before. The support team
                    is exceptional!"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section with Background Image */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/b.webp" 
              alt="Luxury Car Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 
              dark:from-blue-600/90 dark:to-blue-800/90 mix-blend-multiply" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Start Your Journey With Us Today
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12">
                Join our exclusive community of car enthusiasts and discover your dream vehicle
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white
                    font-bold rounded-xl shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
                >
                  Browse Auctions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white
                    text-white font-bold rounded-xl hover:bg-white/10
                    transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
