// src/components/icons/about/MarketIcon.tsx
import { motion } from 'framer-motion';

export const MarketIcon: React.FC = () => {
    return (
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        <motion.path
          d="M8 56L24 40L36 52L56 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.circle
          cx="56"
          cy="32"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
      </motion.svg>
    );
  };
  
  