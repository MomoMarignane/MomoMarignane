import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingTextProps {
  text: string;
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
  fontSize?: number;
}

export default function FloatingText({
  text,
  position,
  rotation,
  color = "#ffffff",
  fontSize = 0.5,
}: FloatingTextProps) {
  const ref = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.1;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.2) * 0.02;
  });

  return (
    <group>
      <Text
        ref={ref}
        position={position}
        rotation={rotation}
        color={color}
        fontSize={fontSize}
        font="/fonts/SpaceMono-Regular.ttf"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        glyphGeometryDetail={32}
      >
        {text}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2 : 0.5}
          toneMapped={false}
        />
      </Text>

      {/* Glow effect */}
      <mesh position={position}>
        <sphereGeometry args={[fontSize * 2, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
