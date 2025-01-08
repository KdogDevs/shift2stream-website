import { motion } from 'framer-motion';

export const BrandPillarsIcon: React.FC = () => {
    return (
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.rect
            key={index}
            x={16 + (index * 8)}
            y={48}
            width="6"
            height="24"
            fill="currentColor"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ transformOrigin: 'bottom' }}
          />
        ))}
        <motion.path
          d="M12 48H52"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    );
  };
  