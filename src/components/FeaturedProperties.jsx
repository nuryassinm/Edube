import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Calendar, LayoutDashboard } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className=" w-full mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[105rem] mx-auto"
      >
        <h2 className="md:text-4xl lg:text-6xl text-xl  font-bold mb-12 text-center">
          Log cabins are to Norway <span className="text-gray-400">like fjords</span>
          <br /> are to its <span className="font-medium">mountains.</span>
        </h2>

        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Feature Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-[url('../assets/wintry-landscape-scenery-with-modified-cross-country-skiing-way.jpg')] bg-cover bg-center text-white p-6 rounded-3xl relative overflow-hidden"
          >
           
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-3xl mb-1">Feel comfortable</h3>
                <p className="text-lg text-gray-50">In the heart of <br /> Norway</p>
              </div>
            <div className='flex flex-col'>
              <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-white">
                <LayoutDashboard className="w-12 h-12 text-gray-800" />
                <span className="text-4xl text-black font-medium">24°</span>
              </div>
              <button className=" bg-[#3064ca] mt-32 text-white px-4 py-2 rounded-md text-sm">
                Book now →
              </button>
            </div>
            </div>
          </motion.div>

          {/* Features List */}
          <div className="md:col-span-3 bg-[#DFE2E9] p-6 rounded-3xl">
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="p-2 bg-[#3064CA]  rounded-lg">
                  <LayoutDashboard className="w-12 h-12 text-white p-2" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Dedicated workspace</h3>
                  <p className="text-md text-gray-600">A common area with wifi that's well suited for working</p>
                </div>
              </motion.div>
             
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="hover:bg-white p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="p-2 bg-[#3064CA] rounded-lg">
                  <Wifi className="w-12 h-12 text-white p-2" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Fast wifi</h3>
                  <p className="text-md text-gray-600">At 345 Mbps, you can take video calls and stream videos</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="hover:bg-white p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="p-2 bg-[#3064CA] rounded-lg">
                  <Calendar className="w-12 h-12 text-white p-2" />
                </div>
                <div>
                  <h3 className="font-bold text-bold">Free cancellation for 48 hours</h3>
                  <p className="text-md text-gray-600">Get a full refund if you change your mind</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;