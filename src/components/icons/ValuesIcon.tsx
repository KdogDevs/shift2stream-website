import { motion } from 'framer-motion';

export const ValuesIcon: React.FC = () => {
    return (
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        {[0, 1, 2].map((index) => (
          <motion.path
            key={index}
            d="M16 32H48"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{ transform: `translateY(${(index - 1) * 12}px)` }}
          />
        ))}
      </motion.svg>
    );
  };
  