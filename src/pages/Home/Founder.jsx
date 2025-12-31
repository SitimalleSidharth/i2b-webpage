import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FounderImage from '../../assets/founder.webp';

export default function Founder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const noteY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 relative bg-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:col-span-7">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-reveal">Meet the Founder</h2>
          <div className="space-y-6 text-base md:text-lg">
            <p className="text-white">
              <span className="text-primary font-bold">Deepak Gullapalli</span> is a visionary entrepreneur, recognized for building scalable digital platforms and founding A23, India’s leading online gaming ecosystem.
            </p>
            <p className="text-muted">Best known as the <span className="font-bold text-white">Founder and former CEO of Head Digital Works (A23)</span>, he has built platforms that combine product depth, trust, and scale—often in complex, highly regulated environments.</p>
            <p className="text-muted">
              Today, Deepak is focused on shaping the next generation of AI-led consumer and enterprise technology through his venture studio i2b.in, while actively investing in and mentoring early-stage founders with strong product conviction
            </p>
          </div>
        </motion.div>

        <div className="md:col-span-5 relative group mt-12 md:mt-0">
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl opacity-50" />
          <motion.div style={{ y: imgY }} className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] bg-panel">
            <img src={FounderImage} alt="Founder" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div style={{ y: noteY }} className="absolute -bottom-6 -left-0 md:-left-10 glass-card p-6 md:p-8 rounded-3xl border-l-4 border-primary max-w-xs shadow-2xl">
            <p className="italic font-medium text-sm md:text-base">“Having spent more than two decades building and scaling a consumer internet business, I believe the next wave of opportunity lies in combining AI with deep product thinking and operational clarity. Through i2b.in, my goal is to build and support companies that are not only innovative, but also responsible, resilient, and enduring.”</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}