"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { motion, AnimatePresence } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [year, setYear] = useState("2025");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Auction Data (Example)
  const auctionData = [
    { month: "Jan", total: 10, successful: 3 },
    { month: "Feb", total: 15, successful: 5 },
    { month: "Mar", total: 20, successful: 8 },
    { month: "Apr", total: 25, successful: 10 },
    { month: "May", total: 22, successful: 9 },
    { month: "Jun", total: 18, successful: 7 },
    { month: "Jul", total: 14, successful: 5 },
    { month: "Aug", total: 12, successful: 4 },
    { month: "Sep", total: 10, successful: 3 },
    { month: "Oct", total: 8, successful: 2 },
    { month: "Nov", total: 5, successful: 1 },
    { month: "Dec", total: 3, successful: 0 },
  ];

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
            weight: '500'
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          family: "'Inter', sans-serif",
          weight: '600'
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif"
        },
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
            weight: '500'
          },
          padding: 8
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
            weight: '500'
          },
          padding: 8
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart' as 'easeInOutQuart',
    }
  };

  // Chart Data
  const data = {
    labels: auctionData.map((item) => item.month),
    datasets: [
      {
        label: "Successful Auctions",
        data: auctionData.map((item) => item.successful),
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderRadius: 8,
        barThickness: 'flex' as 'flex',
        hoverBackgroundColor: "rgba(59, 130, 246, 1)",
      },
      {
        label: "Unsuccessful Auctions",
        data: auctionData.map((item) => item.total - item.successful),
        backgroundColor: "rgba(156, 163, 175, 0.6)",
        borderRadius: 8,
        barThickness: 'flex' as 'flex',
        hoverBackgroundColor: "rgba(156, 163, 175, 0.8)",
      },
    ],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* Center Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
      >
        Dashboard Statistics
      </motion.h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {[
          { title: "Total Revenue", value: "$83,650", change: "8.5%", trend: "up" },
          { title: "New Orders", value: "722", change: "8.5%", trend: "up" },
          { title: "Conversion Rate", value: "82.8%", status: "Performing above target" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">{stat.title}</h3>
            <motion.p 
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-2"
              animate={{ scale: hoveredCard === index ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {stat.value}
            </motion.p>
            {stat.change ? (
              <p className="text-sm text-green-500 flex items-center mt-2">
                <span className="text-lg mr-1">↑</span>
                {stat.change} New Sessions Today
              </p>
            ) : (
              <p className="text-sm text-blue-500 mt-2">{stat.status}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <motion.h3 
            whileHover={{ scale: 1.02 }}
            className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-0"
          >
            Monthly Car Auctions ({year})
          </motion.h3>
          <motion.select
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </motion.select>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[400px] w-full"
        >
          <Bar options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: {
                    size: 12,
                    family: "'Inter', sans-serif",
                    weight: 'bold' as const
                  },
                  padding: 20
                }
              },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: {
                  size: 13
                },
                bodyFont: {
                  size: 12
                },
                padding: 10,
                cornerRadius: 4,
                borderWidth: 1
              }
            }
          }} data={data} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
