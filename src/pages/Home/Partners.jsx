import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import structural_img from "../../assets/structural_problem_solving.webp";
import longterm_img from "../../assets/long_term_builders.webp";
import early_stage_img from "../../assets/team_discussion.webp";
import ai_first_teams from "../../assets/ai_first_teams.webp";

const partners = [
  {
    id: 1,
    title: "The Visionary",
    subtitle: "Early-Stage Founders",
    desc: "Builders with strong product intuition who need an operating partner, not just a check.",
    img: early_stage_img
  },
  {
    id: 2,
    title: "The Architect",
    subtitle: "AI-First Teams",
    desc: "Engineers building the neural backbone of the next web. We speak your language.",
    img: ai_first_teams
  },
  {
    id: 3,
    title: "The Strategist",
    subtitle: "Structural Solvers",
    desc: "Founders tackling non-trivial, unsexy problems in logistics, supply chain, and B2B.",
    img: structural_img
  },
  {
    id: 4,
    title: "The Marathoner",
    subtitle: "Long-Term Builders",
    desc: "Leaders who prioritize endurance and unit economics over quick flips.",
    img: longterm_img
  }
];

export default function Partners() {
  const [active, setActive] = useState(1);

  return (
    <section id="collab" className="py-24 px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-reveal">
              Who We Back.
            </h2>
            <p className="text-muted text-lg max-w-md">
              We don't bet on markets. We bet on a specific type of mind.
            </p>
          </div>
          {/* Decorative Tag */}
          <div className="hidden md:block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-muted">
            The I2B Ecosystem
          </div>
        </div>

        {/* Desktop: Expanding Horizontal Accordion */}
        <div className="hidden md:flex h-[500px] gap-4">
          {partners.map((p) => (
            <motion.div
              key={p.id}
              layout
              onClick={() => setActive(p.id)}
              onHoverStart={() => setActive(p.id)}
              className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-out border border-white/10 ${
                active === p.id ? "flex-[3]" : "flex-[1]"
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-60"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent ${active === p.id ? 'opacity-90' : 'opacity-60'}`} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {active !== p.id ? (
                  /* Collapsed State Title (Vertical) */
                  <div className="absolute bottom-8 left-8 origin-bottom-left -rotate-90 translate-x-8 w-60">
                    <h3 className="text-xl font-bold text-white/70 tracking-wide uppercase whitespace-nowrap">
                      {p.subtitle}
                    </h3>
                  </div>
                ) : (
                  /* Expanded State Content */
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary font-mono text-xs uppercase tracking-widest border border-primary/30 px-2 py-1 rounded">
                            0{p.id}
                        </span>
                        <h3 className="text-xl font-mono text-primary uppercase tracking-widest">
                            {p.subtitle}
                        </h3>
                    </div>
                    
                    <h4 className="text-4xl font-bold text-white mb-4 leading-tight">
                      {p.title}
                    </h4>
                    <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                      {p.desc}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Stack (Simple & Clean) */}
        <div className="md:hidden flex flex-col gap-6">
          {partners.map((p) => (
            <div key={p.id} className="relative h-[360px] rounded-[2rem] overflow-hidden border border-white/10 group">
              <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-primary font-mono text-xs uppercase tracking-widest">{p.subtitle}</span>
                    <ArrowUpRight className="text-white/50" size={20}/>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}