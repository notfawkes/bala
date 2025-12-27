"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function VantaBirdsCDN() {
  const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  let effect: any;
  let cancelled = false;

  const waitForVanta = () => {
    // @ts-ignore
    if (cancelled) return;

    // @ts-ignore
    if (window.VANTA?.BIRDS && ref.current) {
      // @ts-ignore
      effect = window.VANTA.BIRDS({
        el: ref.current,
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
    } else {
      requestAnimationFrame(waitForVanta);
    }
  };

  waitForVanta();

  return () => {
    cancelled = true;
    effect?.destroy?.();
  };
}, []);


  return (
    <>
      {/* three.js must load FIRST */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />

      {/* vanta birds CDN */}
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="afterInteractive"
      />

      <div ref={ref} className="absolute inset-0 min-h-dvh w-full" />
    </>
  );
}
