"use client";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { useState } from "react";

const projectTypes = ["Web platform", "Mobile app", "Blockchain / Web3", "Telegram Bot", "Not sure yet"];
const budgets = ["Under $25k", "$25k–$75k", "$75k–$200k", "$200k+"];
const timelines = ["ASAP", "1–2 months", "3–6 months", "Flexible"];

export default function ContactPage() {
  const [type, setType] = useState<string>(projectTypes[0]);
  const [budget, setBudget] = useState<string>(budgets[1]);
  const [timeline, setTimeline] = useState<string>(timelines[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the project."
        sub="The more you share, the sharper our first reply. We come back within a working day with next steps, scope questions, and a rough range."
      />
      <section className="px-7 max-w-[1400px] mx-auto pb-24 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 max-md:px-5">
        <Reveal>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-10"
          >
            <Field label="What kind of project is this?">
              <Pills options={projectTypes} value={type} onChange={setType} />
            </Field>
            <Field label="Approximate budget?">
              <Pills options={budgets} value={budget} onChange={setBudget} />
            </Field>
            <Field label="Timeline?">
              <Pills options={timelines} value={timeline} onChange={setTimeline} />
            </Field>
            <Field label="Your name">
              <input type="text" required className="form-input" placeholder="Adaeze Okafor" />
            </Field>
            <Field label="Email">
              <input type="email" required className="form-input" placeholder="you@company.com" />
            </Field>
            <Field label="Company">
              <input type="text" className="form-input" placeholder="Optional" />
            </Field>
            <Field label="Tell us about it">
              <textarea required rows={6} className="form-input resize-none" placeholder="What you are building, who it is for, and where you are stuck." />
            </Field>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-[22px] py-[13px] bg-coral text-bg rounded-full text-[14px] font-medium shadow-[0_6px_20px_rgba(255,92,57,0.3)] hover:bg-coral-2 hover:-translate-y-px transition-all duration-200 ease-smooth"
            >
              {submitted ? "Sent — we will reply within a working day" : "Send"}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <style jsx global>{`
              .form-input {
                width: 100%;
                background: var(--surface);
                border: 1px solid var(--border);
                border-radius: 10px;
                padding: 14px 16px;
                color: var(--ink);
                font-size: 15px;
                font-family: inherit;
                outline: none;
                transition: border-color .25s cubic-bezier(0.22,1,0.36,1);
              }
              .form-input:focus { border-color: var(--ink); }
              .form-input::placeholder { color: var(--subtle); }
            `}</style>
          </form>
        </Reveal>

        <Reveal delay={0.15}>
          <aside className="space-y-9 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-3 font-medium">Email</h6>
              <a href="mailto:hello@iconedge.tech" className="text-[19px] text-ink hover:text-coral transition-colors duration-200">hello@iconedge.tech</a>
            </div>
            <div>
              <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-3 font-medium">Studio</h6>
              <p className="text-[15px] text-muted leading-[1.55]">
                IconEdge Technologies Ltd<br />
                Abuja, Nigeria
              </p>
            </div>
            <div>
              <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-3 font-medium">Phone</h6>
              <a href="tel:+2348119503680" className="text-[15px] text-ink hover:text-coral transition-colors duration-200">08119503680</a>
            </div>
            <div>
              <h6 className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-3 font-medium">Hours</h6>
              <p className="text-[15px] text-muted">Monday–Friday<br />9:00–18:00 local time</p>
            </div>
            <div className="p-6 border border-line rounded-xl bg-surface shadow-s1">
              <div className="flex items-center gap-2 text-[#047857] text-[13px] mb-3 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Currently taking new projects
              </div>
              <p className="text-[14px] text-muted leading-[1.55]">
                We typically have one to two slots per quarter. Reach out early to lock a kickoff date.
              </p>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-3 font-medium">{label}</span>
      {children}
    </label>
  );
}

function Pills({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ease-smooth ${
              active ? "bg-ink text-bg border-ink" : "bg-surface text-ink border-line hover:border-ink"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
