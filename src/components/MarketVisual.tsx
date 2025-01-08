// src/components/visuals/MarketVisual.tsx
import { motion } from 'framer-motion';
export const MarketVisual: React.FC = () => {
    return (
      <div className="relative w-full h-[400px]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            {/* Market Growth Chart */}
            <motion.path
              d="M50,350 L50,50 L350,50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Growth Line */}
            <motion.path
              d="M50,300 C100,280 150,200 200,180 S300,100 350,80"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Data Points */}
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.circle
                key={index}
                cx={50 + index * 75}
                cy={300 - index * 50}
                r="6"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    );
  };
  