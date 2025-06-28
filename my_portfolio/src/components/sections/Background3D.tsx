import { Canvas } from "@react-three/fiber";
import { motion, MotionValue } from "framer-motion";
import { Environment } from "@react-three/drei";
import { MutableRefObject } from "react";
import AnimatedBlob from "../3d/AnimatedBlob";
import FloatingParticles from "../3d/FloatingParticles";
import FloatingText from "../3d/FloatingText";

interface Background3DProps {
  backgroundOpacity: MotionValue<number>;
  mousePosition: MutableRefObject<{ x: number; y: number } | null>;
}

export default function Background3D({ backgroundOpacity, mousePosition }: Background3DProps) {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{ opacity: backgroundOpacity }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <fog attach="fog" args={["#000", 5, 20]} />
        <ambientLight intensity={0.5} />
        <FloatingParticles mousePosition={mousePosition} />
        <AnimatedBlob position={[-3, -2, -2]} color="#00aaff" speed={0.7} />
        <AnimatedBlob position={[3, 2, -3]} color="#ff00aa" speed={0.5} />
        <AnimatedBlob position={[0, -3, -1]} color="#00ffaa" speed={0.6} />
        <FloatingText
          text="DEVELOPER"
          position={[-2, 1.5, -2]}
          rotation={[0, 0.5, 0]}
          color="#00ffaa"
          fontSize={0.6}
        />
        <FloatingText
          text="ENGINEERING"
          position={[2, -1, -3]}
          rotation={[0, -0.5, 0]}
          color="#00aaff"
          fontSize={0.6}
        />
        <FloatingText
          text="INNOVATION"
          position={[0, 2, -4]}
          rotation={[0, 0, 0]}
          color="#ff00aa"
          fontSize={0.6}
        />
        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
}
