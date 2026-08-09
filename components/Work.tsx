"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Image from "next/image";

const categories = ["ALL", "SOFTWARE", "AUTOMATION", "WEB", "AI"];

const projects = [
  {
    id: "eatumy",
    name: "Eatumy Panel",
    sub: "Internal Product Concept",
    tags: ["SOFTWARE", "WEB"],
    year: "2026",
    image: "/images/eatumy.png",
  },
  {
    id: "dexnew",
    name: "DexNew Bot",
    sub: "Product Prototype",
    tags: ["AUTOMATION", "AI"],
    year: "2025",
    image: "/images/dexnew.png",
  },
  {
    id: "jkg",
    name: "JKG Platform",
    sub: "Product Prototype",
    tags: ["WEB", "SOFTWARE"],
    year: "2025",
    image: null,
  },
  {
    id: "payflow",
    name: "PayFlow API",
    sub: "Internal Product Concept",
    tags: ["SOFTWARE", "AUTOMATION"],
    year: "2024",
    image: null,
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "ALL" || p.tags.includes(activeCategory)
  );

  return (
    <section id="work" className="px-7 py-32 max-w-[1400px] mx-auto max-md:px-5 max-md:py-20">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-24">
        <SectionHead
          eyebrow="Solutions in Action"
          title={
            <>
              Capabilities & <em className="serif text-coral px-[0.05em] text-[1.1em] font-normal">systems we build</em>.
            </>
          }
        />
        
        {/* Category Filter */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 lg:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[11px] tracking-[0.08em] px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-ink text-white border-ink"
                    : "bg-surface text-muted border-line hover:border-subtle"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Studio List Layout ── */}
      <div className="border-t border-line">
        {filteredProjects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i + 1} />
        ))}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-muted font-mono text-[13px]">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Bottom CTA Bridge */}
      <Reveal delay={0.2}>
        <div className="mt-32 text-center">
          <p className="text-muted text-[17px] leading-[1.55] mb-2">
            Have a system in mind?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-medium text-[24px] lg:text-[32px] text-ink hover:text-coral transition-colors duration-300"
          >
            Let&apos;s build it.
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectRow({ project, index }: { project: any; index: number }) {
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <Reveal>
      <a 
        href={`/work#${project.id}`} 
        className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-14 border-b border-line cursor-pointer transition-colors duration-300 hover:bg-surface/50"
      >
        <div className="flex items-center gap-6 lg:gap-12 w-full lg:w-auto relative z-20">
          <span className="font-mono text-[16px] lg:text-[20px] font-semibold text-coral">
            {formattedIndex}
          </span>
          <h3 className="font-semibold text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.03em] leading-none text-ink group-hover:text-coral transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        <div className="flex items-center justify-between lg:justify-end gap-10 mt-6 lg:mt-0 w-full lg:w-auto relative z-20">
          <span className="font-mono text-[12px] lg:text-[14px] uppercase tracking-[0.04em] text-muted group-hover:text-ink transition-colors duration-300">
            {project.sub}
          </span>
          
          <div className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-ink bg-bg transition-all duration-400 ease-smooth group-hover:bg-coral group-hover:border-coral group-hover:text-white shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-400 ease-smooth group-hover:-translate-y-1 group-hover:translate-x-1">
              <path d="M5 19L19 5M19 5v10M19 5H9" />
            </svg>
          </div>
        </div>

        {/* Floating Image Reveal (Desktop Only) */}
        {project.image && (
          <div className="hidden lg:block absolute right-[25%] top-1/2 -translate-y-1/2 w-[340px] h-[220px] rounded-xl overflow-hidden opacity-0 scale-95 pointer-events-none transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-[60%] z-10 shadow-2xl">
            <Image 
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-center"
              sizes="340px"
            />
          </div>
        )}
      </a>
    </Reveal>
  );
}
