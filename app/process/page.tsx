import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

const phases = [
  {
    n: "01",
    title: "Discover",
    body: "Two weeks. Stakeholder interviews, competitive audit, technical reality check, and a brief that becomes our north star. You leave with a written direction; no contract decisions yet.",
    bullets: ["Stakeholder interviews", "Technical audit", "Competitive scan", "Written brief"],
  },
  {
    n: "02",
    title: "Design",
    body: "Architecture diagrams, wireframes, motion direction, and a pixel-tight UI in Figma. We pressure-test edge cases before a line of code is written.",
    bullets: ["Information architecture", "Wireframes", "High-fidelity UI", "Motion direction", "Accessibility plan"],
  },
  {
    n: "03",
    title: "Build",
    body: "Two-week sprints with a Loom every Friday and a working demo. You see progress in real time, not at the end.",
    bullets: ["Two-week sprints", "Friday Loom updates", "Working demo each sprint", "Continuous staging deploys"],
  },
  {
    n: "04",
    title: "Ship",
    body: "Staging, QA, accessibility audit, performance review, and a launch playbook. We hand over a system, not a folder of files.",
    bullets: ["QA pass", "WCAG 2.1 AA audit", "Performance review", "Launch playbook", "Team training"],
  },
  {
    n: "05",
    title: "Scale",
    body: "Monitoring, performance, and a roadmap for the next twelve months. We stay engaged on a retainer or hand over cleanly.",
    bullets: ["Observability", "Quarterly reviews", "Twelve-month roadmap", "Retainer or handover"],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Five steps. No surprises."
        sub="The same process whether it is a marketing site or a connected device. Predictable cadences, working demos, and a written deliverable at the end of every phase."
      />
      <Process />
      <section className="px-7 max-w-[1400px] mx-auto py-24 max-md:px-5 max-md:py-16">
        <div className="space-y-20">
          {phases.map((p) => (
            <Reveal key={p.n}>
              <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 pb-20 border-b border-line last:border-b-0 last:pb-0">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface border border-line shadow-s1 text-coral flex items-center justify-center text-sm font-semibold font-mono">{p.n}</div>
                </div>
                <div>
                  <h2 className="font-sans text-3xl md:text-4xl font-semibold tracking-[-0.025em] mb-4 text-ink">{p.title}</h2>
                  <p className="text-muted text-[17px] max-w-[680px] mb-7 leading-[1.55]">{p.body}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 max-w-[680px]">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-[15px] text-ink">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
