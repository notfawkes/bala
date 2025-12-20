"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Props = {
  onFreeze: () => void;
};

export default function Preloader({ onFreeze }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime < 0.08) {
        video.pause();       // freeze last frame
        setFadeOut(true);    // trigger fade
        onFreeze();          // notify parent
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onFreeze]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <video
        ref={videoRef}
        src="/videos/loader.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
