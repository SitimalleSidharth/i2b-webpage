import Hero from "./Hero";
import Founder from "./Founder";
import AboutUs from "./AboutUs";
import WhatWeDo from "./WhatWeDo";
import Partners from "./Partners";
import WhyUs from "./WhyUs";
import Vision from "./Vision";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Founder />
      <AboutUs />
      <WhatWeDo />
      <Partners />
      <WhyUs />
      <Vision />
      <Contact />
    </main>
  );
}