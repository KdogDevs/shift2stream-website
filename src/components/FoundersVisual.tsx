// src/components/visuals/FoundersVisual.tsx
import { motion } from 'framer-motion';

export const FoundersVisual: React.FC = () => {
    return (
      <div className="relative w-full h-[400px]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-2 gap-8">
            {['Mark Jensen', 'Steve Calzone'].map((founder, index) => (
              <motion.div
                key={founder}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full bg-current bg-opacity-20 mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                />
                <h3 className="text-lg font-gilroy-bold">{founder}</h3>
                <p className="text-sm font-gilroy-light">Co-Founder</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };