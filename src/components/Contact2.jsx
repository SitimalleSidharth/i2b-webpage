import { Mail, MapPin, ArrowUpRight } from "lucide-react"

export default function ContactUs() {
  return (
    <section id="contact" className="py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[3rem] p-10 md:p-20 grid md:grid-cols-2 gap-20 relative overflow-hidden">

          {/* Left */}
          <div>
            <h2 className="font-heading text-[2.4rem] md:text-6xl font-bold mb-8 leading-tight text-reveal">
              Let's build <br /> something great.
            </h2>
            <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
              {/* Whether you're shaping a bold idea or evolving an established enterprise, */}
              {/* we’d love to hear what you’re building. */}
              Reach out whether you're a founder with a raw idea or an enterprise seeking an engineering lab.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-10">

            <a
              href="mailto:contact@i2b.in"
              className="group flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-[11px] text-muted font-mono uppercase tracking-wider">Write to us</p>
                  <p className="text-xl font-medium text-white">contact@i2b.in</p>
                </div>
              </div>
              <ArrowUpRight className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="flex items-start gap-6 opacity-80">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin size={18} className="text-primary" />
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                Mahaveer Gateway, Unit 03, 14th Floor — Nanakramguda,<br />
                Hyderabad, Telangana, India
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
