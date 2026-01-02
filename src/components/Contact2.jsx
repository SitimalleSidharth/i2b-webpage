import { Mail, MapPin, ArrowUpRight } from "lucide-react"

export default function ContactUs() {
  return (
    <section id="contact" className="py-28 md:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 grid md:grid-cols-2 gap-10 md:gap-20 relative overflow-hidden">

          {/* Left */}
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight text-reveal">
              Let's build <br /> something great.
            </h2>
            <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
              Reach out whether you're a founder with a raw idea or an enterprise seeking an engineering lab.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-10 mt-8 md:mt-0">

            {/* Email Link */}
            <a
              href="mailto:contact@i2b.in"
              className="group flex items-center justify-between p-5 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all w-full"
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={22} />
                </div>
                
                <div className="min-w-0">
                  <p className="text-[10px] md:text-[11px] text-muted font-mono uppercase tracking-wider">Write to us</p>
                  <p className="text-lg md:text-xl font-medium text-white truncate">contact@i2b.in</p>
                </div>
              </div>
              <ArrowUpRight className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 ml-2" />
            </a>

            {/* Address Link (Opens in New Tab) */}
            <a 
              href="https://maps.app.goo.gl/2Lguo8p7Xmi8Ermu9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 md:gap-6 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:border-primary/30 transition-colors">
                <MapPin size={18} className="text-primary" />
              </div>
              <p className="text-sm leading-relaxed max-w-sm group-hover:text-white transition-colors">
                Mahaveer Gateway, Unit 03, 14th Floor — Nanakramguda,<br />
                Hyderabad, Telangana, India
              </p>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}