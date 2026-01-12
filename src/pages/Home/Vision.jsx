import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Vision() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    
    const scrollToSection = () => {
      const el = document.getElementById("contact");
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (pathname !== "/") {
      // If user is on /careers or another page, go home first then scroll
      navigate("/");
      requestAnimationFrame(() => {
        setTimeout(scrollToSection, 100); // Slight delay to allow home page to mount
      });
    } else {
      // Already on home page, just scroll
      scrollToSection();
    }
  };

  return (
    <section className="py-24 md:py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto glass-card rounded-[2.2rem] md:rounded-[3rem] p-10 md:p-24 relative overflow-hidden text-center"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />

        <div className="relative z-10">
          <h2 className="font-heading text-[2.2rem] leading-tight md:text-7xl font-bold mb-6 text-reveal">
            Have an idea worth building?
          </h2>

          <p className="text-muted text-[15px] md:text-xl max-w-md md:max-w-2xl mx-auto mb-10 leading-relaxed">
            We turn your vision into a real, scalable technology company. Let’s solve real problems together.
          </p>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="btn-primary inline-block text-base md:text-lg px-10 md:px-12 py-4 md:py-5"
            aria-label="Contact us to create your vision"
          >
            Let’s Create It
          </a>
        </div>
      </motion.div>
    </section>
  );
}