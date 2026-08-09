"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionHead from "./SectionHead";

type Stat = { target: number; decimals?: number; suffix?: string; label: string };
const stats: Stat[] = [
  { target: 5, label: "Core Business Solutions" },
  { target: 100, suffix: "%", label: "Custom Built Architecture" },
  { target: 1, label: "Integrated Full-Stack Team" },
  { target: 24, suffix: "h", label: "First response, on average" },
];

function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const dur = 2000;
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(stat.target * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.target]);
  const formatted = stat.decimals ? val.toFixed(stat.decimals) : Math.floor(val).toLocaleString();
  return (
    <span className="text-ink">
      {formatted}
      {stat.suffix && <span className="serif text-coral italic font-normal">{stat.suffix}</span>}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="numbers" className="px-7 py-32 max-w-[1400px] mx-auto max-md:px-5 max-md:py-20">
      <SectionHead
        eyebrow="Standards"
        title={
          <>
            Engineering <em className="serif text-coral px-[0.05em] font-normal">commitments</em>.
          </>
        }
        sub="We establish trust through clean code, direct senior communication, and solutions engineered to solve real business problems."
      />
      <div ref={ref} className="grid grid-cols-4 gap-4 max-md:grid-cols-2 mt-10">
        {stats.map((s) => (
          <div key={s.label} className="stat bg-surface border border-line rounded-xl py-9 px-7 shadow-s1">
            <div className="text-[clamp(48px,6vw,80px)] font-semibold tracking-[-0.04em] leading-[0.95]">
              <Counter stat={s} run={inView} />
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-muted mt-4">
              <div className="w-2.5 h-px bg-coral" />
              <span className="max-w-[120px] leading-[1.35]">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
