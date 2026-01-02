import { motion } from "framer-motion";
import ai_led_consumer from "../../assets/ai_led_consumer.jpg";
import saas_solutions from "../../assets/saas-concept-collage.jpg";
import creative_team from "../../assets/creative_team.jpg";

const items = [
  { 
    title: "AI-Led Consumer Products", 
    desc: "We build intelligent, smart consumer applications that leverage AI to simplify everyday tasks, personalise experiences, and deliver measurable value.", 
    img: ai_led_consumer,
  },
  { 
    title: "Scalable B2B SaaS Solutions for Modern Enterprise", 
    desc: "We design and develop B2B SaaS platforms that eliminate operational friction. Our focus is on transforming fragmented workflows into streamlined, high-performance digital ecosystems.", 
    img: saas_solutions, 
  },
  { 
    title: "Startup Incubation & Investment", 
    desc: "I2B invests in idea-stage startups and provides strategic support. We work closely with founders to turn new ideas into market-leading products.", 
    img: creative_team
  }
];

export default function WhatWeDo() {
  const contentVariants = { rest:{ y:40 }, hover:{ y:0 } };
  const descVariants = { rest:{ opacity:0,y:10 }, hover:{ opacity:1,y:0,transition:{delay:0.1,duration:0.3}} };

  return (
    <section id="whatwedo" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2 className="font-heading text-[2.3rem] md:text-6xl font-bold mb-6 text-reveal">What We Do</h2>
          <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
            Transforming complex industries through intelligent engineering.
          </p>
        </div>

        {/* DESKTOP – LOCKED (unchanged) */}
        {/* <div className="hidden md:grid md:grid-cols-3 gap-6">
          {items.map((item,i)=>(
            <motion.div key={i} initial="rest" whileHover="hover" animate="rest"
              className="relative h-[550px] rounded-[2rem] overflow-hidden bg-zinc-900 group will-change-transform">

              <img loading="lazy" src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"/>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90"/>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div variants={contentVariants} transition={{type:"spring",stiffness:100,damping:20}}>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary">{item.title}</h3>
                  <motion.p variants={descVariants} className="text-gray-300 text-sm leading-relaxed">{item.desc}</motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div> */}
        <div className="grid md:grid-cols-3 gap-10">
  {items.map((item,i)=>(
    <motion.div
      key={i}
      // initial={{ opacity: 0, y: 100+ i * 5 }}
      // whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      // viewport={{once:true}}
      whileTap={{ scale: 0.97 }}
      // transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="rounded-[2rem] overflow-hidden bg-[#0f0f0f] border border-white/10"
    >
      <div className="overflow-hidden">
        <motion.img
          loading="lazy"
          src={item.img}
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

        {/* MOBILE – clean premium cards */}
        {/* <div className="md:hidden space-y-10">
          {items.map((item, i) => (
            <div key={i} className="rounded-[2rem] overflow-hidden bg-[#0f0f0f] border border-white/10">
              <img loading="lazy" src={item.img} className="w-full h-52 object-cover" />
              <div className="p-7">
                <h3 className="text-[17px] font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-300 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}
