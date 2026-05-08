import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import CTABand from "@/components/CTABand";
import Testimonial from "@/components/Testimonial";

const principles = [
  { title: "Senior team only", body: "Every engineer who touches your project has shipped a real product before. No outsourced churn, no mid-level management of juniors." },
  { title: "Working demos beat slides", body: "We would rather show you a half-broken prototype than a polished slide. Every Friday brings something you can click." },
  { title: "Accessibility is the floor", body: "WCAG 2.1 AA is a baseline for us, not a deliverable. If it does not work for everyone, it is not done." },
  { title: "Performance is a feature", body: "Sub-2-second LCP, 95+ Lighthouse, no exceptions. The fastest site is also the cheapest to run." },
  { title: "We pick stacks, not religions", body: "Next.js, Swift, Rust, plain HTML — whatever ships your product fastest with the lowest long-term cost." },
  { title: "Transparent always", body: "You see the repo, the staging URL, the burndown, and the bill. We work with you, not for you." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A senior engineering team that picks projects, not lanes."
        sub="IconEdge Technology Ltd was founded to close the gap between web, mobile, and hardware studios. One team, one process, one shipping date."
      />
      <Stats />
      <section className="px-7 max-w-[1400px] mx-auto py-24 max-md:px-5 max-md:py-16">
        <Reveal>
          <h2 className="font-sans text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-14 max-w-3xl text-ink">
            Six principles <em className="serif text-coral font-normal">that show up in every line of code we ship.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="bg-surface border border-line rounded-xl p-8 h-full shadow-s1 transition-all duration-300 ease-smooth hover:-translate-y-[3px] hover:shadow-s3">
                <div className="font-mono text-coral text-[11px] tracking-[0.12em] uppercase mb-4">/0{i + 1}</div>
                <h3 className="text-[22px] font-semibold tracking-[-0.025em] mb-2.5 text-ink">{p.title}</h3>
                <p className="text-muted text-[15px] leading-[1.55]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Testimonial />
      <CTABand />
    </>
  );
}
