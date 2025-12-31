import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  { title: "Early-Stage Founders", text: "Builders with strong product intuition and long-term thinking.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&q=80" },
  { title: "AI-First Teams", text: "Teams building AI-led consumer or B2B platforms.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&q=80" },
  { title: "Structural Problem Solvers", text: "Entrepreneurs solving non-trivial, real-world problems.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&q=80" },
  { title: "Long-Term Builders", text: "Founders seeking deep strategic partnerships — not just capital.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&q=80" }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 4000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const paginate = dir => {
    setDirection(dir);
    setCurrentIndex(prev => (prev + dir + slides.length) % slides.length);
    startTimer();
  };

  return (
    <section id="collab" className="py-24 md:py-32 bg-bg overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-3 text-reveal">Who We Partner With</h2>
        <p className="text-muted mt-4">We collaborate with builders who prioritize strategic, long-term outcomes.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="relative h-[380px] sm:h-[420px] md:h-[65vh] mb-10">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: d => ({ x: d > 0 ? "20%" : "-20%", opacity: 0 }),
                center: { x: 0, opacity: 1, zIndex: 1 },
                exit: d => ({ x: d < 0 ? "20%" : "-20%", opacity: 0, zIndex: 0 })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              transition={{ x: { type: "spring", stiffness: 260, damping: 25 }, opacity: { duration: 0.3 } }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="relative w-full h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden glass-card bg-panel group">
                <img loading="lazy" src={slides[currentIndex].img} alt={slides[currentIndex].title} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                <div className="absolute bottom-0 p-6 sm:p-10 md:p-20">
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-white">
                    {slides[currentIndex].title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base md:text-xl max-w-xl md:max-w-3xl leading-relaxed">
                    {slides[currentIndex].text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-3">
          {slides.map((_, i) => (
            <button key={i} onClick={() => paginate(i - currentIndex)} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-16 bg-primary" : "w-3 bg-white/10 hover:bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
