// import { motion } from "framer-motion"
// import { Mail, MapPin, Briefcase } from "lucide-react"

// export default function Contact() {
//   return (
//     <section id="contact" className="py-32 px-6 bg-[color:var(--color-bg)]">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

//         {/* Left Info */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="font-heading text-4xl font-bold mb-6">Contact I2B</h2>

//           <p className="text-muted mb-10">
//             Whether you are a founder with an idea, or an enterprise looking to build scalable platforms — we’d love to hear from you.
//           </p>

//           <div className="space-y-6 text-muted">
//             <div className="flex items-center gap-4">
//               <Mail className="text-primary" />
//               <span>contact@i2b.in</span>
//             </div>

//             <div className="flex items-center gap-4">
//               <MapPin className="text-primary" />
//               <span>Hyderabad, India</span>
//             </div>

//             <div className="flex items-center gap-4">
//               <Briefcase className="text-primary" />
//               <span>Careers at I2B</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Form */}
//         <motion.form
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-[color:var(--color-card)]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-10 space-y-6"
//         >
//           <div className="grid md:grid-cols-2 gap-6">
//             <input className="input" placeholder="Full Name" />
//             <input className="input" placeholder="Email" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input className="input" placeholder="Designation" />
//             <input className="input" placeholder="Organization" />
//           </div>

//           <input className="input" placeholder="How did you hear about us?" />
//           <textarea rows="4" className="input" placeholder="Tell us about your idea or requirement..." />

//           <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-black font-semibold shadow-glow hover:scale-105 transition">
//             Submit Enquiry
//           </button>
//         </motion.form>

//       </div>
//     </section>
//   )
// }
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-reveal">
              Let's build <br /> something great.
            </h2>
            <p className="text-muted text-lg mb-12">
              Whether you are a founder with a raw idea or an enterprise seeking a dedicated engineering lab—reach out.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono uppercase">Email us</p>
                  <p className="text-white font-medium">contact@i2b.in</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono uppercase">Location</p>
                  <p className="text-white font-medium">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <input type="email" placeholder="Email Address" className="input" />
            <select className="input appearance-none">
              <option value="" disabled selected>Interested in...</option>
              <option value="incubation">Startup Incubation</option>
              <option value="engineering">Product Engineering</option>
              <option value="partnership">Strategic Partnership</option>
            </select>
            <textarea rows="4" placeholder="Tell us about your project" className="input"></textarea>
            
            <button type="submit" className="btn-primary w-full mt-4">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}