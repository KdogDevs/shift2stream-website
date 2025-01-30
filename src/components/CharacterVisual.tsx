import { motion } from 'framer-motion';

export const CharacterVisual: React.FC = () => {
    const traits = [
        {
            name: 'Accessible',
            icon: '🌟',
            color: 'text-blue-500',
            gradient: 'from-blue-400 to-blue-600',
            description: 'Easy to use for everyone'
        },
        {
            name: 'Dynamic',
            icon: '⚡',
            color: 'text-purple-500',
            gradient: 'from-purple-400 to-purple-600',
            description: 'Constantly evolving'
        },
        {
            name: 'Hyper-Local',
            icon: '📍',
            color: 'text-green-500',
            gradient: 'from-green-400 to-green-600',
            description: 'Focused on your area'
        },
        {
            name: 'Reliable',
            icon: '🛡️',
            color: 'text-orange-500',
            gradient: 'from-orange-400 to-orange-600',
            description: 'Always dependable'
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
                {/* Central Circle */}
                <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full shadow-lg flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="text-3xl"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        🎯
                    </motion.div>
                </motion.div>

                {/* Traits */}
                <svg width="400" height="400" viewBox="0 0 400 400" className="absolute">
                    {traits.map((trait, index) => {
                        const angle = (index * Math.PI) / 2;
                        const radius = 150;
                        const x = 200 + Math.cos(angle) * radius;
                        const y = 200 + Math.sin(angle) * radius;

                        return (
                            <g key={trait.name}>
                                {/* Connection Line */}
                                <motion.line
                                    x1="200"
                                    y1="200"
                                    x2={x}
                                    y2={y}
                                    stroke={`url(#gradient-${index})`}
                                    strokeWidth="2"
                                    strokeDasharray="4,4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.3 }}
                                    transition={{ delay: index * 0.2, duration: 1 }}
                                />

                                {/* Trait Circle */}
                                <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="40"
                                    className="fill-white stroke-2"
                                    stroke={`url(#gradient-${index})`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    filter="url(#shadow)"
                                />

                                {/* Trait Content */}
                                <motion.g
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                >
                                    <text
                                        x={x}
                                        y={y - 8}
                                        textAnchor="middle"
                                        className={`${trait.color} font-gilroy-bold`}
                                        fontSize="14"
                                    >
                                        {trait.name}
                                    </text>
                                    <text
                                        x={x}
                                        y={y + 12}
                                        textAnchor="middle"
                                        className="text-gray-500 font-gilroy-regular"
                                        fontSize="10"
                                    >
                                        {trait.description}
                                    </text>
                                </motion.g>
                            </g>
                        );
                    })}

                    {/* Definitions for gradients and filters */}
                    <defs>
                        {traits.map((trait, index) => (
                            <linearGradient
                                key={index}
                                id={`gradient-${index}`}
                                gradientTransform={`rotate(${90 + (index * 90)})`}
                            >
                                <stop offset="0%" className={`stop-${trait.gradient.split(' ')[1]}`} />
                                <stop offset="100%" className={`stop-${trait.gradient.split(' ')[3]}`} />
                            </linearGradient>
                        ))}
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1"/>
                        </filter>
                    </defs>
                </svg>

                {/* Animated Particles */}
                {traits.map((trait, index) => (
                    <motion.div
                        key={`particle-${index}`}
                        className={`absolute w-2 h-2 rounded-full ${trait.color}`}
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
                            left: `${50 + Math.cos(index * Math.PI / 2) * 40}%`,
                            top: `${50 + Math.sin(index * Math.PI / 2) * 40}%`
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};
