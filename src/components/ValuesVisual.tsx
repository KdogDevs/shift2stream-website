import React from 'react';

export const ValuesVisual: React.FC = () => {
  const values = [
    {
      name: 'Passionate',
      icon: '🔥',
      // Deep Blue: #021D49 (white text)
      color: '#021D49',
      textColor: 'text-white',
      description: 'Driven by excellence',
    },
    {
      name: 'Partnering',
      icon: '🤝',
      // Bahama Blue: #1A428A (white text)
      color: '#1A428A',
      textColor: 'text-white',
      description: 'Growing together',
    },
    {
      name: 'Pioneering',
      icon: '🚀',
      // Bright Turquoise: #10FDC8 (black text)
      color: '#10FDC8',
      textColor: 'text-black',
      description: 'Leading innovation',
    },
  ];

  return (
    // Container background is exactly MyVelo TV Sea Blue (#4197CB)
    <div className="relative w-full py-16 bg-[#4197CB]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.name}
              className="relative p-8 rounded-2xl border border-white/20 shadow-lg backdrop-blur-md bg-white/10 overflow-hidden cursor-default"
              style={{ transition: 'none' }}
            >
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-md"
                  style={{ backgroundColor: value.color }}
                >
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${value.textColor}`}>
                  {value.name}
                </h3>
                <p className="text-base text-gray-200 text-center">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
