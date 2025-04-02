import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OpinionBadgesComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading of images
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const badges = [
    {
      id: 1,
      image: "../assets/child-toys-still-life.jpg",
      alt: "Academic University Badge"
    },
    {
      id: 2,
      image: "../assets/child-toys-still-life.jpg",
      alt: "State University Badge"
    },
    {
      id: 3,
      image: "../assets/child-toys-still-life.jpg",
      alt: "Academy Badge"
    },
    {
      id: 4,
      image: "../assets/child-toys-still-life.jpg",
      alt: "College Badge"
    },
    {
      id: 5,
      image: "../assets/child-toys-still-life.jpg",
      alt: "Educational College Badge"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Opinion Form */}
        <div className="flex relative flex-col md:flex-row items-center justify-between mb-16">
          <motion.div 
            className="md:w-2/5 bg-yellow-400 py-4 px-8 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">DROP YOUR OPINION..</h2>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5 flex flex-col md:flex-row mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Your Opinion"
              className="flex-grow border border-gray-300 py-4 px-6 focus:outline-none"
            />
            <button className="bg-yellow-400 text-black font-medium px-6 py-4 mt-2 md:mt-0">
              Send Now
            </button>
          </motion.div>
          
          {/* Educational Kid Illustration */}
          <motion.div
            className="hidden  md:block absolute right-0 top-0 transform -translate-y-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {!isLoaded ? (
              <div className="w-32 h-32 bg-gray-200 animate-pulse rounded-full"></div>
            ) : (
              <img 
                src="../assets/land.jpg" 
                alt="Kid reading book illustration" 
                className="w-32"
              />
            )}
          </motion.div>
        </div>

        {/* Educational Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 sm:w-24 sm:h-24"
            >
              {!isLoaded ? (
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-full"></div>
              ) : (
                <img 
                  src={badge.image} 
                  alt={badge.alt} 
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionBadgesComponent;