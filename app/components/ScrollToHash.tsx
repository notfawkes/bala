"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const scrollToHash = (hash?: string) => {
      const h = hash ?? window.location.hash;
      if (!h) return;
      const id = h.startsWith("#") ? h.slice(1) : h;
      const el = document.getElementById(id);
      if (!el) return;
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      // delay slightly to allow route transitions to settle
      window.setTimeout(() => {
        window.scrollTo({ top, behavior: "smooth" });
      }, 50);
    };

    // initial scroll (on page load)
    if (typeof window !== "undefined") {
      scrollToHash();
    }

    const onHashChange = () => scrollToHash();

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}
