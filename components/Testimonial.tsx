import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="px-7 py-24 max-w-[1100px] mx-auto max-md:px-5 max-md:py-16">
      <Reveal>
        <div className="bg-surface border border-line rounded-2xl py-14 px-16 shadow-s1 max-md:px-7 max-md:py-9">
          <p className="serif italic font-normal text-[clamp(28px,3.6vw,46px)] leading-[1.2] tracking-[-0.02em] text-ink mb-9">
            IconEdge was the only team that could take us from a soldering iron to a shipped consumer product. They are the most senior outside engineers we have ever worked with.
          </p>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-ink text-bg flex items-center justify-center text-[16px] font-semibold tracking-[-0.005em]">
              AO
            </div>
            <div>
              <b className="block text-ink font-semibold text-[15px]">Adaeze Okafor</b>
              <span className="text-muted text-[13px]">CTO, Helix Health</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
