import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Nav from './Nav';

const Hero = () => {
  return (
    <div className="md:h-[800px] h-[600px]  bg-gray-100 bg-[url('../assets/wintry-landscape-scenery-with-modified-cross-country-skiing-way.jpg')] bg-cover bg-center">
      <Nav />
      <div className="max-w-[105rem] mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="md:text-[6rem] text-3xl font-bold mb-6 leading-tight">
              Geometric<br />Wooden Cabin
            </h1>
            
            
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#3064CA] text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Book now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-lg"
              >
                Explore More
              </motion.button>
            </div>

            <p className="text-gray-900 text-sm md:text-md  max-w-md">
              Theyre the kind of homes that work in tandem with their environment, 
              almost appearing synergistically with the mountain that encompasses them.
            </p>
            {/* Thumbnail Images */}
            <div className="flex gap-4 mt-12">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 bg-gray-300 rounded-lg overflow-hidden animate-pulse"
                >
                  {/* Skeleton loading for thumbnails */}
                  <img src="../assets/pexels-binyaminmellish-186077.jpg" alt="" />
                  <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px]"
          >
            {/* Skeleton loading for main image */}
            {/* <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg animate-pulse">
              <div className="absolute bottom-4 left-4 right-4 bg-gray-800/80 backdrop-blur-sm text-white p-4 rounded-lg">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold">Creative is available for hire</p>
                    <p className="text-sm">Availability: Now</p>
                  </div>
                  <button className="bg-white text-black px-4 py-2 rounded-lg">
                    Hire Creative
                  </button>
                </motion.div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;