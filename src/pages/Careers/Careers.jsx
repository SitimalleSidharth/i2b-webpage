export default function Careers() {
  const roles = [
    { title: "Frontend Engineer", type: "Full-Time | Remote" },
    { title: "AI / ML Engineer", type: "Full-Time | Hybrid" },
    { title: "Product Manager", type: "Full-Time | Hyderabad" },
    { title: "Startup Associate", type: "Internship" },
  ];

  return (
    <section className="min-h-screen bg-bg px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Careers at I2B</h1>
        <p className="text-muted text-lg mb-12">Join us to build next-generation technology companies.</p>
        <div className="space-y-6">
          {roles.map((r, i) => (
            <div key={i} className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:row justify-between items-start md:items-center gap-4 hover:border-primary/50 transition-all">
              <div>
                <h3 className="font-heading text-xl font-bold">{r.title}</h3>
                <p className="text-muted text-sm mt-1">{r.type}</p>
              </div>
              <a href="#" className="text-primary font-bold hover:underline">Apply Now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}