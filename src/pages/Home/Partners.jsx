import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

import structural_img from "../../assets/structural_problem_solving.webp";
import longterm_img from "../../assets/long_term_builders.webp";
import early_stage_img from "../../assets/team_discussion.webp";
import ai_first_teams from "../../assets/ai_first_teams.webp";

const slides = [
  {
    title: "Early-Stage Founders",
    text: "Founders with strong product intuition and the ambition to build category-defining companies.",
    img: early_stage_img
  },
  {
    title: "Platform-First Teams",
    text: "Companies & Teams building modern consumer and B2B platforms with AI embedded intelligence.",
    img: ai_first_teams
  },
  {
    title: "Structural Problem Solvers",
    text: "Entrepreneurs tackling deep operational, financial, or industry-scale challenges.",
    img: structural_img
  },
  {
    title: "Long-Term Builders",
    text: "Teams seeking enduring product and engineering partnerships, not short-term execution.",
    img: longterm_img
  }
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
    }, 4000); // slightly slower for readability
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
    <section id="collab" className="py-24 md:py-20 bg-bg overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-heading text-[2.3rem] md:text-6xl font-bold mb-3 text-reveal">
          Who We Partner With
        </h2>
        <p className="text-muted mt-4 max-w-md mx-auto text-[15px] leading-relaxed">
          We collaborate with builders who prioritize strategic, long-term outcomes.
        </p>
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="relative h-[320px] sm:h-[360px] md:h-[65vh] mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f]">

          {/* LEFT ARROW */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur border border-white/10 items-center justify-center text-white hover:bg-black/60 transition"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur border border-white/10 items-center justify-center text-white hover:bg-black/60 transition"
          >
            ›
          </button>

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
              transition={{
                x: { type: "spring", stiffness: 260, damping: 25 },
                opacity: { duration: 0.3 }
              }}
              className="absolute inset-0 will-change-transform"
            >
              <div className="relative w-full h-full">
                <img
                  loading="lazy"
                  src={slides[currentIndex].img}
                  alt={slides[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* TEXT BLOCK — LIFTED UP */}
                <div className="absolute inset-x-0 bottom-10 md:bottom-14 p-6 sm:p-8 md:p-10">
                  <h3 className="font-heading text-[18px] sm:text-xl md:text-3xl font-semibold mb-2 text-primary">
                    {slides[currentIndex].title}
                  </h3>
                  <p className="text-gray-300 text-[14px] sm:text-sm md:text-base leading-relaxed max-w-xl">
                    {slides[currentIndex].text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="flex justify-center items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i - currentIndex)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "w-16 bg-primary"
                  : "w-3 bg-white/10 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
