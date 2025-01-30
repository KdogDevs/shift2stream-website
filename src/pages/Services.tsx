import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/fonts.css';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: 'ATSC 3.0 Strategy & Implementation',
      icon: '📡',
      description: 'Navigate the future of broadcasting with our comprehensive ATSC 3.0 solutions.',
      details: [
        'Transition planning and execution',
        'Infrastructure assessment and upgrades',
        'NextGen TV application development',
        'Viewer experience optimization'
      ]
    },
    {
      title: '1st Party Data & Analytics',
      icon: '📊',
      description: 'Harness the power of your data with our advanced analytics and reporting tools.',
      details: [
        'Real-time audience insights',
        'Customizable dashboards and reports',
        'Predictive analytics for content performance',
        'Data-driven decision-making support'
      ]
    },
    {
      title: 'Application Development',
      icon: '💻',
      description: 'Create seamless experiences across all platforms with our expert app development services.',
      details: [
        'Android app development',
        'Web application creation',
        'ATSC 3.0 broadcast app development',
        'Cross-platform compatibility'
      ]
    },
    {
      title: 'Advertising & Revenue Generation',
      icon: '💰',
      description: 'Maximize your revenue potential with our innovative advertising solutions.',
      details: [
        'Targeted advertising implementation',
        'Programmatic ad insertion',
        'Revenue stream diversification',
        'Ad performance analytics'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-32 px-6 overflow-hidden"> {/* Changed py-24 to py-32 */}
      <div className="max-w-6xl mx-auto pt-16"> {/* Added pt-16 for extra top padding */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-center mb-16 text-blue-800"
          style={{ fontFamily: 'Gilroy-ExtraBold' }}
        >
          Our Services
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl text-center mb-20 max-w-3xl mx-auto text-gray-700"
          style={{ fontFamily: 'Gilroy-Light' }}
        >
          Empowering the future of broadcasting and streaming with cutting-edge solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${activeService === index ? 'ring-4 ring-blue-500' : ''}`}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{service.icon}</div>
                <h3 
                  className="text-2xl text-blue-800"
                  style={{ fontFamily: 'Gilroy-Bold' }}
                >
                  {service.title}
                </h3>
              </div>
              <p 
                className="text-gray-600 mb-4"
                style={{ fontFamily: 'Gilroy-Regular' }}
              >
                {service.description}
              </p>
              <motion.div
                initial="collapsed"
                animate={activeService === index ? "expanded" : "collapsed"}
                variants={{
                  expanded: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: detailIndex * 0.1, duration: 0.3 }}
                      style={{ fontFamily: 'Gilroy-Regular' }}
                      className="leading-relaxed"
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <a 
            href="mailto:info@shift2stream.com" 
            className="bg-blue-600 text-white py-4 px-10 rounded-full text-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block uppercase tracking-wide"
            style={{ fontFamily: 'Gilroy-Bold' }}
          >
            Get a Custom Solution
          </a>
        </motion.div>

        {/* Additional Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p 
            className="text-gray-600"
            style={{ fontFamily: 'Gilroy-Regular' }}
          >
            Need more information about our services?
          </p>
          <p 
            className="text-blue-600 mt-2"
            style={{ fontFamily: 'Gilroy-Bold' }}
          >
            Contact us at{' '}
            <a 
              href="mailto:info@shift2stream.com"
              className="underline hover:text-blue-800 transition-colors duration-300"
            >
              info@shift2stream.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
