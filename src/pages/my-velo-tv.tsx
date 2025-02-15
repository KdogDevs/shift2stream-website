import React from 'react';
import { motion } from 'framer-motion';
import '../styles/fonts.css';

const MyVeloTV: React.FC = () => {
  const service = {
    name: 'MyVelo TV',
    // Use the primary logo from the public folder
    logo: '/MyVeloTV_Logo_Primary_RGB.png',
    description: 'The Best of Free TV and Streaming Together',
    features: [
      'ATSC 3.0 NextGen TV Support',
      'Android TV Integration',
      'Over-the-Air Channel Access',
      'Streaming App Support',
      'Affordable $100 Solution'
    ],
    website: 'https://myvelotv.com'
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section - Display Logo */}
        <div className="flex justify-center mb-12">
          <motion.img
            src={service.logo}
            alt={service.name + ' Logo'}
            className="h-20 md:h-24"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700"
          style={{ fontFamily: 'Gilroy-Light' }}
        >
          Experience the future of television with our innovative streaming box that combines
          traditional over-the-air channels with modern streaming capabilities.
        </motion.p>

        {/* Main Viewing Card */}
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
          >
            <div className="p-8">
              {/* Replace in-card header with product image */}
              <div className="flex justify-center mb-2">
                <img
                  src="/Transparent_Box_Top_Flat_WithRemote.png"
                  alt="MyVelo TV Box"
                  className="w-full max-w-xl mx-auto"
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>

              {/* Removed the in-card logo and title */}
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
                Learn More
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
            Why Choose MyVelo TV?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'NextGen TV Ready', icon: '📡', description: 'Built with ATSC 3.0 technology' },
              { title: 'Affordable Solution', icon: '💰', description: 'Premium features at just $100' },
              { title: 'Flexible Viewing', icon: '🎯', description: 'Combine OTA channels with streaming apps' }
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
