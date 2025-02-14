import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";

export default function DesignComponent() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="bg-[#E7EAF1] py-20 flex items-center justify-center px-6 md:px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-3 grid-cols-1 w-full  space-y-6 md:space-y-0 md:space-x-8">
        {/* Left section - Sketch */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 min-w-[400px] max-w-xl"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#2F63C9] text-white px-4 py-1 rounded-md text-sm font-medium">
              Sketch
            </span>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer">
              <Play size={20} className="text-gray-600" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-44 h-24 bg-gray-200 rounded-lg"></div>
            <div className="w-44 h-24 bg-gray-200 rounded-lg"></div>
            <div className="w-44 h-24 bg-gray-200 rounded-lg"></div>
            <div className="w-44 h-24 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="p-2 bg-gray-200 rounded-full">
              <ArrowLeft size={16} />
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Middle section - Image */}
        <motion.div
          className="relative w-80 h-80 rounded-lg overflow-hidden shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          {isLoading ? (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          ) : (
            <img
              src="../assets/pexels-heyho-8146318.jpg"
              alt="Sample"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <Play size={24} className="text-gray-600" />
            </button>
          </div>
        </motion.div>

        {/* Right section - Text description */}
        <motion.div
          className=" max-w-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="bg-[#2F63C9] text-white text-5xl rounded-xl p-6 font-bold  mb-8">
            One might <br /> describe
          </h2>
          <p className="text-gray-800  text-lg">
            The Diamanten as a modern, minimalist take on the original, simpler
            cabin, but it remains and thrives as something completely on its
            own.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}