"use client";

import Link from "next/link";
import StickerPeel from '../../components/ui/StickerPeel'
import { Navbar } from "../../components/ui/mini-navbar"
import { useState } from 'react';

export default function JtTechPage() {
  const [stuck, setStuck] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <Navbar />

      <div className="w-full max-w-5xl mt-12">
        <div className="flex gap-8 items-start">
          {/* Left box */}
          <div id="jt-stick-box" className={`w-80 p-6 rounded-2xl border border-border bg-muted/40 transition-all duration-300 ${stuck ? 'shadow-md bg-accent/10 border-accent' : ''}`}>
            <h4 className="font-semibold mb-2">Hover on the image and stick here to reveal text</h4>
            <p className={`text-sm mt-4 transition-opacity duration-300 ${stuck ? 'opacity-100' : 'opacity-0'}`}>
              This text is revealed after you stick the image here. The sticker will snap into place and show this content.
            </p>
          </div>

          {/* Sticker area (parent bounds includes the box) */}
          <div className="flex-1 relative p-6 rounded-2xl border border-border bg-card">
            <div className="relative h-96">
              <StickerPeel
                imageSrc="/images/Jt_Tech.jpg"
                peelDirection={0}
                width={400}
                rotate={0}
                peelBackHoverPct={20}
                peelBackActivePct={40}
                shadowIntensity={0.6}
                lightingIntensity={0.1}
                initialPosition={{ x: 20, y: 20 }}
                stickSelector="#jt-stick-box"
                onStickChange={(s) => setStuck(s)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}