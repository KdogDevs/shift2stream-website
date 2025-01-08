// src/components/AnimatedWave.tsx
import React from 'react';
import { cn } from "../lib/utils";

export const AnimatedWave: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="relative w-full">
      <div 
        className={cn(
          "relative",
          className
        )}
      >
        <div
          className="pointer-events-none before:absolute before:inset-0 before:w-full before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:200%_200%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine"
          style={{
            "--border-width": "4px", // Increased border width
            "--duration": "10s", // Slightly faster animation
            "--mask-linear-gradient": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            "--background-radial-gradient": "radial-gradient(circle at center, transparent, transparent, #3B82F6, #9333EA, #EC4899, #3B82F6, transparent, transparent)", // Enhanced gradient
          } as React.CSSProperties}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            className="text-white w-full"
          >
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
