import Reveal from "./Reveal";
import Link from "next/link";

export default function CTABand() {
  return (
    <section id="contact" className="px-7 pt-16 pb-32 max-w-[1400px] mx-auto max-md:px-5 max-md:pb-24">
      <Reveal>
        <div className="bg-ink text-bg rounded-2xl py-20 px-14 relative overflow-hidden max-md:py-12 max-md:px-7">
          <h2 className="font-sans font-semibold text-[clamp(40px,7vw,96px)] tracking-[-0.04em] leading-[0.96] max-w-[900px] mb-7 text-bg">
            Have an idea. <em className="serif text-coral font-normal px-[0.02em]">Let&rsquo;s build the edge.</em>
          </h2>
          <p className="text-[rgba(244,247,251,0.7)] text-[17px] max-w-[480px] mb-9 leading-[1.6]">
            Tell us about the platform, app, or product you&rsquo;re thinking about. We reply within a working day with next steps and a rough scope.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full bg-coral text-bg text-[14px] font-medium hover:bg-coral-2 hover:-translate-y-px transition-all duration-200 ease-smooth"
            >
              Start a project
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full bg-transparent text-bg text-[14px] font-medium border border-[rgba(244,247,251,0.18)] hover:bg-[rgba(244,247,251,0.06)] hover:-translate-y-px transition-all duration-200 ease-smooth"
            >
              View case studies
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
