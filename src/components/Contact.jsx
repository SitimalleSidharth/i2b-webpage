import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: ""
  })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    if (!form.firstName || !form.lastName) return "Name is required"
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Invalid email address"
    if (!form.interest) return "Please select an interest"
    if (form.message.length < 15) return "Message too short"
    return null
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError("")
    const err = validate()
    if (err) return setError(err)

    setLoading(true)
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[2.3rem] md:rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-16 relative overflow-hidden">

          {/* Left */}
          <div>
            <h2 className="font-heading text-[2.2rem] md:text-5xl font-bold mb-6 text-reveal">
              Let's build <br /> something great.
            </h2>
            <p className="text-muted text-[15px] md:text-lg mb-10 leading-relaxed max-w-md">
              Reach out whether you're a founder with a raw idea or an enterprise seeking an engineering lab.
            </p>

            <div className="space-y-8">
              {/* <div onClick={() => window.location.href = "mailto:contact@i2b.in"} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-muted font-mono uppercase">Email us</p>
                  <p className="text-white font-medium">contact@i2b.in</p>
                </div>
              </div> */}
              <a 
              href="https://maps.app.goo.gl/2Lguo8p7Xmi8Ermu9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 md:gap-6 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
            >
              <a 
                href="https://maps.app.goo.gl/2Lguo8p7Xmi8Ermu9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 md:gap-6 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
              >
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted font-mono uppercase">Location</p>
                    <p className="text-white font-medium">
                      Mahaveer Gateway <br/>
                      Unit No.03,14th Floor, Bull Circle, Madhava Reddy Colony <br/>
                      Nanakramguda, Gachibowli, Hyderabad, Telangana 500032
                    </p>
                  </div>
                </div>
              </a>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <CheckCircle size={64} className="text-primary mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted text-sm md:text-base">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="firstName" required type="text" placeholder="First Name" className="input" onChange={handleChange} />
                  <input name="lastName" required type="text" placeholder="Last Name" className="input" onChange={handleChange} />
                </div>

                <input name="email" required type="email" placeholder="Email Address" className="input" onChange={handleChange} />

                <select name="interest" required className="input appearance-none bg-panel" onChange={handleChange}>
                  <option value="">Interested in...</option>
                  <option value="incubation">Startup Incubation</option>
                  <option value="engineering">Product Engineering</option>
                  <option value="other">Other</option>
                </select>

                <textarea name="message" required rows="4" placeholder="Tell us about your project" className="input" onChange={handleChange} />

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button type="submit" disabled={loading} className="btn-primary w-full mt-4 flex items-center justify-center gap-2 group">
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
