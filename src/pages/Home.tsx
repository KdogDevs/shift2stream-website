// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const partners = [
    { 
      name: 'SEI Robotics', 
      logo: 'https://ueeshop.ly200-cdn.com/u_file/UPAO/UPAO310/2010/photo/0d6812b65e.png?x-oss-process=image/format,webp',
      website: 'https://www.seirobotics.net/'
    },
    { 
      name: 'ATEME', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUcvK_yDZwG_FuMuYTWs8ydD5KAbqrZSeMA&s',
      website: 'https://www.ateme.com/'
    },
  ];

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

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-shadow-lg"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {"Welcome to Shift2Stream".split("").map((char, index) => (
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
          >
            {"Empowering your streaming experience with cutting-edge solutions".split("").map((char, index) => (
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
            <Link to="/services" className="bg-white text-blue-600 py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1, rotate: 0 },
              hidden: { opacity: 0, scale: 0.5, rotate: -10 }
            }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800"
          >
            Why Choose Shift2Stream?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {['High-Quality Streaming', 'Advanced Analytics', 'Flexible and Hybrid Solutions'].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, rotate: 0 },
                  hidden: { opacity: 0, y: 50, rotate: 5 }
                }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="text-3xl md:text-4xl mb-4 text-blue-600">
                  {index === 0 ? '🎥' : index === 1 ? '📊' : '🔄'}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">{feature}</h3>
                <p className="text-sm md:text-base text-gray-600">
                  {index === 0
                    ? 'Experience seamless, high-definition streaming across all devices.'
                    : index === 1
                    ? 'Gain valuable insights into your audience and content performance.'
                    : 'Tailored streaming solutions that work with both traditional and IP-based delivery systems.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800">Our Partners</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center justify-center"
              >
                <motion.a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(59, 130, 246, 0.5)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="p-4 rounded-lg border-2 border-blue-500 block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 md:max-h-20 max-w-xs"
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="text-base md:text-xl italic text-gray-700 mb-4">
                "We needed to switch our IPTV D2C Service to an offering that allows users to watch TV and VOD service with their own devices. We tried a service from some providers who are selling just OTT services and found the quality and response subpar. We decided to engage with Shift 2 Stream to help us figure out how they have been able to model a business plan while simplifying the technology. Shift 2 Stream was able to surpass our expectations in both areas."
              </blockquote>
              <p className="text-right font-semibold text-gray-600">- Tier 3 Telco Provider</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
