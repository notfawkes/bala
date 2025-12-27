"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Model } from "./Model"

export default function ModelViewer() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 50 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Model scale={1.2} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
      />

      <Environment preset="studio" />
    </Canvas>
  )
}
