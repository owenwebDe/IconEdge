import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const items = [
  {
    meta: "Eatumy / Admin",
    year: "2026",
    name: "Eatumy",
    sub: "shareholders panel",
    desc: "A secure admin dashboard for shareholders to manage operations, monitor data, and control platform settings.",
    tags: ["Web", "Dashboard", "Admin"],
  },
  {
    meta: "DexNew / Crypto",
    year: "2026",
    name: "DexNew",
    sub: "token tracker",
    desc: "A Python-powered Telegram bot that scrapes and tracks new token listings in real time using the DexScreener API.",
    tags: ["Telegram Bot", "Python", "Crypto"],
  },
  {
    meta: "Just Keep Gambling / Web3",
    year: "2025",
    name: "JKG",
    sub: "crypto gaming",
    desc: "A full website for a crypto gambling project, featuring wallet integrations and an engaging Web3 gaming experience.",
    tags: ["Web3", "Blockchain", "Gaming"],
  },
  {
    meta: "C-Sons / Business",
    year: "2025",
    name: "C-Sons",
    sub: "global enterprises",
    desc: "A business website for a Nigerian logistics company offering transportation, medical equipment, and office supplies.",
    tags: ["Web", "Business", "Logistics"],
  },
];

export default function Work() {
  return (
    <section id="work" className="px-7 py-32 max-w-[1400px] mx-auto max-md:px-5 max-md:py-20">
      <SectionHead
        num="02"
        eyebrow="Work"
        title={
          <>
            <em className="serif text-coral px-[0.05em] font-normal">Selected work</em> — a sample of platforms, apps, and bots.
          </>
        }
      />
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.06}>
            <article className="work-card hoverable group relative bg-surface border border-line rounded-xl p-8 cursor-pointer shadow-s1 transition-all duration-300 ease-smooth hover:-translate-y-[3px] hover:shadow-s3 flex flex-col min-h-[320px]">
              <div className="flex justify-between items-center font-mono text-[11px] text-muted tracking-[0.04em] mb-6">
                <span>{it.meta}</span>
                <span>{it.year}</span>
              </div>
              <div className="text-[clamp(28px,3vw,38px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-2.5">
                {it.name} <em className="serif font-normal text-muted">{it.sub}</em>
              </div>
              <div className="text-muted text-[15px] leading-[1.55] mb-6 flex-1">{it.desc}</div>
              <div className="flex justify-between items-center pt-5 border-t border-line">
                <div className="flex gap-1.5 flex-wrap">
                  {it.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] py-1 px-2.5 bg-bg border border-line rounded-full text-ink">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="w-9 h-9 rounded-full bg-bg border border-line flex items-center justify-center transition-all duration-200 ease-smooth group-hover:bg-ink group-hover:border-ink group-hover:text-bg group-hover:-rotate-45 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
