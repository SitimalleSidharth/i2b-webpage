import { motion } from "framer-motion";

const items = [
  { 
    title: "AI-led Consumer Products", 
    desc: "We build intelligent, user-first consumer applications that leverage AI to simplify everyday tasks, personalise experiences, and deliver measurable value.", 
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&q=80" 
  },
  { 
    title: "B2B & Supply Chain Platforms", 
    desc: "We design and develop B2B platforms that address real operational inefficiencies, with a focus on supply chain visibility and optimization.", 
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80" 
  },
  { 
    title: "Startup Incubation & Investment", 
    desc: "I2B actively invests in early-stage technology startups and works closely with founders during formative stages of product development.", 
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&q=80" 
  }
];

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-reveal">What We Do</h2>
          <p className="text-gray-400 max-w-xl">
            Transforming complex industries through intelligent engineering.
          </p>
        </div>

        {/* DESKTOP – unchanged */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {items.map((item,i)=>(
            <motion.div key={i} initial="rest" whileHover="hover" animate="rest"
              className="relative h-[550px] rounded-[2rem] overflow-hidden bg-zinc-900 group will-change-transform">

              <img loading="lazy" src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"/>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90"/>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE – clean premium stack */}
        <div className="md:hidden space-y-8">
          {items.map((item,i)=>(
            <div key={i} className="rounded-3xl overflow-hidden bg-[#0f0f0f] border border-white/10">
              <img loading="lazy" src={item.img} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
