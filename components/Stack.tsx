import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const rows = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Redux"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <rect x="3" y="4" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zM12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    group: "Mobile",
    items: ["React Native", "Android", "iOS", "Firebase", "Expo"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <rect x="6" y="2" width="12" height="20" rx="2" />
      </svg>
    ),
  },
  {
    group: "Blockchain",
    items: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "Wallet Integration", "dApps"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Stack() {
  return (
    <section id="stack" className="px-7 py-32 max-w-[1400px] mx-auto max-md:px-5 max-md:py-20">
      <SectionHead
        num="05"
        eyebrow="Stack"
        title={
          <>
            Tools we reach for. <em className="serif text-coral px-[0.05em] font-normal">Not a religion</em> — the right one for the job.
          </>
        }
      />
      <Reveal>
        <div className="bg-surface border border-line rounded-xl overflow-hidden shadow-s1">
          {rows.map((r, i) => (
            <div
              key={r.group}
              className={`grid md:grid-cols-[240px_1fr] ${i < rows.length - 1 ? "border-b border-line" : ""} max-md:grid-cols-1`}
            >
              <div className="py-6 px-7 border-r border-line flex items-center gap-2.5 text-[16px] font-semibold tracking-[-0.02em] text-ink max-md:border-r-0 max-md:border-b max-md:border-line">
                <div className="w-7 h-7 rounded-lg bg-bg-2 flex items-center justify-center text-ink">
                  {r.icon}
                </div>
                {r.group}
              </div>
              <div className="py-6 px-7 flex flex-wrap gap-2 items-center">
                {r.items.map((it) => (
                  <span
                    key={it}
                    className="font-mono text-[13px] py-1.5 px-3 bg-bg border border-line rounded-full text-ink hover:bg-ink hover:text-bg hover:border-ink transition-all duration-200 ease-smooth cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
