import Reveal from "./Reveal";

export default function SectionHead({
  num,
  eyebrow,
  title,
  sub,
}: {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 mb-16 items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted py-1.5 px-3 border border-line rounded-full bg-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            Section {num} / {eyebrow}
          </div>
        </div>
        <div>
          <h2 className="font-sans font-semibold text-[clamp(36px,5vw,68px)] tracking-[-0.035em] leading-none max-w-[980px] text-ink">
            {title}
          </h2>
          {sub && <p className="text-muted text-[17px] max-w-[540px] mt-5 leading-[1.55]">{sub}</p>}
        </div>
      </div>
    </Reveal>
  );
}
