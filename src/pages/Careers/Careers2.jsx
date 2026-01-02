import { Mail, ArrowUpRight, MapPin, Sparkles } from "lucide-react"
import AnimatedSection from "../../components/AnimatedSection"

export default function CareersTwo() {
  return (
    <section className="min-h-screen bg-bg px-6 py-32 md:py-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Hero */}
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-reveal">
            Build what the future runs on.
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-xl mb-16 md:mb-24">
            We are a venture studio building AI-first companies from zero to scale. <br className="hidden md:block"/>
            If you love creating meaningful technology that impacts millions, we’d love to meet you.
          </p>
        </AnimatedSection>

        {/* Careers Card */}
        <AnimatedSection>
          {/* FIX: Reduced padding (p-6), rounded corners (rounded-[2rem]), and gap (gap-10) for mobile */}
          <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 grid md:grid-cols-2 gap-10 md:gap-16">

            {/* Left */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Your next chapter starts here.
              </h2>
              <p className="text-muted leading-relaxed max-w-md">
                Engineers, designers, product builders, and growth leaders — <br className="hidden md:block"/>
                if you believe you can help create enduring technology companies, we want to hear from you.
              </p>

              <div className="mt-8 md:mt-10 flex items-center gap-4 text-primary text-xs md:text-sm">
                <Sparkles size={18} />
                Early teams. Long-term missions. Purpose-driven.
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-10">

              <a
                href="mailto:careers@i2b.in"
                // FIX: Reduced internal padding (p-5) and flex gap (gap-4) for mobile
                className="group flex items-center justify-between p-5 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                  {/* FIX: Smaller icon box on mobile */}
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-[11px] text-muted font-mono uppercase tracking-wider truncate">
                      Send your profile to
                    </p>
                    {/* FIX: Responsive text size and truncation */}
                    <p className="text-lg md:text-xl font-medium text-white truncate">careers@i2b.in</p>
                  </div>
                </div>
                <ArrowUpRight className="text-primary shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
              </a>

              <div className="flex items-start gap-4 md:gap-6 opacity-80">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={18} className="text-primary" />
                </div>
                <p className="text-sm leading-relaxed max-w-sm">
                  Mahaveer Gateway, Unit 03, 14th Floor — Nanakramguda,<br />
                  Hyderabad, Telangana, India
                </p>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}