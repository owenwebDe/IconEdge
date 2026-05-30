import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#F4F7FB", 2: "#ECF1F8" },
        surface: "#FFFFFF",
        tint: "#E8EFF8",
        ink: { DEFAULT: "#2D3142", 2: "#1A1A24" },
        muted: "#5A6478",
        subtle: "#8B95A8",
        soft: "#B6BFD0",
        coral: { DEFAULT: "#F26419", soft: "#FDE8D7", 2: "#F5863D" },
        // legacy aliases — keep so previously-shipped pages still compile
        navy: { DEFAULT: "#2D3142", 2: "#1A1A24", 3: "#3D4156" },
        orange: { DEFAULT: "#F26419", soft: "#F5863D", deep: "#D4570F" },
      },
      fontFamily: {
        sans: ["var(--font-garamond)", "Garamond", "serif"],
        serif: ["var(--font-garamond)", "Garamond", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderColor: {
        line: "#E4EAF2",
        "line-2": "#D4DCEA",
      },
      backgroundColor: {
        line: "#E4EAF2",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
        xl: "28px",
        "2xl": "36px",
      },
      boxShadow: {
        s1: "0 1px 2px rgba(15, 23, 42, 0.04)",
        s2: "0 1px 3px rgba(15, 23, 42, 0.05), 0 4px 12px rgba(15, 23, 42, 0.04)",
        s3: "0 4px 16px rgba(15, 23, 42, 0.06), 0 12px 40px rgba(15, 23, 42, 0.08)",
        s4: "0 8px 32px rgba(15, 23, 42, 0.10), 0 24px 60px rgba(15, 23, 42, 0.12)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
