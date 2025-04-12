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
    <div className="flex flex-col bg-white">
      {/* Top Bar */}
      <motion.div 
        className="bg-[#FACC15] py-2 px-4 flex justify-center "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex md:justify-between flex-wrap max-w-7xl w-full items-center'>
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
        </div>
      </motion.div>

      {/* Navbar */}
      <Nav />
      {/* Hero Section */}
      <motion.div 
        className="flex-grow bg-[#F8F2FE] relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="max-w-[95rem] mx-auto gap-3 px-4 py-12 md:pt-16 pb-32 grid grid-cols-2 items-center ">
          {/* Left content */}
          <motion.div 
            className="w-full z-10 mb-8 md:mb-0"
            variants={fadeIn}
          >
            <motion.div variants={fadeIn}>
              <p className="text-gray-800 font-semibold mb-2">Play, Learn and Grow</p>
            </motion.div>
            
            <motion.h1 
              className="text-3xl lg:text-5xl font-extrabold mb-4"
              variants={fadeIn}
            >
              <span className="text-gray-800">Edube </span>
              <span className="text-[#FACC15]">Childcare,</span>
              <span className="text-gray-800"> we <br /> are Professional...</span>
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
              <button className="bg-[#FACC15] hover:bg-[#facc15] text-gray-900 px-6 py-3 rounded font-medium">
                Discover More
              </button>
              <button className="border-2 border-gray-400 hover:border-gray-600 text-gray-800 px-6 py-3 rounded font-medium">
                Join With Us
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Hero image with oval shape */}
          <div className="w-full  -rotate-[130deg] relative">
      {!imagesLoaded ? (
        // Skeleton loader with blob shape
        <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse overflow-hidden rounded-[30%]"></div>
      ) : (
        // Image inside a larger blob shape
        <svg
          viewBox="0 0 1000 800"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="blobClip">
              <path
                fill="none"
                d="M375.5,29.5Q280,59,246.5,115.5Q213,172,168,219.5Q123,267,103,333.5Q83,400,150,444.5Q217,489,310,495.5Q403,502,469,446Q535,390,589.5,341.5Q644,293,644,229Q644,165,607.5,112.5Q571,60,489,22.5Q407,0,375.5,29.5Z"
                transform="translate(80 50) scale(1.2)"
              />
            </clipPath>
          </defs>
          <image
            href="../assets/land.jpg"
            width="1000"
            height="800"
            clipPath="url(#blobClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      )}
      
      {/* Optional decorative elements */}
      <div className="absolute -top-6 -left-6 text-yellow-300">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 0L42.5 37.5L80 40L42.5 42.5L40 80L37.5 42.5L0 40L37.5 37.5L40 0Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute -bottom-4 -right-4 text-yellow-300">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L32 28L60 30L32 32L30 60L28 32L0 30L28 28L30 0Z" fill="currentColor" />
        </svg>
      </div>
    </div>

          
          {/* Decorative elements */}
          <motion.div 
            className="absolute left-10 md:top-10 -top-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex">
              <img src="../assets/ballon.png" className="md:h-28 h-10" color="red-500" size={48} />
          
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute right-10 md:top-10 top-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <img src="../assets/ballon3.png" className="md:h-20 h-12" color="pink-500" size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute right-10 md:bottom-28 bottom-10 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <img src="../assets/ballon2.png" className="md:h-20 h-12" color="pink-500" size={40} />
          </motion.div>

          <motion.div 
            className="absolute right-1/2 md:bottom-28 bottom-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <img src="../assets/abc.png" className="md:h-20 h-12" color="pink-500" size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute left-10 md:bottom-28 bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <img src="../assets/icons8-reading-100.png" className="md:h-20 h-12" color="pink-500" size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute left-1/2 top-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="flex flex-wrap -rotate-12 justify-center w-44">
            <Star size={10} className="text-[#FACC15] m-1" />
              <Star size={12} className="text-[#FACC15] m-1" />
              <Star size={10} className="text-[#FACC15] m-1" />
              <Star size={8} className="text-[#FACC15] m-1" />
              <Star size={14} className="text-[#FACC15] m-1" />
              <Star size={10} className="text-[#FACC15] m-1" />
              <Star size={12} className="text-[#FACC15] m-1" />
              <Star size={10} className="text-[#FACC15] m-1" />
              <div className="flex flex-wrap justify-center w-32">
              <Star size={10} className="text-[#FACC15] m-1" />
              <Star size={8} className="text-[#FACC15] m-1" />
              <Star size={8} className="text-[#FACC15] m-1" />
              <Star size={14} className="text-[#FACC15] m-1" />
              <Star size={10} className="text-[#FACC15] m-1" />
              <Star size={12} className="text-[#FACC15] m-1" />
              <Star size={10} className="text-[#FACC15] m-1" />
              </div>
              <div className="flex flex-wrap justify-center w-32">
              <Star size={10} className="text-[#FACC15] m-1" />
              <Star size={8} className="text-[#FACC15] m-1" />
              <Star size={8} className="text-[#FACC15] m-1" />
              <Star size={14} className="text-[#FACC15] m-1" />
              <Star size={10} className="text-[#FACC15] m-1" />
              </div>
              
              <div className="flex flex-wrap justify-center w-32">
              <Star size={10} className="text-[#FACC15] m-1" />
              
              </div>
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