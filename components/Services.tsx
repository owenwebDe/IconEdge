import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section id="services" className="px-7 py-32 max-w-[1400px] mx-auto max-md:px-5 max-md:py-20">
      <SectionHead
        num="01"
        eyebrow="Services"
        title={
          <>
            Three disciplines, <em className="serif text-coral px-[0.05em] font-normal">one team</em> that ships across all of them.
          </>
        }
        sub="Most studios pick a lane. We pick the project. Web, mobile, and hardware sit under one roof so the seams disappear."
      />

      <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-4 max-lg:grid-cols-1">
        <Reveal>
          <CardA />
        </Reveal>
        <Reveal delay={0.08}>
          <CardB />
        </Reveal>
        <Reveal delay={0.16}>
          <CardC />
        </Reveal>
      </div>
    </section>
  );
}

function CardShell({
  num,
  title,
  body,
  stack,
  iconBg,
  iconColor,
  icon,
  bigTitle = false,
  children,
}: {
  num: string;
  title: string;
  body: string;
  stack: string[];
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  bigTitle?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <article className="bento-card hoverable bg-surface border border-line rounded-xl p-8 cursor-pointer shadow-s1 transition-all duration-300 ease-smooth hover:-translate-y-[3px] hover:shadow-s3 hover:border-line-2 flex flex-col justify-between min-h-[460px]">
      <div>
        <div className="flex justify-between items-start">
          <div className={`w-11 h-11 rounded-md flex items-center justify-center ${iconBg} ${iconColor}`}>
            {icon}
          </div>
          <span className="font-mono text-[11px] text-subtle tracking-[0.12em]">{num}</span>
        </div>
        <h3
          className={`font-semibold tracking-[-0.025em] leading-[1.1] mb-2.5 ${
            bigTitle ? "text-[36px] mt-9" : "text-[28px] mt-7"
          }`}
        >
          {title}
        </h3>
        <p className="text-muted text-[15px] leading-[1.55] mb-6 max-w-[380px]">{body}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] py-1 px-2.5 bg-bg border border-line rounded-full text-ink"
            >
              {s}
            </span>
          ))}
        </div>
        {children}
      </div>
      <div className="more inline-flex items-center gap-1.5 font-medium text-[14px] text-ink py-2.5 px-4 bg-bg rounded-full border border-line w-fit transition-all duration-200 ease-smooth">
        See capability
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200 ease-smooth">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
}

function CardA() {
  return (
    <CardShell
      num="001"
      title="Web platforms"
      body="Marketing sites, dashboards, e-commerce, and SaaS products. Performance-first, accessible, and built to scale from launch to series C."
      stack={["Next.js", "React", "Node", "Postgres", "tRPC", "Tailwind"]}
      iconBg="bg-coral-soft"
      iconColor="text-coral"
      bigTitle
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 10h18M8 21h8M12 18v3" />
        </svg>
      }
    >
      <div className="relative bg-bg rounded-md p-3.5 overflow-hidden border border-line mt-5">
        <div className="flex gap-1.5 mb-1.5">
          <div className="h-[22px] flex-[2] bg-surface rounded-md border border-line" />
          <div className="h-[22px] flex-1 bg-coral-soft rounded-md" />
          <div className="h-[22px] flex-[1.5] bg-surface rounded-md border border-line" />
        </div>
        <div className="flex gap-1.5 mb-1.5">
          <div className="h-[22px] flex-[1.5] bg-surface rounded-md border border-line" />
          <div className="h-[22px] flex-[2] bg-surface rounded-md border border-line" />
        </div>
        <div className="h-[60px] mt-2 bg-surface rounded-md border border-line flex items-end gap-1 p-2">
          <div className="flex-1 bg-ink rounded-t-[2px]" style={{ height: "35%" }} />
          <div className="flex-1 bg-ink rounded-t-[2px]" style={{ height: "50%" }} />
          <div className="flex-1 bg-coral rounded-t-[2px]" style={{ height: "70%" }} />
          <div className="flex-1 bg-ink rounded-t-[2px]" style={{ height: "55%" }} />
          <div className="flex-1 bg-ink rounded-t-[2px]" style={{ height: "80%" }} />
          <div className="flex-1 bg-ink rounded-t-[2px]" style={{ height: "65%" }} />
          <div className="flex-1 bg-ink rounded-t-[2px]" style={{ height: "90%" }} />
        </div>
      </div>
    </CardShell>
  );
}

function CardB() {
  return (
    <CardShell
      num="002"
      title="Mobile apps"
      body="Native iOS and Android, or one shared codebase. Built for offline, real-time sync, and frame-perfect interaction."
      stack={["Swift", "Kotlin", "SwiftUI", "Jetpack", "React Native"]}
      iconBg="bg-blue-soft"
      iconColor="text-blue"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      }
    />
  );
}

function CardC() {
  return (
    <CardShell
      num="003"
      title="Hardware & IoT"
      body="Firmware, embedded Linux, and connected-device platforms. ESP32, STM32, custom boards — and the cloud they talk to."
      stack={["Rust", "C++", "ESP32", "STM32", "MQTT"]}
      iconBg="bg-green-soft"
      iconColor="text-[#047857]"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3M9 9h6v6H9z" />
        </svg>
      }
    />
  );
}
