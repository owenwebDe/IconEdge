"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const steps = [
  { 
    n: "01", 
    title: "Discover", 
    desc: "We dive deep into your business, analyzing your goals, bottlenecks, and the specific problems you need to solve. This phase is about alignment and understanding the true scope of work." 
  },
  { 
    n: "02", 
    title: "Plan", 
    desc: "We define the exact solution. This includes technical architecture, user flows, technology stack selection, timeline estimation, and a clear list of deliverables." 
  },
  { 
    n: "03", 
    title: "Build", 
    desc: "Our engineering team designs and develops the system. We work in iterative sprints, providing you with regular progress updates and access to staging environments." 
  },
  { 
    n: "04", 
    title: "Launch", 
    desc: "We rigorously test the system for performance, security, and usability before deploying it to production. We ensure a smooth, zero-downtime rollout." 
  },
  { 
    n: "05", 
    title: "Improve", 
    desc: "Post-launch, we provide ongoing support, proactive maintenance, and iterative improvements based on real user data and changing business needs." 
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(0); // First step open by default

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="process" className="px-7 py-32 max-w-[1000px] mx-auto max-md:px-5 max-md:py-20">
      <SectionHead
        eyebrow="Process"
        title={
          <>
            Five steps. <em className="serif text-coral px-[0.05em] font-normal">Clear execution.</em>
          </>
        }
        sub="A structured, reliable development workflow designed to turn your business problem into a working digital solution."
      />
      
      <div className="mt-16 lg:mt-24 border-t border-line">
        {steps.map((s, i) => {
          const isActive = activeStep === i;
          
          return (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="border-b border-line">
                <button
                  onClick={() => toggleStep(i)}
                  className="w-full text-left py-8 lg:py-12 group flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center gap-6 lg:gap-12">
                    <span 
                      className={`font-mono text-[16px] lg:text-[20px] font-semibold transition-colors duration-300 ${
                        isActive ? "text-coral" : "text-muted group-hover:text-coral/70"
                      }`}
                    >
                      {s.n}
                    </span>
                    <h4 
                      className={`text-[32px] md:text-[42px] lg:text-[56px] font-semibold tracking-[-0.03em] leading-none transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-subtle group-hover:text-ink/70"
                      }`}
                    >
                      {s.title}
                    </h4>
                  </div>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isActive 
                      ? "border-coral bg-coral text-white" 
                      : "border-line text-muted bg-surface group-hover:border-subtle group-hover:text-ink"
                  }`}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className={`transition-transform duration-500 ease-smooth ${isActive ? "rotate-45" : "rotate-0"}`}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                
                {/* Expandable Content Area */}
                <div 
                  className={`grid transition-all duration-500 ease-smooth ${
                    isActive ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden pl-[48px] lg:pl-[84px] pr-10">
                    <p className="text-[16px] lg:text-[18px] text-muted leading-[1.6] max-w-[600px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
