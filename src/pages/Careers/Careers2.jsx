import { Mail, ArrowUpRight, MapPin, Sparkles } from "lucide-react"
import AnimatedSection from "../../components/AnimatedSection"

export default function CareersTwo() {
  return (
    <section className="min-h-screen bg-bg px-6 py-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Hero */}
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-reveal">
            Build what the future runs on.
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-xl mb-24">
            We are a venture studio building AI-first companies from zero to scale. <br/>
            If you love creating meaningful technology that impacts millions, we’d love to meet you.
          </p>
        </AnimatedSection>

        {/* Careers Card */}
        <AnimatedSection>
          <div className="glass-card rounded-[3rem] p-10 md:p-20 grid md:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Your next chapter starts here.
              </h2>
              <p className="text-muted leading-relaxed max-w-md">
                Engineers, designers, product builders, and growth leaders — <br/>
                if you believe you can help create enduring technology companies, we want to hear from you.
              </p>

              <div className="mt-10 flex items-center gap-4 text-primary text-sm">
                <Sparkles size={18} />
                {/* Early teams. Long-term missions. Real ownership. */}
                Early teams. Long-term missions. Purpose-driven.
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center space-y-10">

              <a
                href="mailto:careers@i2b.in"
                className="group flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted font-mono uppercase tracking-wider">
                      Send your profile to
                    </p>
                    <p className="text-xl font-medium text-white">careers@i2b.in</p>
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
        </AnimatedSection>
      </div>
    </section>
  )
}
