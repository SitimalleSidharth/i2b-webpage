// // import { motion } from "framer-motion"
// // import FounderImage from '../../assets/founder.webp'

// // export default function Founder() {
// //   return (
// //     <section className="py-32 px-6 bg-[color:var(--color-bg)]">
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

// //         {/* Left Content */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="font-heading text-4xl font-bold mb-6">
// //             Meet the Founder
// //           </h2>

// //           <p className="text-muted mb-4">
// //             <span className="text-white font-semibold">Deepak Gullapalli</span> is a visionary entrepreneur and technology leader, widely recognized for building scalable digital platforms and founding A23, one of India’s leading online skill gaming ecosystems.
// //           </p>

// //           <p className="text-muted mb-6">
// //             With deep expertise across AI-driven systems, product engineering, and enterprise platforms, he leads I2B as a venture studio focused on building next-generation consumer and B2B technology companies.
// //           </p>

// //           {/* Founder Note */}
// //           <div className="bg-[color:var(--color-card)]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
// //             <p className="text-primary font-mono mb-2">Founder’s Note</p>
// //             <p className="text-muted">
// //               “At I2B, we partner with ambitious builders to create products that solve real, structural problems — and scale them into global businesses.”
// //             </p>
// //           </div>
// //         </motion.div>

// //         {/* Right Image */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="relative"
// //         >
// //           <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-accent blur opacity-30"></div>
// //           <img
// //             src={FounderImage}
// //             alt="Founder"
// //             className="relative rounded-3xl w-full object-cover"
// //           />
// //         </motion.div>

// //       </div>
// //     </section>
// //   )
// // }

// import { motion } from "framer-motion";
// import FounderImage from '../../assets/founder.webp';

// export default function Founder() {
//   return (
//     <section className="py-32 px-6 relative overflow-hidden">
//       {/* Decorative background glow */}
//       <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />

//       <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
//         {/* Left: Content (Spans 7 columns) */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:col-span-7 z-10"
//         >
//           <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-reveal">
//             Meet the Founder
//           </h2>

//           <div className="space-y-6 text-lg">
//             <p className="text-white leading-relaxed">
//               <span className="text-primary font-bold">Deepak Gullapalli</span> is a visionary entrepreneur and technology leader, widely recognized for building scalable digital platforms and founding A23, one of India’s leading online gaming ecosystems.
//             </p>

//             <p className="text-muted leading-relaxed">
//               With deep expertise across AI-driven systems, product engineering, and enterprise platforms, he leads I2B as a venture studio focused on building next-generation consumer and B2B technology companies.
//             </p>
//           </div>

//           {/* Founder Note - Glassmorphism style */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="mt-10 glass-card p-8 rounded-3xl border-l-4 border-l-primary"
//           >
//             <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Founder’s Note</p>
//             <blockquote className="text-xl italic font-medium text-white/90">
//               “At I2B, we partner with ambitious builders to create products that solve real, structural problems — and scale them into global businesses.”
//             </blockquote>
//           </motion.div>
//         </motion.div>

//         {/* Right: Image (Spans 5 columns) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:col-span-5 relative group"
//         >
//           {/* Animated border glow */}
//           <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-accent/30 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
//           <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5]">
//             <img
//               src={FounderImage}
//               alt="Deepak Gullapalli"
//               className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
//             />
//             {/* Subtle overlay gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FounderImage from '../../assets/founder.webp';

export default function Founder() {
  const containerRef = useRef(null);
  
  // Track scroll progress specifically for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets: Image drifts slightly, Note card slides more aggressively
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const noteY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden bg-bg">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left: Content (Spans 7 columns) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-7 z-10"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-reveal">
            Meet the Founder
          </h2>

          <div className="space-y-6 text-lg">
            <p className="text-white leading-relaxed">
              <span className="text-primary font-bold">Deepak Gullapalli</span> is a visionary entrepreneur and technology leader, widely recognized for building scalable digital platforms and founding A23, one of India’s leading online gaming ecosystems.
            </p>

            <p className="text-muted leading-relaxed">
              With deep expertise across AI-driven systems, product engineering, and enterprise platforms, he leads I2B as a venture studio focused on building next-generation consumer and B2B technology companies.
            </p>
          </div>

          {/* Founder Note - With Parallax Slide
          <motion.div 
            style={{ y: noteY }}
            className="mt-10 glass-card p-8 rounded-3xl border-l-4 border-l-primary relative z-20 shadow-2xl"
          >
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Founder’s Note</p>
            <blockquote className="text-xl italic font-medium text-white/90">
              “At I2B, we partner with ambitious builders to create products that solve real, structural problems — and scale them into global businesses.”
            </blockquote>
          </motion.div> */}
        </motion.div>

        {/* Right: Image (Spans 5 columns) with Parallax Drift */}
        <div className="md:col-span-5 relative group">
          {/* Animated border glow */}
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
          
          <motion.div 
            style={{ y: imgY }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] bg-panel will-change-transform"
          >
            <img
              src={FounderImage}
              alt="Deepak Gullapalli"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
            
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-60"></div>
          </motion.div>
          <motion.div style={{ y: noteY }} className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl border-l-4 border-primary max-w-xs">
            <p className="italic font-medium">“At I2B, we partner with ambitious builders to create products that solve real, structural problems — and scale them into global businesses.”
</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}