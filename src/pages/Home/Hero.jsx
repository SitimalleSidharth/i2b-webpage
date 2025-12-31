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
      animate={{ opacity: [0.3, 0.5, 0.3], x: [0, 10, 0], y: [0, 10, 0] }}
      transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay }}
      className="absolute px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-[8px] md:text-[10px] font-mono text-primary/60 tracking-widest whitespace-nowrap pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const gridTiles = useMemo(() => {
    return keywords.map((text, i) => ({
      text,
      x: ((i % 5) + 1) * 16 + (Math.random() - 0.5) * 8,
      y: (Math.floor(i / 5) + 1) * 20 + (Math.random() - 0.5) * 8,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {gridTiles.map((tile, i) => <FloatingTile key={i} {...tile} />)}
      </motion.div>

      <motion.div style={{ y: contentY, opacity }} className="relative z-10 text-center max-w-5xl px-6">
        <span className="inline-block px-4 py-1.5 mb-8 text-[10px] md:text-xs font-mono tracking-widest uppercase border border-primary/30 rounded-full text-primary bg-primary/5">
          The Future of Venture Engineering
        </span>
        <h1 className="font-heading text-4xl md:text-8xl font-bold leading-[1.1] tracking-tight text-reveal mb-8">
          Building the Future of <br />
          <span className="text-primary italic">Intelligent</span> Businesses
        </h1>
        <p className="text-muted text-base md:text-xl max-w-2xl mx-auto mb-10">
          I2B is a founder-centric venture studio creating AI-led platforms. We work closely with builders to transform ideas into enduring technology systems.
        </p>
        <div className="flex flex-col sm:row justify-center gap-4">
          <a href="#contact" className="btn-primary">Build With Us</a>
          <a href="#whatwedo" className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all backdrop-blur-sm">Explore Our Work</a>
        </div>
      </motion.div>
    </section>
  );
}