import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const capabilities = [
  {
    num: "01",
    title: "Business Automation",
    body: "Help your business eliminate manual work, streamline customer communication, automate lead follow-ups, and connect disparate systems with real-time workflow triggers.",
    deliverables: [
      "WhatsApp automation",
      "Telegram automation",
      "AI assistants",
      "Automated customer support",
      "Lead capture and follow-up",
      "Workflow automation",
      "API integrations",
      "Notifications and alerts"
    ],
    stack: ["WhatsApp Business", "Telegram Bot API", "Python", "Webhooks", "REST APIs", "Automations"],
  },
  {
    num: "02",
    title: "Custom Business Software",
    body: "Build software engineered specifically around how your business operates. From operational dashboards to customer portals, we turn complex workflows into intuitive digital platforms.",
    deliverables: [
      "CRM systems",
      "Admin dashboards",
      "Inventory systems",
      "Booking systems",
      "Management platforms",
      "Business portals",
      "Internal tools",
      "Reporting systems"
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS"],
  },
  {
    num: "03",
    title: "Web & E-commerce",
    body: "Build modern, fast corporate websites and online stores designed around business goals, seamless customer experiences, and high conversions.",
    deliverables: [
      "Corporate websites",
      "E-commerce platforms",
      "Payment integration",
      "Customer portals",
      "Online booking",
      "Product catalogues",
      "Custom web applications"
    ],
    stack: ["Next.js", "React", "TypeScript", "Stripe", "Paystack", "Node.js", "Vercel"],
  },
  {
    num: "04",
    title: "AI Solutions",
    body: "Integrate practical AI capabilities directly into your business operations to process information faster, automate responses, and improve customer experience.",
    deliverables: [
      "AI customer support",
      "AI assistants",
      "Document processing",
      "AI-powered search",
      "Automated responses",
      "Business intelligence",
      "AI workflow integrations"
    ],
    stack: ["OpenAI API", "Python", "LangChain", "Vector DBs", "FastAPI", "Node.js"],
  },
  {
    num: "05",
    title: "Mobile & Web Applications",
    body: "Build scalable cross-platform mobile apps and web platforms for growing businesses and startups looking for performance, security, and smooth user experiences.",
    deliverables: [
      "Customer-facing applications",
      "Business applications",
      "SaaS platforms",
      "Mobile apps (iOS & Android)",
      "Web applications",
      "APIs and backend systems"
    ],
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase", "AWS"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Custom software, automation, and AI for growing businesses."
        sub="We build practical digital systems that solve real operational problems, save time, and help your business scale efficiently."
      />
      <section className="px-7 max-w-[1400px] mx-auto py-24 max-md:px-5 max-md:py-16">
        <div className="space-y-24">
          {capabilities.map((c) => (
            <Reveal key={c.num}>
              <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10 pb-24 border-b border-line last:border-b-0 last:pb-0">
                <div className="font-mono text-coral text-[11px] tracking-[0.12em] uppercase font-medium">
                  <div className="w-6 h-px bg-coral mb-4" />
                  {c.title}
                </div>
                <div>
                  <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-5 text-ink">{c.title}</h2>
                  <p className="text-muted text-[17px] max-w-[680px] mb-10 leading-[1.55]">{c.body}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-4 font-medium">Deliverables</h6>
                      <ul className="space-y-2 text-[15px]">
                        {c.deliverables.map((d) => <li key={d} className="text-ink">{d}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-4 font-medium">Sample stack</h6>
                      <div className="flex flex-wrap gap-1.5">
                        {c.stack.map((s) => <span key={s} className="font-mono text-[12px] px-2.5 py-1 bg-bg border border-line rounded-full text-ink">{s}</span>)}
                      </div>
                    </div>
                  </div>
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
