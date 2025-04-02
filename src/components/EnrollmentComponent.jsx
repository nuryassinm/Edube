import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnrollmentComponent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Star and circle decorations for background
  const decorations = [
    { top: '10%', left: '5%', type: 'star', opacity: 0.15, size: 'w-10 h-10' },
    { top: '20%', left: '10%', type: 'circle', opacity: 0.1, size: 'w-4 h-4' },
    { top: '30%', left: '8%', type: 'circle', opacity: 0.2, size: 'w-6 h-6' },
    { top: '15%', left: '15%', type: 'circle', opacity: 0.15, size: 'w-3 h-3' },
    { bottom: '15%', right: '10%', type: 'star', opacity: 0.2, size: 'w-12 h-12' },
    { bottom: '25%', right: '15%', type: 'star', opacity: 0.15, size: 'w-8 h-8' },
    { bottom: '20%', right: '5%', type: 'circle', opacity: 0.1, size: 'w-5 h-5' },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute ${decoration.size} text-gray-300`}
          style={{ 
            top: decoration.top, 
            left: decoration.left, 
            right: decoration.right,
            bottom: decoration.bottom,
            opacity: decoration.opacity
          }}
          animate={{
            opacity: [decoration.opacity, decoration.opacity * 1.5, decoration.opacity],
            rotate: [0, decoration.type === 'star' ? 15 : 0, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5
          }}
        >
          {decoration.type === 'star' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          ) : (
            <div className="rounded-full bg-gray-300 w-full h-full"></div>
          )}
        </motion.div>
      ))}

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 uppercase text-sm mb-2">JOIN OUR CLASS</p>
            <h2 className="text-3xl font-bold mb-4">
              ENROLL <span className="text-yellow-500">YOUR KIDS</span> IN OUR CLASS TODAY...
            </h2>
            <p className="text-gray-600 mb-6">
              There are three distinct types of Education– Formal Education, Non-Formal Education, 
              and Informal Education. Education aims to change the way of ones thinking. Academic 
              knowledge provides one training.
            </p>
            <motion.button
              className="bg-yellow-400 text-black font-medium px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join With Us
            </motion.button>
          </motion.div>

          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!imageLoaded ? (
              <div className="w-full h-80 bg-gray-200 animate-pulse rounded-lg"></div>
            ) : (
              <div className="relative">
                <img 
                  src="../assets/land.jpg" 
                  alt="Children studying" 
                  className="w-full rounded-lg shadow-md z-10 relative"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 border-2 border-gray-200 w-full h-full rounded-lg"></div>
                <motion.div 
                  className="absolute -top-6 -right-6 w-12 h-12 text-yellow-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentComponent;