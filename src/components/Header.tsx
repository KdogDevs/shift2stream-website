// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Subsidiaries', path: '/subsidiaries' },
    { name: 'Contact', path: 'mailto:contact@shift2stream.com' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition duration-300 ${
        isHomePage && !scrolled ? 'bg-transparent' : 'bg-white shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${isHomePage && !scrolled ? 'text-white' : 'text-blue-600'}`}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Shift2Stream
            </motion.span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.name === 'Contact' ? (
                  <a
                    href={item.path}
                    className={`px-3 py-2 rounded-md transition duration-300 ${
                      isHomePage && !scrolled
                        ? 'text-white hover:bg-white hover:text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md transition duration-300 ${
                      isHomePage && !scrolled
                        ? 'text-white hover:bg-white hover:text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    } ${location.pathname === item.path ? 'font-semibold' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`md:hidden focus:outline-none ${isHomePage && !scrolled ? 'text-white' : 'text-blue-600'}`}
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col space-y-2 px-4 py-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {item.name === 'Contact' ? (
                    <a
                      href={item.path}
                      className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md transition duration-300 block"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md transition duration-300 block ${
                        location.pathname === item.path ? 'font-semibold' : ''
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
