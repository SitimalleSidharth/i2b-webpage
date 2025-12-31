import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 100; // Account for navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    /* FIX: Changed w-full to inset-x-0 to prevent padding from expanding the width */
    <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-6 py-4 transition-all duration-500">
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-500 ${
        scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"
      }`}>
        
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold text-white tracking-tighter shrink-0">
          I2B<span className="text-primary">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['about', 'whatwedo', 'partners'].map(id => (
            <a 
              key={id} 
              href={`#${id}`} 
              onClick={(e) => handleNavClick(e, id)} 
              className="text-muted hover:text-primary capitalize transition-colors"
            >
              {id === 'whatwedo' ? 'What We Do' : id}
            </a>
          ))}
          <Link to="/careers" className="text-muted hover:text-primary transition-colors">Careers</Link>
        </div>

        {/* Action Button - shrink-0 prevents it from squishing on mobile */}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')} 
          className="shrink-0 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-white text-black text-[10px] md:text-sm font-bold hover:bg-primary transition-all duration-300"
        >
          Build With Us
        </a>
      </nav>
    </header>
  );
}