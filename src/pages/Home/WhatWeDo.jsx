import { motion } from "framer-motion";
import ai_led_consumer from "../../assets/ai_led_consumer.webp";
import saas_solutions from "../../assets/saas-concept-collage.webp";
import creative_team from "../../assets/creative_team.webp";

const verticals = [
  {
    category: "Consumer Intelligence",
    title: "AI-Native Consumer Apps",
    desc: "We don't just add AI to apps; we rebuild user behaviors from scratch. Our consumer products leverage Large Language Models to simplify everyday tasks, creating experiences that feel like magic, not software.",
    img: ai_led_consumer,
    tags: ["Personalization", "Agents", "Utility"]
  },
  {
    category: "Enterprise Scale",
    title: "Supply Chain & B2B Platforms",
    desc: "Efficiency is our currency. We engineer B2B platforms that solve structural fragmentation in logistics and supply chains. By digitizing workflows, we turn operational friction into competitive advantage.",
    img: saas_solutions,
    tags: ["Logistics", "SaaS", "Automation"]
  },
  {
    category: "Venture Building",
    title: "Incubation & Capital",
    desc: "We are the co-founder you wish you had. Beyond capital, i2b provides the '0 to 1' operating system—product strategy, hiring, and governance—to turn raw ideas into resilient institutions.",
    img: creative_team,
    tags: ["Pre-Seed", "Mentorship", "Governance"]
  }
];

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-24 px-6 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6 text-reveal"
          >
            Three Pillars of Impact.
          </motion.h2>
          <p className="text-muted text-lg leading-relaxed">
            We focus our energy where deep technology meets massive structural opportunity.
          </p>
        </div>

        <div className="space-y-32">
          {verticals.map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/3] group">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glass Tag */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest text-white/80">
                    {item.category}
                  </div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-sm font-mono text-primary px-3 py-1 rounded-md bg-primary/5 border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}