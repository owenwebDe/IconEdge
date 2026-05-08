"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

const desktopLinks = links.slice(0, 5);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Floating-pill nav — solid ink pill, sits cleanly over both the dark
          hero and the light sections below */}
      <header className="nav-shell fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[min(calc(100vw-40px),960px)] max-md:top-3 max-md:w-[calc(100vw-24px)]">
        <nav className="flex items-center gap-1.5 px-2.5 py-2 bg-[rgba(20,20,28,0.85)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.28)]">
          <Link
            href="/"
            className="flex items-center gap-2.5 pl-3 pr-3.5 py-2 rounded-full text-bg hover:bg-white/[0.08] transition-colors duration-200"
          >
            <Logo size={26} light />
            <span className="font-semibold text-[16px] tracking-[-0.025em] max-sm:hidden">
              IconEdge
            </span>
          </Link>

          {/* Centre link group with sliding hover pill */}
          <ul
            className="flex items-center flex-1 justify-center list-none gap-0 max-lg:hidden"
            onMouseLeave={() => setHovered(null)}
          >
            {desktopLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.href} className="relative">
                  {hovered === l.href && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.10]"
                      transition={{ type: "spring", duration: 0.45, bounce: 0.18 }}
                    />
                  )}
                  <Link
                    href={l.href}
                    onMouseEnter={() => setHovered(l.href)}
                    className={`relative inline-flex px-4 py-2.5 text-[14.5px] font-medium transition-colors duration-200 ${
                      isActive ? "text-bg" : "text-bg/55 hover:text-bg"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5 ml-auto lg:ml-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral text-bg text-[14px] font-medium hover:bg-coral-2 hover:-translate-y-px transition-all duration-200 ease-smooth shadow-[0_4px_14px_rgba(255,92,57,0.35)] max-md:hidden"
            >
              Start a project
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-coral text-bg hover:bg-coral-2 transition-colors duration-200 shadow-[0_4px_14px_rgba(255,92,57,0.35)]"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[300] bg-bg lg:hidden flex flex-col transition-opacity duration-300 ease-smooth ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 text-ink font-semibold text-[17px] tracking-[-0.025em]"
          >
            <Logo size={26} />
            <span>IconEdge</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-line bg-surface text-ink hover:bg-tint transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col list-none px-5 py-8 gap-0.5 flex-1">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-[28px] font-semibold tracking-[-0.025em] transition-colors duration-200 ease-smooth ${
                    isActive ? "text-coral" : "text-ink hover:text-coral"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-5 pb-8 pt-6 border-t border-line">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-full bg-ink text-bg text-[15px] font-medium shadow-s2 transition-all duration-200 ease-smooth"
          >
            Start a project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
