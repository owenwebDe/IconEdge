"use client";
import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead";

const steps = [
  { n: "01", title: "Discover", desc: "Stakeholder interviews, audit, and the brief that becomes our north star." },
  { n: "02", title: "Design", desc: "Architecture, wireframes, motion direction, and a pixel-tight UI spec." },
  { n: "03", title: "Build", desc: "Two-week sprints with a Loom every Friday and a working demo each one." },
  { n: "04", title: "Ship", desc: "Staging, QA, accessibility audit, and a launch playbook handed over." },
  { n: "05", title: "Scale", desc: "Monitoring, performance, and a roadmap for the next twelve months." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLit(true);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="px-7 py-32 max-w-[1400px] mx-auto max-md:px-5 max-md:py-20">
      <SectionHead
        num="03"
        eyebrow="Process"
        title={
          <>
            Five steps. <em className="serif text-coral px-[0.05em] font-normal">No surprises.</em>
          </>
        }
        sub="The same process whether it is a marketing site or a connected device. Predictable cadences, working demos, written deliverables."
      />
      <div
        ref={ref}
        className={`process-grid grid lg:grid-cols-5 gap-4 mt-14 max-lg:grid-cols-1 ${lit ? "lit" : ""}`}
      >
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="process-step bg-surface border border-line rounded-xl p-7 min-h-[260px] flex flex-col shadow-s1"
            style={{ ["--i" as string]: i }}
          >
            <div className="num-pill inline-flex items-center gap-2 py-1.5 px-3 bg-bg-2 rounded-full font-mono text-[11px] text-muted tracking-[0.04em] mb-6 w-fit">
              <span className="step-dot w-1.5 h-1.5 rounded-full" />
              {s.n} / {s.title}
            </div>
            <h4 className="text-[22px] font-semibold tracking-[-0.025em] mb-2">{s.title}</h4>
            <p className="text-[14px] text-muted leading-[1.55]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
