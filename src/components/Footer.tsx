// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/fonts.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 
              className="text-2xl mb-3" 
              style={{ fontFamily: 'Gilroy-ExtraBold' }}
            >
              Shift2Stream
            </h3>
            <p 
              className="text-gray-400" 
              style={{ fontFamily: 'Gilroy-Light' }}
            >
              Empowering your streaming experience
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 
              className="text-xl mb-4" 
              style={{ fontFamily: 'Gilroy-Bold' }}
            >
              Quick Links
            </h4>
            <ul 
              className="text-gray-400 space-y-2"
              style={{ fontFamily: 'Gilroy-Regular' }}
            >
              <li>
                <Link 
                  to="/" 
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/my-velo-tv" 
                  className="hover:text-white transition-colors duration-300"
                >
                  My Velo TV
                </Link>
              </li>
              <li>
                <Link 
                  to="/whats-happening" 
                  className="hover:text-white transition-colors duration-300"
                >
                  What's Happening
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:info@shift2stream.com" 
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 
              className="text-xl mb-4" 
              style={{ fontFamily: 'Gilroy-Bold' }}
            >
              Contact Us
            </h4>
            <div 
              className="text-gray-400 space-y-2"
              style={{ fontFamily: 'Gilroy-Regular' }}
            >
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a 
                  href="mailto:info@shift2stream.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@shift2stream.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                United States
              </p>
            </div>
          </div>
        </div>
        <div 
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
          style={{ fontFamily: 'Gilroy-Light' }}
        >
          <p>&copy; {new Date().getFullYear()} Shift2Stream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
