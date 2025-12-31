import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-36 bg-bg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
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

        <div className="mt-14 w-24 h-[2px] mx-auto bg-primary rounded-full" />
      </motion.div>
    </section>
  );
}
