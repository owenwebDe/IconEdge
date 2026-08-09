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
        <div className="flex items-center gap-5 mb-8 max-md:gap-3.5 max-md:mb-7 max-[420px]:flex-col max-[420px]:gap-3">
          <div className="relative w-[110px] aspect-square max-md:w-[80px] max-[420px]:w-[68px] flex-shrink-0">
            <div
              className="logo-stage"
              style={{ filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.5))" }}
            >
              <Logo light fluid className="w-full h-full block" />
            </div>
          </div>
          <span className="hero-wordmark flex flex-col items-start max-[420px]:items-center leading-none min-w-0">
            <span className="font-sans font-semibold text-bg text-[clamp(32px,4.8vw,68px)] tracking-[-0.03em] leading-none">
              IconEdge Technologies LTD
            </span>
          </span>
        </div>

        {/* Tagline — single line, word-by-word reveal on wake-up */}
        <h1 className="font-sans font-semibold text-[clamp(26px,3.8vw,52px)] leading-[1.1] tracking-[-0.03em] mb-6 text-bg max-md:mb-5 whitespace-nowrap max-md:whitespace-normal">
          <span className="hero-title-row">
            <span className="hero-title-word">Build</span>
            <span className="hero-title-word">Smarter.</span>
            <span className="hero-title-word"><span className="serif font-normal text-coral inline-block px-[0.04em]">Automate</span></span>
            <span className="hero-title-word">More.</span>
            <span className="hero-title-word">Grow</span>
            <span className="hero-title-word">Faster.</span>
          </span>
        </h1>

        {/* Supporting text */}
        <p className="hero-fade-1 text-[clamp(15px,1.2vw,18px)] text-bg/80 max-w-[700px] mb-9 leading-[1.6] max-md:text-[15px] max-md:mb-8">
          We build custom software, automation, and AI-powered systems that help businesses eliminate repetitive work, improve operations, and scale with confidence.
        </p>

        {/* CTA */}
        <div className="hero-fade-2 flex gap-3 flex-wrap justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-[24px] py-[13.5px] rounded-full bg-coral text-bg text-[14px] font-medium shadow-[0_6px_20px_rgba(255,92,57,0.3)] hover:bg-coral-2 hover:-translate-y-px transition-all duration-200 ease-smooth"
          >
            Start a Project
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-[24px] py-[13.5px] rounded-full bg-transparent text-bg text-[14px] font-medium border border-white/[0.18] hover:bg-white/[0.06] hover:border-white/[0.35] hover:-translate-y-px transition-all duration-200 ease-smooth"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
