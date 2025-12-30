// // import { motion } from "framer-motion"

// // const slides = [
// //   {
// //     title: "Early-Stage Founders",
// //     text: "Builders with strong product intuition and long-term thinking.",
// //     img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
// //   },
// //   {
// //     title: "AI-First Teams",
// //     text: "Teams building AI-led consumer or B2B platforms.",
// //     img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
// //   },
// //   {
// //     title: "Structural Problem Solvers",
// //     text: "Entrepreneurs solving non-trivial, real-world problems.",
// //     img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
// //   },
// //   {
// //     title: "Long-Term Builders",
// //     text: "Founders seeking deep strategic partnerships — not just capital.",
// //     img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
// //   }
// // ]

// // export default function Partners() {
// //   return (
// //     <section id="partners" className="py-32 bg-[color:var(--color-bg)] overflow-hidden">
// //       <h2 className="font-heading text-4xl font-bold text-center mb-20">Who We Partner With</h2>

// //       <motion.div
// //         className="flex gap-10 px-20"
// //         drag="x"
// //         dragConstraints={{ left: -1200, right: 0 }}
// //       >
// //         {slides.map((s,i)=>(
// //           <div key={i} className="relative min-w-[420px] h-[520px] rounded-3xl overflow-hidden bg-black">
// //             <img src={s.img} className="absolute inset-0 w-full h-full object-cover opacity-80" />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

// //             <div className="absolute bottom-0 p-8">
// //               <h3 className="font-heading text-xl mb-2">{s.title}</h3>
// //               <p className="text-muted">{s.text}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </motion.div>
// //     </section>
// //   )
// // }
// import { motion } from "framer-motion";

// const slides = [
//   {
//     title: "Early-Stage Founders",
//     text: "Builders with strong product intuition and long-term thinking.",
//     img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//   },
//   {
//     title: "AI-First Teams",
//     text: "Teams building AI-led consumer or B2B platforms.",
//     img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
//   },
//   {
//     title: "Structural Problem Solvers",
//     text: "Entrepreneurs solving non-trivial, real-world problems.",
//     img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
//   },
//   {
//     title: "Long-Term Builders",
//     text: "Founders seeking deep strategic partnerships — not just capital.",
//     img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
//   }
// ];

// export default function Partners() {
//   return (
//     <section id="partners" className="py-32 bg-bg overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 mb-20">
//         <h2 className="font-heading text-4xl md:text-5xl font-bold text-reveal">
//           Who We Partner With
//         </h2>
//         <p className="text-muted mt-4">We look for builders who think in decades, not quarters.</p>
//       </div>

//       {/* Draggable Container */}
//       <div className="cursor-grab active:cursor-grabbing">
//         <motion.div
//           className="flex gap-8 px-6"
//           drag="x"
//           dragConstraints={{ left: -1000, right: 0 }}
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {slides.map((s, i) => (
//             <motion.div 
//               key={i} 
//               className="relative min-w-[350px] md:min-w-[450px] h-[550px] rounded-[3rem] overflow-hidden glass-card border-white/5 group"
//             >
//               {/* Background Image with subtle zoom on hover */}
//               <img 
//                 src={s.img} 
//                 alt={s.title}
//                 className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
//               />
              
//               {/* Deep Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"></div>

//               {/* Text Content */}
//               <div className="absolute bottom-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                 <div className="w-12 h-1 bg-primary mb-6 rounded-full overflow-hidden">
//                    <div className="w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
//                 </div>
//                 <h3 className="font-heading text-2xl font-bold mb-3 text-white">
//                   {s.title}
//                 </h3>
//                 <p className="text-muted text-lg leading-relaxed">
//                   {s.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
      
//       {/* Scroll Indicator helper */}
//       <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center gap-4">
//         <div className="h-[1px] flex-1 bg-white/10"></div>
//         <span className="text-xs font-mono text-muted uppercase tracking-widest">Drag to explore</span>
//         <div className="h-[1px] flex-1 bg-white/10"></div>
//       </div>
//     </section>
//   );
// }

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const slides = [
  { title: "Early-Stage Founders", text: "Builders with strong product intuition and long-term thinking.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" },
  { title: "AI-First Teams", text: "Teams building AI-led consumer or B2B platforms.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" },
  { title: "Structural Problem Solvers", text: "Entrepreneurs solving non-trivial, real-world problems.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800" },
  { title: "Long-Term Builders", text: "Founders seeking deep strategic partnerships — not just capital.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800" }
];

export default function Partners() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the heading and background text
  const xLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="partners" ref={sectionRef} className="py-32 bg-bg overflow-hidden relative">
      {/* Background Parallax Text */}
      <motion.div 
        style={{ x: xLeft }}
        className="absolute top-20 left-0 text-[15vw] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter"
      >
        Strategic Partners Strategic Partners
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-reveal">
          Who We Partner With
        </h2>
        <p className="text-muted mt-4">We look for builders who think in decades, not quarters.</p>
      </div>

      <div className="cursor-grab active:cursor-grabbing px-6">
        <motion.div
          className="flex gap-8"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
        >
          {slides.map((s, i) => (
            <motion.div 
              key={i} 
              className="relative min-w-[350px] md:min-w-[450px] h-[550px] rounded-[3rem] overflow-hidden glass-card border-white/5 group bg-panel"
            >
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-2xl font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-muted leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}