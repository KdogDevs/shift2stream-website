// src/components/icons/FlexibleIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const FlexibleIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Hub */}
      <motion.circle
        cx="32"
        cy="32"
        r="12"
        fill="#3B82F6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Connected Devices */}
      {[0, 1, 2, 3, 4].map((index) => {
        const angle = (index * 72 * Math.PI) / 180;
        const x = 32 + Math.cos(angle) * 20;
        const y = 32 + Math.sin(angle) * 20;
        
        return (
          <React.Fragment key={index}>
            <motion.circle
              cx={x}
              cy={y}
              r="6"
              fill="#EC4899"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            />
            
            <motion.line
              x1="32"
              y1="32"
              x2={x}
              y2={y}
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2 * index,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </React.Fragment>
        );
      })}
    </motion.svg>
  );
};