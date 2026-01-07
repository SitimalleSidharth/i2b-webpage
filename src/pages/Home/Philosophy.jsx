import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-36 bg-bg overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      {/* 1. Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#6AE3FF 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      {/* 2. Central Glow for Focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">
          Our Philosophy
        </h2>

        <p className="text-muted text-lg md:text-2xl leading-relaxed tracking-wide">
          We believe meaningful companies are built through disciplined execution,
          sound unit economics, and an obsessive focus on users.
          <br /><br />
          I2B partners with founders who are willing to build patiently,
          think structurally, and aim for category leadership rather than quick exits.
        </p>

        <div className="mt-14 w-24 h-[2px] mx-auto bg-primary rounded-full shadow-[0_0_10px_#6AE3FF]" />
      </motion.div>
    </section>
  );
}