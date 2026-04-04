import type { Metadata } from "next";
import "./globals.css";
import BackgroundDecor from "../components/BackgroundDecor";

export const metadata: Metadata = {
  title: { default: "Thrive", template: "%s | Thrive" },
  description: "A noninvasive CGM solution, powered by AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#09090b] text-white noise">
        <BackgroundDecor />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}