// // // import { useEffect, useState } from "react"
// // // import { NavLink } from "react-router-dom"

// // // export default function Navbar() {
// // //   const [scrolled, setScrolled] = useState(false)

// // //   useEffect(() => {
// // //     const onScroll = () => setScrolled(window.scrollY > 40)
// // //     window.addEventListener("scroll", onScroll)
// // //     return () => window.removeEventListener("scroll", onScroll)
// // //   }, [])

// // //   return (
// // //     <header className={`fixed top-0 left-0 w-full z-50 transition ${scrolled ? "bg-[#05070D]/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
// // //       <nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

// // //         {/* Brand */}
// // //         <div className="font-heading text-xl tracking-wide text-white">
// // //           I2B
// // //         </div>

// // //         {/* Links */}
// // //         <div className="hidden md:flex items-center gap-10 text-sm">
// // //           {[
// // //             { name: "About", to: "/#about" },
// // //             { name: "What We Do", to: "/#whatwedo" },
// // //             { name: "Partners", to: "/#partners" },
// // //             { name: "Careers", to: "/careers" }
// // //           ].map(link => (
// // //             <NavLink
// // //               key={link.name}
// // //               to={link.to}
// // //               className={({isActive}) =>
// // //                 `relative text-muted hover:text-white transition
// // //                 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-transform
// // //                 ${isActive ? "text-white after:scale-x-100" : ""}`
// // //               }
// // //             >
// // //               {link.name}
// // //             </NavLink>
// // //           ))}
// // //         </div>

// // //         {/* CTA */}
// // //         <a
// // //           href="#contact"
// // //           className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-black font-semibold shadow-glow hover:scale-105 transition"
// // //         >
// // //           Build With Us
// // //         </a>

// // //       </nav>
// // //     </header>
// // //   )
// // // }
// // import { useEffect, useState } from "react";
// // import { NavLink } from "react-router-dom";

// // export default function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 40);
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500">
// //       <nav className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"}`}>
        
// //         <div className="font-heading text-2xl font-bold tracking-tighter text-white">
// //           I2B<span className="text-primary">.</span>
// //         </div>

// //         <div className="hidden md:flex items-center gap-8 text-sm font-medium">
// //           {[
// //             { name: "About", to: "/#about" },
// //             { name: "What We Do", to: "/#whatwedo" },
// //             { name: "Partners", to: "/#partners" },
// //             { name: "Careers", to: "/careers" }
// //           ].map(link => (
// //             <NavLink
// //               key={link.name}
// //               to={link.to}
// //               className="text-muted hover:text-primary transition-colors duration-300"
// //             >
// //               {link.name}
// //             </NavLink>
// //           ))}
// //         </div>

// //         <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-primary hover:text-black transition-all duration-300">
// //           Build With Us
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Helper to handle smooth scroll even if on a different page
//   const handleScroll = (e, id) => {
//     if (location.pathname === '/') {
//       e.preventDefault();
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   const navLinks = [
//     { name: "About", id: "about" },
//     { name: "What We Do", id: "whatwedo" },
//     { name: "Partners", id: "partners" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500">
//       <nav className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"}`}>
        
//         <Link to="/" className="font-heading text-2xl font-bold tracking-tighter text-white">
//           I2B<span className="text-primary">.</span>
//         </Link>

//         <div className="hidden md:flex items-center gap-8 text-sm font-medium">
//           {navLinks.map(link => (
//             <a
//               key={link.id}
//               href={`#${link.id}`}
//               onClick={(e) => handleScroll(e, link.id)}
//               className="text-muted hover:text-primary transition-colors duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//           <Link to="/careers" className="text-muted hover:text-primary transition-colors duration-300">
//             Careers
//           </Link>
//         </div>

//         <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-primary hover:text-black transition-all duration-300">
//           Build With Us
//         </a>
//       </nav>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on home, navigate home first then scroll
      navigate(`/#${id}`);
      // The scroll will be handled by the hash in the URL or 
      // you can use a useEffect in App.jsx to catch it.
    } else {
      // If already home, just scroll smoothly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "What We Do", id: "whatwedo" },
    { name: "Partners", id: "partners" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500">
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500 ${
        scrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"
      }`}>
        
        <Link to="/" className="font-heading text-2xl font-bold tracking-tighter text-white">
          I2B<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`transition-colors duration-300 ${
                location.pathname === '/' ? "text-muted hover:text-primary" : "text-muted hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/careers" 
            className={`transition-colors duration-300 ${
              location.pathname === '/careers' ? "text-primary" : "text-muted hover:text-primary"
            }`}
          >
            Careers
          </Link>
        </div>

        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')} 
          className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-primary hover:text-black transition-all duration-300"
        >
          Build With Us
        </a>
      </nav>
    </header>
  );
}