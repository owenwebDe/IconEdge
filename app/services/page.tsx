import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

const capabilities = [
  {
    num: "01",
    title: "Web platforms",
    body: "From marketing sites to multi-tenant SaaS dashboards. We build with Next.js, React, Node, and databases, deploy to Vercel or AWS, and instrument everything with telemetry from day one.",
    deliverables: ["Marketing sites", "Customer portals", "Admin dashboards", "E-commerce", "Multi-tenant SaaS", "Internal tools"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "MongoDB", "Vercel", "AWS"],
  },
  {
    num: "02",
    title: "Mobile apps",
    body: "Cross-platform mobile apps for Android and iOS using React Native. Built for offline capability, real-time sync, and frame-perfect interaction across all devices.",
    deliverables: ["Android apps", "iOS apps", "React Native", "App store launch", "Push notifications", "Offline support"],
    stack: ["React Native", "TypeScript", "Expo", "Firebase", "Redux", "REST APIs"],
  },
  {
    num: "03",
    title: "Blockchain & Web3",
    body: "Smart contracts, decentralized applications, and Web3 integrations. From Solidity development to wallet connections and token implementations.",
    deliverables: ["Smart contracts", "dApps", "Token development", "Wallet integration", "Web3 APIs", "NFT platforms"],
    stack: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "MetaMask", "IPFS"],
  },
  {
    num: "04",
    title: "Telegram Bots & Automation",
    body: "Custom Telegram bots for crypto tracking, community management, and automated alerts. Built with Python and integrated with various APIs for real-time data.",
    deliverables: ["Crypto alert bots", "Token trackers", "Community bots", "API integrations", "Real-time notifications", "Data scrapers"],
    stack: ["Python", "Telegram API", "DexScreener", "Web scraping", "REST APIs", "Automation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Web, mobile, and blockchain under one roof."
        sub="We bundle disciplines that most studios split across vendors. One contract, one team, one shipping date."
      />
      <section className="px-7 max-w-[1400px] mx-auto py-24 max-md:px-5 max-md:py-16">
        <div className="space-y-24">
          {capabilities.map((c) => (
            <Reveal key={c.num}>
              <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10 pb-24 border-b border-line last:border-b-0 last:pb-0">
                <div className="font-mono text-coral text-[11px] tracking-[0.12em] uppercase font-medium">
                  <div className="w-6 h-px bg-coral mb-4" />
                  {c.num} / {c.title}
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
