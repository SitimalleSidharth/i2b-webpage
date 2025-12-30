// import { motion } from "framer-motion"

// export default function Vision() {
//   return (
//     <section className="py-24 px-6 bg-[color:var(--color-bg)] relative overflow-hidden">

//       {/* Soft Glow Background */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">

//         {/* Left – Big Emotional Line */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:col-span-3"
//         >
//           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
//             Have an idea worth building?
//           </h2>
//           <p className="text-muted text-lg">
//             Let’s turn your vision into a real, scalable technology company.
//           </p>
//         </motion.div>

//         {/* Right – Mission & CTA */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:col-span-2 bg-[color:var(--color-card)]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
//         >
//           <h3 className="font-heading text-xl mb-3">Our Philosophy</h3>
//           <p className="text-muted mb-6">
//             We believe in building technology that solves real problems — and scaling it into sustainable businesses.
//           </p>

//           <a
//             href="#contact"
//             className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-black font-semibold shadow-glow hover:scale-105 transition"
//           >
//             Have an idea ? Let’s create it.
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   )
// }
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto glass-card rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center"
      >
        {/* Background light pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
        
        <div className="relative z-10">
          <h2 className="font-heading text-4xl md:text-7xl font-bold mb-8 text-reveal">
            Have an idea worth building?
          </h2>
          <p className="text-muted text-xl max-w-2xl mx-auto mb-12">
            We believe in building technology that solves real problems—and scaling it into sustainable businesses. Let’s turn your vision into a real, scalable technology company.
          </p>
          
          <a
            href="#contact"
            className="btn-primary inline-block text-lg px-12 py-5"
          >
            Let’s Create It
          </a>
        </div>
      </motion.div>
    </section>
  );
}