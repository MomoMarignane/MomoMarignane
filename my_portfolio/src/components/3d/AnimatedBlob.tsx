import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface AnimatedBlobProps {
  position: [number, number, number];
  color: string;
  speed?: number;
  intensity?: number;
}

export default function AnimatedBlob({ 
  position, 
  color, 
  speed = 1, 
  intensity = 1 
}: AnimatedBlobProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hover, setHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.1 * intensity;
    mesh.current.rotation.y = t * 0.05;
    mesh.current.rotation.z = t * 0.05;
    mesh.current.scale.set(
      1 + Math.sin(t * 0.3) * 0.1,
      1 + Math.sin(t * 0.2) * 0.1,
      1 + Math.sin(t * 0.3) * 0.1
    );
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[0.8, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        envMapIntensity={0.4}
        clearcoat={0.8}
        clearcoatRoughness={0}
        metalness={0.2}
        distort={hover ? 0.6 : 0.3}
        speed={hover ? 5 : 2}
      />
    </mesh>
  );
}
