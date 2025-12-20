"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface HandWrittenTitleProps {
    title?: string;
}

function HandWrittenTitle({
    title = "Hand Written",
}: HandWrittenTitleProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Track scroll progress of this element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"], 
        // "start end" = element just enters viewport
        // "center center" = element centered in viewport
    });

    // Smooth animation with spring
    const pathLength = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
    const opacity = useTransform(pathLength, [0, 1], [0, 1]);

    return (
        <div ref={ref} className="relative w-full max-w-4xl mx-auto py-24">
            <div className="absolute inset-0">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    className="w-full h-full"
                >
                    <title>KokonutUI</title>
                    <motion.path
                        d="M 950 90 
                           C 1250 300, 1100 480, 600 520
                           C 300 520, 150 480, 100 300
                           C 100 150, 400 50, 700 80
                           C 900 80, 950 180, 950 180"
                        fill="none"
                        strokeWidth="12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ pathLength, opacity }}
                        className="text-foreground dark:text-foreground opacity-90"
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.h1
                    className="text-4xl md:text-6xl text-black dark:text-foreground tracking-tighter flex items-center gap-2"
                    style={{ opacity }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-xl text-black/80 dark:text-white/80"
                    style={{ opacity }}
                >
                </motion.p>
            </div>
        </div>
    );
}

export { HandWrittenTitle };
