import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import WakeUpBoot from "@/components/WakeUpBoot";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "IconEdge Technology Ltd — software, mobile, hardware",
  description:
    "We build frontend and backend platforms, native iOS and Android apps, and hardware-integrated systems. Software, hardware, and the integration in between.",
  keywords: ["IconEdge", "frontend", "backend", "mobile apps", "iOS", "Android", "IoT", "hardware", "software development"],
  openGraph: {
    title: "IconEdge Technology Ltd",
    description: "We build the edge of technology.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrument.variable}`}
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
