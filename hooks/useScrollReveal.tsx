"use client";
import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            obs.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return ref;
}