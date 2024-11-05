// src/pages/WhatsHappening.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/fonts.css';

interface ProjectUpdate {
  id: number;
  date: string;
  title: string;
  category: 'event' | 'launch';
  content: string;
  image: string;
  link: string;
  status: 'upcoming' | 'in-progress';
}

const projectUpdates: ProjectUpdate[] = [
  {
    id: 1,
    date: '2025-01-07',
    title: 'Shift2Stream at CES 2025',
    category: 'event',
    status: 'upcoming',
    content: 'Join us at CES 2025 where well be showcasing our latest streaming innovations and the future of TV technology. Visit our booth to experience firsthand how were revolutionizing the streaming industry with our cutting-edge solutions.',
    image: '/images/ces-banner.jpg',
    link: 'https://www.ces.tech',
  },
  {
    id: 2,
    date: '2024-12-01',
    title: 'My Velo TV Launch',
    category: 'launch',
    status: 'in-progress',
    content: 'Were excited to announce the upcoming launch of My Velo TV, our revolutionary streaming platform that combines traditional TV with modern streaming capabilities. Get ready for a seamless entertainment experience that will transform how you watch TV.',
    image: '/images/my-velo-tv-banner.jpg',
    link: '/my-velo-tv',
  },
];

const WhatsHappening: React.FC = () => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'event':
        return '🎪';
      case 'launch':
        return '🚀';
      default:
        return '📌';
    }
  };

  const renderLink = (update: ProjectUpdate) => {
    const linkStyles = {
      fontFamily: 'Gilroy-Bold',
      className: "inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg"
    };

    if (update.link.startsWith('http')) {
      return (
        <a
          href={update.link}
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles.className}
          style={{ fontFamily: linkStyles.fontFamily }}
        >
          Learn More
          <svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </a>
      );
    }
    return (
      <Link
        to={update.link}
        className={linkStyles.className}
        style={{ fontFamily: linkStyles.fontFamily }}
      >
        Learn More
        <svg 
          className="w-5 h-5 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl md:text-5xl mb-4 text-blue-900"
            style={{ fontFamily: 'Gilroy-ExtraBold' }}
          >
            What's Happening
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Gilroy-Light' }}
          >
            Stay Updated with Our Latest Events and Launches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectUpdates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className={`px-4 py-1.5 rounded-full text-sm uppercase tracking-wide ${
                      getStatusColor(update.status)
                    }`}
                    style={{ fontFamily: 'Gilroy-Bold' }}
                  >
                    {update.status.split('-').join(' ').charAt(0).toUpperCase() + 
                      update.status.slice(1)}
                  </span>
                  <span 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'Gilroy-Regular' }}
                  >
                    {new Date(update.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">
                    {getCategoryIcon(update.category)}
                  </span>
                  <h2 
                    className="text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-300"
                    style={{ fontFamily: 'Gilroy-Bold' }}
                  >
                    {update.title}
                  </h2>
                </div>
                <p 
                  className="text-gray-600 mb-6 text-lg leading-relaxed"
                  style={{ fontFamily: 'Gilroy-Regular' }}
                >
                  {update.content}
                </p>
                {renderLink(update)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 
            className="text-2xl mb-4 text-blue-900"
            style={{ fontFamily: 'Gilroy-Bold' }}
          >
            Stay Informed
          </h3>
          <p 
            className="text-gray-600 mb-6"
            style={{ fontFamily: 'Gilroy-Regular' }}
          >
            Want to receive updates about our latest developments and events?
          </p>
          <a
            href="mailto:updates@shift2stream.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors duration-300"
            style={{ fontFamily: 'Gilroy-Bold' }}
          >
            Subscribe to Updates
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsHappening;
