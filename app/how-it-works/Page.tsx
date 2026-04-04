import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { HOW_IT_WORKS, BRAND } from "../../lib/data";
import { ArrowRight, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Thrive's noninvasive glucose monitoring works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center" style={{ animation: "pageIn 0.6s ease both" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">The Process</p>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-6">
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                Thrive
              </span>{" "}
              Works
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Three simple steps from sensor to insight. No needles, no lab visits — just continuous, intelligent glucose monitoring.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {HOW_IT_WORKS.map((step, i) => (
                <div
                  key={step.step}
                  className="group relative rounded-3xl border border-white/8 bg-white/[0.02] p-8 md:p-12 hover:border-[#f5c800]/25 hover:bg-[#f5c800]/[0.02] transition-all duration-300"
                  style={{ animation: `fadeUp 0.6s ${i * 0.12}s ease both` }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Step number */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-[#f5c800]/10 border border-[#f5c800]/20 flex items-center justify-center">
                        <span className="text-[#f5c800] font-black text-2xl">{step.step}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="text-2xl font-black text-white group-hover:text-[#f5c800] transition-colors">
                          {step.title}
                        </h2>
                        <div className="shrink-0 px-3 py-1 rounded-full bg-[#f5c800]/10 border border-[#f5c800]/20">
                          <span className="text-[#f5c800] text-xs font-bold">{step.stat}</span>
                        </div>
                      </div>
                      <p className="text-white/60 leading-relaxed mb-4">{step.body}</p>
                      <p className="text-white/35 text-sm leading-relaxed border-l-2 border-[#f5c800]/30 pl-4">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Connector */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:flex absolute -bottom-4 left-[3.5rem] w-0.5 h-8 bg-gradient-to-b from-[#f5c800]/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology callout */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Sensor Technology", value: "PPG + ML", desc: "Multi-wavelength light sensors read through the skin, combined with our trained model." },
                { label: "Battery Life", value: "14 Days", desc: "One charge lasts two full weeks. Recharge in <1 hour." },
                { label: "Data Security", value: "HIPAA Compliant", desc: "All data encrypted in transit and at rest or never leaves your phone. Your health data is yours alone." },
              ].map((item) => (
                <div key={item.label} className="p-6 rounded-3xl border border-white/8 bg-white/[0.02]">
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{item.label}</p>
                  <p className="text-2xl font-black text-white mb-3">{item.value}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-black text-white mb-4">Ready to try it?</h3>
            <p className="text-white/40 mb-8">Join our beta and be among the first 100 users to experience Thrive.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/pricing" className="bg-[#f5c800] text-black font-bold px-8 py-4 rounded-2xl hover:brightness-110 hover:scale-105 transition-all text-sm flex items-center gap-2">
                See Pricing <ArrowRight size={14} />
              </Link>
              <Link href="/accuracy" className="border border-white/12 text-white/70 font-medium px-8 py-4 rounded-2xl hover:bg-white/5 hover:text-white transition-all text-sm flex items-center gap-2">
                <Activity size={14} /> View Accuracy Data
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}