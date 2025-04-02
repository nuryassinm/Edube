import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const BlogPostsComponent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "A teacher affects eternity; he can never tell where his influence stops.",
      image: "../assets/child-toys-still-life.jpg",
      date: "19 Nov 2023",
      author: "Admin",
      excerpt: "Learning is a part of Education and can be learned from anyone around us, even from an ant."
    },
    {
      id: 2,
      title: "Education cost money, but then so does ignorance.",
      image: "../assets/child-toys-still-life.jpg",
      date: "15 Nov 2023",
      author: "Admin",
      excerpt: "Learning is a part of Education and can be learned from anyone around us, even from an ant."
    },
    {
      id: 3,
      title: "Whatever the cost of our libraries, the price is cheap compared to that",
      image: "../assets/child-toys-still-life.jpg",
      date: "10 Nov 2023",
      author: "Admin",
      excerpt: "Learning is a part of Education and can be learned from anyone around us, even from an ant."
    }
  ];

  // Image decoration for bottom left
  const educationDecoration = (
    <div className="absolute -left-24 bottom-0 w-40 h-40 hidden lg:block">
      <motion.img
        src="../assets/child-toys-still-life.jpg"
        alt="Educational illustration"
        className="w-full h-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
    </div>
  );

  return (
    <section className="py-16 bg-white relative">
      {educationDecoration}
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-medium text-sm mb-2">OUR RECENT BLOGS BE HERE</p>
          <h2 className="text-3xl font-bold">
            VIEW OUR RECENT TRENDING BLOG
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="border border-gray-100 rounded overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                {!imagesLoaded ? (
                  <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                ) : (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                
                <motion.button
                  className="bg-yellow-400 text-black font-medium text-sm px-4 py-2 hover:bg-yellow-500 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsComponent;