import { Route, Routes, useLocation } from "react-router-dom"
import AboutUs from "./pages/Home/AboutUs"
import Contact from "./components/Contact"
import Founder from "./pages/Home/Founder.jsx"
import Hero from "./pages/Home/Hero"
import Navbar from "./components/Navbar"
import Partners from "./pages/Home/Partners"
import Vision from "./pages/Home/Vision"
import WhatWeDo from "./pages/Home/WhatWeDo"
import WhyUs from "./pages/Home/WhyUs"
import Careers from "./pages/Careers/Careers"
import { useEffect } from "react"
import Footer from "./components/Footer.jsx"

export default function App() {

  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (e.g., #about), scroll to it
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the DOM is ready
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top on page change if no hash
    }
  }, [pathname, hash]);
  return (
     <div className="relative overflow-hidden selection:bg-primary selection:text-black">
      {/* Global Background Orbs */}
      {/* <div className="ambient-orb orb-primary w-[600px] h-[600px] -top-20 -left-20" /> */}
      <div className="ambient-orb orb-accent w-[500px] h-[500px] top-[20%] -right-20 animation-delay-2000" style={{ animationDuration: '25s' }} />
      <div className="ambient-orb orb-primary w-[700px] h-[700px] top-[60%] -left-40" style={{ animationDuration: '30s' }} />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/careers" element={<Careers />} />
      </Routes>

     
      <Footer />
    </div>
  )
}