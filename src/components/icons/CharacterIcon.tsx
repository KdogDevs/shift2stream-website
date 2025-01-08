// src/components/icons/about/CharacterIcon.tsx
import { motion } from 'framer-motion';

export const CharacterIcon: React.FC = () => {
    return (
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        <motion.circle
          cx="32"
          cy="20"
          r="12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M16 56C16 45.5 23.2 37 32 37C40.8 37 48 45.5 48 56"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.svg>
    );
  };