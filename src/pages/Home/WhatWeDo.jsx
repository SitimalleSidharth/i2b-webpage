import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "AI-led Consumer Products", desc: "We build intelligent consumer platforms that simplify daily life and deliver measurable value.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" },
  { title: "B2B & Supply Chain Platforms", desc: "Enterprise systems that digitize operations, optimize coordination and scale real businesses.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800" },
  { title: "Startup Incubation & Investment", desc: "We co-build startups by providing capital, product teams, and growth strategy.", img:  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" }
];

export default function WhatWeDo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  return (
    <section id="whatwedo" ref={containerRef} className="py-32 px-6 bg-bg relative overflow-hidden">
      {/* Subtle Parallax Background Blur */}
      <motion.div 
        style={{ y: headerY, rotate: 10 }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div style={{ y: headerY }} className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-reveal mb-4">What We Do</h2>
          <p className="text-muted max-w-xl mx-auto">Transforming complex industries through intelligent engineering.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden glass-card border-white/5 cursor-pointer transition-all duration-500 bg-panel shadow-2xl"
            >
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent group-hover:from-bg/80 transition-all duration-500"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted opacity-0 group-hover:opacity-100 transition-all duration-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}