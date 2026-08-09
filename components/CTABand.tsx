import Reveal from "./Reveal";
import Link from "next/link";

export default function CTABand() {
  return (
    <section id="contact" className="px-7 pt-16 pb-32 max-w-[1400px] mx-auto max-md:px-5 max-md:pb-24">
      <Reveal>
        <div className="bg-ink text-bg rounded-2xl py-20 px-14 relative overflow-hidden max-md:py-12 max-md:px-7">
          <h2 className="font-sans font-semibold text-[clamp(34px,5.4vw,76px)] tracking-[-0.04em] leading-[0.98] max-w-[900px] mb-7 text-bg">
            Have a business problem <em className="serif text-coral font-normal px-[0.02em]">that technology could solve?</em>
          </h2>
          <p className="text-[rgba(244,247,251,0.7)] text-[17px] max-w-[540px] mb-9 leading-[1.6]">
            Tell us what you&rsquo;re trying to improve. We&rsquo;ll help you identify the right digital solution.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full bg-coral text-bg text-[14px] font-medium hover:bg-coral-2 hover:-translate-y-px transition-all duration-200 ease-smooth"
            >
              Talk to IconEdge
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full bg-transparent text-bg text-[14px] font-medium border border-[rgba(244,247,251,0.18)] hover:bg-[rgba(244,247,251,0.06)] hover:-translate-y-px transition-all duration-200 ease-smooth"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
