import { motion } from 'framer-motion';

export const PurposeIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <motion.circle
        cx="32"
        cy="32"
        r="24"
        stroke="url(#purposeGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M32 8L32 56"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M8 32L56 32"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <defs>
        <linearGradient id="purposeGradient" x1="8" y1="8" x2="56" y2="56">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#10FDC8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
