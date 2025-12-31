import { motion } from "framer-motion";

const points = [
  { title: "Strategic Partnerships", desc: "Relationships aligned with outcomes, not just delivery." },
  { title: "Deep AI Engineering", desc: "Systems designed for real-world complexity and scale." },
  { title: "Scalable Architecture", desc: "Engineered for high-volume business operations." },
  { title: "Founder-Centric Model", desc: "We function as your internal product leadership team." }
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative rounded-3xl overflow-hidden aspect-square z-10 border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&q=80" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-reveal">Why Choose I2B</h2>
          <div className="space-y-10">
            {points.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="group relative pl-10">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-white/10 overflow-hidden">
                  <div className="h-full w-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}