// src/components/icons/StreamingIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const StreamingIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* TV Frame */}
      <motion.rect
        x="6"
        y="8"
        width="52"
        height="36"
        rx="2"
        fill="#3B82F6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Screen */}
      <motion.rect
        x="8"
        y="10"
        width="48"
        height="32"
        rx="1"
        fill="#FFFFFF"
      />
      
      {/* Streaming Waves */}
      {[0, 1, 2].map((index) => (
        <motion.path
          key={index}
          d="M16 26C20 26 20 22 24 22C28 22 28 26 32 26C36 26 36 22 40 22C44 22 44 26 48 26"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          style={{ y: index * 6 }}
        />
      ))}
      
      {/* TV Stand */}
      <motion.path
        d="M24 44L32 52L40 44"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </motion.svg>
  );
};
