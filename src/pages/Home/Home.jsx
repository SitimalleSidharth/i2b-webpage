import Hero from "./Hero";
import Founder from "./Founder";
import AboutUs from "./AboutUs";
import WhatWeDo from "./WhatWeDo";
import Partners from "./Partners";
import WhyUs from "./WhyUs";
import Vision from "./Vision";
import Contact from "../../components/Contact";
import Philosophy from "./Philosophy";
import Portfolio from "./Portfolio";
import ContactUs from "../../components/Contact2";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>I2B Technologies | Venture Studio & AI Labs</title>
        <meta name="description" content="I2B is a venture studio building AI-first consumer & B2B technology companies. We partner with founders to build scalable enterprise platforms." />
        <link rel="canonical" href="https://i2b.in/" />
      </Helmet>
      <Hero />
      
      <WhatWeDo />
      <AboutUs />
      <Partners />  
      {/* <Founder /> */}
      {/* <WhyUs /> */}
      <Philosophy/>
      <Portfolio/>
      <Vision />
      <Contact />
      {/* <ContactUs/> */}
    </main>
  );
}