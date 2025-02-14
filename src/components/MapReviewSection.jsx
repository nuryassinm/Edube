import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plus, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const MapReviewSection = () => {
  return (
    <section className="w-full  mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[105rem] mx-auto"
      >
        <h2 className="md:text-[3rem] text-[1.3rem] font-bold mb-12">
          Reimagining the <span className="font-medium">iconic log cabin</span>
          <br />
          <span className="text-gray-400">is no easy feat.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Map Section */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative bg-[url('../assets/3d-view-map.jpg')] bg-cover bg-center rounded-3xl overflow-hidden"
          >
            <div className="h-[400px] relative">
              {/* Map placeholder - replace with actual map */}
              <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-full flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Viken, 1443 Norway</span>
              </div>
              
              {/* Navigation controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="p-2 bg-white rounded-full shadow-lg">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-lg">
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-lg">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Review Section */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[url('../assets/snowy-country-house-winter.jpg')] bg-cover bg-center rounded-3xl p-6"
          >
            <div className="rounded-2xl overflow-hidden">
            <div className="p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold">Review</h3>
                <button className="bg-[#2F63C9] text-white px-4 py-2 rounded-md text-sm">
                  Book now →
                </button>
              </div>
              <div className="relative h-80">
                
                {/* Skeleton loader for image */}
                
                <div className="absolute text-2xl rounded-lg bottom-4 left-4 bg-black text-white py-1 px-3 flex  ">
                <div className=" top-4 right-4 flex gap-2">
                  <button className="p-2 ">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                  19m²
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MapReviewSection;