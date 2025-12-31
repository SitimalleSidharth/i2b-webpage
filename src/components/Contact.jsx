import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-16 relative overflow-hidden">
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

          <div className="relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <CheckCircle size={64} className="text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="First Name" className="input" />
                  <input required type="text" placeholder="Last Name" className="input" />
                </div>
                <input required type="email" placeholder="Email Address" className="input" />
                <select className="input appearance-none bg-panel">
                  <option value="" disabled selected>Interested in...</option>
                  <option value="incubation">Startup Incubation</option>
                  <option value="engineering">Product Engineering</option>
                </select>
                <textarea required rows="4" placeholder="Tell us about your project" className="input" />
                <button type="submit" className="btn-primary w-full mt-4 flex items-center justify-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}