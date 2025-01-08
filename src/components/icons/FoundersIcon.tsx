// src/components/icons/about/FoundersIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';
export const FoundersIcon: React.FC = () => {
    return (
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        {[0, 1].map((index) => (
          <React.Fragment key={index}>
            <motion.circle
              cx={24 + (index * 16)}
              cy="24"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />
            <motion.path
              d={`M${16 + (index * 16)} 48C${16 + (index * 16)} 40 ${20 + (index * 16)} 36 ${24 + (index * 16)} 36C${28 + (index * 16)} 36 ${32 + (index * 16)} 40 ${32 + (index * 16)} 48`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
            />
          </React.Fragment>
        ))}
      </motion.svg>
    );
  };
  