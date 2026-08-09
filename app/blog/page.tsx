import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const posts = [
  { date: "2026-04-22", read: "8 min", title: "Building scalable notification & alert systems", category: "Automation", excerpt: "How to architect real-time event listeners and message queues to automate customer alerts without missing critical triggers." },
  { date: "2026-03-14", read: "6 min", title: "Integrating AI assistants into business workflows", category: "AI Solutions", excerpt: "Practical patterns for embedding LLM capabilities into internal portals, customer support, and document processing systems." },
  { date: "2026-02-28", read: "10 min", title: "Designing custom admin dashboards users actually adopt", category: "Custom Software", excerpt: "UX principles and data architecture decisions behind internal business tools that streamline daily operations." },
  { date: "2026-01-09", read: "5 min", title: "Why off-the-shelf software fails growing SMEs", category: "Strategy", excerpt: "When to transition from generic subscription SaaS to custom-built software tailored to your company's operational workflow." },
  { date: "2025-12-12", read: "7 min", title: "Modern Web & E-commerce architecture for 2026", category: "Engineering", excerpt: "Our go-to full-stack setup for high-speed corporate websites, automated lead capture, and secure payment processing." },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Notes from the build."
        sub="Practical insights on business automation, custom software engineering, AI integrations, and digital system design."
      />
      <section className="px-7 max-w-[1400px] mx-auto pb-24 max-md:px-5">
        <div className="flex flex-col">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a
                href="#"
                className="group grid grid-cols-1 md:grid-cols-[140px_1fr_120px] gap-6 md:gap-10 items-start py-10 border-t border-line first:border-t hover:pl-6 transition-[padding] duration-500 ease-smooth last:border-b"
              >
                <div className="font-mono text-[11px] text-subtle tracking-[0.12em]">
                  <div>{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</div>
                  <div className="mt-1">{p.read}</div>
                </div>
                <div>
                  <div className="font-mono text-coral text-[11px] tracking-[0.12em] uppercase mb-2">{p.category}</div>
                  <h3 className="text-2xl md:text-[28px] font-semibold tracking-[-0.025em] mb-3 text-ink group-hover:text-coral transition-colors duration-300 max-w-2xl">{p.title}</h3>
                  <p className="text-muted text-[15px] max-w-2xl leading-[1.55]">{p.excerpt}</p>
                </div>
                <div className="hidden md:flex justify-self-end items-center gap-2 text-sm text-ink">
                  Read
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
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
