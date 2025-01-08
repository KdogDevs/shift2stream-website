// src/components/visuals/PurposeVisual.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const PurposeVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[400px]">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400">
          {/* TV Shape */}
          <motion.rect
            x="50"
            y="50"
            width="300"
            height="200"
            rx="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          
          {/* Signal Waves */}
          {[0, 1, 2].map((index) => (
            <motion.path
              key={index}
              d={`M 200,150 Q 300,${150 + index * 30} 400,150`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};
