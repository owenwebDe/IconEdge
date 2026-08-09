import Link from "next/link";
import Logo from "./Logo";

const services = [
  ["Business Automation", "/services"],
  ["Custom Software", "/services"],
  ["Web & E-commerce", "/services"],
  ["AI Solutions", "/services"],
  ["Mobile Applications", "/services"],
];
const studio = [
  ["Solutions", "/services"],
  ["Work & Demos", "/work"],
  ["Process", "/process"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];
const resources = [
  ["Insights", "/blog"],
  ["Brand Kit", "#"],
];

/* All quick-links merged for the compact mobile layout */
const mobileLinks = [
  ["Solutions", "/services"],
  ["Work", "/work"],
  ["Process", "/process"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="footer-shell bg-surface border-t border-line py-14 px-7 max-md:px-5 max-md:py-10">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Desktop: 5-column grid (unchanged) ── */}
        <div className="hidden md:grid md:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr] gap-10 pb-10 border-b border-line">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-ink font-semibold text-[17px] tracking-[-0.025em] mb-3.5">
              <Logo size={26} />
              <span>IconEdge</span>
            </Link>
            <p className="text-[14px] text-muted leading-[1.55] max-w-[280px]">
              IconEdge Technologies LTD builds custom software, business automation, AI integrations, and scalable digital systems for growing businesses.
            </p>
          </div>
          <FooterCol title="Services" items={services} />
          <FooterCol title="Studio" items={studio} />
          <FooterCol title="Resources" items={resources} />
          <div>
            <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-5 font-medium">Newsletter</h6>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full bg-bg border border-line rounded-full py-2.5 px-4 text-[14px] outline-none text-ink transition-colors duration-200 ease-smooth focus:border-ink placeholder:text-subtle"
            />
            <button className="mt-2.5 w-full py-2.5 px-4 rounded-full bg-ink text-bg text-[14px] font-medium hover:bg-ink-2 hover:-translate-y-px transition-all duration-200 ease-smooth">
              Subscribe
            </button>
          </div>
        </div>

        {/* ── Mobile: compact stacked layout ── */}
        <div className="md:hidden flex flex-col gap-6 pb-8 border-b border-line">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-ink font-semibold text-[17px] tracking-[-0.025em] mb-2">
              <Logo size={24} />
              <span>IconEdge</span>
            </Link>
            <p className="text-[13px] text-muted leading-[1.5]">
              Custom software, automation & AI systems for growing businesses.
            </p>
          </div>

          {/* Quick links – inline with dot separators */}
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {mobileLinks.map(([label, href], i) => (
              <span key={label} className="flex items-center gap-3">
                <Link href={href || "#"} className="text-[13px] text-muted hover:text-ink transition-colors duration-200">
                  {label}
                </Link>
                {i < mobileLinks.length - 1 && (
                  <span className="text-line text-[10px]">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Newsletter – compact */}
          <div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 min-w-0 bg-bg border border-line rounded-full py-2 px-4 text-[13px] outline-none text-ink transition-colors duration-200 ease-smooth focus:border-ink placeholder:text-subtle"
              />
              <button className="py-2 px-5 rounded-full bg-ink text-bg text-[13px] font-medium hover:bg-ink-2 transition-all duration-200 ease-smooth whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar (shared) ── */}
        <div className="flex justify-between pt-6 text-[13px] text-muted flex-wrap gap-4 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-3 max-md:pt-5">
          <div className="max-md:text-[12px]">© {new Date().getFullYear()} IconEdge Technologies Ltd</div>
          <div className="flex gap-5 max-md:gap-4">
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200 max-md:text-[12px]">LinkedIn</a>
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200 max-md:text-[12px]">X</a>
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200 max-md:text-[12px]">GitHub</a>
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200 max-md:text-[12px]">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: (string | undefined)[][] }) {
  return (
    <div>
      <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-5 font-medium">{title}</h6>
      <ul className="list-none">
        {items.map(([label, href]) => (
          <li key={label} className="py-1">
            <Link href={href || "#"} className="text-[14px] text-muted hover:text-ink transition-colors duration-200 ease-smooth">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
