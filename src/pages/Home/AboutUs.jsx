import { motion } from "framer-motion";
import { Rocket, Layers, Puzzle } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl font-bold mb-8 text-reveal"
        >
          About I2B
        </motion.h2>

        <div className="h-1 w-20 bg-primary rounded-full mb-12" />

        <div className="grid md:grid-cols-12 gap-6">
          {/* MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group md:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-end relative overflow-hidden min-h-[320px]"
          >
            {/* BORDER GLOW BLEED */}
            <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Rocket size={300} className="absolute -top-10 -right-10 text-primary/5 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Who We Are</h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">An AI-First Product Engineering Lab</h4>
              <p className="text-muted text-sm md:text-base max-w-xl">
                We partner deeply with founders to engineer products that solve real, structural problems and scale to enterprise-grade.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SMALL CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Layers className="text-primary mb-6" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">What We Build</h4>
              <p className="text-xs text-muted">Scalable platforms, intelligent systems, and high-impact digital products.</p>
            </div>
          </motion.div>

          {/* LEFT SMALL CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl border border-accent/0 group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Puzzle className="text-accent mb-6" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">How We Partner</h4>
              <p className="text-xs text-muted">Co-building and scaling from zero to enterprise-grade.</p>
            </div>
          </motion.div>

          {/* BOTTOM LONG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group md:col-span-8 glass-card rounded-3xl p-8 flex items-center min-h-[180px] relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <h4 className="text-2xl md:text-3xl font-bold leading-tight">
              Turning visionary ideas into <br />
              <span className="text-primary">market-leading realities.</span>
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
