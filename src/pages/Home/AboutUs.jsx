import { motion } from "framer-motion";
import { Rocket, Puzzle, Quote } from "lucide-react";
import FounderImage from '../../assets/profile_casual.jpg'; 

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold mb-6 text-reveal"
        >
          About <span className="text-white">i2b<span className="text-primary">.</span></span>
        </motion.h2>

        <div className="h-1 w-16 bg-primary rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* --- TOP LEFT: MAIN FOCUS (8 Cols) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group md:col-span-8 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden min-h-[300px] md:min-h-[320px] will-change-transform"
          >
            <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Rocket size={220} className="absolute -top-8 -right-8 text-primary/5 pointer-events-none rotate-12" />

            <div className="relative z-10 max-w-xl">
              <h3 className="text-primary font-mono text-[12px] uppercase tracking-widest mb-5">
                Our Focus
              </h3>
              <h4 className="text-xl md:text-[26px] font-bold mb-5 text-white">
                Product Engineering Built Around Consumers
              </h4>
              <p className="text-muted text-sm mb-3 leading-relaxed">
                We collaborate with visionary leaders and turn ideas into scalable, reliable, and user-centric products that address real-world challenges. 
              </p>
              <ul className="text-[13px] text-muted space-y-1.5">
                <li>• Product thinking that prioritizes what matters most.</li>
                <li>• Engineering decisions made with long-term impact in mind.</li>
                <li>• Systems designed for people who use them every day.</li>
              </ul>
            </div>
          </motion.div>

          {/* --- TOP RIGHT: OUR APPROACH (4 Cols) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="group md:col-span-4 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[240px] relative overflow-hidden will-change-transform"
          >
            <div className="absolute inset-0 rounded-3xl border border-accent/0 group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-1 rounded-3xl bg-accent/10 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            <Puzzle className="text-accent mb-4" size={28} />
            <div className="relative z-10">
              <h3 className="text-primary font-mono text-[12px] uppercase tracking-widest mb-8">
                Our Approach
              </h3>
              <h4 className="text-xl font-bold mb-3 text-white">
                Co-building and scaling from zero to production-ready
              </h4>
              <ul className="text-[11px] text-muted space-y-1.5">
                <li>• Deep product & engineering partnership</li>
                <li>• Systems designed to grow with demand</li>
                <li>• Foundations built for long-term reliability</li>
              </ul>
            </div>
          </motion.div>

          {/* --- BOTTOM: FOUNDER SECTION (12 Cols) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group md:col-span-12 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/10 bg-[#080B14]"
          >
            {/* --- LAYERS --- */}
            <div 
              className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            />
            <div className="absolute -top-[150px] -right-[100px] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-[150px] -left-[100px] w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/0 group-hover:border-primary/20 transition-colors duration-700 pointer-events-none z-10" />

            {/* --- CONTENT GRID (Tighter Spacing) --- */}
            {/* CHANGED: gap-12 -> gap-6 md:gap-10 to reduce horizontal empty space */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
              
              {/* --- LEFT COLUMN: IMAGE + NOTE (3-4 Cols) --- */}
              {/* CHANGED: gap-8 -> gap-5 to pull note closer to image */}
              <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-5">
                
                {/* 1. Profile Photo */}
                <div className="relative rounded-2xl p-1 bg-gradient-to-br from-white/10 to-transparent group-hover:from-primary/30 group-hover:to-accent/30 transition-colors duration-700 w-full max-w-[240px] md:w-full mx-auto md:mx-0">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl bg-black">
                     <img 
                      src={FounderImage} 
                      alt="Deepak Gullapalli" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                     />
                  </div>
                </div>

                {/* 2. Founder's Note (Compact) */}
                <div className="relative max-w-[240px] md:max-w-full mx-auto md:mx-0">
                   <div className="flex items-center gap-2 mb-2 opacity-80">
                      <Quote size={12} className="text-primary fill-primary" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                        Founder's Note
                      </span>
                   </div>
                   <p className="text-white/80 italic text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
                     Having spent more than two decades building and scaling a consumer internet business, I believe the next wave of opportunity lies in combining AI with deep product thinking and operational clarity. Through i2b.in, my goal is to build and support companies that are not only innovative, but also responsible, resilient, and enduring.”
                   </p>
                </div>

              </div>

              {/* --- RIGHT COLUMN: BIOGRAPHY (8-9 Cols) --- */}
              {/* CHANGED: Removed max-w constraints to let text fill the space */}
              <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center h-full md:pt-2">
                
                <h3 className="text-primary font-mono text-[10px] uppercase tracking-widest mb-3">
                    Meet the Founder
                </h3>
                
                <h4 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">
                  Deepak Gullapalli
                </h4>
                
                <div className="space-y-6 text-muted text-sm md:text-base leading-relaxed w-full">
                  <p>
                    <strong className="text-white font-medium">Deepak Gullapalli</strong> is a visionary entrepreneur recognized for building scalable digital platforms and founding A23, India’s leading online gaming ecosystem.
                  </p>
                  <p>
                    Best known as the <strong className="text-white font-medium">Founder and former CEO of Head Digital Works (A23)</strong>, he has built platforms that combine product depth, trust, and scale—often in complex, highly regulated environments.
                  </p>
                  <p>
                    Today, he is focused on shaping the next generation of AI-led consumer and enterprise technology through <span className="text-primary font-medium">i2b.in</span>, while actively investing in and mentoring early-stage founders with strong product conviction.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}