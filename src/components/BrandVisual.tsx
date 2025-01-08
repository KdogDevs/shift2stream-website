// src/components/visuals/BrandVisual.tsx
import { motion } from 'framer-motion';
export const BrandVisual: React.FC = () => {
    return (
      <div className="relative w-full h-[400px]">
        <motion.div
          className="absolute inset-0 grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {['Enjoyment', 'Value', 'Trust', 'Innovation'].map((pillar, index) => (
            <motion.div
              key={pillar}
              className="relative bg-current bg-opacity-10 rounded-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-gilroy-bold mb-2">{pillar}</h3>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-current"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: index * 0.2 + 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };
  
  