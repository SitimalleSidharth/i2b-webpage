import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CareersTwo from "./pages/Careers/Careers2.jsx";

// Lazy Load for Performance
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Careers = lazy(() => import("./pages/Careers/Careers.jsx"));

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}, []);

 useEffect(() => {
  // Force true top reset first (prevents Founder landing)
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  if (!hash) return;

  const id = hash.replace('#', '');

  const tryScroll = () => {
    const el = document.getElementById(id);
    if (!el) {
      requestAnimationFrame(tryScroll);
      return;
    }

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  tryScroll();
}, [pathname, hash]);
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative selection:bg-primary selection:text-black">
        <div className="ambient-orb orb-accent w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-[10%] -right-20" />
        <div className="ambient-orb orb-primary w-[400px] h-[400px] md:w-[700px] md:h-[700px] top-[60%] -left-40" />
        
        <Navbar />
        
        <Suspense fallback={<div className="h-screen bg-bg flex items-center justify-center font-mono text-primary">I2B_LOADING...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </LazyMotion>
  );
}