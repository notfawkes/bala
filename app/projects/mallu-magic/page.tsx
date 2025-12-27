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

export default function MalluMagicPage() {
  return (
    <main className="page">
      <h1 className="title">Mallu Magic</h1>

      <div className="font-size-2xl">
        <h1>My Work: </h1>
      </div>

        <section className="iframeWrapper">
        <Link href="https://ims-frontend-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="iframeLink">
        <iframe
          src="https://ims-frontend-nu.vercel.app/"
          title="Mallu Magic Frame"
          loading="lazy"
        />=
        </Link>
      </section>

        <section className="parent">
        <div className="left matte-card cutout-card">
          Left Grid Content
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
