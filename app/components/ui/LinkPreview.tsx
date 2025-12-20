"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  const src = React.useMemo(() => {
    if (isStatic) return imageSrc;

    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });

    return `https://api.microlink.io/?${params}`;
  }, [isStatic, imageSrc, url, width, height]);

  const [isOpen, setOpen] = React.useState(false);

  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) / 2);
  };

  return (
    <HoverCardPrimitive.Root
      openDelay={50}
      closeDelay={100}
      onOpenChange={setOpen}
    >
      <HoverCardPrimitive.Trigger asChild>
        <Link
          href={url}
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
        >
          {children}
        </Link>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        side="top"
        align="center"
        sideOffset={10}
        className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="shadow-xl rounded-xl"
              style={{ x: translateX }}
            >
              <Link
                href={url}
                className="block p-1 bg-white rounded-xl border hover:border-neutral-200 dark:hover:border-neutral-800"
              >
                <Image
                  src={src}
                  width={width}
                  height={height}
                  quality={quality}
                  className="rounded-lg"
                  alt="preview image"
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
