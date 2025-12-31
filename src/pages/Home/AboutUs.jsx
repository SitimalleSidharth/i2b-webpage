import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Layers, Puzzle } from "lucide-react";

export default function AboutUs() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const iconY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={targetRef} className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-bold mb-4 text-white">About I2B</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-12" />

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-end relative overflow-hidden group min-h-[320px]">
            <motion.div style={{ y: iconY }} className="absolute -top-10 -right-10 text-primary/5 pointer-events-none">
              <Rocket size={300} />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Who We Are</h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">An AI-First Product Engineering Lab</h4>
              <p className="text-muted text-sm md:text-base max-w-xl">We partner deeply with founders to engineer products that solve real, structural problems and scale to enterprise-grade.</p>
            </div>
          </div>

          <div className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[220px]">
            <Layers className="text-primary mb-6" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">What We Build</h4>
              <p className="text-xs text-muted">Scalable platforms, intelligent systems, and high-impact digital products.</p>
            </div>
          </div>

          <div className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[220px]">
            <Puzzle className="text-accent mb-6" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">How We Partner</h4>
              <p className="text-xs text-muted">Co-building and scaling from zero to enterprise-grade.</p>
            </div>
          </div>

          <div className="md:col-span-8 glass-card rounded-3xl p-8 flex items-center min-h-[180px]">
            <h4 className="text-2xl md:text-3xl font-bold leading-tight">
              Turning visionary ideas into <br />
              <span className="text-primary">market-leading realities.</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}