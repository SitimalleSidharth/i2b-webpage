import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

const keywords = [
  "AI-FIRST", "VENTURE STUDIO", "PRODUCT LAB", "FOUNDER-CENTRIC",
  "LLMS", "NEURAL NETS", "AUTOMATION", "CLOUD ARCHITECTURE", 
  "DATA SYSTEMS", "MACHINE LEARNING", "FINTECH", "SAAS", 
  "SUPPLY CHAIN", "EDTECH", "HEALTHTECH", "LOGISTICS", 
  "B2B PLATFORMS", "SCALABLE", "INTELLIGENT", "INCUBATION"
];

function FloatingTile({ text, x, y, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.4, 0.55, 0.4],
        x: [0, 12, -12, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className="absolute px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[8px] md:text-[10px] font-mono text-primary/40 tracking-widest whitespace-nowrap pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

  const gridTiles = useMemo(() => {
    return keywords.map((text, i) => ({
      text,
      x: ((i % 5) + 1) * 16 + (Math.random() - 0.5) * 5,
      y: (Math.floor(i / 5) + 1) * 18 + (Math.random() - 0.5) * 5,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">

      {/* Floating tiles only on desktop */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 hidden md:block">
          {gridTiles.map((tile, i) => <FloatingTile key={i} {...tile} />)}
        </div>
      )}

      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(106,227,255,0.12),transparent_65%)]" />

      <motion.div style={{ y: contentY, opacity }} className="relative z-10 text-center max-w-5xl px-6">
        <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-mono tracking-widest uppercase border border-primary/30 rounded-full text-primary bg-primary/5">
          The Future of Venture Engineering
        </span>

        <h1 className="font-heading text-4xl md:text-8xl font-bold leading-tight text-reveal mb-8">
          Building the Future of <br />
          <span className="italic">Intelligent</span> Businesses
        </h1>

        <p className="text-muted text-base md:text-xl max-w-2xl mx-auto mb-10">
          I2B is a founder-centric venture studio creating AI-led platforms.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn-primary">Build With Us</a>
          <a href="#whatwedo" className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all">
            Explore Our Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
