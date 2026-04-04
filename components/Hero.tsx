"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { HERO } from "../lib/data";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090b] px-6 text-center pt-24">
      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

      {/* Parallax glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
      >
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#f5c800]/8 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#f5c800]/5 blur-[100px]" />
      </div>

      {/* Badge */}
      <div
        className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5c800]/20 bg-[#f5c800]/5 text-[#f5c800] text-xs tracking-widest uppercase"
        style={{ animation: "fadeUp 0.8s ease both" }}
      >
        <Zap size={11} className="fill-[#f5c800]" />
        {HERO.badge}
      </div>

      {/* Headline */}
      <h1
        className="relative text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.88] tracking-tight text-white max-w-5xl"
        style={{ animation: "fadeUp 0.9s 0.08s ease both" }}
      >
        {HERO.headline[0]}
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] via-yellow-300 to-[#f5c800]">
          {HERO.headline[1]}
        </span>
        <br />
        {HERO.headline[2]}
      </h1>

      {/* Sub */}
      <p
        className="relative mt-8 text-white/50 text-lg max-w-xl leading-relaxed"
        style={{ animation: "fadeUp 1s 0.18s ease both" }}
      >
        {HERO.subtext}
      </p>

      {/* CTAs */}
      <div
        className="relative mt-10 flex gap-4 flex-wrap justify-center"
        style={{ animation: "fadeUp 1s 0.3s ease both" }}
      >
        <Link
          href={HERO.cta_primary.href}
          className="bg-[#f5c800] text-black font-bold px-8 py-4 rounded-2xl hover:brightness-110 hover:scale-105 transition-all duration-200 text-sm tracking-wide flex items-center gap-2"
        >
          {HERO.cta_primary.label}
          <ArrowRight size={15} />
        </Link>
        <Link
          href={HERO.cta_secondary.href}
          className="border border-white/12 text-white/70 font-medium px-8 py-4 rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-200 text-sm"
        >
          {HERO.cta_secondary.label}
        </Link>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
        style={{ animation: "fadeUp 1s 0.5s ease both" }}
      >
        <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}