import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Layers, Puzzle } from "lucide-react";

export default function AboutUs() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const iconY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="about" ref={targetRef} className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">About I2B</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-16" />

        <div className="grid md:grid-cols-12 gap-6 auto-rows-[280px]">
          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-end relative overflow-hidden group">
            <motion.div style={{ y: iconY }} className="absolute -top-10 -right-10 text-primary/5 group-hover:text-primary/10 transition-colors">
              <Rocket size={300} />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Who We Are</h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">An AI-First Product Engineering Lab</h4>
              <p className="text-muted text-sm md:text-base max-w-xl">We partner deeply with founders to engineer products that solve real, structural problems and scale to enterprise-grade.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-primary/5 to-transparent">
            <Layers className="text-primary" size={40} />
            <div>
              <h4 className="text-xl font-bold mb-2">What We Build</h4>
              <p className="text-xs text-muted">Scalable platforms, intelligent systems, and high-impact digital products.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <Puzzle className="text-accent" size={40} />
            <div>
              <h4 className="text-xl font-bold mb-2">How We Partner</h4>
              <p className="text-xs text-muted">Co-building and scaling from zero to enterprise-grade.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex items-center">
            <h4 className="text-2xl md:text-3xl font-bold text-reveal">
              Turning visionary ideas into <br />
              <span className="text-primary">market-leading realities.</span>
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}