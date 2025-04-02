import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const JoinTestimonialComponent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "It has a structured and organized set-up of syllabus and evaluation system through examinations. The informal system includes learning and study through various alternative means that includes books, and self-learning through experience and experimentation, include interaction with scholars and experts in particular fields. One can also engage in both the formal and informal systems of education.",
      author: "Farhan Ali Aga",
      position: "Designer"
    },
    {
      id: 2,
      quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. The beautiful thing about learning is that nobody can take it away from you. Education is not the filling of a pail, but the lighting of a fire.",
      author: "Jane Smith",
      position: "Teacher"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Background decoration elements
  const decorations = [
    { left: '5%', top: '60%', type: 'lightbulb', size: 'w-32 h-32' },
    { left: '15%', top: '75%', type: 'paper', size: 'w-24 h-24' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute ${decoration.size} opacity-10`}
          style={{ 
            top: decoration.top, 
            left: decoration.left,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 + (index * 0.3) }}
        >
          {decoration.type === 'lightbulb' ? (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="30" r="20" strokeWidth="2" />
              <path d="M40 50 C 30 60, 30 80, 40 90 L 60 90 C 70 80, 70 60, 60 50 Z" strokeWidth="2" />
              <line x1="40" y1="65" x2="60" y2="65" strokeWidth="2" />
              <line x1="40" y1="75" x2="60" y2="75" strokeWidth="2" />
              <line x1="40" y1="85" x2="60" y2="85" strokeWidth="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <rect x="20" y="10" width="60" height="80" rx="2" strokeWidth="2" />
              <line x1="30" y1="30" x2="70" y2="30" strokeWidth="2" />
              <line x1="30" y1="40" x2="70" y2="40" strokeWidth="2" />
              <line x1="30" y1="50" x2="70" y2="50" strokeWidth="2" />
              <line x1="30" y1="60" x2="70" y2="60" strokeWidth="2" />
              <line x1="30" y1="70" x2="50" y2="70" strokeWidth="2" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Join As Teacher Section */}
    <section className='flex justify-center w-full'>
      <div className="relative w-full max-w-7xl">
        {!imagesLoaded ? (
          <div className="w-full h-80 bg-gray-200 animate-pulse"></div>
        ) : (
          <div className="relative">
            <img 
              src="../assets/child-toys-still-life.jpg" 
              alt="Teacher at chalkboard" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        )}

        <div className="absolute inset-0 flex items-center">
          <div className="container  mx-auto px-4">
            <div className="md:w-1/2 text-white p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="flex items-center text-yellow-400 font-medium mb-2">
                  JOIN US <span className="h-px bg-yellow-400 w-16 ml-2"></span>
                </p>
                <h2 className="text-3xl font-bold mb-4">
                  YOU CAN JOIN US AS <span className="text-yellow-400">A TEACHER...</span>
                </h2>
                <p className="text-gray-200 mb-6">
                  There are three distinct types of Education– Formal Education, Non-Formal Education, 
                  and Informal Education. Education aims to change the way of ones thinking. Academic 
                  knowledge provides one training.
                </p>

                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="py-2 px-4 flex-grow focus:outline-none text-gray-800"
                  />
                  <button className="bg-yellow-400 text-black font-medium py-2 px-4">
                    Submit Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-gray-500"
            >
              <Quote size={64} className="mx-auto" />
            </motion.div>

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </p>

              <div>
                <h4 className="font-bold text-lg">{testimonials[currentTestimonial].author}</h4>
                <p className="text-gray-500">{testimonials[currentTestimonial].position}</p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 border border-gray-300 rounded-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-2 bg-yellow-400 rounded-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinTestimonialComponent;