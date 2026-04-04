"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PRICING } from "../../public/data";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import ContactModal from "../../components/ContactModal";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar />
      <main className="min-h-screen bg-transparent">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center" style={{ animation: "pageIn 0.6s ease both" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">Plans & Pricing</p>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-6">
              Simple,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                Transparent
              </span>{" "}
              Pricing
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Start free. Upgrade as you need. No hidden fees, no long-term contracts.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {PRICING.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                    plan.highlighted
                      ? "border-[#f5c800]/40 bg-[#f5c800]/5"
                      : "border-white/8 bg-white/[0.02]"
                  }`}
                  style={{ animation: `fadeUp 0.6s ${i * 0.1}s ease both` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f5c800] text-black text-xs font-black">
                        <Zap size={10} className="fill-black" /> Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3">{plan.name}</p>
                    <div className="flex items-end gap-1 mb-2">
                      <span className="text-5xl font-black text-white">${plan.price}</span>
                      <span className="text-white/40 text-sm mb-2">{plan.period}</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? "bg-[#f5c800]/20 border border-[#f5c800]/40" : "bg-white/8 border border-white/15"}`}>
                          <Check size={9} className={plan.highlighted ? "text-[#f5c800]" : "text-white/50"} />
                        </div>
                        <span className="text-white/60 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setModalOpen(true)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] ${
                      plan.highlighted
                        ? "bg-[#f5c800] text-black hover:brightness-110"
                        : "border border-white/12 text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {plan.cta} <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 border-t border-white/5 mt-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-8 text-center">Common Questions</p>
            <div className="space-y-4">
              {[
                { q: "Does the price include the sensor hardware?", a: "During beta, sensors are provided free to testers. Post-launch, sensor hardware will be available as a one-time purchase or monthly replacement subscription." },
                { q: "Can I cancel any time?", a: "Yes. There are no lock-in contracts. Cancel your subscription any time from the app with no penalties." },
                { q: "What does the free tier include?", a: "The free tier gives you real-time glucose readings, basic trend charts, and full iOS/Android app access. It's perfect for getting started." },
                { q: "Is there a student or healthcare discount?", a: "We're working on discount programs for students and healthcare providers. Reach out via contact for early access." },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-white font-semibold text-sm list-none">
                    {item.q}
                    <span className="text-[#f5c800] text-lg group-open:rotate-45 transition-transform duration-200 ml-4 shrink-0">+</span>
                  </summary>
                  <p className="text-white/45 text-sm leading-relaxed mt-4">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}