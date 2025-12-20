import Preloader from "./components/Preloader";
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
  title: "Bala Sudalaimuthu"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothCursor />
      <ScrollToHash />
      <html lang="en" className={myFont.variable}>
        <body suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </>
  );
}
