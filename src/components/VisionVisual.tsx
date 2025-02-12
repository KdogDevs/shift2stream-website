// src/components/visuals/VisionVisual.tsx
import { motion } from 'framer-motion';

export const VisionVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[400px]">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400">
          {/* Eye Outline */}
          <motion.path
            d="M50,200 C100,100 300,100 350,200 C300,300 100,300 50,200 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          {/* Iris */}
          <motion.circle
            cx="200"
            cy="200"
            r="40"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          {/* Pupil */}
          <motion.circle
            cx="200"
            cy="200"
            r="15"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          />
          {/* Ambient particles around the eye */}
          <motion.g>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 2 * Math.PI) / 12;
              const x = 200 + Math.cos(angle) * 80;
              const y = 200 + Math.sin(angle) * 80;
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity
                  }}
                />
              );
            })}
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};
