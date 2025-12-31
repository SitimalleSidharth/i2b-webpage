import { motion } from "framer-motion";

const items = [
  { title: "AI-led Consumer Products", desc: "We build intelligent consumer platforms that simplify daily life and deliver measurable value.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&q=80" },
  { title: "B2B & Supply Chain Platforms", desc: "Enterprise systems that digitize operations, optimize coordination and scale real businesses.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80" },
  { title: "Startup Incubation & Investment", desc: "We co-build startups by providing capital, product teams, and growth strategy.", img:  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&q=80" }
];

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-24 md:py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-reveal mb-4">What We Do</h2>
          <p className="text-muted max-w-xl mx-auto">Transforming complex industries through intelligent engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15, scale: 1.05, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden glass-card bg-panel will-change-transform"
            >
              <img src={item.img} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent group-hover:from-bg/90 transition-all duration-500" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}