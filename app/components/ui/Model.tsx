"use client"

import * as React from "react"
import { useGLTF } from "@react-three/drei"

type ModelProps = React.JSX.IntrinsicElements["group"]

export function Model(props: ModelProps) {
  const { scene } = useGLTF("/models/model.glb")
  return <primitive object={scene} {...props} />
}

useGLTF.preload("/models/model.glb")
