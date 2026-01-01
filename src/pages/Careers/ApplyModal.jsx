export function ApplyModal({ role, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-[#0B1020] max-w-lg w-full p-8 rounded-2xl relative border border-white/10">

        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">✕</button>

        <h2 className="font-heading text-2xl mb-1">Apply for {role}</h2>
        <p className="text-muted mb-6">Fill the form and upload your resume (PDF)</p>

        <form className="space-y-5">
          <input required placeholder="Full Name" className="input" />
          <input required type="email" placeholder="Email" className="input" />
          <input placeholder="LinkedIn / Portfolio URL" className="input" />

          <div>
            <label className="block text-sm text-muted mb-2">Upload Resume (PDF only)</label>
            <input type="file" accept=".pdf" className="text-sm text-muted" />
          </div>

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-black font-semibold shadow-glow hover:scale-105 transition">
            Submit Application
          </button>
        </form>

      </div>
    </div>
  )
}
