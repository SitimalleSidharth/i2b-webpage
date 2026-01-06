import Hero from "./Hero";
import Founder from "./Founder";
import AboutUs from "./AboutUs";
import WhatWeDo from "./WhatWeDo";
import Partners from "./Partners";
import WhyUs from "./WhyUs";
import Vision from "./Vision";
import Philosophy from "./Philosophy";
import Portfolio from "./Portfolio";
import ContactUs from "../../components/Contact2";

export default function Home() {
  return (
    <main>
      <Hero />
      <Founder />
      <AboutUs />
      <WhatWeDo />
      {/* Moved WhyUs before Partners for better storytelling flow */}
      <WhyUs />
      <Partners />
      <Philosophy/>
      <Portfolio/>
      <Vision />
      <ContactUs/>
    </main>
  );
}