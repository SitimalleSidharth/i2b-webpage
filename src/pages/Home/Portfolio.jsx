import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h2 className="font-heading text-[2rem] md:text-6xl font-bold mb-2 text-reveal">
            Portfolio
          </h2>
          <p className="text-muted text-[14px] md:text-lg max-w-sm leading-relaxed">
            A growing set of AI-led technology platforms.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card bg-white/[0.04] border border-white/10 rounded-[1.8rem] md:rounded-[2.5rem] px-12 py-10 md:px-20 md:py-14 inline-block"
        >
          <motion.p
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono uppercase tracking-widest text-primary text-lg md:text-2xl"
          >
            Coming Soon
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
