import Link from "next/link";
import { BRAND } from "../lib/data";
import Image from "next/image";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Accuracy", href: "/accuracy" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" height={32} width={32} alt="logo"/>
              <span className="text-white font-black">{BRAND.name}</span>
            </Link>
            <p className="text-white/30 text-xs leading-relaxed max-w-[180px] mb-4">
              {BRAND.description}
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-[#f5c800] text-xs hover:brightness-110 transition-all"
            >
              {BRAND.email}
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-white/40 text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {BRAND.founded}–{new Date().getFullYear()} {BRAND.name} Health Inc. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Houston, TX</p>
        </div>
      </div>
    </footer>
  );
}