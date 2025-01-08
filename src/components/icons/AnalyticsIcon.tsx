// src/components/icons/AnalyticsIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const AnalyticsIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Grid */}
      <motion.path
        d="M8 8H56V56H8V8Z"
        stroke="#E5E7EB"
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Bar Charts */}
      {[0, 1, 2, 3].map((index) => (
        <motion.rect
          key={index}
          x={16 + (index * 12)}
          y={56}
          width="8"
          height="0"
          fill="#3B82F6"
          initial={{ height: 0 }}
          animate={{ height: [20, 40, 30, 50][index] }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          style={{ transformOrigin: 'bottom' }}
        />
      ))}
      
      {/* Line Graph */}
      <motion.path
        d="M12 40L24 28L36 36L48 20L60 28"
        stroke="#EC4899"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};
