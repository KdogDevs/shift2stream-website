import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  title: string;
  content: string | string[];
  icon: React.ReactNode;
  visual: React.ReactNode;
  color: {
    gradient: string;
    accent: string;
    text: string;
  };
}

const sections: Section[] = [
  {
    id: 'purpose',
    title: 'Purpose',
    content: "To revolutionize the streaming industry by providing innovative solutions that empower content creators and engage viewers.",
    icon: <PurposeIcon />,
    visual: <PurposeVisual />,
    color: {
      gradient: 'from-purple-500/10 to-purple-600/10',
      accent: 'purple-500',
      text: 'text-purple-500'
    }
  },
  {
    id: 'vision',
    title: 'Vision',
    content: "To be the leading force in transforming how digital content is created, distributed, and consumed.",
    icon: <VisionIcon />,
    visual: <VisionVisual />,
    color: {
      gradient: 'from-blue-500/10 to-blue-600/10',
      accent: 'blue-500',
      text: 'text-blue-500'
    }
  },
  {
    id: 'mission',
    title: 'Mission',
    content: "To deliver cutting-edge streaming solutions that create meaningful connections between creators and their audiences.",
    icon: <MissionIcon />,
    visual: <MissionVisual />,
    color: {
      gradient: 'from-green-500/10 to-green-600/10',
      accent: 'green-500',
      text: 'text-green-500'
    }
  },
  {
    id: 'values',
    title: 'Values',
    content: [
      "Innovation: Constantly pushing boundaries",
      "Integrity: Building trust through transparency",
      "Excellence: Delivering outstanding quality",
      "Community: Fostering meaningful connections"
    ],
    icon: <ValuesIcon />,
    visual: <ValuesVisual />,
    color: {
      gradient: 'from-pink-500/10 to-pink-600/10',
      accent: 'pink-500',
      text: 'text-pink-500'
    }
  },
  {
    id: 'brand',
    title: 'Brand Pillars',
    content: [
      "Innovation in Streaming Technology",
      "Customer-Centric Solutions",
      "Quality and Reliability",
      "Global Reach, Local Impact"
    ],
    icon: <BrandPillarsIcon />,
    visual: <BrandVisual />,
    color: {
      gradient: 'from-orange-500/10 to-orange-600/10',
      accent: 'orange-500',
      text: 'text-orange-500'
    }
  },
  {
    id: 'character',
    title: 'Character',
    content: "Bold, innovative, and reliable - we're committed to excellence in everything we do.",
    icon: <CharacterIcon />,
    visual: <CharacterVisual />,
    color: {
      gradient: 'from-red-500/10 to-red-600/10',
      accent: 'red-500',
      text: 'text-red-500'
    }
  },
  {
    id: 'market',
    title: 'Market Position',
    content: "Leading the streaming revolution with innovative technology and unparalleled service quality.",
    icon: <MarketIcon />,
    visual: <MarketVisual />,
    color: {
      gradient: 'from-cyan-500/10 to-cyan-600/10',
      accent: 'cyan-500',
      text: 'text-cyan-500'
    }
  },
  {
    id: 'founders',
    title: 'Our Founders',
    content: "Visionaries with decades of combined experience in streaming technology and digital innovation.",
    icon: <FoundersIcon />,
    visual: <FoundersVisual />,
    color: {
      gradient: 'from-teal-500/10 to-teal-600/10',
      accent: 'teal-500',
      text: 'text-teal-500'
    }
  }
];

interface ContentSectionProps {
  section: Section;
  index: number;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
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
          <div className="absolute inset-0 bg-shine-gradient bg-shine animate-shine-slow opacity-5" />
          <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
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
    <div ref={containerRef} className="relative min-h-screen bg-white">
      <ScrollProgress />
      
      {/* Fixed background */}
      <div className="fixed inset-0 bg-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-gray-100 via-transparent to-white"
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
          <h1 className="text-7xl md:text-8xl font-gilroy-extrabold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500">
              Our Story
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 font-gilroy-light max-w-3xl mx-auto"
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
              <span className="text-gray-500 text-sm font-gilroy-light">Scroll to explore</span>
              <motion.svg 
                className="w-6 h-6 text-gray-500"
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
