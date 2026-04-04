import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BRAND } from "../../public/data";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        <section className="pt-40 pb-20 px-6" style={{ animation: "pageIn 0.6s ease both" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/25 text-[11px] tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-5xl font-black text-white mb-4">Terms of Service</h1>
            <p className="text-white/35 text-sm mb-12">Last updated: {BRAND.founded}</p>
            <div className="space-y-8 text-white/60 text-sm leading-relaxed">
              {[
                { title: "1. Acceptance of Terms", body: "By using Thrive, you agree to these Terms of Service. If you do not agree, please do not use the service." },
                { title: "2. Beta Disclaimer", body: "Thrive is currently in beta. The product is not FDA-cleared and is not intended for medical diagnosis or treatment. Always consult a qualified healthcare professional for medical decisions. Do not rely on Thrive data for insulin dosing or other critical medical decisions." },
                { title: "3. Account Responsibility", body: "You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account." },
                { title: "4. Intellectual Property", body: `All software, algorithms, and content on the Thrive platform are owned by ${BRAND.name} Health Inc. You may not reproduce, distribute, or create derivative works without explicit written permission.` },
                { title: "5. Limitation of Liability", body: `${BRAND.name} Health Inc. shall not be liable for any indirect, incidental, or consequential damages arising from use of the service.` },
                { title: "6. Contact", body: `Questions about these terms? Email ${BRAND.email}.` },
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