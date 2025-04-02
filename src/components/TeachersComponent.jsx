import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const TeachersComponent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeTeacher, setActiveTeacher] = useState(null);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const teachers = [
    {
      id: 1,
      name: "Laiha Khan",
      position: "UI / UX Designer",
      image: "../assets/land.jpg"
    },
    {
      id: 2,
      name: "Ahammed Imon",
      position: "UI / UX Designer",
      image: "../assets/child-toys-still-life.jpg"
    },
    {
      id: 3,
      name: "Junayed Khan",
      position: "UI / UX Designer",
      image: "../assets/child-toys-still-life.jpg"
    },
    {
      id: 4,
      name: "Rera Aziz",
      position: "UI / UX Designer",
      image: "../assets/child-toys-still-life.jpg"
    }
  ];

  const handleShareClick = (teacherId) => {
    setActiveTeacher(activeTeacher === teacherId ? null : teacherId);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-medium text-sm mb-2">OUR TEACHERS PROFILE BE HERE</p>
          <h2 className="text-3xl font-bold">
            OUR EXPERT TEACHERS IS HERE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: teacher.id * 0.1 }}
            >
              <div className="relative bg-gray-100 overflow-hidden">
                {!imagesLoaded ? (
                  <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
                ) : (
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-64 object-cover"
                  />
                )}
                
                {/* Share button */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer shadow-sm z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleShareClick(teacher.id)}
                >
                  <Share2 className="w-4 h-4 text-gray-600" />
                </motion.div>

                {/* Social media icons for second teacher */}
                {teacher.id === 2 && (
                  <div className="absolute right-4 top-16 flex flex-col space-y-2">
                    <motion.div 
                      className="bg-yellow-400 p-2 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div 
                      className="bg-yellow-400 p-2 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div 
                      className="bg-yellow-400 p-2 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                )}

                {/* Social media icons for other teachers (hidden by default) */}
                {teacher.id !== 2 && activeTeacher === teacher.id && (
                  <motion.div 
                    className="absolute right-4 top-16 flex flex-col space-y-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <motion.div 
                      className="bg-yellow-400 p-2 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div 
                      className="bg-yellow-400 p-2 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div 
                      className="bg-yellow-400 p-2 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
              
              <div className="text-center mt-4">
                <h3 className="font-bold text-lg">{teacher.name}</h3>
                <p className="text-gray-600 text-sm">{teacher.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graduation cap icon in bottom right */}
        <div className="flex justify-end mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 15L10 30L40 45L65 32.5V50C65 50 64.5 55 60 57.5C55.5 60 45 65 40 65C35 65 24.5 60 20 57.5C15.5 55 15 50 15 50V35" stroke="#FFD100" strokeWidth="2" fill="none"/>
              <rect x="35" y="25" width="10" height="10" rx="2" fill="white" stroke="#FFD100" strokeWidth="2"/>
              <rect x="30" y="35" width="20" height="5" rx="2" fill="white" stroke="#FFD100" strokeWidth="2"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeachersComponent;