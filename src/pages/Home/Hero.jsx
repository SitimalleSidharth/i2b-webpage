import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";

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
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0.6, 0.8, 0.6],
        x: [0, 12, -12, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className="absolute max-w-[90vw] truncate px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[8px] md:text-[10px] font-mono text-primary/30 tracking-widest whitespace-nowrap pointer-events-none will-change-transform"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
    >
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]); 
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

      {/* 1. BLUEPRINT GRID: Fills the emptiness between Hero and next section */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px' 
        }} 
      />

      {/* Floating tiles (Desktop Only) */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden">
         {gridTiles.map((tile, i) => <FloatingTile key={i} {...tile} />)}
      </div>

      {/* Mobile Background Ambience */}
      <div className="absolute inset-0 z-0 md:hidden overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-[90px] rounded-full animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 blur-[90px] rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(106,227,255,0.1),transparent_65%)]" />

      {/* CONTENT BLOCK: Scaled up slightly but kept tight to avoid "waste" */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 text-center max-w-6xl px-6 pt-20 md:pt-0"
      >
        <span className="inline-block px-4 py-1.5 mb-10 text-[10px] font-mono tracking-widest uppercase border border-primary/20 rounded-full text-primary/80 bg-primary/5">
          The Future of Venture Engineering
        </span>

        <h1 className="font-heading text-[2.6rem] sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[1.1] mb-8 text-reveal">
          Building the Future of <br />
          <span className="italic">Intelligent</span> Businesses
        </h1>

        <p className="text-muted text-[16px] sm:text-lg md:text-xl max-w-sm sm:max-w-2xl mx-auto mb-12 leading-relaxed">
          I2B is a founder-centric venture studio creating AI-led platforms that solve real, structural problems at scale.
        </p>

        <div className="flex flex-col min-[450px]:flex-row justify-center gap-4 w-full max-w-sm sm:max-w-md mx-auto">
          <a href="#contact" className="btn-primary w-full min-[450px]:w-auto flex items-center justify-center">
            Build With Us
          </a>
          <a href="#whatwedo" className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all w-full min-[450px]:w-auto block">
            Explore Our Work
          </a>
        </div>
      </motion.div>

      {/* 2. SCROLL HINT: Bridges the visual gap to the Founder section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}