import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen } from 'lucide-react';

const CoursesComponent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      id: 1,
      image: "../assets/child-toys-still-life.jpg",
      subject: "Subject: Art",
      title: "Our complete and bestest Art Tutorial For Beginners",
      description: "Learning is an education that makes sense, and it needs awareness to reach the remote.",
      price: "$56.00",
      instructor: {
        name: "Mensha Mustoam",
        avatar: "../assets/child-toys-still-life.jpg"
      },
      students: 56,
      lessons: 8
    },
    {
      id: 2,
      image: "../assets/child-toys-still-life.jpg",
      subject: "Subject: Math",
      title: "Our complete and bestest Math Tutorial For Beginners",
      description: "Learning is an education that makes sense, and it needs awareness to reach the remote.",
      price: "$53.00",
      instructor: {
        name: "Saheba Mustoasa",
        avatar: "../assets/child-toys-still-life.jpg"
      },
      students: 59,
      lessons: 5
    },
    {
      id: 3,
      image: "../assets/child-toys-still-life.jpg",
      subject: "Subject: English",
      title: "Our complete and bestest English Tutorial For Beginners",
      description: "Learning is an education that makes sense, and it needs awareness to reach the remote.",
      price: "$52.00",
      instructor: {
        name: "Farhan Abid Khaa",
        avatar: "../assets/child-toys-still-life.jpg"
      },
      students: 55,
      lessons: 7
    }
  ];

  // Star decorations for background
  const starPositions = [
    { top: '5%', left: '15%', opacity: 0.2, size: 'w-12 h-12' },
    { top: '10%', right: '10%', opacity: 0.3, size: 'w-10 h-10' },
    { top: '25%', right: '5%', opacity: 0.2, size: 'w-16 h-16' },
    { top: '40%', left: '5%', opacity: 0.15, size: 'w-14 h-14' },
    { top: '65%', right: '15%', opacity: 0.25, size: 'w-12 h-12' },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background stars */}
      {starPositions.map((star, index) => (
        <motion.div
          key={index}
          className={`absolute ${star.size} text-gray-200`}
          style={{ 
            top: star.top, 
            left: star.left, 
            right: star.right,
            opacity: star.opacity
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-medium text-sm mb-2">FEATURED COURSES OF HERE</p>
          <h2 className="text-3xl font-bold">
            FIND YOURS FROM THE <span className="text-yellow-500">COURSE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: course.id * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                {!imagesLoaded ? (
                  <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                ) : (
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-bold py-1 px-3 rounded-full">
                  {course.price}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm mb-2">{course.subject}</p>
                <h3 className="font-bold text-lg mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{course.description}</p>

                <div className="flex items-center mb-4">
                  {!imagesLoaded ? (
                    <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse mr-3"></div>
                  ) : (
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name} 
                      className="w-8 h-8 rounded-full mr-3"
                    />
                  )}
                  <span className="text-sm text-gray-600">{course.instructor.name}</span>
                </div>

                <div className="flex border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-center flex-1 bg-yellow-400 py-2 text-black text-sm font-medium">
                    <Users className="w-4 h-4 mr-2" />
                    {course.students} Students
                  </div>
                  <div className="flex items-center justify-center flex-1 bg-yellow-400 py-2 text-black text-sm font-medium ml-1">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {course.lessons} Lessons
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.button 
            className="bg-yellow-400 text-black font-medium px-8 py-3 w-full md:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Courses
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CoursesComponent;