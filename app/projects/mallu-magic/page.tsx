"use client";

import { Center } from "@react-three/drei";
import Link from "next/link";

const images = [
  "/images/Mallu_Magic/1.png",
  "/images/Mallu_Magic/2.png",
  "/images/Mallu_Magic/3.png",
  "/images/Mallu_Magic/4.png",
  "/images/Mallu_Magic/5.png",
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
<div className="flex flex-col justify-center space-y-8 font-serif">
  {/* Section Heading */}
  <div className="text-foreground dark:text-foreground text-2xl md:text-4xl font-bold max-w-3xl">
    Hotel Inventory Management System
  </div>

  {/* Project Description */}
  <div className="text-foreground/100-500 dark:text-foreground/100-400 text-lg md:text-2xl max-w-5xl space-y-4">
    <p>
      This project is a comprehensive hotel inventory management system designed to optimize stock tracking,
      batch and expiry monitoring, and automate reorder alerts. It ensures real-time visibility of inventory
      across multiple hotel branches, reducing manual errors and improving operational efficiency.
    </p>
    <p>
      The system implements end-to-end PR, PO, GRN, and Issue workflows with role-based approvals and
      audit logs, making it suitable for enterprise-scale operations. It also provides valuation and
      analytics reports to help management make data-driven decisions.
    </p>
    <p>
      Backend APIs are fully serverless, built using Node.js and MongoDB, and deployed on Vercel: {' '}
      <a href="https://ims-backend-pied.vercel.app/docs/" target="_blank" className="font-bold underline">
        View documentation
      </a>.
    </p>
    <p>
      <strong>Tech Stack:</strong> Next JS, Node.js(Serverless), Express, MongoDB, Vercel
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
