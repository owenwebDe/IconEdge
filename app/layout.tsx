import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import WakeUpBoot from "@/components/WakeUpBoot";
import ChatBot from "@/components/ChatBot";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "IconEdge Technologies LTD — Custom Software, Business Automation & AI Solutions",
  description:
    "We build custom software, business automation, AI-powered systems, web and mobile platforms that help growing businesses eliminate manual work and scale operations.",
  keywords: [
    "software development company",
    "custom software development",
    "business automation",
    "AI automation",
    "web application development",
    "e-commerce development",
    "business software",
    "custom web development",
    "technology company Nigeria",
    "software development Nigeria",
    "IconEdge Technologies"
  ],
  openGraph: {
    title: "IconEdge Technologies LTD — Custom Software & Business Automation",
    description: "Build Smarter. Automate More. Grow Faster. Custom software, automation, and AI for growing businesses.",
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
        <ChatBot />
      </body>
    </html>
  );
}
