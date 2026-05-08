import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const cases = [
  { id: "quill", name: "Quill", sub: "fintech onboarding", year: "2025", tags: ["Web", "Mobile"], outcome: "Cut KYC drop-off by 62%" },
  { id: "helix", name: "Helix", sub: "clinical IoT platform", year: "2025", tags: ["Hardware", "Cloud"], outcome: "14,000 devices in production" },
  { id: "nori", name: "Nori", sub: "civic services portal", year: "2024", tags: ["Web", "Government"], outcome: "2.1M residents served" },
  { id: "linea", name: "Linea", sub: "agency design system", year: "2024", tags: ["Web", "Design system"], outcome: "32 client sites unified" },
  { id: "beacon", name: "Beacon", sub: "fleet telematics", year: "2024", tags: ["Hardware", "Mobile"], outcome: "CAN-bus + driver app" },
  { id: "tessera", name: "Tessera", sub: "logistics dashboard", year: "2023", tags: ["Web", "Data"], outcome: "Real-time fleet visibility" },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="A sample of what we have shipped."
        sub="Six cases from the past two years across web, mobile, and hardware. Each one is a long story — these are the highlights."
      />
      <section className="px-7 max-w-[1400px] mx-auto pb-24 max-md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <a
                href="#"
                className="work-card hoverable group relative block aspect-[4/3] rounded-xl border border-line bg-surface overflow-hidden shadow-s1 transition-all duration-300 ease-smooth hover:-translate-y-[3px] hover:shadow-s3"
              >
                <div className="relative z-10 h-full flex flex-col justify-between p-9">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-mono text-[11px] text-subtle tracking-[0.12em] mb-2">/{String(i + 1).padStart(2, "0")} · {c.year}</div>
                      <div className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-ink">
                        {c.name}
                        <span className="serif text-muted font-normal italic">, {c.sub}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-bg border border-line flex items-center justify-center transition-all duration-300 ease-smooth group-hover:bg-ink group-hover:border-ink group-hover:text-bg group-hover:-rotate-45 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-[15px] text-ink mb-4 font-medium">{c.outcome}</div>
                    <div className="flex gap-1.5 flex-wrap">
                      {c.tags.map((t) => <span key={t} className="font-mono text-[11px] px-2.5 py-1 bg-bg border border-line rounded-full text-ink">{t}</span>)}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
