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
          About <span className="text-white">i2b<span className="text-primary">.</span></span>
        </motion.h2>

        <div className="h-1 w-20 bg-primary rounded-full mb-12" />

        <div className="grid md:grid-cols-12 gap-6">

          {/* MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group md:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[340px] will-change-transform"
          >
            <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Rocket size={280} className="absolute -top-12 -right-12 text-primary/5 pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
                Who We Are
              </h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                An AI-First Product Engineering Lab
              </h4>

              <p className="text-muted text-sm md:text-base mb-5">
                We partner deeply with founders to engineer products that solve
                real, structural problems and scale to enterprise-grade.
              </p>

              <ul className="space-y-2 text-sm text-muted">
                <li>• AI-powered SaaS & data platforms</li>
                <li>• Scalable cloud-native architectures</li>
                <li>• Product, infra, and ML under one roof</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SMALL CARD */}
          {/* RIGHT SMALL CARD — WHAT WE BUILD */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[240px] relative overflow-hidden will-change-transform"
          >
            <div className="absolute inset-0 rounded-3xl border border-accent/0 group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-accent/10 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Layers className="text-accent mb-6" size={32} />

            <div>
              <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
                What We Build
              </h3>

              <h4 className="text-2xl md:text-2xl font-bold mb-4 text-white">
                Scalable platforms, intelligent systems, and high-impact digital products.
              </h4>

              <ul className="text-xs text-muted space-y-2">
                <li>• AI-driven SaaS products</li>
                <li>• Data & analytics platforms</li>
                <li>• Internal automation systems</li>
              </ul>
            </div>
          </motion.div>


          {/* LEFT SMALL CARD */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between min-h-[240px] relative overflow-hidden will-change-transform"
          >
            <div className="absolute inset-0 rounded-3xl border border-accent/0 group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-accent/10 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Puzzle className="text-accent mb-6" size={32} />

            <div>


              <h3 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
                How We Partner
              </h3>

              <h4 className="text-2xl md:text-2xl font-bold mb-4 text-white">
                Co-building and scaling from zero to enterprise-grade.
              </h4>


              <ul className="text-xs text-muted space-y-2">
                <li>• Embedded product & engineering teams</li>
                <li>• Long-term technical ownership</li>
                <li>• Architecture built for scale</li>
              </ul>
            </div>
          </motion.div>

          {/* BOTTOM LONG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group md:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-center min-h-[200px] relative overflow-hidden will-change-transform"
          >
            <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <h4 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              Turning visionary ideas into{" "}
              <span className="text-primary">market-leading realities.</span>
            </h4>

            <p className="text-sm text-muted max-w-lg">
              From concept and validation to scalable production systems —
              we stay with you through every growth stage.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
