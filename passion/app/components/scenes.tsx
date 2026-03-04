"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Float } from "@react-three/drei";
import { Suspense, ReactNode } from "react";
import { Environment } from "@react-three/drei";

interface SceneProps {
  children: ReactNode;
  fov?: number;
  rotationIntensity?: number; // Un nombre, pas un tableau
  floatIntensity?: number;
  speed?: number;
  position?: [number, number, number]; // [X, Y, Z]
  rotationY?: number;
}

export default function Scene({
  children,
  fov = 45,
  speed = 2,
  position = [0, 0, 0], // Par défaut au centre
  rotationY = 0,
}: SceneProps) {
  return (
    <section className="relative h-150 w-full my-10 border-b">
      <Canvas camera={{ position: [0, 0, 5], fov: fov }}>
        <Suspense fallback={null}>
          <Stage
            intensity={0.5}
            environment="city"
            adjustCamera={true}
            shadows={false}
          >
            {children}
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={true} makeDefault />
      </Canvas>
    </section>
  );
}
