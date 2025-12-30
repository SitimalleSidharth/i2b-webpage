export default function Careers() {
  const roles = [
    { title: "Frontend Engineer", type: "Full-Time | Remote" },
    { title: "AI / ML Engineer", type: "Full-Time | Hybrid" },
    { title: "Product Manager", type: "Full-Time | Hyderabad" },
    { title: "Startup Associate", type: "Internship" },
  ]

  return (
    <section className="min-h-screen bg-[color:var(--color-bg)] px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl mb-6">Careers at I2B</h1>
        <p className="text-muted mb-10">
          Join us to build next-generation technology companies.
        </p>

        <div className="space-y-6">
          {roles.map((r,i)=>(
            <div key={i} className="bg-[color:var(--color-card)]/70 p-6 rounded-xl border border-white/10 flex justify-between items-center hover:shadow-glow transition">
              <div>
                <h3 className="font-heading">{r.title}</h3>
                <p className="text-muted text-sm">{r.type}</p>
              </div>
              <a href="#" className="text-primary">Apply →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
