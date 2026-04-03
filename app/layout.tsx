import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Thrive", template: "%s | Thrive" },
  description: "A noninvasive CGM solution, powered by AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#09090b] text-white">
        {children}
      </body>
    </html>
  );
}