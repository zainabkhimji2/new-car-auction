"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const carDetails = [
  { 
    title: "Vehicle Overview",
    items: [
      { label: "Make & Model", value: "2016 Audi A6 Premium Plus" },
      { label: "VIN", value: "WAUFGAFCXGN******" },
      { label: "Lot Number", value: "41593405" },
      { label: "Location", value: "Copart NJ - Yard 12" }
    ]
  },
  {
    title: "Technical Specifications", 
    items: [
      { label: "Engine", value: "3.0L 6 Cylinder" },
      { label: "Transmission", value: "Automatic" },
      { label: "Drive Type", value: "All Wheel Drive" },
      { label: "Fuel Type", value: "Gas" }
    ]
  },
  {
    title: "Condition Details",
    items: [
      { label: "Odometer", value: "215,657 mi (ACTUAL)" },
      { label: "Primary Damage", value: "Normal Wear" },
      { label: "Secondary Damage", value: "Minor Dent/Scratches" },
      { label: "Title Status", value: "Clean Title" }
    ]
  }
];

export default function CarDetails() {
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Vehicle Details
      </h2>
      
      <div className="grid gap-6">
        {carDetails.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
            className="bg-card rounded-lg shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-600/10 to-blue-400/10 hover:from-blue-600/20 hover:to-blue-400/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
              <motion.div
                animate={{ rotate: openSections.includes(sectionIndex) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-blue-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openSections.includes(sectionIndex) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 py-4 grid gap-4 sm:grid-cols-2">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        className="flex flex-col space-y-1"
                      >
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
