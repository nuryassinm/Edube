import React, { useState } from 'react';
import { Search, User, Menu, X ,GraduationCap} from 'lucide-react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'Home', url: '/' },
    { name: 'Rent', url: '/rent' },
    { name: 'Services', url: '/services' },
    { name: 'News', url: '/news' },
  ];

  return (
    <header className="w-full bg-white">
    <nav className="relative flex flex-wrap items-center justify-between px-4 py-3 mx-auto max-w-7xl">
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex border-b-2 items-center font-bold text-2xl">
      <GraduationCap className="text-[#FACC15] mr-1" size={24} />
      <span className="text-gray-800">E</span>
      <span className="text-[#FACC15]">d</span>
      <span className="text-gray-800">u</span>
      <span className="text-[#FACC15]">b</span>
      <span className="text-gray-800">e</span>
      <span className="text-[#FACC15]">.</span>
    </div>
      </motion.div>
      
      {/* Mobile menu button */}
      <motion.button 
        type="button" 
        className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>
      
      {/* Desktop menu */}
      <motion.div 
        className="hidden w-full md:block md:w-auto" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-900 border-b md:border-0 md:p-0 font-semibold">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-600 border-b md:border-0 md:p-0">Courses</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-600 border-b md:border-0 md:p-0">Pages</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-600 border-b md:border-0 md:p-0">Blog</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-600 border-b md:border-0 md:p-0">Contact</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-600 md:border-0 md:p-0">About Us</a>
          </li>
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button className="bg-[#FACC15] hover:bg-[#facc15ee] text-gray-900 font-bold py-2 px-4 rounded">
          Admit Now
        </button>
      </motion.div>
    </nav>
  </header>

  );
};

export default Nav;