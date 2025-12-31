import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const slides = [
  { title: "Early-Stage Founders", text: "Builders with strong product intuition and long-term thinking.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&q=80" },
  { title: "AI-First Teams", text: "Teams building AI-led consumer or B2B platforms.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&q=80" },
  { title: "Structural Problem Solvers", text: "Entrepreneurs solving non-trivial, real-world problems.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&q=80" },
  { title: "Long-Term Builders", text: "Founders seeking deep strategic partnerships — not just capital.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&q=80" }
];

export default function Partners() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setConstraints({ left: -(scrollWidth - offsetWidth + 40), right: 0 });
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const xTitle = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="partners" ref={sectionRef} className="py-24 md:py-32 bg-bg overflow-hidden relative">
      <motion.div style={{ x: xTitle }} className="absolute top-10 left-0 text-[12vw] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none uppercase">
        Strategic Partners Strategic Partners
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-reveal">Who We Partner With</h2>
        <p className="text-muted mt-4">We look for builders who think in decades, not quarters.</p>
      </div>

      <div className="px-6">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
        >
          {slides.map((s, i) => (
            <motion.div key={i} className="relative min-w-[300px] md:min-w-[450px] h-[500px] md:h-[550px] rounded-[2.5rem] overflow-hidden glass-card group bg-panel flex-shrink-0">
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8 md:p-10">
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}