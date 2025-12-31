// import { motion } from "framer-motion";

// // const items = [
// //   { title: "AI-led Consumer Products", desc: "We build intelligent consumer platforms that simplify daily life and deliver measurable value.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&q=80" },
// //   { title: "B2B & Supply Chain Platforms", desc: "Enterprise systems that digitize operations, optimize coordination and scale real businesses.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80" },
// //   { title: "Startup Incubation & Investment", desc: "We co-build startups by providing capital, product teams, and growth strategy.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&q=80" }
// // ];
// const items = [
//   { title: "AI-led Consumer Products", desc: "We build intelligent, user-first consumer applications that leverage AI to simplify everyday tasks, personalise experiences, and deliver measurable value. Our focus is on products that people choose to use repeatedly—not because they have to, but because they work.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&q=80" },
//   { title: "B2B & Supply Chain Platforms", desc: "We design and develop B2B platforms that address real operational inefficiencies, with a particular focus on supply chain visibility, coordination, and optimisation. Our solutions are built for Indian operating realities, with global scalability in mind.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80" },
//   { title: "Startup Incubation & Investment", desc: "i2b.in actively invests in early-stage technology startups and works closely with founders during the formative stages of product development and go-to-market execution. Beyond capital, we provide hands-on support across product strategy, hiring, growth, and governance", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&q=80" }
// ];


// export default function WhatWeDo() {

//   const cardVariants = {
//     rest: {},
//     hover: {}
//   };

//   const contentVariants = {
//     rest: {
//       y: 20
//     },
//     hover: {
//       y: -40,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 18
//       }
//     }
//   };

//   const descVariants = {
//     rest: {
//       opacity: 0,
//       y: 20
//     },
//     hover: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.12,
//         duration: 0.35,
//         ease: "easeOut"
//       }
//     }
//   };



//   return (
//     <section id="whatwedo" className="py-24 md:py-32 px-6 bg-bg">
//       <div className="max-w-7xl mx-auto">

//         <div className="text-center mb-14 md:mb-20">
//           <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
//           <p className="text-muted max-w-xl mx-auto">
//             Transforming complex industries through intelligent engineering.
//           </p>
//         </div>

//         {/* MOBILE CAROUSEL / DESKTOP GRID */}
//         <div className="flex md:grid md:grid-cols-3 md:gap-10 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 -mx-6 px-6">

//           {items.map((item, i) => (
//             <motion.div
//               key={i}
//               variants={cardVariants}
//               initial="rest"
//               whileHover="hover"
//               animate="rest"
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               className="group relative min-w-[280px] sm:min-w-[320px] md:min-w-0 h-[380px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass-card bg-panel snap-center will-change-transform"
//             >
//               <img
//                 src={item.img}
//                 loading="lazy"
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent group-hover:from-bg/90 transition-all duration-500" />

//               <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end overflow-hidden">

//                 {/* CONTENT MOVES */}
//                 <motion.div variants={contentVariants}>
//                   <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-primary transition-colors">
//                     {item.title}
//                   </h3>

//                   <motion.p
//                     variants={descVariants}
//                     className="text-muted text-sm leading-relaxed"
//                   >
//                     {item.desc}
//                   </motion.p>
//                 </motion.div>

//               </div>
//             </motion.div>




//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

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
  const contentVariants = {
    rest: { y: 40 },
    hover: { y: 0 }
  };

  const descVariants = {
    rest: { opacity: 0, y: 10 },
    hover: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.1, duration: 0.3 } 
    }
  };

  return (
    <section id="whatwedo" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 max-w-xl">
            Transforming complex industries through intelligent engineering.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative min-w-[300px] md:min-w-0 h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden bg-zinc-900 snap-center cursor-pointer group"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Gradient Overlay - Darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div 
                  variants={contentVariants}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <motion.p
                    variants={descVariants}
                    className="text-gray-300 text-sm md:text-base leading-relaxed"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}