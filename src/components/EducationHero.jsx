import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Users, HeadphonesIcon, Monitor, Play } from 'lucide-react';

const EducationHero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  };

  const features = [
    {
      avatar: "../assets/icon.png",
      title: "Certified Teachers",
      description: "Education must be given top priority by every country. All children and youth of a country must have access"
    },
    {
      avatar: "../assets/icon.png",
      title: "24/7 Online Support",
      description: "Education must be given top priority by every country. All children and youth of a country must have access"
    },
    {
      avatar: "../assets/icon.png",
      title: "Best Teaching",
      description: "Education must be given top priority by every country. All children and youth of a country must have access"
    },
    {
      avatar: "../assets/icon.png",
      title: "Online Class",
      description: "Education must be given top priority by every country. All children and youth of a country must have access"
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={featureVariants}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-4">
                <img src={feature.avatar} alt="avatar" className='h-24' />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <motion.div 
            className="md:w-1/2 relative" 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {!imagesLoaded ? (
              <div className="w-full h-80 bg-gray-200 animate-pulse rounded-lg"></div>
            ) : (
              <div className="relative">
                <img 
                  src="../assets/child-toys-still-life.jpg" 
                  alt="Children learning" 
                  className="rounded-lg shadow-lg z-10 relative"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center cursor-pointer z-20"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
                <div className="absolute z-10 -bottom-12 -right-12 w-48 h-32 bg-gray-100 rounded-tl-3xl rounded-br-3xl shadow-md overflow-hidden">
                  <img 
                    src="../assets/child-toys-still-life.jpg" 
                    alt="Children playing" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-gray-100 rounded-lg"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="md:w-1/2 mt-16 md:mt-0 md:pl-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 flex gap-3 items-center">
              <span className="text-[#facc15] font-medium uppercase tracking-wide ">KNOW ABOUT US</span> <div className='h-1 w-24 bg-[#ffe372]'></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              LEARN ABOUT <span className="text-[#facc15]">OUR WORK</span> AND <span className="text-[#facc15]">OUR ACTIVITIES...</span>
            </h2>
            <p className="text-gray-600 mb-6">
              One who is educated possesses the knowledge and awareness to live life meaningfully in
              harmony with other humans and the world around. Through the role that education plays in
              the mental and intellectual advancement
            </p>

            <div className="space-y-3">
              {[
                "Certified Teacher are available",
                "Online Support for education",
                "We try our best for learning student",
                "Online Class Facility all time"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <span className="text-[#facc15] text-3xl mr-2">✓</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="mb-6">
                <h3 className="font-bold mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  It has a structured and organized set-up of sylla-
                  bus and evaluation system through examinations.
                  The informal system includes learning and study
                  through various alternative means
                </p>
              </div>

              <motion.button 
                className="bg-[#facc15] text-black font-medium px-6 py-2 rounded-md hover:bg-[#facc15] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationHero;