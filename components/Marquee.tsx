const items = [
  "React", "Next.js", "TypeScript", "React Native", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Solidity", "Ethereum", "Web3", "Smart Contracts",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="trust-shell px-7 py-8 border-y border-line bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex items-center gap-10 max-md:flex-col max-md:items-stretch max-md:gap-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle flex-shrink-0">
          Trusted stack
        </div>
        <div
          className="flex-1 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max">
            {doubled.map((s, i) => (
              <span
                key={i}
                className="text-[22px] font-medium tracking-[-0.02em] text-ink whitespace-nowrap inline-flex items-center pr-14"
              >
                {s}
                <span className="ml-14 w-1 h-1 rounded-full bg-soft" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
