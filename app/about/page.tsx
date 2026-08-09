import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import CTABand from "@/components/CTABand";
import Testimonial from "@/components/Testimonial";

const principles = [
  { title: "Senior Engineering Only", body: "Every solution is built by experienced full-stack engineers who understand system architecture, security, and operational workflows." },
  { title: "Business Outcomes First", body: "We focus on saving time, increasing operational efficiency, and automating manual work rather than building software for its own sake." },
  { title: "Full-Stack Delivery", body: "From web and mobile frontends to backends, databases, APIs, and AI integrations — we handle your digital system end-to-end." },
  { title: "Reliable & Scalable Systems", body: "Fast response times, robust data management, and clean architecture engineered to perform reliably as your business grows." },
  { title: "Practical Technology Selection", body: "We pick modern, production-proven technology stacks that deliver your project efficiently with low long-term maintenance costs." },
  { title: "Complete Transparency", body: "Clear scope boundaries, regular progress updates, direct engineering access, and zero hidden surprises throughout development." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A technology partner focused on practical digital solutions for modern businesses."
        sub="We combine full-stack engineering, business automation, AI integrations, modern web tech, and scalable architecture to turn business problems into reliable digital systems."
      />
      <section className="px-7 max-w-[1400px] mx-auto py-12 max-md:px-5">
        <Reveal>
          <div className="bg-surface border border-line rounded-2xl p-10 md:p-14 shadow-s1 max-w-4xl mx-auto">
            <h2 className="font-sans text-[clamp(26px,3.2vw,42px)] font-semibold tracking-[-0.03em] leading-[1.15] mb-6 text-ink">
              Building technology around the way <em className="serif text-coral font-normal">your business actually works.</em>
            </h2>
            <p className="text-muted text-[17px] leading-[1.65] mb-4">
              IconEdge Technologies LTD is a technology company focused on building practical digital solutions for modern businesses.
            </p>
            <p className="text-muted text-[17px] leading-[1.65] mb-4">
              We combine full-stack engineering, automation, AI, modern web technologies, and scalable software architecture to turn business problems into reliable digital systems.
            </p>
            <p className="text-muted text-[17px] leading-[1.65]">
              From customer-facing websites and applications to internal dashboards, automation workflows, and AI-powered tools, we build technology around the way each business actually operates.
            </p>
          </div>
        </Reveal>
      </section>
      <Stats />
      <section className="px-7 max-w-[1400px] mx-auto py-24 max-md:px-5 max-md:py-16">
        <Reveal>
          <h2 className="font-sans text-[clamp(32px,4vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-14 max-w-3xl text-ink">
            Six engineering standards <em className="serif text-coral font-normal">behind every system we ship.</em>
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
