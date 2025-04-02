import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full">
      {/* Skeleton loader */}
      {!imageLoaded ? (
        <div className="w-full h-64 md:h-96 bg-gray-200 animate-pulse"></div>
      ) : (
        <div className="relative w-full h-64 md:h-96">
          <img
            src="../assets/class.jpg"
            alt="Classroom with teacher and students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.2
              }}
              className="mb-4"
            >
              <div className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                WATCH A VIDEO ABOUT OUR<br />SCHOOL
              </h2>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoBanner;