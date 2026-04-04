import { PARTNERS } from "../lib/data";

// Duplicate for seamless loop
const doubled = [...PARTNERS, ...PARTNERS];

export default function Partners() {
  return (
    <section className="bg-[#09090b] py-16 border-t border-white/5">
      <p className="text-white/25 text-[11px] tracking-widest uppercase text-center mb-8">
        Trusted by organizations across Houston &amp; beyond
      </p>

      <div className="marquee-container overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {doubled.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-10 shrink-0"
            >
              {/* Logo placeholder — replace img src when you have real logos */}
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#f5c800]/30 hover:bg-[#f5c800]/5 transition-all duration-300 cursor-default group">
                <div className="w-5 h-5 rounded-md bg-[#f5c800]/20 flex items-center justify-center">
                  <span className="text-[#f5c800] text-[10px] font-black">
                    {p.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white/50 text-sm font-semibold whitespace-nowrap group-hover:text-white/80 transition-colors">
                  {p.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}