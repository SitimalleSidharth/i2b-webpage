import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
        opacity: [0.4, 0.6, 0.4],
        x: [0, Math.random() * 20 - 10, 0], // Subtle local drift
        y: [0, Math.random() * 20 - 10, 0] 
      }}
      transition={{ 
        duration: 10 + Math.random() * 5, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }}
      className="absolute px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-[10px] font-mono text-primary/60 tracking-widest whitespace-nowrap pointer-events-none"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        transform: 'translate(-50%, -50%)' // Center the tile on its coordinate
      }}
    >
      {text}
    </motion.div>
  );
}

export default function Hero() {
  // Generate a non-overlapping grid
  // 5 columns x 4 rows = 20 slots for 20 keywords
  const columns = 5;
  const rows = 4;
  const gridTiles = [];

  let keywordIndex = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (keywordIndex < keywords.length) {
        // Calculate base position based on grid cell
        const baseX = (c + 1) * (100 / (columns + 1));
        const baseY = (r + 1) * (100 / (rows + 1));
        
        // Add a small "jitter" so it doesn't look like a perfect stiff grid
        const jitterX = (Math.random() - 0.5) * 10; 
        const jitterY = (Math.random() - 0.5) * 10;

        gridTiles.push({
          text: keywords[keywordIndex],
          x: baseX + jitterX,
          y: baseY + jitterY,
          delay: Math.random() * 5
        });
        keywordIndex++;
      }
    }
  }

    const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax: Background moves 30% slower, Text moves 50% faster
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Layer: Grid-distributed Tiles */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {gridTiles.map((tile, i) => (
          <FloatingTile 
            key={i} 
            text={tile.text} 
            x={tile.x} 
            y={tile.y} 
            delay={tile.delay}
          />
        ))}
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-mono tracking-widest uppercase border border-primary/30 rounded-full text-primary bg-primary/5">
            The Future of Venture Engineering
          </span>
          
          <h1 className="font-heading text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight text-reveal mb-8">
            Building the Future of <br />
            <span className="text-primary italic">Intelligent</span> Businesses
          </h1>
          
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
            {/* I2B is a venture studio and engineering lab building AI-first consumer and B2B technology companies. */}
            {/* i2b is a venture studio and engineering lab building AI-first consumer and B2B companies — combining deep product thinking, disciplined execution, and long-term partnership to turn strong ideas into durable, category-defining businesses. */}
            I2B is a founder-centric venture studio creating AI-led consumer and B2B platforms. We work closely with builders to transform strong ideas into trusted, enduring technology systems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#contact" className="btn-primary">Build With Us</a>
            <a href="#whatwedo" className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              Explore Our Work
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}