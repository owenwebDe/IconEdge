import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

const phases = [
  {
    n: "01",
    title: "Discover",
    body: "We understand your business, goals, operational bottlenecks, and the exact problem you need to solve.",
    bullets: ["Business goal alignment", "Operational workflow audit", "System requirement analysis", "Scope definition"],
  },
  {
    n: "02",
    title: "Plan",
    body: "We define the solution architecture, technology stack, project scope, timeline, and exact deliverables.",
    bullets: ["System architecture", "UI/UX & workflow design", "Database schema mapping", "Project roadmap & milestones"],
  },
  {
    n: "03",
    title: "Build",
    body: "Our team designs and develops your system with regular progress updates and continuous staging demos.",
    bullets: ["Full-stack engineering", "Regular progress updates", "Live staging access", "Continuous integration & testing"],
  },
  {
    n: "04",
    title: "Launch",
    body: "We test, deploy, and ensure everything operates smoothly, securely, and reliably in your production environment.",
    bullets: ["Production deployment", "Security & QA pass", "Performance verification", "Team onboarding"],
  },
  {
    n: "05",
    title: "Improve",
    body: "We provide ongoing technical support, system maintenance, and feature enhancements as your business grows.",
    bullets: ["System monitoring", "Maintenance & updates", "Scalability enhancements", "Ongoing technical support"],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Five steps. Clear execution."
        sub="A structured, predictable workflow whether you need business automation, custom software, or a complex digital platform."
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
