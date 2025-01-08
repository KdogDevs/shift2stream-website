// src/components/icons/QuoteIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const QuoteIcon: React.FC = () => {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        d="M14 24H6C6 15.716 12.716 9 21 9V14C15.477 14 11 18.477 11 24V39H26V24H14Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M37 24H29C29 15.716 35.716 9 44 9V14C38.477 14 34 18.477 34 24V39H49V24H37Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
    </motion.svg>
  );
};
