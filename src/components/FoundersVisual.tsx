import { motion } from 'framer-motion';

export const FoundersVisual: React.FC = () => {
    const founders = [
      {
        name: 'Mark Jensen',
        image: '/MarkJensen.jpeg' // Add actual image path
      },
      {
        name: 'Steve Calzone',
        image: '/SteveC1.jpeg' // Add actual image path
      }
    ];

    return (
      <div className="relative w-full h-[400px]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-lg font-gilroy-bold">{founder.name}</h3>
                <p className="text-sm font-gilroy-light">Co-Founder</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
};
