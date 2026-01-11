import { useState, useEffect } from "react"
import { Mail, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [resetTimer, setResetTimer] = useState(10)
  const [resetting, setResetting] = useState(false)

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
    website: ""
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
    if (!window.grecaptcha) return setError("Captcha not ready")
    setLoading(true)
    try {
      const token = await window.grecaptcha.execute("6LftCUQsAAAAAI9fyKiCErmueDxUXxgaow6aZcnS", { action: "contact" });

      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, token })
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      setResetting(true)
      setResetTimer(10)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!resetting) return

    const interval = setInterval(() => {
      setResetTimer(t => {
        if (t <= 1) {
          clearInterval(interval)
          setSubmitted(false)
          setResetting(false)
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            interest: "",
            message: "",
            website: ""
          })
          return 10
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [resetting])

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
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {submitted ? (
              <div
                style={{ "--progress": `${(resetTimer / 10) * 100}%` }}
                className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 relative before:absolute before:inset-0 before:rounded-3xl before:border-2 before:border-primary/40 before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude] before:[background:conic-gradient(#6AE3FF_var(--progress),transparent_0)]"
              >
                <CheckCircle size={64} className="text-primary mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-muted text-sm md:text-base">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>

                <input type="text" name="website" className="hidden" onChange={handleChange} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="firstName" required type="text" placeholder="First Name" className="input" onChange={handleChange} />
                  <input name="lastName" required type="text" placeholder="Last Name" className="input" onChange={handleChange} />
                </div>

                <input name="email" required type="email" placeholder="Email Address" className="input" onChange={handleChange} />

                <select name="interest" required className="input appearance-none bg-panel" onChange={handleChange}>
                  <option value="">Interested in...</option>
                  <option value="Startup Incubation">Startup Incubation</option>
                  <option value="Product Engineering">Product Engineering</option>
                  <option value="Other">Other</option>
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
