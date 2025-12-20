"use client";

import Link from "next/link";
import { cn } from "../../../lib/utils";
import FlowingMenu from "./FlowingMenu";

interface FooterProps {
  brandName?: string;
  className?: string;
}

export const Footer = ({
  brandName = "Bala",
  className,
}: FooterProps) => {
  const socialItems = [
    {
      link: "https://twitter.com/",
      text: "Twitter",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "https://linkedin.com/",
      text: "LinkedIn",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "https://github.com/",
      text: "GitHub",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "mailto:example@gmail.com",
      text: "Email",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t bg-foreground mt-20 relative pb-36">


        {/* FLOWING SOCIAL MENU */}
        <div className="w-full h-[500px] mt-10">
          <FlowingMenu items={socialItems} />
        </div>

<div
  className="absolute left-1/2 -translate-x-1/2 bottom--3
             font-extrabold pointer-events-none select-none
             bg-gradient-to-b from-white/40 via-white/20 to-transparent
             bg-clip-text text-transparent
             inline-block
             px-4 py-4
             leading-none text-center"
  style={{
    fontSize: "clamp(4rem, 12vw, 100rem)",
  }}
>
  {brandName.toUpperCase()}
</div>
        
      </footer>
    </section>
  );
};
