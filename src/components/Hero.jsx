import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Star, BookOpen } from 'lucide-react';
import Nav from "./Nav"
const EdubeChildcareWebsite = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading delay
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for framer motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Custom balloon component using SVG since Lucide doesn't have a balloon icon
  const Balloon = ({ color, size, className }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`${className} text-${color}`}
    >
      <path d="M12 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6z" fill="currentColor" stroke="none" />
      <line x1="12" y1="16" x2="12" y2="22" />
    </svg>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Bar */}
      <motion.div 
        className="bg-yellow-400 py-2 px-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm">
            <Mail size={16} className="mr-1" />
            <span>edub432@gmail.com</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone size={16} className="mr-1" />
            <span>+880 1234 234632</span>
          </div>
        </div>
        <div>
          <a href="#" className="text-sm hover:underline">Login / Register</a>
        </div>
      </motion.div>

      {/* Navbar */}
      <Nav />
      {/* Hero Section */}
      <motion.div 
        className="flex-grow bg-purple-50 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center relative">
          {/* Left content */}
          <motion.div 
            className="w-full md:w-1/2 z-10 mb-8 md:mb-0"
            variants={fadeIn}
          >
            <motion.div variants={fadeIn}>
              <p className="text-gray-800 mb-2">Play, Learn and Grow</p>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeIn}
            >
              <span className="text-gray-800">Edube </span>
              <span className="text-yellow-500">Childcare,</span>
              <span className="text-gray-800"> we are Professional...</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-700 mb-6 max-w-lg"
              variants={fadeIn}
            >
              School is the place where we start our learning. Apart from learning to read, write, and
              excel in academics, the school also teaches us valuable life lessons that we can incorporate in our daily lives.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={fadeIn}
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded font-medium">
                Discover More
              </button>
              <button className="border-2 border-gray-400 hover:border-gray-600 text-gray-800 px-6 py-3 rounded font-medium">
                Join With Us
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Hero image with oval shape */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            variants={fadeIn}
          >
            {!imagesLoaded ? (
              // Skeleton loader with oval shape
              <div className="rounded-full w-full aspect-[4/3] bg-gray-200 animate-pulse overflow-hidden"></div>
            ) : (
              // Actual image with oval shape
              <div className="rounded-full overflow-hidden">
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Children reading books" 
                  className="w-full"
                />
              </div>
            )}
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute left-0 top-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex">
              <Balloon color="red-500" size={48} />
              <Balloon color="blue-500" size={42} className="ml-2" />
              <Balloon color="green-500" size={38} className="ml-4" />
              <Balloon color="orange-500" size={44} className="ml-1" />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute right-8 top-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Balloon color="pink-500" size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute right-20 bottom-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Balloon color="pink-500" size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute left-12 bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <BookOpen size={64} className="text-blue-500" />
          </motion.div>
          
          <motion.div 
            className="absolute left-1/2 bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="flex">
              <span className="text-red-500 font-bold text-2xl">A</span>
              <span className="text-blue-500 font-bold text-2xl">B</span>
              <span className="text-green-500 font-bold text-2xl">C</span>
            </div>
          </motion.div>

          {/* Star decorations */}
          <motion.div 
            className="absolute right-20 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="flex flex-wrap w-32">
              <Star size={12} className="text-yellow-400 m-1" />
              <Star size={10} className="text-yellow-400 m-1" />
              <Star size={8} className="text-yellow-400 m-1" />
              <Star size={14} className="text-yellow-400 m-1" />
              <Star size={10} className="text-yellow-400 m-1" />
              <Star size={12} className="text-yellow-400 m-1" />
              <Star size={8} className="text-yellow-400 m-1" />
            </div>
          </motion.div>
        </div>
        
        {/* Wave bottom shape */}
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default EdubeChildcareWebsite;