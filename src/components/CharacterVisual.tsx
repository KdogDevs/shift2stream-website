import React from 'react';
import { motion } from 'framer-motion';

export const CharacterVisual: React.FC = () => {
  const traits = [
    {
      name: 'Accessible',
      icon: '🌟',
      // Use the Character section primary color (Bahama Blue) for each card
      color: '#1A428A',
      textColor: 'text-white',
      description: 'Easy to use for everyone',
    },
    {
      name: 'Dynamic',
      icon: '⚡',
      color: '#1A428A',
      textColor: 'text-white',
      description: 'Constantly evolving',
    },
    {
      name: 'Hyper-Local',
      icon: '📍',
      color: '#1A428A',
      textColor: 'text-white',
      description: 'Focused on your area',
    },
    {
      name: 'Reliable',
      icon: '🛡️',
      color: '#1A428A',
      textColor: 'text-white',
      description: 'Always dependable',
    },
  ];

  // Easy variable for card width. Adjust this value to make all cards skinnier.
  const cardWidthClass = 'min-w-[250px]';

  return (
    // Outer container with a solid Bahama Blue background (#1A428A)
    <div className="relative w-full py-16 bg-[#1A428A]">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {traits.map((trait) => (
            <motion.div
              key={trait.name}
              className={`relative p-8 rounded-2xl border border-white/20 shadow-lg backdrop-blur-md bg-white/10 overflow-hidden cursor-default transition-none ${cardWidthClass}`}
            >
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-md"
                  style={{ backgroundColor: trait.color }}
                >
                  <span className="text-2xl">{trait.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${trait.textColor} text-center`}>
                  {trait.name}
                </h3>
                <p className="text-base text-gray-200 text-center">
                  {trait.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterVisual;
