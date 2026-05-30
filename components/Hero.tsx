"use client";
import { useEffect } from "react";
import Logo from "./Logo";

export default function Hero() {
  useEffect(() => {
    const body = document.body;
    const timeouts: number[] = [];
    let punchInterval: number | undefined;

    // Periodic logo "punch": scatter pieces fast, hold scattered briefly,
    // then let them re-assemble (slow) using the existing transition rules.
    const punch = () => {
      if (document.hidden) return;
      const stage = document.querySelector<HTMLElement>(".logo-stage");
      if (!stage) return;
      stage.classList.add("is-punching");
      window.setTimeout(() => stage.classList.add("is-scattered"), 90);
      window.setTimeout(() => stage.classList.remove("is-scattered"), 1100);
      window.setTimeout(() => stage.classList.remove("is-punching"), 380);
    };

    const startSequence = () => {
      // t=300ms: intro fades in word-by-word
      timeouts.push(window.setTimeout(() => body.classList.add("intro-on"), 300));
      // t=2400ms: intro fades + lifts away
      timeouts.push(
        window.setTimeout(() => {
          body.classList.remove("intro-on");
          body.classList.add("intro-out");
        }, 2400)
      );
      // t=2900ms: brand starts assembling
      timeouts.push(window.setTimeout(() => body.classList.add("waking"), 2900));
      // t=5500ms: brand settled — reveal tagline, CTAs, and video bg
      timeouts.push(
        window.setTimeout(() => {
          body.classList.remove("waking");
          body.classList.remove("intro-out");
          body.classList.add("copy-on");
          body.classList.remove("loading");
          body.classList.add("ready");
        }, 5500)
      );
      // t=12000ms onward: every ~9s, punch the logo so it scatters & reassembles
      timeouts.push(
        window.setTimeout(() => {
          punch();
          punchInterval = window.setInterval(punch, 9000);
        }, 12000)
      );
    };

    if (document.readyState === "complete") {
      timeouts.push(window.setTimeout(startSequence, 60));
    } else {
      const handler = () => timeouts.push(window.setTimeout(startSequence, 60));
      window.addEventListener("load", handler, { once: true });
      return () => {
        window.removeEventListener("load", handler);
        timeouts.forEach((t) => window.clearTimeout(t));
        if (punchInterval) window.clearInterval(punchInterval);
      };
    }

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
      if (punchInterval) window.clearInterval(punchInterval);
    };
  }, []);

  return (
    <section className="hero relative px-7 pt-28 pb-24 min-h-[88vh] flex flex-col items-center justify-center text-center bg-ink overflow-hidden max-md:px-5 max-md:pt-24 max-md:pb-20 max-md:min-h-screen max-md:min-h-[100dvh]">
      <div className="hero-video absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover block">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-tint absolute inset-0 z-[1] pointer-events-none bg-[rgba(10,10,15,0.45)]" aria-hidden />

      {/* Intro overlay */}
      <div className="hero-intro absolute inset-0 z-[5] flex items-center justify-center pointer-events-none px-6">
        <p className="hero-intro-text">
          <span className="hero-intro-word">Welcome</span>
          <span className="hero-intro-word">to</span>
          <span className="hero-intro-word">the</span>
          <span className="hero-intro-word">world</span>
          <span className="hero-intro-word">of</span>
        </p>
      </div>

      <div className="hero-copy relative z-10 flex flex-col items-center max-w-[1100px] w-full">
        {/* Logo + wordmark */}
        <div className="flex items-center gap-5 mb-12 max-md:gap-3.5 max-md:mb-9 max-[420px]:flex-col max-[420px]:gap-3 max-[420px]:mb-7">
          <div className="relative w-[120px] aspect-square max-md:w-[88px] max-[420px]:w-[72px] flex-shrink-0">
            <div
              className="logo-stage"
              style={{ filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.5))" }}
            >
              <Logo light fluid className="w-full h-full block" />
            </div>
          </div>
          <span className="hero-wordmark flex flex-col items-start max-[420px]:items-center leading-none min-w-0">
            <span className="font-sans font-semibold text-bg text-[clamp(36px,5.5vw,76px)] tracking-[-0.03em] leading-none">
              IconEdge Technology Limited
            </span>
          {/*   <span className="font-mono text-bg/70 text-[clamp(10px,0.85vw,13px)] tracking-[0.18em] uppercase mt-2">
              Technology Limited
            </span> */}
          </span>
        </div>

        {/* Tagline — single line, word-by-word reveal on wake-up */}
        <h1 className="font-sans font-semibold text-[clamp(22px,2.6vw,40px)] leading-[1.15] tracking-[-0.025em] mb-9 text-bg max-md:mb-7 whitespace-nowrap max-md:whitespace-normal">
          <span className="hero-title-row">
            <span className="hero-title-word">We</span>
            <span className="hero-title-word">build</span>
            <span className="hero-title-word">the</span>
            <span className="hero-title-word"><span className="serif font-normal text-coral inline-block px-[0.04em]">edge</span></span>
            <span className="hero-title-word">of</span>
            <span className="hero-title-word">technology.</span>
          </span>
        </h1>

        {/* CTA */}
        <div className="hero-fade-2 flex gap-2.5 flex-wrap justify-center max-md:mt-16 max-[420px]:mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full bg-coral text-bg text-[14px] font-medium shadow-[0_6px_20px_rgba(255,92,57,0.3)] hover:bg-coral-2 hover:-translate-y-px transition-all duration-200 ease-smooth"
          >
            Start a project
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full bg-transparent text-bg text-[14px] font-medium border border-white/[0.18] hover:bg-white/[0.06] hover:border-white/[0.35] hover:-translate-y-px transition-all duration-200 ease-smooth"
          >
            See selected work
          </a>
        </div>
      </div>
    </section>
  );
}
