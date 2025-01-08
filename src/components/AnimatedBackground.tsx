// src/components/AnimatedBackground.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import * as THREE from 'three';

interface AnimatedBackgroundProps {
  color: string;
  intensity?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  color, 
  intensity = 0.5 
}) => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars color={color} intensity={intensity} />
      </Canvas>
    </div>
  );
};

function Stars({ color, intensity }: { color: string; intensity: number }) {
  const ref = useRef<THREE.Points>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={color}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={intensity}
        />
      </Points>
    </group>
  );
}
