import { motion } from 'framer-motion';

export const ValuesVisual: React.FC = () => {
    const values = [
        {
            name: 'Passionate',
            icon: '🔥',
            color: 'text-red-500',
            gradient: 'from-red-400 to-red-600',
            description: 'Driven by excellence'
        },
        {
            name: 'Partnering',
            icon: '🤝',
            color: 'text-blue-500',
            gradient: 'from-blue-400 to-blue-600',
            description: 'Growing together'
        },
        {
            name: 'Pioneering',
            icon: '🚀',
            color: 'text-purple-500',
            gradient: 'from-purple-400 to-purple-600',
            description: 'Leading innovation'
        }
    ];
    
    return (
        <div className="relative w-full h-[400px]">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Central Hub */}
                <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full shadow-lg flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="text-3xl"
                        animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: 360 
                        }}
                        transition={{ 
                            scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            rotate: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        ⭐
                    </motion.div>
                </motion.div>

                {/* Values Circles */}
                <svg width="400" height="400" viewBox="0 0 400 400" className="absolute">
                    {values.map((value, index) => {
                        const angle = (index * 2 * Math.PI) / 3;
                        const radius = 150;
                        const x = 200 + Math.cos(angle) * radius;
                        const y = 200 + Math.sin(angle) * radius;

                        return (
                            <g key={value.name}>
                                {/* Connection Lines */}
                                <motion.path
                                    d={`M 200,200 Q ${(200 + x) / 2 - 20},${(200 + y) / 2} ${x},${y}`}
                                    stroke={`url(#gradient-${index})`}
                                    strokeWidth="2"
                                    strokeDasharray="4,4"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.3 }}
                                    transition={{ delay: index * 0.2, duration: 1 }}
                                />

                                {/* Value Circle */}
                                <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="45"
                                    className="fill-white"
                                    stroke={`url(#gradient-${index})`}
                                    strokeWidth="2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    filter="url(#shadow)"
                                />

                                {/* Value Content */}
                                <motion.g
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                >
                                    <text
                                        x={x}
                                        y={y - 15}
                                        textAnchor="middle"
                                        className={`${value.color} font-gilroy-bold`}
                                        fontSize="16"
                                    >
                                        {value.name}
                                    </text>
                                    <text
                                        x={x}
                                        y={y + 5}
                                        textAnchor="middle"
                                        fontSize="20"
                                    >
                                        {value.icon}
                                    </text>
                                    <text
                                        x={x}
                                        y={y + 20}
                                        textAnchor="middle"
                                        className="text-gray-500 font-gilroy-regular"
                                        fontSize="11"
                                    >
                                        {value.description}
                                    </text>
                                </motion.g>
                            </g>
                        );
                    })}

                    {/* Gradients and Filters */}
                    <defs>
                        {values.map((value, index) => (
                            <linearGradient
                                key={index}
                                id={`gradient-${index}`}
                                gradientTransform={`rotate(${120 * index})`}
                            >
                                <stop offset="0%" className={`stop-${value.gradient.split(' ')[1]}`} />
                                <stop offset="100%" className={`stop-${value.gradient.split(' ')[3]}`} />
                            </linearGradient>
                        ))}
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                        </filter>
                    </defs>
                </svg>

                {/* Animated Particles */}
                {values.map((value, index) => (
                    <motion.div
                        key={`particle-${index}`}
                        className={`absolute w-2 h-2 rounded-full ${value.color}`}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5
                        }}
                        style={{
                            left: `${50 + Math.cos(index * 2 * Math.PI / 3) * 40}%`,
                            top: `${50 + Math.sin(index * 2 * Math.PI / 3) * 40}%`
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};
