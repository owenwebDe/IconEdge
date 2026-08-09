import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="px-7 py-24 max-w-[1100px] mx-auto max-md:px-5 max-md:py-16">
      <Reveal>
        <div className="bg-surface border border-line rounded-2xl py-14 px-16 shadow-s1 max-md:px-7 max-md:py-9">
          <p className="serif italic font-normal text-[clamp(24px,3.2vw,40px)] leading-[1.25] tracking-[-0.02em] text-ink mb-9">
            &ldquo;We build reliable digital systems tailored specifically to your business operations — with zero bloated code, full delivery transparency, and dedicated post-launch support.&rdquo;
          </p>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-ink text-bg flex items-center justify-center text-[16px] font-semibold tracking-[-0.005em]">
              IE
            </div>
            <div>
              <b className="block text-ink font-semibold text-[15px]">IconEdge Engineering Standard</b>
              <span className="text-muted text-[13px]">Our Quality & Reliability Guarantee</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
