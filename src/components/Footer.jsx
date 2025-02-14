import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[100rem] w-full mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold mb-4">Contact</h3>
          <p>+1 555 123 4567</p>
          <p>5454 Columbus Ave.</p>
          <p>New York, NY 10029</p>
          <p>info@example.com</p>
        </div>

        <div className="flex justify-center  rotate-45 ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-32 h-32 bg-blue-600 "
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-bold mb-4">Menu</h3>
          <ul className="space-y-2 text-right">
            <li>Home</li>
            <li>Membership</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <p className="text-sm text-gray-600">
          Copyright © 2025. All Rights Reserved
        </p>
        <div className="flex gap-4">
          <Facebook size={20} className="text-gray-600" />
          <Twitter size={20} className="text-gray-600" />
          <Instagram size={20} className="text-gray-600" />
          <Youtube size={20} className="text-gray-600" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;