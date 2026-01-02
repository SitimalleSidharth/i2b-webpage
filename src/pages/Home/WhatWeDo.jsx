import { motion } from "framer-motion";
import ai_led_consumer from "../../assets/ai_led_consumer.webp";
import saas_solutions from "../../assets/saas-concept-collage.webp";
import creative_team from "../../assets/creative_team.webp";

const items = [
  { 
    title: "AI-Led Consumer Products", 
    desc: "We build intelligent, smart consumer applications that leverage AI to simplify everyday tasks, personalise experiences, and deliver measurable value.", 
    img: ai_led_consumer,
    alt: "AI led consumer product interface concept"
  },
  { 
    title: "Scalable B2B SaaS Solutions", 
    desc: "We design and develop B2B SaaS platforms that eliminate operational friction. Our focus is on transforming fragmented workflows into streamlined, high-performance digital ecosystems.", 
    img: saas_solutions, 
    alt: "B2B SaaS platform dashboard collage"
  },
  { 
    title: "Startup Incubation & Investment", 
    desc: "I2B invests in idea-stage startups and provides strategic support. We work closely with founders to turn new ideas into market-leading products.", 
    img: creative_team,
    alt: "Team collaboration and strategic planning session"
  }
];

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2 className="font-heading text-[2.3rem] md:text-6xl font-bold mb-6 text-reveal">What We Do</h2>
          <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
            Transforming complex industries through intelligent engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-[2rem] overflow-hidden bg-[#0f0f0f] border border-white/10"
            >
              <div className="overflow-hidden bg-gray-800">
                <motion.img
                  loading="lazy"
                  src={item.img}
                  alt={item.alt}
                  width="400"
                  height="256"
                  className="w-full h-52 md:h-64 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              <div className="p-7">
                <h3 className="text-[18px] md:text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-300 text-[14px] md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}