import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { INTEGRATIONS } from "../../public/data";
import { Heart, FileText, Utensils, Plug, ArrowRight, Bell } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect Thrive with your favorite health apps and platforms.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Heart: <Heart size={18} />,
  FileText: <FileText size={18} />,
  Utensils: <Utensils size={18} />,
  Bell: <Bell size={18} />,
};

const COMING_SOON = [
  { name: "Apple Health", cat: "Health Platforms" },
  { name: "Google Fit", cat: "Health Platforms" },
  { name: "Epic EHR", cat: "Clinical & EHR" },
  { name: "Cerner", cat: "Clinical & EHR" },
  { name: "MyFitnessPal", cat: "Fitness & Nutrition" },
  { name: "Cronometer", cat: "Fitness & Nutrition" },
  { name: "Garmin Connect", cat: "Wearables" },
  { name: "Apple Watch", cat: "Wearables" },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center" style={{ animation: "pageIn 0.6s ease both" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">Connect Everything</p>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-6">
              Your Health,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                Connected
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Thrive is built to work alongside your existing health stack. Integrations are actively in development.
            </p>
          </div>
        </section>

        {/* Current state */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-[#f5c800]/20 bg-[#f5c800]/5 p-10 text-center mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5c800]/10 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5c800]/15 border border-[#f5c800]/30 text-[#f5c800] text-xs font-bold mb-4">
                  <Plug size={11} /> Integration Roadmap Active
                </div>
                <h2 className="text-2xl font-black text-white mb-3">Integrations Coming Soon</h2>
                <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
                  We&apos;re actively building connections to the major health platforms, EHR systems, and fitness apps. Sign up to get notified when your favorite integrations go live.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#f5c800] text-black font-bold px-7 py-3 rounded-xl hover:brightness-110 transition-all text-sm">
                  Get Notified <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Planned integrations grid */}
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-6 text-center">Planned Integrations</p>
            <div className="grid md:grid-cols-4 gap-3 mb-12">
              {COMING_SOON.map((item, i) => (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] flex items-center gap-3 group hover:border-[#f5c800]/20 transition-all"
                  style={{ animation: `fadeUp 0.4s ${i * 0.05}s ease both` }}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/30 group-hover:bg-[#f5c800]/10 group-hover:text-[#f5c800] transition-all">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-semibold">{item.name}</p>
                    <p className="text-white/25 text-xs">{item.cat}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Category breakdown */}
            {INTEGRATIONS.map((cat) => (
              <div key={cat.category} className="mb-8">
                <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">{cat.category}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="p-6 rounded-2xl border border-white/8 bg-white/[0.02]">
                      <div className="w-10 h-10 rounded-xl bg-[#f5c800]/10 border border-[#f5c800]/15 flex items-center justify-center text-[#f5c800] mb-4">
                        {ICON_MAP[item.icon] ?? <Plug size={18} />}
                      </div>
                      <p className="text-white font-bold mb-1">{item.name}</p>
                      <p className="text-white/35 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API note */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-black text-white mb-4">Want a Custom Integration?</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              We&apos;re building a developer API. If you&apos;re a healthcare organization or developer interested in integrating Thrive data, get in touch.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/12 text-white/70 font-medium px-8 py-4 rounded-2xl hover:bg-white/5 hover:text-white transition-all text-sm">
              Developer Inquiry <ArrowRight size={13} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}