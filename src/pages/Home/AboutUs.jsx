// // import { motion } from "framer-motion"
// // import { Rocket, Layers, Puzzle } from "lucide-react"

// // export default function AboutUs() {
// //   const pillars = [
// //     {
// //       icon: <Rocket size={28} />,
// //       title: "Who We Are",
// //       text: "I2B is a venture studio and product engineering lab building AI-first consumer and B2B technology companies."
// //     },
// //     {
// //       icon: <Layers size={28} />,
// //       title: "What We Build",
// //       text: "We create scalable platforms, intelligent systems, and digital products designed for real-world impact."
// //     },
// //     {
// //       icon: <Puzzle size={28} />,
// //       title: "How We Partner",
// //       text: "We partner deeply with founders — co-building, co-investing, and scaling companies from zero to enterprise."
// //     }
// //   ]

// //   return (
// //     <section className="py-32 px-6 bg-[color:var(--color-bg)]">
// //       <div className="max-w-7xl mx-auto">

// //         <motion.h2
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="font-heading text-4xl font-bold text-center mb-20"
// //         >
// //           About I2B
// //         </motion.h2>

// //         <div className="grid md:grid-cols-3 gap-12">
// //           {pillars.map((p,i)=>(
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: i * 0.2, duration: 0.7 }}
// //               viewport={{ once: true }}
// //               className="bg-[color:var(--color-card)]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition"
// //             >
// //               <div className="text-primary mb-4">{p.icon}</div>
// //               <h3 className="font-heading text-xl mb-2">{p.title}</h3>
// //               <p className="text-muted">{p.text}</p>
// //             </motion.div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   )
// // }
// import { motion } from "framer-motion";
// import { Rocket, Layers, Puzzle } from "lucide-react";

// export default function AboutUs() {
//   return (
//     <section id="about" className="py-32 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-20">
//           <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">About I2B</h2>
//           <div className="h-1 w-20 bg-primary rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-12 gap-6 auto-rows-[280px]">
//           {/* Main Card */}
//           <motion.div 
//             whileHover={{ y: -5 }}
//             className="md:col-span-8 glass-card rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group"
//           >
//             <Rocket className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors" size={180} />
//             <div className="relative z-10">
//               <h3 className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Who We Are</h3>
//               <h4 className="text-3xl font-bold mb-4 max-w-md">An AI-First Product Engineering Lab</h4>
//               <p className="text-muted max-w-xl">We aren't just consultants. We are builders who partner deeply with founders to engineer products that solve real, structural problems.</p>
//             </div>
//           </motion.div>

//           {/* Side Card */}
//           <motion.div 
//             whileHover={{ y: -5 }}
//             className="md:col-span-4 glass-card rounded-3xl p-10 flex flex-col justify-between bg-gradient-to-br from-primary/5 to-transparent"
//           >
//             <Layers className="text-primary" size={40} />
//             <div>
//               <h4 className="text-xl font-bold mb-2">What We Build</h4>
//               <p className="text-sm text-muted">Scalable platforms, intelligent systems, and high-impact digital products.</p>
//             </div>
//           </motion.div>

//           {/* Bottom Card */}
//           <motion.div 
//             whileHover={{ y: -5 }}
//             className="md:col-span-4 glass-card rounded-3xl p-10 flex flex-col justify-between"
//           >
//             <Puzzle className="text-accent" size={40} />
//             <div>
//               <h4 className="text-xl font-bold mb-2">How We Partner</h4>
//               <p className="text-sm text-muted">Co-building and scaling from zero to enterprise-grade.</p>
//             </div>
//           </motion.div>

//           {/* Bottom Callout */}
//           <motion.div 
//             whileHover={{ y: -5 }}
//             className="md:col-span-8 glass-card rounded-3xl p-10 flex items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
//           >
//             <h4 className="text-2xl md:text-3xl font-bold text-reveal">
//               Turning visionary ideas into <br />
//               <span className="text-primary">market-leading realities.</span>
//             </h4>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Layers, Puzzle } from "lucide-react";

export default function AboutUs() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the decorative Rocket icon
  const iconY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Parallax for the section header
  const headerY = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <section id="about" ref={targetRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ y: headerY }} className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">About I2B</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Main Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass-card rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group"
          >
            {/* Parallax Icon */}
            <motion.div style={{ y: iconY }} className="absolute top-0 right-0 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
              <Rocket size={240} />
            </motion.div>

            <div className="relative z-10">
              <h3 className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Who We Are</h3>
              <h4 className="text-3xl font-bold mb-4 max-w-md">An AI-First Product Engineering Lab</h4>
              <p className="text-muted max-w-xl">We aren't just consultants. We are builders who partner deeply with founders to engineer products that solve real, structural problems.</p>
            </div>
          </motion.div>

          {/* Side Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card rounded-3xl p-10 flex flex-col justify-between bg-gradient-to-br from-primary/5 to-transparent"
          >
            <Layers className="text-primary" size={40} />
            <div>
              <h4 className="text-xl font-bold mb-2">What We Build</h4>
              <p className="text-sm text-muted">Scalable platforms, intelligent systems, and high-impact digital products.</p>
            </div>
          </motion.div>

          {/* Bottom Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card rounded-3xl p-10 flex flex-col justify-between"
          >
            <Puzzle className="text-accent" size={40} />
            <div>
              <h4 className="text-xl font-bold mb-2">How We Partner</h4>
              <p className="text-sm text-muted">Co-building and scaling from zero to enterprise-grade.</p>
            </div>
          </motion.div>

          {/* Bottom Callout */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass-card rounded-3xl p-10 flex items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-reveal">
              Turning visionary ideas into <br />
              <span className="text-primary">market-leading realities.</span>
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}