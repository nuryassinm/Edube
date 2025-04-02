import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, ThumbsUp } from 'lucide-react';

const EducationStats = () => {
  const stats = [
    {
      value: "4.7K",
      label: "STUDENT ENROLLED",
      icon: <BookOpen className="w-6 h-6 text-yellow-500" />
    },
    {
      value: "100+",
      label: "TOP INSTRUCTORS",
      icon: <Users className="w-6 h-6 text-yellow-500" />
    },
    {
      value: "30.4K",
      label: "CLASS COMPLETED",
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      value: "98.7%",
      label: "SATISFACTION RATE",
      icon: <ThumbsUp className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <div className="w-full  py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className=" bg-gradient-to-r from-[#f5eff2] to-[#faf4e6] rounded-lg  py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center text-center border-r-2 last:border-r-0 border-[#facc15] px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.5 + (index * 0.2)
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold my-3 text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + (index * 0.2) }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-500 font-medium uppercase tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + (index * 0.2) }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationStats;