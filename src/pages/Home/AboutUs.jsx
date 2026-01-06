import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import teamImg from "../../assets/team_discussion.webp"; // Using real image
import aiImg from "../../assets/ai_first_teams.webp";     // Using real image

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              We build companies <br />
              <span className="text-muted">not just products.</span>
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted leading-relaxed"
          >
            i2b is a **Venture Studio** founded by operators, not just investors. 
            We combine 20+ years of execution experience with deep AI engineering 
            to bridge the gap between "Idea" and "Enterprise Scale."
          </motion.p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* CARD 1: THE HUMAN ELEMENT (Large Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 h-[400px] md:h-full relative group rounded-[2.5rem] overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0">
              <img 
                src={teamImg} 
                alt="Team collaborating" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full inline-block text-xs font-mono uppercase tracking-widest text-white mb-4">
                Our DNA
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Founder-Led Execution.
              </h3>
              <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
                Led by Deepak Gullapalli (Founder, A23). We bring the grit, patience, and operational clarity needed to navigate regulatory complexity and market shifts.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN STACK */}
          <div className="md:col-span-5 flex flex-col gap-6 h-full">
            
            {/* CARD 2: AI FOCUS (Top Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 relative group rounded-[2.5rem] overflow-hidden border border-white/10 min-h-[280px]"
            >
              <div className="absolute inset-0">
                 <img 
                  src={aiImg} 
                  alt="AI Technology" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  AI-Native <ArrowRight className="text-primary -rotate-45" />
                </h3>
                <p className="text-sm text-gray-300">
                  Building the neural backbone for next-gen consumer & B2B platforms.
                </p>
              </div>
            </motion.div>

            {/* CARD 3: THE METHOD (Bottom Right - Text Only) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[2.5rem] p-8 flex flex-col justify-center hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6">Why i2b?</h3>
              <ul className="space-y-4">
                {[
                  "Patient, Long-term Capital",
                  "Structural Problem Solving",
                  "Enterprise-Grade Engineering"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted text-sm md:text-base">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}