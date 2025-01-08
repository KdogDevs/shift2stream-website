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
            {/* Data Flow Visualization */}
            <motion.g>
              {[...Array(20)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={200 + Math.cos(i * Math.PI / 10) * 100}
                  cy={200 + Math.sin(i * Math.PI / 10) * 100}
                  r="4"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity
                  }}
                />
              ))}
            </motion.g>
          </svg>
        </motion.div>
      </div>
    );
  };
  
  