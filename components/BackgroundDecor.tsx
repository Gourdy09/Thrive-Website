"use client";
import { useEffect, useRef } from "react";

export default function BackgroundDecor() {
  const parallax1 = useRef<HTMLDivElement>(null);
  const parallax2 = useRef<HTMLDivElement>(null);
  const parallax3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (parallax1.current)
          parallax1.current.style.transform = `translateY(${y * 0.15}px)`;
        if (parallax2.current)
          parallax2.current.style.transform = `translateY(${y * -0.1}px)`;
        if (parallax3.current)
          parallax3.current.style.transform = `translateY(${y * 0.08}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-bg opacity-40" />

      {/* Large ambient orbs */}
      <div ref={parallax1} className="absolute inset-0 will-change-transform">
        <div className="orb-float-1 absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#f5c800]/5 blur-[160px]" />
      </div>
      <div ref={parallax2} className="absolute inset-0 will-change-transform">
        <div className="orb-float-2 absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#f5c800]/4 blur-[140px]" />
      </div>
      <div ref={parallax3} className="absolute inset-0 will-change-transform">
        <div className="orb-float-3 absolute bottom-[20%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#f5c800]/3 blur-[120px]" />
      </div>

      {/* Decorative large dots scattered */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="dotgrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5c800" stopOpacity="1" />
            <stop offset="100%" stopColor="#f5c800" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="8%"  cy="15%" r="80"  fill="none" stroke="#f5c800" strokeWidth="1"   opacity="0.3" />
        <circle cx="8%"  cy="15%" r="40"  fill="none" stroke="#f5c800" strokeWidth="0.5" opacity="0.5" />
        <circle cx="92%" cy="25%" r="120" fill="none" stroke="#f5c800" strokeWidth="1"   opacity="0.2" />
        <circle cx="92%" cy="25%" r="60"  fill="none" stroke="#f5c800" strokeWidth="0.5" opacity="0.3" />
        <circle cx="15%" cy="70%" r="60"  fill="none" stroke="#f5c800" strokeWidth="1"   opacity="0.2" />
        <circle cx="85%" cy="65%" r="90"  fill="none" stroke="#f5c800" strokeWidth="0.8" opacity="0.25" />
        <circle cx="50%" cy="90%" r="100" fill="none" stroke="#f5c800" strokeWidth="0.8" opacity="0.15" />
        <circle cx="20%" cy="35%" r="3" fill="#f5c800" opacity="0.4" />
        <circle cx="75%" cy="45%" r="2" fill="#f5c800" opacity="0.3" />
        <circle cx="35%" cy="80%" r="4" fill="#f5c800" opacity="0.2" />
        <circle cx="65%" cy="20%" r="2.5" fill="#f5c800" opacity="0.35" />
        <circle cx="88%" cy="78%" r="3" fill="#f5c800" opacity="0.25" />
        <circle cx="12%" cy="55%" r="2" fill="#f5c800" opacity="0.3" />
        <line x1="92%" y1="48%" x2="92%" y2="52%" stroke="#f5c800" strokeWidth="1" opacity="0.4" />
        <line x1="90%" y1="50%" x2="94%" y2="50%" stroke="#f5c800" strokeWidth="1" opacity="0.4" />
        <line x1="7%"  y1="83%" x2="7%"  y2="87%" stroke="#f5c800" strokeWidth="1" opacity="0.35" />
        <line x1="5%"  y1="85%" x2="9%"  y2="85%" stroke="#f5c800" strokeWidth="1" opacity="0.35" />
        <line x1="55%" y1="13%" x2="55%" y2="17%" stroke="#f5c800" strokeWidth="1" opacity="0.3" />
        <line x1="53%" y1="15%" x2="57%" y2="15%" stroke="#f5c800" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
}