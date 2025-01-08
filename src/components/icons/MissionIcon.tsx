// src/components/icons/about/MissionIcon.tsx
import { motion } from 'framer-motion';

export const MissionIcon: React.FC = () => {
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
          d="M32 8L8 32L32 56L56 32L32 8Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.circle
          cx="32"
          cy="32"
          r="8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.svg>
    );
  };
  