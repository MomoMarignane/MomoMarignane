'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x - 8}px`;
        cursorRef.current.style.top = `${y - 8}px`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${x - 16}px`;
        trailRef.current.style.top = `${y - 16}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${x - 24}px`;
        glowRef.current.style.top = `${y - 24}px`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for hover detection with throttling
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Throttle mouse movement for better performance
    let animationId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      animationId = requestAnimationFrame(() => updateMousePosition(e));
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-100 ${
          isHovering ? 'scale-150' : ''
        }`}
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Trailing cursor */}
      <div
        ref={trailRef}
        className="fixed w-8 h-8 border-2 border-cyan-400/30 rounded-full pointer-events-none z-[9998] transition-all duration-200"
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="fixed w-12 h-12 bg-cyan-400/5 rounded-full pointer-events-none z-[9997] blur-md transition-all duration-300"
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
    </>
  );
}
