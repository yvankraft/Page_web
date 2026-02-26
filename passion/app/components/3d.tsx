"use client";
import { useGLTF } from "@react-three/drei";

export function van() {
  const { scene } = useGLTF("/3d/Van/scene.gltf");
  return <primitive object={scene} />;
}
