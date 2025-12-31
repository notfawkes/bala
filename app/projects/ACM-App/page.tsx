"use client";

import Link from "next/link";

const images = [
  "/images/ACM-App.png",
  "/images/ACM-App.png",
  "/images/ACM-App.png",
  "/images/ACM-App.png",
  "/images/ACM-App.png",
];

export default function MalluMagicPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "7rem", fontWeight: 600 }}>
        ACM App
      </h1>

      {/* MAIN ROW */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: "1.5rem",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            height: "100vh",
            borderRadius: "16px",
            overflow: "hidden",
            background: "rgb(13,74,2)",
          }}
        >
          <Link
            href="https://sigai-documentation.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              src="https://sigai-qr-app.vercel.app/"
              title="QR App"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </Link>
        </div>

        {/* RIGHT: TEXT + MARQUEE (COLUMN) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            height: "100%",
          }}
        >
          {/* TEXT CARD */}
          <div
            style={{
              background: "rgb(98,129,65)",
              borderRadius: "18px",
              padding: "2rem",
            }}
          >
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, fontFamily: 'serif' }}>
              ACM App
            </h2>

            <div style={{ fontSize: "1.4rem", lineHeight: 1.6, marginTop: "1rem" , fontFamily: 'serif'}}>
              <p>
                This app makes registering and marking attendance effortless.
              </p>
              <p>
                It keeps everything organized, gives real-time updates.
              </p>
              <p>
                It uses QR codes for quick check-ins at events, making attendance smooth and efficient.
              </p>
              <p>
                <strong>Tech Stack:</strong> Flutter, Node.js, MongoDB,
                Vercel
              </p>
            </div>
          </div>

          {/* MARQUEE */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "18px",
              padding: "1rem",
              flex: 1,
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "16px",
                width: "max-content",
                animation: "marqueeX 22s linear infinite",
              }}
            >
              {[...images, ...images].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    height: "100%",
                    maxHeight: "220px",
                    width: "auto",
                    borderRadius: "14px",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scoped animation */}
      <style jsx>{`
        @keyframes marqueeX {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
