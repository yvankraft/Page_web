"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Float } from "@react-three/drei";
import { Suspense } from "react";
import { ReactNode } from "react";
interface SceneProps {
  children: ReactNode;
}

export default function Scene({ children }: SceneProps) {
  return (
    <section className="relative h-150 w-full my-10 border-b">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage
            intensity={0.5}
            environment="city"
            adjustCamera={true}
            shadows={false}
          >
            {/* Float ajoute un petit mouvement de flottement automatique */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              {children}
            </Float>
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} makeDefault />
      </Canvas>
    </section>
  );
}
