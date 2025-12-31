"use client";

import { Center } from "@react-three/drei";
import Link from "next/link";

const images = [
  "/images/ACM-App.png",
  "/images/ACM-Web.png",
  "/images/TCET.jpeg",
  "/images/hero.jpg",
  "/images/Jt_Tech.jpg",
];

export default function ACMWebPage() {
  return (
    <main className="page">
      <h1 className="title">ACM Website</h1>

      <div className="font-size-2xl">
        <h1>My Work: </h1>
      </div>

        <section className="iframeWrapper">
        <Link href="https://acm-sigai.vercel.app/" target="_blank" rel="noopener noreferrer" className="iframeLink">
        <iframe
          src="https://acm-sigai.vercel.app/"
          title="ACM Website Frame"
          loading="lazy"
        />=
        </Link>
      </section>

        <section className="parent">
<div className="left matte-card cutout-card">
<div className="flex flex-col justify-center space-y-8 font-serif">
  {/* Section Heading */}
  <div className="text-foreground dark:text-foreground text-2xl md:text-4xl font-bold max-w-3xl">
    ACM Website
  </div>

  {/* Project Description */}
  <div className="text-foreground/100-500 dark:text-foreground/100-400 text-lg md:text-2xl max-w-5xl space-y-4">
    <p>
I developed the official TCET ACM SIGAI Website, a dynamic platform designed to centralize the chapter's professional events, technical insights, and community innovations. Moving beyond a static architecture, I engineered a data-driven system that utilizes real-time database integration to automate content delivery. This ensures that all event schedules and technical blogs are updated instantaneously, providing a seamless and accurate experience for a high-traffic community of AI enthusiasts.
    </p>
    <p>
The project focuses on scalability and professional utility, offering a centralized hub for both upcoming initiatives and historical archives. By optimizing the user interface for technical information and community engagement, I established a robust digital touchpoint that streamlines communication between students, faculty, and industry professionals. This platform not only showcases the team's innovations but also serves as a reliable resource for fostering AI-driven collaboration.
    </p>
    <p>
      <strong>Tech Stack:</strong> Next JS, Node.js(Serverless), MongoDB, Vercel
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
