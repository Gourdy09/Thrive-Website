"use client";
import { useEffect, useRef, useState } from "react";
import { STATS } from "../lib/data";

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (target === 0) { setCount(0); return; }
    let cur = 0;
    const step = target / 60;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setCount(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [target, active]);
  return count;
}

function StatCard({ value, suffix, label }: (typeof STATS)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setActive(true);
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const count = useCountUp(value, active);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 p-8 rounded-3xl bg-white/[0.02] border border-white/8 hover:border-[#f5c800]/30 hover:bg-[#f5c800]/[0.03] transition-all duration-300"
    >
      <span className="text-5xl font-black text-white tabular-nums">
        {count}
        <span className="text-[#f5c800]">{suffix}</span>
      </span>
      <span className="text-white/40 text-sm">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#09090b] py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-white/25 text-[11px] tracking-widest uppercase mb-8 text-center">
          Thrive by the numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}