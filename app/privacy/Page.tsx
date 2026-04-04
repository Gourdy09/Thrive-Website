import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BRAND } from "../../public/data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        <section className="pt-40 pb-20 px-6" style={{ animation: "pageIn 0.6s ease both" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-5xl font-black text-white mb-4">Privacy Policy</h1>
            <p className="text-white/35 text-sm mb-12">Last updated: {BRAND.founded}</p>
            <div className="prose prose-invert max-w-none space-y-8 text-white/60 text-sm leading-relaxed">
              {[
                { title: "1. Information We Collect", body: "Thrive collects glucose readings from the sensor hardware, health data you input (meals, activity, symptoms), account information (name and email), and device/app usage analytics. All data is collected with your explicit consent." },
                { title: "2. How We Use Your Data", body: "We use your data to provide personalized glucose insights and predictions, improve our AI model (only with anonymized, aggregated data), send you alerts and notifications you configure, and communicate about product updates and beta program status." },
                { title: "3. Data Security", body: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We comply with HIPAA requirements and follow industry best practices for healthcare data security." },
                { title: "4. Your Rights", body: "You have the right to access, export, or delete your data at any time from within the app. We do not sell your personal or health data to third parties under any circumstances." },
                { title: "5. Contact", body: `For privacy concerns, contact us at ${BRAND.email}.` },
              ].map((s) => (
                <div key={s.title}>
                  <h2 className="text-white font-black text-xl mb-3">{s.title}</h2>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}