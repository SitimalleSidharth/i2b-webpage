import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = () => {
      if (!id) return scrollToTop();
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 0;
        window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    if (pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => {
        setTimeout(scrollToSection, 60);
      });
    } else {
      scrollToSection();
    }
  };

  const navItems = [

    { id: "whatwedo", label: "What We Do" },
    { id: "about", label: "About" },
    { id: "collab", label: "Collaborate" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-500 ${scrolled || isOpen ? "bg-black/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
              <Link 
                to="/" 
                aria-label="I2B Home"
                onClick={(e) => handleNavClick(e,"")} 
                className="text-4xl font-bold text-white"
              >
                  i2b<span className="text-primary">.</span>
              </Link>

              <div className="hidden md:flex gap-10 text-xs uppercase tracking-wider">
                {navItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e)=>handleNavClick(e,item.id)}
                    className="text-white/70 hover:text-primary transition"
                  >
                    {item.label}
                  </a>
                ))}
                <Link to="/careers" className="text-white/70 hover:text-primary">
                  Careers
                </Link>
              </div>

              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden text-white p-2 -mr-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={28}/> : <Menu size={28}/>}
              </button>
        </nav>
      </header>

      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[999] transition-all duration-500 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-7 text-[13px] uppercase tracking-[0.25em]">
          {navItems.map(item=>(
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e)=>handleNavClick(e,item.id)}
              className="text-white/90 hover:text-primary transition"
            >
              {item.label}
            </a>
          ))}

          <Link to="/careers" onClick={()=>setIsOpen(false)} className="text-white/90 hover:text-primary">
            Careers
          </Link>

          <a
            href="#contact"
            onClick={(e)=>handleNavClick(e,"contact")}
            className="mt-8 px-12 py-3 border border-primary/40 text-primary text-xs font-bold tracking-widest rounded-full hover:bg-primary hover:text-black transition"
          >
            Build With Us
          </a>
        </div>
      </div>
    </>
  );
}