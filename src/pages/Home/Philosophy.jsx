import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 bg-bg overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">
            The Manifesto
          </span>
          
          <h2 className="font-heading text-3xl md:text-5xl md:leading-[1.4] font-bold text-white leading-relaxed">
            "We believe meaningful companies are built through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">disciplined execution</span>, 
            sound unit economics, and an obsessive focus on users."
          </h2>

          <div className="mt-12 flex justify-center">
            <div className="h-24 w-[1px] bg-gradient-to-b from-primary to-transparent" />
          </div>

          <p className="mt-8 text-muted text-lg max-w-2xl mx-auto">
            At i2b, we optimize for <span className="text-white font-medium">longevity</span> over speed. 
            We partner with founders who are willing to think structurally and aim for 
            category leadership rather than quick exits.
          </p>
        </motion.div>

      </div>
    </section>
  );
}