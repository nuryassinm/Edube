import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full bg-gray-100"
    >
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-200 animate-pulse">
          <img
            src="../assets/wintry-landscape-scenery-with-modified-cross-country-skiing-way.jpg"
            alt="Winter Cabin"
            className="w-full h-full object-cover"
            onLoad={(e) => {
              e.target.parentElement.classList.remove('animate-pulse');
            }}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white mb-8"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            Positive stories
          </h2>
          <h3 className="text-4xl md:text-7xl font-bold mb-8">
            of our clients
          </h3>
          <button className="bg-white text-black px-6 py-2 rounded-md">
            Share your story
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg max-w-xl ml-auto"
        >
          <div className="mb-4">
            <span className="bg-gray-100 px-4 py-1 font-bold text-2xl rounded-full">Sarah K.</span>
          </div>
          <p className="text-gray-700 text-lg mb-6">
            "Our stay at the geometric wooden cabin was magical. The unique design and natural surroundings contributed to a truly peaceful time abroad. The cabin blends modern architecture with natural wood elements, with thoughtful details like cozy furnishings and large windows offering breathtaking forest views. We spent our days hiking nearby trails and our evenings relaxing by the fireplace. It was the perfect escape from city life, and we can't wait to return."
          </p>
          <div className="flex justify-between items-center">
            <button className="p-2 rounded-full bg-gray-100">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;