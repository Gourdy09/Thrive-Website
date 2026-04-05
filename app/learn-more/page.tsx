import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowRight, Activity, Brain, Zap, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn More",
  description: "Learn how Thrive is reimagining glucose monitoring.",
};

export default function LearnMorePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center" style={{ animation: "pageIn 0.6s ease both" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">The Full Picture</p>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-6">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                Glucose
              </span>{" "}
              Matters
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
              Glucose is one of the most powerful windows into your metabolic health — yet until now, monitoring it meant painful finger pricks or expensive implanted sensors. Thrive changes that.
            </p>
          </div>
        </section>

        {/* The problem */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <p className="text-[#f5c800] text-xs font-bold tracking-widest uppercase mb-4">The Problem</p>
                <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                  Diabetes affects 1 in 10 Americans. Monitoring is painful.
                </h2>
                <p className="text-white/50 leading-relaxed mb-4">
                  Over 38 million Americans have diabetes, and hundreds of millions more are prediabetic or at risk. Managing blood glucose is critical — but existing solutions require needles, implants, or frequent fingerpricks.
                </p>
                <p className="text-white/50 leading-relaxed">
                  Even for non-diabetics, understanding how food, sleep, and exercise affect your glucose can unlock profound improvements in energy, performance, and longevity.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "38M+", label: "Americans with diabetes" },
                  { value: "96M+", label: "Prediabetic Americans" },
                  { value: "$327B", label: "Annual diabetes cost in US" },
                  { value: "4-8x", label: "Daily fingerpricks needed" },
                ].map((s) => (
                  <div key={s.label} className="p-6 rounded-2xl border border-white/8 bg-white/[0.02]">
                    <p className="text-3xl font-black text-[#f5c800]">{s.value}</p>
                    <p className="text-white/40 text-xs mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The solution */}
            <div className="border-t border-white/5 pt-16">
              <p className="text-[#f5c800] text-xs font-bold tracking-widest uppercase mb-4 text-center">The Solution</p>
              <h2 className="text-4xl font-black text-white mb-12 text-center">How Thrive Is Different</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Activity size={20} className="text-[#f5c800]" />,
                    title: "Noninvasive Sensing",
                    body: "We use photoplethysmography (PPG) — the same light-based technology in your Apple Watch's heart rate sensor — combined with machine learning to estimate glucose from optical signals through your skin.",
                  },
                  {
                    icon: <Brain size={20} className="text-[#f5c800]" />,
                    title: "AI That Learns You",
                    body: "Our model adapts to your unique physiology over time. The longer you wear Thrive, the more personalized and accurate your predictions become.",
                  },
                  {
                    icon: <Zap size={20} className="text-[#f5c800]" />,
                    title: "Continuous Monitoring",
                    body: "Get readings every 60 seconds, 24/7. See how your glucose changes in real-time in response to meals, exercise, stress, and sleep.",
                  },
                  {
                    icon: <Shield size={20} className="text-[#f5c800]" />,
                    title: "Privacy First",
                    body: "Your health data is encrypted and never sold. You own it, you control it. HIPAA-compliant architecture from the ground up.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-8 rounded-3xl border border-white/8 bg-white/[0.02] hover:border-[#f5c800]/20 transition-all">
                    <div className="w-11 h-11 rounded-2xl bg-[#f5c800]/10 border border-[#f5c800]/15 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who benefits */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4 text-center">Who Benefits</p>
            <h2 className="text-4xl font-black text-white text-center mb-12">Thrive Is For Everyone</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: "🩺", title: "Diabetics", desc: "Reduce fingerpricks, monitor continuously, and catch dangerous lows or highs before they happen." },
                { emoji: "🏃", title: "Athletes", desc: "Optimize fueling strategy, understand how exercise affects your glucose, and improve recovery." },
                { emoji: "🧠", title: "Biohackers", desc: "Experiment with diet and lifestyle. Understand how every choice impacts your metabolic health." },
              ].map((g) => (
                <div key={g.title} className="p-8 rounded-3xl border border-white/8 bg-white/[0.02] text-center">
                  <div className="text-4xl mb-4">{g.emoji}</div>
                  <h3 className="text-lg font-black text-white mb-3">{g.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-black text-white mb-4">Ready to get started?</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/how-it-works" className="bg-[#f5c800] text-black font-bold px-8 py-4 rounded-2xl hover:brightness-110 hover:scale-105 transition-all text-sm flex items-center gap-2">
                See How It Works <ArrowRight size={14} />
              </Link>
              <Link href="/pricing" className="border border-white/12 text-white/70 font-medium px-8 py-4 rounded-2xl hover:bg-white/5 hover:text-white transition-all text-sm">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}