import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  num?: string;
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <Reveal>
      <div className="mb-14">
        {eyebrow && (
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-coral font-semibold mb-4 block">
            {eyebrow}
          </span>
        )}
        <h2 className="font-sans font-semibold text-[clamp(36px,5vw,68px)] tracking-[-0.035em] leading-[1.05] max-w-[980px] text-ink">
          {title}
        </h2>
        {sub && <p className="text-muted text-[17px] max-w-[640px] mt-5 leading-[1.55]">{sub}</p>}
      </div>
    </Reveal>
  );
}
