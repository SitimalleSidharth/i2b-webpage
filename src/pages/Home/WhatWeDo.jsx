import { motion } from "framer-motion";
import ai_led_consumer from "../../assets/ai_led_consumer.webp";
import saas_solutions from "../../assets/saas-concept-collage.webp";
import creative_team from "../../assets/creative_team.webp";

const verticals = [
  {
    category: "Consumer Intelligence",
    title: "AI-Led Consumer Products",
    desc: "We build intelligent, smart consumer applications that leverage AI to simplify everyday tasks, personalise experiences, and deliver measurable value.",
    img: ai_led_consumer,
    tags: ["Communication", "Healthcare","Finance"]
  },
  {
    category: "Enterprise Scale",
    title: "Scalable B2B SaaS Solutions",
    desc: "We design and develop B2B SaaS platforms that eliminate operational friction. Our focus is on transforming fragmented workflows into streamlined, high-performance digital ecosystems.",
    img: saas_solutions,
    tags: ["Supply Chain","Logistics", "Automation"]
  },
  {
    category: "Venture Building",
    title: "Startup Incubation & Investment",
    desc: "I2B invests in idea-stage startups and provides strategic support. We work closely with founders to turn new ideas into market-leading products.",
    img: creative_team,
    alt: "Team collaboration and strategic planning session",
    tags: ["Pre-Seed", "Mentorship", "Governance"]
  }
];

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-20 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6 text-reveal"
          >
           What We Do
          </motion.h2>
          <p className="text-muted text-lg leading-relaxed">
            Three core pillars where deep technology meets massive structural opportunity.
          </p>
        </div>

        {/* GRID LAYOUT - Solves the visibility issue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col"
            >
              {/* Card Container */}
              <div className="h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-500 flex flex-col">
                
                {/* Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-white">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                  
                  {/* Footer / Tags */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}