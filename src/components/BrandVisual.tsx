import { motion } from 'framer-motion';

export const BrandVisual: React.FC = () => {
  const pillars = [
    {
      title: 'Innovation',
      // Deep Blue from Brand Guidelines: #021D49
      color: 'bg-[#021D49]',
      textColor: 'text-black', // overridden to black
      icon: '🚀',
      description: 'Leading the future of streaming technology'
    },
    {
      title: 'Trust',
      // Sea Blue from Brand Guidelines: #4197CB
      color: 'bg-[#4197CB]',
      textColor: 'text-black',
      icon: '🤝',
      description: 'Building lasting relationships through reliability'
    },
    {
      title: 'Value',
      // Bright Turquoise from Brand Guidelines: #00C4B3
      color: 'bg-[#00C4B3]',
      textColor: 'text-black',
      icon: '💎',
      description: 'Delivering exceptional quality at fair prices'
    },
    {
      title: 'Enjoyment',
      // Canary Yellow from Brand Guidelines: #F9F685
      color: 'bg-[#F9F685]',
      textColor: 'text-black',
      icon: '✨',
      description: 'Creating delightful viewing experiences'
    }
  ];

  return (
    <div className="relative w-full h-[400px]">
      <motion.div
        className="absolute inset-0 grid grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-5 ${pillar.color}`} />
            
            {/* Content */}
            <div className="relative z-10">
              <span className="text-3xl mb-4 block">{pillar.icon}</span>
              <h3 className={`text-xl font-gilroy-bold mb-2 text-black`}>
                {pillar.title}
              </h3>
              <p className="text-black text-sm font-gilroy-regular">
                {pillar.description}
              </p>
            </div>

            {/* Animated Border */}
            <motion.div
              className={`absolute bottom-0 left-0 h-1 ${pillar.color}`}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: index * 0.2 + 0.5 }}
            />

            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 rounded-full opacity-10 ${pillar.color}`} />
          </motion.div>
        ))}
      </motion.div>

      {/* Center Connection Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M200 100 L200 300"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.path
            d="M100 200 L300 200"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#021D49" />
              <stop offset="100%" stopColor="#4197CB" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
