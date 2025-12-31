import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto glass-card rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-24 relative overflow-hidden text-center"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-7xl font-bold mb-8 text-reveal">
            Have an idea worth building?
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
            We turn your vision into a real, scalable technology company. Let’s solve real problems together.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block text-base md:text-lg px-10 md:px-12 py-4 md:py-5"
          >
            Let’s Create It
          </a>
        </div>
      </motion.div>
    </section>
  );
}
