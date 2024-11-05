// src/pages/my-velo-tv.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/fonts.css';

const MyVeloTV: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const service = {
    name: 'My Velo TV',
    logo: '/path-to-velotv-logo.png', // Replace with actual logo path
    description: 'Enterprise-Grade TV Entertainment Solutions',
    features: [
      'Customizable Channel Packages',
      'Enterprise Content Management',
      'Scalable Multi-Location Deployment',
      'Dedicated Support & Maintenance',
      'Advanced Analytics Dashboard'
    ],
    website: 'https://velo.kdog4u.com' // Replace with actual website
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center mb-12 text-purple-800"
          style={{ fontFamily: 'Gilroy-ExtraBold' }}
        >
          My Velo TV
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700"
          style={{ fontFamily: 'Gilroy-Light' }}
        >
          Delivering premium entertainment solutions for businesses, hotels, and enterprises. 
          Transform your facility with our professional-grade TV services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <img src={service.logo} alt={service.name} className="h-16" />
                <motion.div
                  animate={{ rotate: isHovered ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
              <h2 
                className="text-3xl mb-4 text-purple-800"
                style={{ fontFamily: 'Gilroy-Bold' }}
              >
                {service.name}
              </h2>
              <p 
                className="text-xl mb-6 text-gray-600"
                style={{ fontFamily: 'Gilroy-Regular' }}
              >
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    className="flex items-center text-gray-700"
                    style={{ fontFamily: 'Gilroy-Regular' }}
                  >
                    <svg className="h-5 w-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-600 p-4 text-white text-center">
              <span 
                className="text-lg tracking-wide uppercase"
                style={{ fontFamily: 'Gilroy-Bold' }}
              >
                Check Out Now
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 
            className="text-3xl mb-8 text-purple-800"
            style={{ fontFamily: 'Gilroy-Bold' }}
          >
            Why Choose My Velo TV?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Enterprise Ready', icon: '🏢', description: 'Built for scalability and performance' },
              { title: 'Secure & Reliable', icon: '🔒', description: 'Enterprise-grade security and uptime' },
              { title: '24/7 Support', icon: '💬', description: 'Round-the-clock technical assistance' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (index * 0.2), duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 
                  className="text-xl mb-2 text-purple-700"
                  style={{ fontFamily: 'Gilroy-Bold' }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'Gilroy-Regular' }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyVeloTV;
