// src/components/visuals/CharacterVisual.tsx
import { motion } from 'framer-motion';
export const CharacterVisual: React.FC = () => {
    const traits = ['Accessible', 'Dynamic', 'Hyper-Local', 'Reliable'];
    
    return (
      <div className="relative w-full h-[400px]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            {traits.map((trait, index) => {
              const angle = (index * Math.PI) / 2;
              const radius = 150;
              const x = 200 + Math.cos(angle) * radius;
              const y = 200 + Math.sin(angle) * radius;
              
              return (
                <motion.g key={trait}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  />
                  <motion.text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="currentColor"
                    fontSize="12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {trait}
                  </motion.text>
                </motion.g>
              );
            })}
          </svg>
        </motion.div>
      </div>
    );
  };
  