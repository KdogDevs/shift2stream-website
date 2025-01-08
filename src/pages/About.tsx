// src/pages/About.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ScrollProgress } from '../components/ScrollProgress';
import { PurposeVisual } from '../components/PurposeVisual';
import { VisionVisual } from '../components/VisionVisual';
import { MissionVisual } from '../components/MissionVisual';
import { ValuesVisual } from '../components/ValuesVisual';
import { BrandVisual } from '../components/BrandVisual';
import { CharacterVisual } from '../components/CharacterVisual';
import { MarketVisual } from '../components/MarketVisual';
import { FoundersVisual } from '../components/FoundersVisual';
import { PurposeIcon } from '../components/icons/PurposeIcon';
import { VisionIcon } from '../components/icons/VisionIcon';
import { MissionIcon } from '../components/icons/MissionIcon';
import { ValuesIcon } from '../components/icons/ValuesIcon';
import { BrandPillarsIcon } from '../components/icons/BrandPillarsIcon';
import { CharacterIcon } from '../components/icons/CharacterIcon';
import { MarketIcon } from '../components/icons/MarketIcon';
import { FoundersIcon } from '../components/icons/FoundersIcon';

interface Section {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string | string[];
  color: {
    gradient: string;
    text: string;
    accent: string;
  };
  visual: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 'purpose',
    icon: <PurposeIcon />,
    title: 'Our Purpose',
    content: 'We strive to provide people and communities with access to the news, sports, and entertainment they seek at a reasonable price. We seamlessly integrate the connectivity available to each household through our hybrid connected TV technology to achieve the most efficient and highest-quality interactive media experiences possible.',
    color: {
      gradient: 'from-primary-900/50 to-primary-800/30',
      text: 'text-primary-50',
      accent: 'primary-500'
    },
    visual: <PurposeVisual />
  },
  {
    id: 'vision',
    icon: <VisionIcon />,
    title: 'Our Vision',
    content: 'Empower broadcasters and broadband providers with revenue-generating advertising using 1st-party data, performance-based measurement, and AI across all media types delivered to the household, with improved QoS and managed data services for increased network efficiency.',
    color: {
      gradient: 'from-secondary-900/50 to-secondary-800/30',
      text: 'text-secondary-50',
      accent: 'secondary-500'
    },
    visual: <VisionVisual />
  },
  {
    id: 'mission',
    icon: <MissionIcon />,
    title: 'Our Mission',
    content: 'Provide consumers with the best possible interactive media experiences through intelligent cloud-based and connected TV hybrid technologies.',
    color: {
      gradient: 'from-accent-900/50 to-accent-800/30',
      text: 'text-accent-50',
      accent: 'accent-500'
    },
    visual: <MissionVisual />
  },
  {
    id: 'values',
    icon: <ValuesIcon />,
    title: 'Company Values',
    content: [
      'Passionate: Driving results with dedication and full expertise.',
      'Partnering: Spirit of collaboration and mutual respect for shared success.',
      'Pioneering: Pursuing solutions with curiosity and courage.'
    ],
    color: {
      gradient: 'from-primary-800/50 to-secondary-900/30',
      text: 'text-primary-50',
      accent: 'primary-400'
    },
    visual: <ValuesVisual />
  },
  {
    id: 'brand',
    icon: <BrandPillarsIcon />,
    title: 'Brand Pillars',
    content: [
      'Enjoyment: We provide access to the entertainment you want by making it seamless, simple, and satisfying.',
      'Value: We combine Free Broadcast TV with value-minded FAST and PayTV services.',
      'Trust: Our focus is helping communities stay informed and connected.',
      'Innovation: We leverage technology to improve, not complicate, the user experience.'
    ],
    color: {
      gradient: 'from-secondary-800/50 to-accent-900/30',
      text: 'text-secondary-50',
      accent: 'secondary-400'
    },
    visual: <BrandVisual />
  },
  {
    id: 'character',
    icon: <CharacterIcon />,
    title: 'Brand Character',
    content: [
      'Accessible: Products built to exceed customer expectations.',
      'Dynamic: Leveraging AI for personalized experiences.',
      'Hyper-Local: Geography-based technologies for meaningful engagement.',
      'Reliable: Multi-layered connectivity for uninterrupted service.'
    ],
    color: {
      gradient: 'from-accent-800/50 to-primary-900/30',
      text: 'text-accent-50',
      accent: 'accent-400'
    },
    visual: <CharacterVisual />
  },
  {
    id: 'market',
    icon: <MarketIcon />,
    title: 'Market Segments',
    content: [
      'Consumers seeking the Future of TV',
      'Broadcast TV Companies',
      'Low Power TV Broadcaster',
      'Fixed & Wireless Broadband Providers',
      'Sports Teams & Regional Sports Networks',
      'Content Companies'
    ],
    color: {
      gradient: 'from-primary-900/50 to-accent-800/30',
      text: 'text-primary-50',
      accent: 'primary-500'
    },
    visual: <MarketVisual />
  },
  {
    id: 'founders',
    icon: <FoundersIcon />,
    title: 'Our Founders',
    content: 'Mark Jensen and Steve Calzone bring over 20 years of experience in media, entertainment, and telecommunications, working with companies across North America, LATAM, EMEA, Scandinavia, and Asia.',
    color: {
      gradient: 'from-secondary-900/50 to-primary-800/30',
      text: 'text-secondary-50',
      accent: 'secondary-500'
    },
    visual: <FoundersVisual />
  }
];
interface ContentSectionProps {
    section: Section;
    index: number;
  }
  
  const ContentSection: React.FC<ContentSectionProps> = ({ section, index }) => {
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: false
    });
  
    return (
      <motion.section
        ref={ref}
        className="min-h-screen py-20 px-4 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="container mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div 
            className={`relative backdrop-blur-xl bg-gradient-to-br ${section.color.gradient} 
              rounded-[2.5rem] p-8 md:p-12 overflow-hidden group transition-all duration-500
              hover:shadow-glow hover:shadow-${section.color.accent} border border-white/10`}
          >
            {/* Animated Background Effects */}
            <div className="absolute inset-0 bg-shine-gradient bg-shine animate-shine-slow opacity-5" />
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content Grid */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-${section.color.accent}/20 p-3 
                      flex items-center justify-center group-hover:bg-${section.color.accent}/30 
                      transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className={`text-4xl md:text-5xl font-gilroy-extrabold ${section.color.text}`}>
                    {section.title}
                  </h2>
                </motion.div>
  
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {Array.isArray(section.content) ? (
                    section.content.map((item, i) => (
                      <motion.div
                        key={i}
                        className={`bg-white/5 rounded-xl p-6 hover:bg-${section.color.accent}/10 
                          transition-all duration-300 transform hover:-translate-y-1`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                      >
                        <p className={`text-lg ${section.color.text} font-gilroy-light`}>
                          {item}
                        </p>
                      </motion.div>
                    ))
                  ) : (
                    <motion.p
                      className={`text-lg ${section.color.text} font-gilroy-light bg-white/5 
                        rounded-xl p-6 hover:bg-${section.color.accent}/10 transition-all duration-300`}
                    >
                      {section.content}
                    </motion.p>
                  )}
                </motion.div>
              </div>
  
              {/* Right Column - Visual */}
              <motion.div
                className="relative aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className={`absolute inset-0 bg-gradient-radial from-${section.color.accent}/20 
                  to-transparent rounded-full blur-3xl`} />
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  {section.visual}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    );
  };
  
  const About: React.FC = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const springScroll = useSpring(scrollYProgress, { 
      stiffness: 50,
      damping: 20 
    });
  
    return (
      <div ref={containerRef} className="relative min-h-screen bg-black">
        <ScrollProgress />
        
        {/* Animated Background */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-950 to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20" />
          <motion.div 
            className="absolute inset-0 bg-gradient-radial from-primary-900/20 via-transparent to-black"
            style={{
              opacity: useTransform(springScroll, [0, 0.5], [1, 0.5])
            }}
          />
        </div>
  
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="container mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative w-40 h-40 mx-auto mb-12"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-xl" />
              <img 
                src="/logo.png" 
                alt="Shift2Stream" 
                className="relative w-full h-full object-contain"
              />
            </motion.div>
  
            <h1 className="text-7xl md:text-8xl font-gilroy-extrabold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-primary-400 animate-shine-slow">
                Our Story
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-gilroy-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Founded in 2018, we're revolutionizing the streaming industry through innovative technology 
              and unparalleled service.
            </motion.p>
  
            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                className="flex flex-col items-center space-y-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-white/70 text-sm font-gilroy-light">Scroll to explore</span>
                <motion.svg 
                  className="w-6 h-6 text-white/70"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  viewBox="0 0 24 24"
                >
                  <path 
                    fill="currentColor" 
                    d="M12 5l-8 8h16l-8-8z"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
  
        {/* Content Sections */}
        <div className="relative z-10">
          {sections.map((section, index) => (
            <ContentSection
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default About;
  