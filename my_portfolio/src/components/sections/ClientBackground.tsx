// ClientBackground.tsx
'use client';

import dynamic from 'next/dynamic';
import { MotionValue } from 'framer-motion';
import { MutableRefObject } from 'react';

// Importer dynamiquement le composant Background3D avec l'option ssr: false
const Background3D = dynamic(() => import('./Background3D'), {
  ssr: false,
});

interface ClientBackgroundProps {
  backgroundOpacity: MotionValue<number>;
  mousePosition: MutableRefObject<{ x: number; y: number } | null>;
}

export default function ClientBackground({ backgroundOpacity, mousePosition }: ClientBackgroundProps) {
  return <Background3D backgroundOpacity={backgroundOpacity} mousePosition={mousePosition} />;
}
