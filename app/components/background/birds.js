"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaBirds() {
  const ref = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const BIRDS = (await import("vanta/dist/vanta.birds.min")).default;

      if (!mounted || !ref.current) return;

      vantaEffect.current = BIRDS({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0xebd6ab,
        color1: 0x1b201a,
        color2: 0x617f41,
        wingSpan: 40,
        speedLimit: 7,
      });
    })();

    return () => {
      mounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 -z-10" />;
}
