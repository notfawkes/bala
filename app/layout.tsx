import "./globals.css";
import localFont from "next/font/local";

import { SmoothCursor } from "./components/ui/smooth-cursor";
import ScrollToHash from "./components/ScrollToHash";

const myFont = localFont({
  src: [
    {
      path: "../public/font/tan-nimbus.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myfont",
});

export const metadata = {
  title: "Bala Sudalaimuthu",
  description: "Personal ortfolio",
  openGraph: {
    title: "Bala Portfolio",
    description: "Personal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.variable}>
      <body suppressHydrationWarning className="relative overflow-x-hidden">
        <SmoothCursor />
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
