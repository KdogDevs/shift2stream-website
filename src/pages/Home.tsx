// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedWave } from '../components/AnimatedWave';
import { StreamingIcon } from '../components/icons/StreamingIcon';
import { AnalyticsIcon } from '../components/icons/AnalyticsIcon';
import { FlexibleIcon } from '../components/icons/FlexibleIcon';
import { QuoteIcon } from '../components/icons/QuoteIcon';
import '../styles/fonts.css';

const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.015,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const features = [
    {
      icon: <StreamingIcon />,
      title: 'High-Quality Streaming',
      description: 'Experience seamless, high-definition streaming across all devices.'
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Advanced Analytics',
      description: 'Gain valuable insights into your audience and content performance.'
    },
    {
      icon: <FlexibleIcon />,
      title: 'Flexible and Hybrid Solutions',
      description: 'Tailored streaming solutions that work with both traditional and IP-based delivery systems.'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fixed background gradient that stays in place */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-center relative z-10 text-white">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl mb-6 text-shadow-lg"
              variants={sentence}
              initial="hidden"
              animate="visible"
              style={{ fontFamily: 'Gilroy-ExtraBold' }}
            >
              {"Welcome to".split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
              <br />
              {"The Next Wave of TV".split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-12 text-shadow"
              variants={sentence}
              initial="hidden"
              animate="visible"
              style={{ fontFamily: 'Gilroy-Light' }}
            >
              {"The Best of Free TV and Streaming Together".split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <Link 
                to="/services" 
                className="bg-white text-blue-600 py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                style={{ fontFamily: 'Gilroy-Bold' }}
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <AnimatedWave />
          </div>
        </section>

        {/* Content sections */}
        <div className="relative bg-white">
          {/* Why Choose Section */}
          <section ref={ref} className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.h2 
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl text-center mb-12 md:mb-16 text-gray-800"
                style={{ fontFamily: 'Gilroy-ExtraBold' }}
              >
                Why Choose Shift2Stream?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 30 }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <div className="mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 
                      className="text-xl md:text-2xl mb-4 text-gray-800 text-center"
                      style={{ fontFamily: 'Gilroy-Bold' }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-sm md:text-base text-gray-600 text-center"
                      style={{ fontFamily: 'Gilroy-Regular' }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="relative bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <h2 
                className="text-3xl md:text-4xl text-center mb-12 md:mb-16 text-gray-800"
                style={{ fontFamily: 'Gilroy-ExtraBold' }}
              >
                What Our Customers Say
              </h2>
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex justify-center mb-6 text-blue-400">
                    <QuoteIcon />
                  </div>
                  <blockquote 
                    className="text-base md:text-xl italic text-gray-700 mb-4"
                    style={{ fontFamily: 'Gilroy-Regular' }}
                  >
                    "We needed to switch our IPTV D2C Service to an offering that allows users to watch TV and VOD service with their own devices. We tried a service from some providers who are selling just OTT services and found the quality and response subpar. We decided to engage with Shift 2 Stream to help us figure out how they have been able to model a business plan while simplifying the technology. Shift 2 Stream was able to surpass our expectations in both areas."
                  </blockquote>
                  <p 
                    className="text-right text-gray-600"
                    style={{ fontFamily: 'Gilroy-Bold' }}
                  >
                    - Tier 3 Telco Provider
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Background extension for footer */}
      <div className="absolute bottom-0 left-0 right-0 h-screen bg-blue-50" style={{ zIndex: -2 }}></div>
    </div>
  );
};

export default Home;
