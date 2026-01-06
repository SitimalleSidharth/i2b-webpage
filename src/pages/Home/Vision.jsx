import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-panel border border-white/10 text-center px-6 py-20 md:py-32"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(106,227,255,0.05))]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            Ready to build <br />
            the <span className="italic text-primary">next giant?</span>
          </h2>

          <p className="text-muted text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            You have the vision. We have the engineering engine, the capital, and the playbook. 
            Let’s turn your idea into a structural reality.
          </p>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
          >
            Start the Conversation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}