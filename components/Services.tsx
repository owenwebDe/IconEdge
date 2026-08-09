"use client";

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let interval: NodeJS.Timeout;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        // Only auto-scroll on mobile (below lg breakpoint: 1024px)
        if (window.innerWidth >= 1024) return;
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // If we've reached the end, loop back to the beginning.
        // We use a 50px buffer because scroll snap points might not hit exact maxScroll.
        if (container.scrollLeft >= maxScroll - 50) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll one card width (85vw)
          container.scrollBy({ left: window.innerWidth * 0.85, behavior: "smooth" });
        }
      }, 3500); // 3.5 seconds
    };

    startAutoScroll();

    // Pause on interaction
    const stopAutoScroll = () => clearInterval(interval);
    
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);
    container.addEventListener("touchstart", stopAutoScroll, { passive: true });
    container.addEventListener("touchend", startAutoScroll, { passive: true });

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
      container.removeEventListener("touchstart", stopAutoScroll);
      container.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  return (
    <section id="services" className="px-7 py-32 max-w-[1400px] mx-auto max-md:px-5 max-md:py-20">
      <SectionHead
        eyebrow="What We Build"
        title={
          <>
            Digital systems <em className="serif text-coral px-[0.05em] font-normal">built around how your business works</em>.
          </>
        }
      />

      {/* ── Compositional 4-card layout (Carousel on Mobile, Grid on Desktop) ── */}
      <div 
        ref={scrollRef}
        className="flex max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-8 max-lg:-mx-5 max-lg:px-5 lg:grid lg:grid-cols-3 gap-5 mt-10 hide-scrollbar"
      >
        
        {/* Card 1: Business Automation & AI (Dark, spans 2) */}
        <Reveal className="max-lg:min-w-[85vw] max-lg:snap-center max-lg:shrink-0 lg:col-span-2">
          <article className="group relative bg-[#17181C] rounded-[24px] overflow-hidden min-h-[480px] lg:min-h-[580px] p-8 lg:p-10 flex flex-col justify-between">
            {/* Background 3D Image */}
            <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-smooth group-hover:scale-105">
              <Image 
                src="/images/ai-robot.png"
                alt="AI Robot"
                fill
                className="object-cover object-right-bottom opacity-90 mix-blend-lighten"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17181C] via-[#17181C]/80 to-transparent w-2/3" />
            </div>

            <div className="relative z-10 max-w-[480px]">
              <h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[42px] tracking-[-0.03em] leading-[1.05] mb-4 text-white">
                Business Automation<br />&amp; AI
              </h3>
              <p className="text-white/80 text-[16px] leading-[1.55] mb-8 max-w-[400px]">
                Automate repetitive work with AI-powered systems and seamless workflows.
              </p>
              
              <a href="/services" className="inline-flex items-center gap-2 font-medium text-[15px] text-coral hover:text-white transition-colors duration-200">
                Explore capabilities
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="relative z-10 mt-12 lg:mt-0">
               {/* Decorative tag/line */}
               <div className="w-12 h-1 bg-coral rounded-full" />
            </div>
          </article>
        </Reveal>

        {/* Card 2: Custom Software (White, spans 1) */}
        <Reveal delay={0.08} className="max-lg:min-w-[85vw] max-lg:snap-center max-lg:shrink-0 lg:col-span-1">
          <article className="group relative bg-[#F5F3EE] rounded-[24px] overflow-hidden min-h-[480px] lg:min-h-[580px] p-8 lg:p-10 flex flex-col justify-between shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
            {/* Background 3D Image */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none transition-transform duration-700 ease-smooth group-hover:scale-105">
              <Image 
                src="/images/server.png"
                alt="Server Architecture"
                fill
                className="object-cover object-bottom mix-blend-darken"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EE] via-transparent to-transparent h-24" />
            </div>

            <div className="relative z-10">
              <h3 className="font-semibold text-[28px] lg:text-[34px] tracking-[-0.025em] leading-[1.1] mb-3 text-[#17181C]">
                Custom<br />Software
              </h3>
              <p className="text-[#17181C]/70 text-[15px] leading-[1.55] mb-6">
                CRM, ERP, and bespoke digital platforms.
              </p>
            </div>

            <div className="relative z-10">
              <a href="/services" className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm border border-black/5 text-[#17181C] hover:bg-coral hover:text-white transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </Reveal>

        {/* Card 3: Web, E-commerce & Mobile (Orange, spans 1) */}
        <Reveal delay={0.16} className="max-lg:min-w-[85vw] max-lg:snap-center max-lg:shrink-0 lg:col-span-1">
          <article className="group relative bg-coral rounded-[24px] overflow-hidden min-h-[480px] lg:min-h-[580px] p-8 lg:p-10 flex flex-col justify-between">
            {/* Background 3D Image */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none transition-transform duration-700 ease-smooth group-hover:scale-105">
              <Image 
                src="/images/mobile.png"
                alt="Mobile Interface"
                fill
                className="object-cover object-bottom mix-blend-hard-light"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
               <div className="absolute inset-0 bg-gradient-to-b from-coral via-transparent to-transparent h-24" />
            </div>

            <div className="relative z-10">
              <h3 className="font-semibold text-[28px] lg:text-[34px] tracking-[-0.025em] leading-[1.1] mb-3 text-[#17181C]">
                Web &amp;<br />E-commerce
              </h3>
              <p className="text-[#17181C]/80 text-[15px] leading-[1.55] mb-6 font-medium">
                High-converting digital storefronts.
              </p>
            </div>

            <div className="relative z-10">
              <a href="/services" className="inline-flex items-center justify-center w-12 h-12 bg-[#17181C] rounded-full text-white hover:bg-white hover:text-[#17181C] transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </Reveal>

        {/* Card 4: AI Integrations (Dark, spans 2) */}
        <Reveal delay={0.24} className="max-lg:min-w-[85vw] max-lg:snap-center max-lg:shrink-0 lg:col-span-2">
          <article className="group relative bg-[#17181C] rounded-[24px] overflow-hidden min-h-[480px] lg:min-h-[580px] p-8 lg:p-10 flex flex-col justify-between shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
            {/* Background 3D Image */}
            <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-smooth group-hover:scale-105">
              <Image 
                src="/images/network.png"
                alt="Digital Network"
                fill
                className="object-cover object-right opacity-80 mix-blend-lighten"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17181C] via-[#17181C]/80 to-transparent w-1/2" />
            </div>

            <div className="relative z-10 max-w-[480px]">
              <h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[42px] tracking-[-0.03em] leading-[1.05] mb-4 text-white">
                AI Integrations
              </h3>
              <p className="text-white/80 text-[16px] leading-[1.55] mb-8 max-w-[340px]">
                Embed intelligent search, vision, and natural language into your operations.
              </p>
              <a href="/services" className="inline-flex items-center gap-2 font-medium text-[15px] text-white hover:text-coral transition-colors duration-200">
                Explore capabilities
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
             <div className="relative z-10 mt-12 lg:mt-0">
               {/* Decorative tag/line */}
               <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>
          </article>
        </Reveal>

      </div>
    </section>
  );
}
