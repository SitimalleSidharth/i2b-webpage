// // import whyImg from "../../assets/visuals/supply.jpg"   // temp – any dark abstract
// export default function WhyUs() {


//   const points = [
//     {
//       title: "Strategic Long-Term Partnerships",
//       desc: "We build relationships aligned with outcomes, not short-term project delivery."
//     },
//     {
//       title: "Deep Product & AI Engineering",
//       desc: "Enterprise-grade systems designed for real-world complexity and scale."
//     },
//     {
//       title: "Scalable Architecture",
//       desc: "Platforms engineered for high-volume, long-term business operations."
//     },
//     {
//       title: "Founder-Centric Operating Model",
//       desc: "We function like your internal product and technology leadership team."
//     }
//   ]

//   return (
//     <section className="py-32 bg-[color:var(--color-bg)]">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6">

//         {/* Image Side */}
//         <div className="relative rounded-3xl overflow-hidden h-[520px]">
//           <img src={"https://images.unsplash.com/photo-1677442136019-21780ecad995"} className="w-full h-full object-cover opacity-80" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
//         </div>

//         {/* Content Side */}
//         <div>
//           <h2 className="font-heading text-4xl font-bold mb-10">Why Choose I2B</h2>

//           <div className="space-y-8">
//             {points.map((p,i)=>(
//               <div key={i} className="border-l-2 border-primary pl-6">
//                 <h3 className="font-heading text-xl mb-1">{p.title}</h3>
//                 <p className="text-muted">{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }
import { motion } from "framer-motion";

export default function WhyUs() {
  const points = [
    { title: "Strategic Long-Term Partnerships", desc: "We build relationships aligned with outcomes, not short-term project delivery." },
    { title: "Deep Product & AI Engineering", desc: "Enterprise-grade systems designed for real-world complexity and scale." },
    { title: "Scalable Architecture", desc: "Platforms engineered for high-volume, long-term business operations." },
    { title: "Founder-Centric Operating Model", desc: "We function like your internal product and technology leadership team." }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        
        <div className="relative order-2 md:order-1">
          {/* Stacked Image Effect */}
          <div className="relative rounded-3xl overflow-hidden aspect-square z-10 border border-white/10">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
          {/* Decorative back-frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10"></div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-reveal">Why Choose I2B</h2>
          
          <div className="space-y-12">
            {points.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative pl-10"
              >
                {/* Vertical Indicator */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-white/10 group-hover:bg-primary transition-colors duration-500">
                  <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-primary transition-all duration-500"></div>
                </div>
                
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}