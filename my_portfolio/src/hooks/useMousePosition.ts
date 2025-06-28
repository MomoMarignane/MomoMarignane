import { useRef, useEffect } from 'react';

export default function useMousePosition() {
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  
  useEffect(() => {
    // Vérifier que window est défini (côté client seulement)
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return mousePosition;
}
