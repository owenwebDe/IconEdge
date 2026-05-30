import Link from "next/link";
import Logo from "./Logo";

const services = [
  ["Web platforms", "/services"],
  ["Mobile apps", "/services"],
  ["Blockchain & Web3", "/services"],
  ["Telegram Bots", "/services"],
];
const studio = [
  ["Work", "/work"],
  ["Process", "/process"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
const resources = [
  ["Insights", "/blog"],
  ["Brand kit", "#"],
  ["Press", "#"],
];

export default function Footer() {
  return (
    <footer className="footer-shell bg-surface border-t border-line py-14 px-7 max-md:px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr] gap-10 pb-10 border-b border-line max-md:grid-cols-2">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-ink font-semibold text-[17px] tracking-[-0.025em] mb-3.5">
              <Logo size={26} />
              <span>IconEdge</span>
            </Link>
            <p className="text-[14px] text-muted leading-[1.55] max-w-[280px]">
              Web, mobile, and blockchain development under one roof. Built for startups, enterprise, and everyone serious about shipping.
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
        <div className="flex justify-between pt-6 text-[13px] text-muted flex-wrap gap-4">
          <div>© {new Date().getFullYear()} IconEdge Technologies Ltd · All rights reserved</div>
          <div className="flex gap-5">
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200">LinkedIn</a>
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200">X</a>
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200">GitHub</a>
            <a href="#" className="text-muted hover:text-ink transition-colors duration-200">Dribbble</a>
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
