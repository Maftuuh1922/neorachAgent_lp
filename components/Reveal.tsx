"use client";

import { useEffect } from "react";

/** Fades in every [data-reveal] element once 20% of it is visible (600ms, translateY 20px → 0). */
export default function Reveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const timers: number[] = [];
    const show = (el: HTMLElement) => {
      if (el.classList.contains("is-visible")) return;
      el.classList.add("is-visible");
      io.unobserve(el);
      // Once the 600ms fade finishes, hand transitions back to the element's own hover timing.
      timers.push(window.setTimeout(() => el.classList.add("is-settled"), 650));
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        }
      },
      { threshold: 0.2 },
    );
    // Fallback for environments where IntersectionObserver doesn't fire reliably
    // (odd webviews, headless renderers): reveal anything already in/near the viewport.
    const revealInView = () => {
      const margin = window.innerHeight * 0.2;
      for (const el of items) {
        if (el.classList.contains("is-visible")) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + margin && r.bottom > -margin) show(el);
      }
    };
    items.forEach((el) => io.observe(el));
    revealInView();
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        revealInView();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);
  return null;
}
