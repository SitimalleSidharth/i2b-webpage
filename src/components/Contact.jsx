import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-reveal">Let's build <br /> something great.</h2>
            <p className="text-muted text-lg mb-12">Reach out whether you're a founder with a raw idea or an enterprise seeking an engineering lab.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors"><Mail className="text-primary" size={20} /></div>
                <div><p className="text-[10px] text-muted font-mono uppercase">Email us</p><p className="text-white font-medium">contact@i2b.in</p></div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors"><MapPin className="text-primary" size={20} /></div>
                <div><p className="text-[10px] text-muted font-mono uppercase">Location</p><p className="text-white font-medium">Hyderabad, India</p></div>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <input type="email" placeholder="Email Address" className="input" />
            <select className="input appearance-none bg-panel">
              <option value="" disabled selected>Interested in...</option>
              <option value="incubation">Startup Incubation</option>
              <option value="engineering">Product Engineering</option>
            </select>
            <textarea rows="4" placeholder="Tell us about your project" className="input" />
            <button type="submit" className="btn-primary w-full mt-4">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}