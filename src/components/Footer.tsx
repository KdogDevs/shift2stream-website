// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/fonts.css';

const Footer: React.FC = () => {
  return (
    <footer className="relative px-4 pb-6 z-10 bg-blue-50">
      <div className="relative w-[95%] mx-auto bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Brand Section */}
            <div className="w-full md:w-auto flex-shrink-0">
              <h3 
                className="text-white text-xl mb-2" 
                style={{ fontFamily: 'Gilroy-ExtraBold' }}
              >
                Shift2Stream
              </h3>
              <p 
                className="text-gray-300 text-sm" 
                style={{ fontFamily: 'Gilroy-Light' }}
              >
                Empowering your streaming experience
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="w-full md:w-auto flex-shrink-0">
              <h4 
                className="text-white text-lg mb-3" 
                style={{ fontFamily: 'Gilroy-Bold' }}
              >
                Quick Links
              </h4>
              <ul 
                className="text-gray-300 grid grid-cols-2 md:grid-cols-1 gap-2"
                style={{ fontFamily: 'Gilroy-Regular' }}
              >
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'My Velo TV', path: '/my-velo-tv' },
                  { name: "What's Happening", path: '/whats-happening' },
                  { name: 'Contact', path: 'mailto:info@shift2stream.com' }
                ].map((link) => (
                  <li key={link.name}>
                    {link.name === 'Contact' ? (
                      <a 
                        href={link.path}
                        className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block hover:bg-white/10 px-2 py-1 rounded-lg"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block hover:bg-white/10 px-2 py-1 rounded-lg"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-auto flex-shrink-0">
              <h4 
                className="text-white text-lg mb-3" 
                style={{ fontFamily: 'Gilroy-Bold' }}
              >
                Contact Us
              </h4>
              <div 
                className="text-gray-300 space-y-2"
                style={{ fontFamily: 'Gilroy-Regular' }}
              >
                <a 
                  href="mailto:info@shift2stream.com"
                  className="flex items-center text-sm group hover:text-white transition-all duration-300 hover:bg-white/10 px-2 py-1 rounded-lg"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform duration-300">📧</span>
                  info@shift2stream.com
                </a>
                <p className="flex items-center text-sm px-2 py-1">
                  <span className="mr-2">📍</span>
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div 
            className="mt-8 pt-4 border-t border-white/20 text-center text-gray-300/90 text-sm"
            style={{ fontFamily: 'Gilroy-Light' }}
          >
            <p>
              &copy; {new Date().getFullYear()} Shift2Stream. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
