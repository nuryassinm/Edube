import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Home } from 'lucide-react';

const Mission = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-teal-500" />,
      title: "Interactive Map Search",
      description: "Use our Interactive Map Search tool to view properties directly on the map. Easily view listings in your favorite neighborhoods.",
      buttonText: "Search"
    },
    {
      icon: <Mail className="w-8 h-8 text-teal-500" />,
      title: "New Listings Email Alerts",
      description: "Use our Interactive Map Search tool to view properties directly on the map. Easily view listings in your favorite neighborhoods.",
      buttonText: "Search"
    },
    {
      icon: <Home className="w-8 h-8 text-teal-500" />,
      title: "What's Your Home Worth?",
      description: "Use our Interactive Map Search tool to view properties directly on the map. Easily view listings in your favorite neighborhoods.",
      buttonText: "Search"
    }
  ];

  return (
    <div className="w-full rounded-t-3xl relative bottom-28 bg-white  mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Mission Section */}
      <motion.div 
        className="grid md:grid-cols-2 gap-20 mb-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl font-bold mb-8">Our Mission</h2>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="../assets/african-american-women-sitting-table-near-document-pen-figure-gavel.jpg" 
              alt="Real Estate Agent"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-6">
          <p className="md:text-3xl text-lg">
            <span className="font-bold">At Local Palm Beach</span>, we're dedicated to helping you <br /> find your 
            <span className="font-bold"> dream home</span>. Whether you're 
            <span className="font-bold"> buying, <br /> selling, or renting</span>, our team of 
            <span className="text-gray-600"> experienced real <br /> estate professionals</span> is here to 
            <span className="font-bold"> guide you every step <br /> </span> of the way.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-teal-500 text-white px-6 py-2 rounded-md"
          >
            Explore more
          </motion.button>

          <div className="flex gap-4 mt-8">
            <p className="text-gray-900 text-lg font-semibold ">Are you looking for qualified agents?</p>
            <button className="text-teal-500 border p-1 rounded-lg hover:underline">
              Hire an agent
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gray-200 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              {feature.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Mission;