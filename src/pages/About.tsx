// src/pages/About.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const contentStyle = { background: 'rgb(33, 150, 243)', color: '#fff' };
const contentArrowStyle = { borderRight: '7px solid  rgb(33, 150, 243)' };
const iconStyle = { background: 'rgb(33, 150, 243)', color: '#fff' };

interface TimelineElementProps {
    element: {
        title: string;
        content: string;
        date: string;
    };
}

const TimelineElement: React.FC<TimelineElementProps> = React.memo(({ element }) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date={element.date}
        iconStyle={iconStyle}
        icon={<span className="text-2xl">📅</span>}
    >
        <h3 className="vertical-timeline-element-title text-xl font-bold">{element.title}</h3>
        <p>{element.content}</p>
    </VerticalTimelineElement>
));

const About: React.FC = () => {
    const timelineElements = useMemo(() => [
        { title: 'Founded', content: 'Shift2Stream was established to revolutionize the streaming industry.', date: '2015' },
        { title: 'First Major Client', content: 'Secured our first enterprise-level client, marking a significant milestone.', date: '2016' },
        { title: 'Technology Breakthrough', content: 'Developed our proprietary streaming optimization algorithm.', date: '2018' },
        { title: 'Global Expansion', content: 'Expanded operations to serve clients across multiple continents.', date: '2020' },
        { title: 'Industry Recognition', content: 'Received multiple awards for innovation in streaming technology.', date: '2022' },
        { title: 'Present Day', content: 'Continuing to push the boundaries of streaming technology.', date: 'Now' },
    ], []);

    return (
        <div className="bg-gray-50 min-h-screen pt-24">
            <div className="container mx-auto px-4 py-16">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                >
                    About Shift2Stream
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl text-center mb-16 max-w-3xl mx-auto"
                >
                    Shift2Stream is a leading provider of innovative streaming solutions, dedicated to empowering content creators and businesses with cutting-edge technology and unparalleled support.
                </motion.p>

                <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
                <VerticalTimeline>
                    {timelineElements.map((element, index) => (
                        <TimelineElement key={index} element={element} />
                    ))}
                </VerticalTimeline>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <p className="text-xl text-center">
                            To revolutionize the streaming industry by offering robust, scalable, and user-friendly platforms that cater to the evolving needs of our diverse clientele.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
