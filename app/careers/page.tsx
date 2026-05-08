import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const roles = [
  { title: "Senior frontend engineer", team: "Engineering", location: "Remote · GMT ±3", type: "Full-time" },
  { title: "iOS engineer", team: "Mobile", location: "Hybrid · Lagos / Remote", type: "Full-time" },
  { title: "Embedded engineer", team: "Hardware", location: "On-site · Lagos", type: "Full-time" },
  { title: "Product designer", team: "Design", location: "Remote · GMT ±3", type: "Full-time" },
  { title: "Engineering intern", team: "Engineering", location: "On-site · Lagos", type: "6-month rotation" },
];

const benefits = [
  { title: "Senior salary, every level", body: "We benchmark to the top quartile of the market and pay the same wherever you live." },
  { title: "Real flexibility", body: "Choose remote, hybrid, or on-site. Choose your hours within four core overlap." },
  { title: "Sabbatical at year four", body: "Six paid weeks. We have all needed it. We all came back." },
  { title: "Hardware budget", body: "Whatever you need to do your best work. Mac, ThinkPad, soldering iron — your call." },
  { title: "Learning budget", body: "$3k a year for conferences, courses, books — anything that ships you forward." },
  { title: "Equity from day one", body: "Every full-time employee owns a slice of what we are building." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the edge with us."
        sub="We hire for taste, judgment, and a track record of shipping. The rest we figure out together."
      />
      <section className="px-7 max-w-[1400px] mx-auto py-24 max-md:px-5 max-md:py-16">
        <Reveal>
          <h2 className="font-sans text-[clamp(28px,3.5vw,44px)] font-semibold tracking-[-0.02em] mb-12 text-ink">Open roles</h2>
        </Reveal>
        <div>
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <a
                href="#"
                className="group grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_140px] gap-6 items-center py-7 border-t border-line first:border-t hover:pl-6 transition-[padding] duration-500 ease-smooth last:border-b"
              >
                <div className="text-2xl md:text-[26px] font-semibold tracking-[-0.025em] text-ink group-hover:text-coral transition-colors duration-300">{r.title}</div>
                <div className="text-sm text-muted">{r.team}</div>
                <div className="text-sm text-muted">{r.location}</div>
                <div className="flex items-center justify-between md:justify-end gap-4 text-sm">
                  <span className="text-subtle">{r.type}</span>
                  <span className="w-10 h-10 border border-line rounded-full bg-bg flex items-center justify-center group-hover:border-ink group-hover:bg-ink group-hover:text-bg group-hover:-rotate-45 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-7 max-w-[1400px] mx-auto py-24 max-md:px-5 max-md:py-16">
        <Reveal>
          <h2 className="font-sans text-[clamp(28px,3.5vw,44px)] font-semibold tracking-[-0.02em] mb-12 text-ink">Why work here</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="p-8 border border-line rounded-xl bg-surface h-full shadow-s1 transition-all duration-300 ease-smooth hover:-translate-y-[3px] hover:shadow-s3">
                <h3 className="text-xl font-semibold tracking-[-0.025em] mb-2.5 text-ink">{b.title}</h3>
                <p className="text-muted text-[15px] leading-[1.55]">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
