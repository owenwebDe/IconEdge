import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Stack from "@/components/Stack";
import Testimonial from "@/components/Testimonial";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Stats />
      <Stack />
      <Testimonial />
      <CTABand />
    </>
  );
}
