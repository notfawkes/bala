"use client";

import { Center } from "@react-three/drei";
import Link from "next/link";

const images = [
  "/images/Delhigrubs/1.png",
  "/images/Delhigrubs/2.png",
  "/images/Delhigrubs/3.png",
  "/images/Delhigrubs/4.png",
  "/images/Delhigrubs/5.png",
];

export default function DelhigrubsPage() {
  return (
    <main className="page">
      <h1 className="title">Delhigrubs</h1>

      <div className="font-size-2xl">
        <h1>My Work: </h1>
      </div>

        <section className="iframeWrapper">
        <Link href="https://fit-meat.vercel.app/" target="_blank" rel="noopener noreferrer" className="iframeLink">
        <iframe
          src="https://fit-meat.vercel.app/"
          title="Delhigrubs Frame"
          loading="lazy"
        />=
        </Link>
      </section>

        <section className="parent">
<div className="left matte-card cutout-card">
<div className="flex flex-col justify-center space-y-8 font-serif">
  {/* Section Heading */}
  <div className="text-foreground dark:text-foreground text-2xl md:text-4xl font-bold max-w-3xl">
    Delhigrubs - Online Food Delivery Platform
  </div>

  {/* Project Description */}
  <div className="text-foreground/100-500 dark:text-foreground/100-400 text-lg md:text-2xl max-w-5xl space-y-4">
    <p>
      This project is a online food delivery platform designed to optimize food delivering and for a providing a better nutrition value for gym freaks. It ensures real-time visibility of food availabilities
      across multiple hotel branches, reducing manual errors and improving operational efficiency.
    </p>
    <p>
      The system implements account creation, search facilities, Add to cart option and checkout option too. It also provides order history reports to help management.
    </p>
    <p>
      <strong>Tech Stack:</strong> React JS, Node.js(Serverless), Supabase, Vercel
    </p>
  </div>
</div>

</div>
        <div className="right marquee-container">
          <div className="marquee">
            {[...images, ...images].map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
