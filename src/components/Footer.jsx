import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, GraduationCap } from 'lucide-react';

const FooterComponent = () => {
  const footerLinks = {
    resources: [
      { name: 'About', url: '#' },
      { name: 'Contact', url: '#' },
      { name: 'Help Center', url: '#' },
      { name: 'Return Policy', url: '#' },
      { name: 'Term & Condition', url: '#' },
    ],
    courses: [
      { name: 'Biology', url: '#' },
      { name: 'Business', url: '#' },
      { name: 'Web Design', url: '#' },
      { name: 'Web Development', url: '#' },
      { name: 'Marketing', url: '#' },
    ],
  };

  const contactInfo = {
    email: 'Edube@gmail.com',
    phone: '+098823 45 908',
    address: '27-3 North south beubinde, USA'
  };

  return (
    <footer className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/api/placeholder/1920/600')" }}>
      {/* Contact Info Bar */}
      <div className="bg-yellow-400 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email */}
            <motion.div 
              className="flex items-center justify-center md:justify-start text-black"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              <div>
                <p className="text-sm">Send us a Message</p>
                <p className="font-medium">{contactInfo.email}</p>
              </div>
            </motion.div>
            
            {/* Phone */}
            <motion.div 
              className="flex items-center justify-center text-black"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              <div>
                <p className="text-sm">Call us now</p>
                <p className="font-medium">{contactInfo.phone}</p>
              </div>
            </motion.div>
            
            {/* Address */}
            <motion.div 
              className="flex items-center justify-center md:justify-end text-black"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              <div>
                <p className="text-sm">Here is our address</p>
                <p className="font-medium">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-yellow-400 mr-2" />
                <h2 className="text-xl font-bold text-yellow-400">Edube.</h2>
              </div>
              <h3 className="text-white font-bold mb-4">About us</h3>
              <p className="text-gray-300 text-sm mb-6">
                Education is the basic necessity of life. It is an integral tool that aids mental growth and development. Education has a plethora of mean-ings and educates a
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-yellow-400 font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-yellow-400 font-bold mb-4">Courses</h3>
              <ul className="space-y-2">
                {footerLinks.courses.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-yellow-400 font-bold mb-4">Our Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">
                Join our newletter for getting new update
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border border-gray-700 text-white py-2 px-4 focus:outline-none focus:border-yellow-400 flex-grow"
                />
                <button className="bg-yellow-400 text-black font-medium px-4 py-2">
                  Sign Up
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-xs text-center">
            Copyright © 2023 All Rights Reserved Edube.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;