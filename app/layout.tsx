import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import WakeUpBoot from "@/components/WakeUpBoot";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "IconEdge Technologies Ltd — Web, Mobile & Blockchain Development",
  description:
    "We build frontend and backend platforms, cross-platform mobile apps, and blockchain solutions. Web, mobile, and blockchain development under one roof.",
  keywords: ["IconEdge", "frontend", "backend", "mobile apps", "React", "React Native", "blockchain", "smart contracts", "Web3", "software development"],
  openGraph: {
    title: "IconEdge Technologies Ltd",
    description: "We build the edge of technology.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${GeistMono.variable}`}
    >
      <body className="loading">
        <Cursor />
        <WakeUpBoot />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
