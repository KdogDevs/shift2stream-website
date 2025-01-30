// src/components/icons/about/PurposeIcon.tsx
import { motion } from 'framer-motion';
export const PurposeIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <motion.circles
        cx="32"
        cy="32"
        r="24"
        stroke="url(#purposeGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M32 8L32 56"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M8 32L56 32"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <defs>
        <linearGradient id="purposeGradient" x1="8" y1="8" x2="56" y2="56">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#10FDC8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// src/components/icons/about/VisionIcon.tsx
export const VisionIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <motion.circle
        cx="32"
        cy="32"
        r="16"
        stroke="url(#visionGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M32 8V16M32 48V56M8 32H16M48 32H56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <defs>
        <linearGradient id="visionGradient" x1="16" y1="16" x2="48" y2="48">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#10FDC8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// src/components/icons/about/MissionIcon.tsx
export const MissionIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <motion.path
        d="M32 8L8 32L32 56L56 32L32 8Z"
        stroke="url(#missionGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <defs>
        <linearGradient id="missionGradient" x1="8" y1="8" x2="56" y2="56">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#10FDC8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// src/components/icons/about/ValuesIcon.tsx
export const ValuesIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      {[0, 1, 2].map((index) => (
        <motion.path
          key={index}
          d="M16 32H48"
          stroke="url(#valuesGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          style={{ transform: `translateY(${(index - 1) * 12}px)` }}
        />
      ))}
      <defs>
        <linearGradient id="valuesGradient" x1="16" y1="32" x2="48" y2="32">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#10FDC8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// src/components/icons/about/BrandPillarsIcon.tsx
export const BrandPillarsIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      {[0, 1, 2, 3].map((index) => (
        <motion.rect
          key={index}
          x={16 + (index * 8)}
          y={48}
          width="6"
          height="24"
          fill="url(#brandGradient)"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ transformOrigin: 'bottom' }}
        />
      ))}
      <defs>
        <linearGradient id="brandGradient" x1="16" y1="24" x2="48" y2="48">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#10FDC8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// src/components/icons/about/CharacterIcon.tsx
export const CharacterIcon: React.FC = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <motion.circle
        cx="32"
        cy="20"
        r="12"
        stroke="url(#characterGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M16 56C16 45.5 23.2 37 32 37C40.8 37 48 45.5 48 56"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <defs>
        <linearGradient id="characterGradient" x1="20" y1="8" x2="44" y2="32">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#10FDC8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
