import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="relative pt-32 pb-20 px-7 overflow-hidden bg-bg max-md:px-5 max-md:pt-24 max-md:pb-14">
      <div className="relative max-w-[1400px] mx-auto">
        {eyebrow && (
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted py-1.5 px-3 border border-line rounded-full bg-surface mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-coral" />
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <h1 className="font-sans font-semibold text-[clamp(44px,7vw,92px)] tracking-[-0.04em] leading-[0.98] max-w-[1100px] text-ink">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.2}>
            <p className="text-[clamp(16px,1.4vw,19px)] text-muted max-w-[640px] mt-7 leading-[1.55]">
              {sub}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
