// src/components/icons/about/VisionIcon.tsx
import { motion } from 'framer-motion';

export const VisionIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-600"
    >
      {/* Eye outline */}
      <motion.path
        d="M8,32 C16,16 48,16 56,32 C48,48 16,48 8,32 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Iris */}
      <motion.circle
        cx="32"
        cy="32"
        r="8"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </motion.svg>
  );
};
