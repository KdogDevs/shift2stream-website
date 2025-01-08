// src/components/visuals/ValuesVisual.tsx
import { motion } from 'framer-motion';

export const ValuesVisual: React.FC = () => {
    const values = ['Passionate', 'Partnering', 'Pioneering'];
    
    return (
      <div className="relative w-full h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-80 h-80">
            {values.map((value, index) => {
              const angle = (index * 2 * Math.PI) / 3;
              const x = Math.cos(angle) * 120;
              const y = Math.sin(angle) * 120;
              
              return (
                <motion.div
                  key={value}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="w-24 h-24 rounded-full bg-current bg-opacity-20 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-gilroy-bold">{value}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  