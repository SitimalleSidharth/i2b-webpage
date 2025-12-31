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

    if (pathname !== "/") navigate(`/#${id}`);
    else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">
            I2B<span className="text-primary">.</span>
          </Link>

          <div className="hidden md:flex gap-10 text-xs uppercase tracking-wider">
            {["about", "whatwedo", "collab"].map(id => (
              <a key={id} href={`#${id}`} onClick={(e)=>handleNavClick(e,id)}
                 className="text-white/70 hover:text-primary transition">
                {id === "whatwedo" ? "What We Do" : id}
              </a>
            ))}
            <Link to="/careers" className="text-white/70 hover:text-primary transition">Careers</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </nav>
      </header>

      {/* TRUE FULLSCREEN MOBILE DRAWER */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[999] transition-all duration-500 md:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-base uppercase tracking-widest">
          {["about","whatwedo","partners"].map(id=>(
            <a key={id} href={`#${id}`} onClick={(e)=>handleNavClick(e,id)}
               className="text-white/90 hover:text-primary transition">
              {id === "whatwedo" ? "What We Do" : id}
            </a>
          ))}

          <Link to="/careers" onClick={()=>setIsOpen(false)} className="text-white/90 hover:text-primary">
            Careers
          </Link>

          <a href="#contact" onClick={(e)=>handleNavClick(e,"contact")}
             className="mt-6 px-10 py-3 border border-primary/40 text-primary text-xs font-bold tracking-widest rounded-full hover:bg-primary hover:text-black transition">
            Build With Us
          </a>
        </div>
      </div>
    </>
  );
}
