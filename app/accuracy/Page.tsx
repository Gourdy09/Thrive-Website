import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ACCURACY } from "../../lib/data";
import { TrendingDown, Users, FlaskConical, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accuracy",
  description: "Thrive's clinical accuracy data and testing results.",
};

export default function AccuracyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center" style={{ animation: "pageIn 0.6s ease both" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">Clinical Data</p>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-6">
              Built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                Real Data
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
              {ACCURACY.subtext}
            </p>
          </div>
        </section>

        {/* Big MARD stat */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] p-12 md:p-16 text-center mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5c800]/5 to-transparent pointer-events-none" />
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Current MARD</p>
              <div className="text-[8rem] md:text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#f5c800] to-[#c49d00] mb-4">
                {ACCURACY.mard}%
              </div>
              <p className="text-white/50 text-base max-w-lg mx-auto">
                Mean Absolute Relative Difference vs. fingerprick — and we&apos;re actively bringing this down to the 9% CGM industry standard.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5c800]/25 bg-[#f5c800]/8 text-[#f5c800] text-sm font-semibold">
                <TrendingDown size={14} />
                Improving with every beta cohort
              </div>
            </div>

            {/* Stats row */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <FlaskConical size={20} className="text-[#f5c800]" />, value: `${ACCURACY.studies}`, label: "Clinical Study", sub: "Ongoing beta study" },
                { icon: <Users size={20} className="text-[#f5c800]" />, value: `${ACCURACY.participants}+`, label: "Beta Participants", sub: "Active testers" },
                { icon: <ShieldCheck size={20} className="text-[#f5c800]" />, value: "Noninvasive", label: "Zero Finger Pricks", sub: "100% needle-free" },
              ].map((s) => (
                <div key={s.label} className="p-8 rounded-3xl border border-white/8 bg-white/[0.02] flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f5c800]/10 border border-[#f5c800]/15 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">{s.value}</p>
                    <p className="text-white/70 font-semibold text-sm">{s.label}</p>
                    <p className="text-white/30 text-xs mt-0.5">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics breakdown */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-8 text-center">Technical Metrics</p>
            <div className="space-y-4">
              {ACCURACY.metrics.map((m) => (
                <div key={m.label} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-white/8 bg-white/[0.02] gap-3">
                  <div>
                    <p className="text-white font-semibold">{m.label}</p>
                    {m.note && <p className="text-white/35 text-sm mt-1">{m.note}</p>}
                  </div>
                  <div className="px-5 py-2 rounded-xl bg-[#f5c800]/10 border border-[#f5c800]/20 shrink-0">
                    <span className="text-[#f5c800] font-black text-lg">{m.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer & CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] mb-10">
              <p className="text-white/25 text-xs leading-relaxed">
                <strong className="text-white/40">Disclaimer:</strong> Thrive is currently in beta testing and is not FDA-cleared. The device is not intended to replace medical-grade CGM devices or clinical blood glucose monitoring for medical decisions. Always consult your healthcare provider. Accuracy data reflects internal testing with a limited cohort and may not represent final product performance.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-black text-white mb-4">Help us improve</h3>
              <p className="text-white/40 mb-8 text-sm">Join the beta and contribute to our accuracy research. Participants get free access.</p>
              <Link href="/contact" className="bg-[#f5c800] text-black font-bold px-8 py-4 rounded-2xl hover:brightness-110 hover:scale-105 transition-all text-sm inline-flex items-center gap-2">
                Apply for Beta <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}