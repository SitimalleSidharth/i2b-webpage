import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FounderImage from '../../assets/Deepak_Gullapali.webp';

export default function Founder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const noteY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 relative bg-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-7"
        >
          <h2 className="font-heading text-[2.3rem] leading-tight md:text-6xl font-bold mb-8 text-reveal">
            Meet the Founder
          </h2>

          <div className="space-y-6 text-[15px] md:text-lg leading-relaxed">
            <p className="text-white">
              <span className="text-primary font-bold">Deepak Gullapalli</span> is a visionary entrepreneur, recognized for building scalable digital platforms and founding A23, India’s leading online gaming ecosystem.
            </p>
            <p className="text-muted">
              Best known as the <span className="font-bold text-white">Founder and former CEO of Head Digital Works (A23)</span>, he has built platforms that combine product depth, trust, and scale—often in complex, highly regulated environments.
            </p>
            <p className="text-muted">
              Today, Deepak is focused on shaping the next generation of AI-led consumer and enterprise technology through his venture studio i2b.in, while actively investing in and mentoring early-stage founders with strong product conviction.
            </p>
          </div>
        </motion.div>

        {/* Image + Quote */}
        <div className="md:col-span-5 relative group mt-16 md:mt-0">

          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl opacity-50" />

          {/* OPTIMIZATION: will-change-transform added */}
          <motion.div 
            style={{ y: imgY }} 
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[5/6] bg-panel will-change-transform"
          >
            <img
              loading="lazy"
              src={FounderImage}
              alt="Portrait of Deepak Gullapalli, Founder of I2B"
              width="500" // Adjust based on actual image ratio
              height="600"
              className="w-full h-full object-cover object-top transition-all duration-700"
            />
          </motion.div>

          <motion.div
            style={{ y: noteY }}
            className="md:absolute static mt-8 md:-bottom-12 md:-left-10 glass-card p-5 md:p-8 rounded-3xl border-l-4 border-primary max-w-sm shadow-2xl will-change-transform"
          >
            <p className="italic font-medium text-[13px] md:text-base leading-relaxed">
              “Having spent more than two decades building and scaling a consumer internet business, I believe the next wave of opportunity lies in combining AI with deep product thinking and operational clarity...”
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}