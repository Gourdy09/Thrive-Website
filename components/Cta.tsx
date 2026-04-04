"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BRAND } from "../public/data";
import ContactModal from "./ContactModal";

export default function Cta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <section className="bg-transparent py-28 px-6 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] p-16 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#f5c800]/8 blur-[100px] rounded-full" />
            </div>
            <p className="relative text-white/30 text-[11px] tracking-widest uppercase mb-4">Join the waitlist</p>
            <h2 className="relative text-5xl md:text-6xl font-black text-white leading-tight mb-4">
              Innovate with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                {BRAND.name}.
              </span>
            </h2>
            <p className="relative text-white/40 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              Be among the first to experience noninvasive, AI-driven glucose monitoring. Early access is limited.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/20 outline-none focus:border-[#f5c800]/40 transition-colors"
              />
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#f5c800] text-black font-bold px-7 py-3.5 rounded-xl hover:brightness-110 hover:scale-105 transition-all text-sm whitespace-nowrap flex items-center gap-2 justify-center"
              >
                Get Access <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}