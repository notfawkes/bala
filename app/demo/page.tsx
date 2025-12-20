"use client";

import { Navbar } from "../components/ui/mini-navbar";
import { LogoLoop } from "../components/ui/LogoLoop";
import AnimatedContent from "../components/AnimatedContent";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function Page() {

  // Reference for fade transition between sections
  const secondSectionRef = useRef(null);
  const secondSectionInView = useInView(secondSectionRef, {
    margin: "-200px 0px -200px 0px",
  });

  return (
    <div className="relative w-full overflow-x-hidden">

      {/* SECTION 1 (Your existing hero section) */}
      <motion.section
        initial={{ opacity: 1 }}
        animate={{ opacity: secondSectionInView ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative min-h-screen bg-[#0a0a0a] text-white"
      >

        {/* Background */}
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="/images/hero.jpg" />
        </div>

        {/* Animated Navbar */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <Navbar />
        </AnimatedContent>

        {/* Animated Logo Loop */}
        <div className="absolute bottom-0 left-0 w-full z-10">
            <div style={{ height: "150px", position: "relative", overflow: "hidden" }}>
              <LogoLoop
                logos={techLogos}
                speed={150}
                direction="left"
                logoHeight={60}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#EBD5AB"
              />
            </div>
        </div>
      </motion.section>

      <motion.section
        ref={secondSectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: secondSectionInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="min-h-screen bg-black flex items-center justify-center text-white"
      >
        <h1 className="text-4xl opacity-60">Blank Section</h1>
      </motion.section>

    </div>
  );
}
