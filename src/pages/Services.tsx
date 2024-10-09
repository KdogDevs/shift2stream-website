// src/pages/Services.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: 'NextGen TV Set-Top Experience',
      icon: '📺',
      description: 'Experience the future of television with our cutting-edge set-top box solution.',
      features: [
        '4K UHD with Dolby Atmos and Dolby Vision HDR',
        'Netflix and Amazon Prime Video Pre-Certified/Loaded',
        'PowerOn TV Experience with Remote Management/Support',
        'Google Assistant, Play Store and Chromecast Built-In',
        'NextGen TV and A3SA Certified*'
      ]
    },
    {
      title: 'Opt2Me: The Optimal TV Service Platform',
      icon: '🚀',
      description: 'A comprehensive end-to-end solution for ISPs looking to offer top-tier TV and streaming services.',
      features: [
        'Fully end-end hybrid cloud Pay TV as-a-service platform',
        'Optimized for rural and regional Internet Service Providers',
        'Serves both residential and commercial customers',
        'Operator branding, Live and VOD, Advertising and Analytics',
        'Live channel TV, nDVR and VOD supporting multiple bit rates'
      ]
    },
    {
      title: 'Advanced Streaming Solutions',
      icon: '🔧',
      description: 'Cutting-edge streaming technology to enhance your content delivery and user experience.',
      features: [
        'Full Cache and Streaming for better customer experience',
        'Automated Program Substitution, Language Translation',
        'SVOD integration, VOD onboarding, App Sell through',
        'Data/WiFi business drivers',
        'Flexible, Hybrid, and Standards-based solutions'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800"
        >
          Our Services
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700"
        >
          Discover our suite of innovative streaming solutions designed to revolutionize your content delivery and viewer experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${selectedService === index ? 'ring-4 ring-blue-500' : ''}`}
              onClick={() => setSelectedService(index)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-16"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">{services[selectedService].title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {services[selectedService].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-gray-700"
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <a href="mailto:contact@shift2stream.com" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
            Get a Custom Solution
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
