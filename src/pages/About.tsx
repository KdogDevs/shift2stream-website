// src/pages/About.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/fonts.css';

const About: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const statements = [
        {
            title: 'Purpose',
            icon: '🎯',
            content: 'We strive to bring entertainment and live content to households at a price that makes sense through the hybrid experience. Seamlessly integrating the available connectivity into the household to achieve the most efficient and highest quality entertainment available.'
        },
        {
            title: 'Vision',
            icon: '👁️',
            content: 'Empower Broadcasters with revenue-generating targeted advertising and smart home IoT services and Broadband Providers with improved QoS and data services for increased network efficiency.'
        },
        {
            title: 'Mission',
            icon: '🚀',
            content: 'Through the hybrid experience, we aim to revolutionize the streaming industry by offering robust, scalable, and user-friendly platforms that cater to the evolving needs of our diverse clientele.'
        },
        {
            title: 'Brand Pillars',
            icon: '🏛️',
            content: [
                'Enjoyment: Make available the Entertainment and live TV services to households with better video, home theater quality sound with enhanced dialog, emergency service/events with hyper-local updates.',
                'Value: We combine Free Broadcast TV with value-minded FAST and PayTV to bring entertainment and data services to the household at a price that makes sense to all.',
                'Trust: Our focus and goal is to help make the communities we serve cohesive, informed and linked to the events and sports that bring people together.',
                'Innovative: We innovate and leverage technology with the primary goal of improving the experience of the users and not complicating the experience.'
            ]
        }
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-24 px-6 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl text-center mb-16 text-blue-800"
                    style={{ fontFamily: 'Gilroy-ExtraBold' }}
                >
                    About
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-2xl text-center mb-20 max-w-3xl mx-auto text-blue-700"
                    style={{ fontFamily: 'Gilroy-Light' }}
                >
                    Revolutionizing the streaming industry with cutting-edge technology and unparalleled support.
                </motion.p>

                <div className="relative">
                    <motion.div 
                        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-300"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {statements.map((statement, index) => (
                        <motion.div
                            key={statement.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 mb-16"
                        >
                            <div 
                                className={`flex items-center cursor-pointer group ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <div className={`w-[45%] ${index % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                                    <motion.h2 
                                        className="text-3xl text-blue-600 mb-3 inline-block"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ fontFamily: 'Gilroy-Bold' }}
                                    >
                                        {statement.title}
                                    </motion.h2>
                                    {!Array.isArray(statement.content) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="bg-blue-100 p-5 rounded-lg shadow-md"
                                        >
                                            <p 
                                                className="text-lg text-gray-700 group-hover:text-black transition-colors duration-300 text-left"
                                                style={{ fontFamily: 'Gilroy-Regular' }}
                                            >
                                                {statement.content}
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                                <motion.div 
                                    className="w-[10%] flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
                                        {statement.icon}
                                    </div>
                                </motion.div>
                                <div className={`w-[45%] ${index % 2 === 0 ? 'text-left pl-6' : 'text-right pr-6'}`}>
                                    {Array.isArray(statement.content) && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-xl shadow-md"
                                            style={{ fontFamily: 'Gilroy-Bold' }}
                                        >
                                            Click to explore our pillars
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && Array.isArray(statement.content) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-6 bg-blue-50 p-6 rounded-lg shadow-inner w-full"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {statement.content.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                                >
                                                    <h3 
                                                        className="text-xl text-blue-600 mb-2"
                                                        style={{ fontFamily: 'Gilroy-Bold' }}
                                                    >
                                                        {item.split(':')[0]}
                                                    </h3>
                                                    <p 
                                                        className="text-lg text-gray-700"
                                                        style={{ fontFamily: 'Gilroy-Regular' }}
                                                    >
                                                        {item.split(':')[1]}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
