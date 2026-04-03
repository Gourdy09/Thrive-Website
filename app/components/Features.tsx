import Link from "next/link";
import { Activity, Brain, Bell, Utensils, ArrowRight } from "lucide-react";
import { FEATURES } from "../../lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Activity: <Activity size={22} className="text-[#f5c800]" />,
  Brain: <Brain size={22} className="text-[#f5c800]" />,
  Bell: <Bell size={22} className="text-[#f5c800]" />,
  Utensils: <Utensils size={22} className="text-[#f5c800]" />,
};

export default function Features() {
  return (
    <section className="bg-[#09090b] py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">What we offer</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Everything you need
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                to thrive daily.
              </span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            Whether you're managing diabetes, optimizing performance, or just curious — Thrive has you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group p-8 rounded-3xl border border-white/8 bg-white/[0.02] hover:border-[#f5c800]/25 hover:bg-[#f5c800]/[0.02] transition-all duration-300 cursor-pointer block"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#f5c800]/10 border border-[#f5c800]/15 flex items-center justify-center mb-5">
                {ICON_MAP[f.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f5c800] transition-colors">
                {f.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
              <div className="mt-5 flex items-center gap-1.5 text-white/25 text-xs font-medium group-hover:text-[#f5c800]/70 transition-colors">
                Learn more <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}