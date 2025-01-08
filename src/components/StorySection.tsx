// src/components/StorySection.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StorySectionProps {
  children: React.ReactNode;
  className?: string;
}

export const StorySection: React.FC<StorySectionProps> = ({ children, className }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
};
