"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactModal from "../../components/ContactModal";
import { BRAND } from "../../lib/data";
import { Mail, MapPin, Clock, ArrowRight, MessageSquare, Users, Zap } from "lucide-react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar />
      <main className="min-h-screen bg-transparent" style={{ animation: "pageIn 0.6s ease both" }}>
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">Reach Out</p>
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-6">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c800] to-yellow-300">
                Talk
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Whether you&apos;re interested in early access, a partnership, or just curious about the tech — we&apos;d love to hear from you.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#f5c800] text-black font-bold px-10 py-4 rounded-2xl hover:brightness-110 hover:scale-105 transition-all text-sm inline-flex items-center gap-2"
            >
              <MessageSquare size={15} /> Open Contact Form
            </button>
          </div>
        </section>

        {/* Contact options */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Mail size={20} className="text-[#f5c800]" />,
                  title: "Email Us",
                  detail: BRAND.email,
                  sub: "We respond within 24 hours",
                  action: `mailto:${BRAND.email}`,
                  actionLabel: "Send Email",
                },
                {
                  icon: <MapPin size={20} className="text-[#f5c800]" />,
                  title: "Location",
                  detail: "Houston, Texas",
                  sub: "United States",
                  action: null,
                  actionLabel: null,
                },
                {
                  icon: <Clock size={20} className="text-[#f5c800]" />,
                  title: "Response Time",
                  detail: "< 24 Hours",
                  sub: "Mon–Fri, 9am–6pm CST",
                  action: null,
                  actionLabel: null,
                },
              ].map((c) => (
                <div key={c.title} className="p-8 rounded-3xl border border-white/8 bg-white/[0.02] flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#f5c800]/10 border border-[#f5c800]/15 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-1">{c.title}</p>
                    <p className="text-white font-bold text-lg">{c.detail}</p>
                    <p className="text-white/35 text-sm">{c.sub}</p>
                  </div>
                  {c.action && (
                    <a href={c.action} className="inline-flex items-center gap-1.5 text-[#f5c800] text-sm font-semibold hover:brightness-125 transition-all">
                      {c.actionLabel} <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons to reach out */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-8 text-center">Why People Reach Out</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: <Zap size={16} className="text-[#f5c800]" />, title: "Early Access / Beta", desc: "Get priority access to our beta program and help shape the product." },
                { icon: <Users size={16} className="text-[#f5c800]" />, title: "Partnerships", desc: "Healthcare providers, insurers, and wellness platforms — let's collaborate." },
                { icon: <MessageSquare size={16} className="text-[#f5c800]" />, title: "Press & Media", desc: "Writing about health tech or metabolic health? We're happy to talk." },
                { icon: <ArrowRight size={16} className="text-[#f5c800]" />, title: "Investment", desc: "Interested in our seed round? Reach out with your thesis." },
              ].map((r) => (
                <button
                  key={r.title}
                  onClick={() => setModalOpen(true)}
                  className="group text-left p-7 rounded-3xl border border-white/8 bg-white/[0.02] hover:border-[#f5c800]/25 hover:bg-[#f5c800]/[0.02] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-[#f5c800]/10 flex items-center justify-center">
                      {r.icon}
                    </div>
                    <h3 className="font-black text-white group-hover:text-[#f5c800] transition-colors">{r.title}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}