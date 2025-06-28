import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

interface FloatingParticlesProps {
  count?: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number } | null>;
}

export default function FloatingParticles({ 
  count = 1200, // Bon compromis entre performance et esthétique
  mousePosition 
}: FloatingParticlesProps) {
  const mesh = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  
  // Create shader material for better performance and visual effects
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        size: { value: 100 }
      },
      vertexShader: `
        uniform float time;
        uniform float pixelRatio;
        uniform float size;
        
        attribute float scale;
        attribute vec3 color;
        
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          vColor = color;
          vScale = scale;
          
          vec3 pos = position;
          
          // Add floating motion
          pos.y += sin(time * 0.5 + position.x * 0.5) * 0.3;
          pos.x += cos(time * 0.3 + position.z * 0.8) * 0.2;
          pos.z += sin(time * 0.4 + position.y * 0.6) * 0.25;
          
          // Add spiral motion
          float angle = time * 0.2 + length(position.xz) * 0.1;
          pos.x += cos(angle) * 0.1;
          pos.z += sin(angle) * 0.1;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
          gl_PointSize = size * pixelRatio * scale * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vScale;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          
          // Create a glowing effect
          strength = pow(strength, 2.0);
          
          // Add pulsing effect
          float pulse = sin(length(vColor) * 10.0) * 0.1 + 0.9;
          
          vec3 finalColor = vColor * pulse;
          float alpha = strength * vScale * 0.8;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });
  }, []);

  // Generate particles data
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color("#00ffff"), // Cyan
      new THREE.Color("#ff00aa"), // Pink
      new THREE.Color("#00ffaa"), // Green-cyan
      new THREE.Color("#aa00ff"), // Purple
      new THREE.Color("#ffaa00"), // Orange
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Create clusters of particles
      const cluster = Math.floor(Math.random() * 5);
      const clusterOffset = {
        x: (cluster - 2) * 2,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 4
      };
      
      positions[i3] = (Math.random() - 0.5) * 12 + clusterOffset.x;
      positions[i3 + 1] = (Math.random() - 0.5) * 12 + clusterOffset.y;
      positions[i3 + 2] = (Math.random() - 0.5) * 6 + clusterOffset.z;

      scales[i] = Math.random() * 0.5 + 0.5;

      // Assign colors based on clusters with some variation
      const baseColor = colorPalette[cluster];
      const colorVariation = 0.3;
      colors[i3] = Math.min(1, baseColor.r + (Math.random() - 0.5) * colorVariation);
      colors[i3 + 1] = Math.min(1, baseColor.g + (Math.random() - 0.5) * colorVariation);
      colors[i3 + 2] = Math.min(1, baseColor.b + (Math.random() - 0.5) * colorVariation);

      // Initial velocities for organic movement
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    return { positions, scales, colors, velocities };
  }, [count]);

  useEffect(() => {
    if (!mesh.current) return;

    const geometry = mesh.current.geometry;
    geometry.setAttribute("position", new THREE.BufferAttribute(particlesData.positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(particlesData.scales, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(particlesData.colors, 3));
    
    mesh.current.material = shaderMaterial;
  }, [particlesData, shaderMaterial]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (mesh.current && mesh.current.material) {
      // Update shader uniforms
      (mesh.current.material as THREE.ShaderMaterial).uniforms.time.value = time;

      // Smooth rotation
      mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      mesh.current.rotation.y = time * 0.05;

      // Mouse interaction with smooth interpolation
      if (mousePosition.current) {
        const targetX = (mousePosition.current.x * viewport.width) / 100;
        const targetY = -(mousePosition.current.y * viewport.height) / 100;
        
        mesh.current.position.x += (targetX - mesh.current.position.x) * 0.02;
        mesh.current.position.y += (targetY - mesh.current.position.y) * 0.02;
      }
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry />
    </points>
  );
}
