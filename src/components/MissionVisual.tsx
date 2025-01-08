// src/components/visuals/MissionVisual.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const MissionVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[400px]">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400">
          {/* Cloud Platform Visualization */}
          <motion.path
            d="M100,200 C100,150 150,100 200,100 C250,100 300,150 300,200 C300,250 250,300 200,300 C150,300 100,250 100,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          
          {/* Connected Devices */}
          {[0, 1, 2, 3].map((index) => {
            const angle = (index * Math.PI / 2);
            return (
              <motion.g key={index}>
                <motion.circle
                  cx={200 + Math.cos(angle) * 120}
                  cy={200 + Math.sin(angle) * 120}
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
                <motion.line
                  x1="200"
                  y1="200"
                  x2={200 + Math.cos(angle) * 120}
                  y2={200 + Math.sin(angle) * 120}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
              </motion.g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
};
