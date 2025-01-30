import { motion } from 'framer-motion';

export const BrandPillarsIcon: React.FC = () => {
    const pillars = [
        { height: 32, color: "text-blue-500" },
        { height: 40, color: "text-blue-600" },
        { height: 36, color: "text-blue-500" },
        { height: 44, color: "text-blue-600" }
    ];

    return (
        <motion.svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
        >
            {/* Background glow effect */}
            <motion.circle
                cx="32"
                cy="32"
                r="28"
                className="text-blue-100"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            />

            {/* Pillars */}
            {pillars.map((pillar, index) => (
                <g key={index}>
                    {/* Pillar shadow */}
                    <motion.rect
                        x={14 + (index * 12)}
                        y={64 - pillar.height}
                        width="8"
                        height={pillar.height}
                        className="text-blue-200"
                        fill="currentColor"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.7, delay: index * 0.15 }}
                        style={{ transformOrigin: 'bottom' }}
                    />
                    
                    {/* Main pillar */}
                    <motion.rect
                        x={14 + (index * 12)}
                        y={64 - pillar.height}
                        width="8"
                        height={pillar.height}
                        className={pillar.color}
                        fill="currentColor"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.7, delay: index * 0.15 }}
                        style={{ transformOrigin: 'bottom' }}
                        rx="1"
                    />

                    {/* Pillar top highlight */}
                    <motion.rect
                        x={14 + (index * 12)}
                        y={64 - pillar.height}
                        width="8"
                        height="2"
                        className="text-white opacity-30"
                        fill="currentColor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.5 + (index * 0.15) }}
                        rx="1"
                    />
                </g>
            ))}

            {/* Base platform */}
            <motion.rect
                x="10"
                y="62"
                width="44"
                height="2"
                className="text-blue-700"
                fill="currentColor"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: 'center' }}
                rx="1"
            />

            {/* Decorative lines */}
            {[0, 1, 2].map((index) => (
                <motion.line
                    key={index}
                    x1="12"
                    y1={54 - (index * 8)}
                    x2="52"
                    y2={54 - (index * 8)}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-300"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                />
            ))}
        </motion.svg>
    );
};
