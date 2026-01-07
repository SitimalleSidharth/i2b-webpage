import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Paperclip, CheckCircle, ArrowRight, Info, ChevronLeft, UploadCloud } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";

// --- Mock Data ---
const roles = [
  { 
    id: 1, 
    title: "Frontend Engineer", 
    type: "Full-Time", 
    location: "Remote", 
    category: "Engineering",
    description: "We are looking for a Frontend Engineer with a passion for building beautiful, high-performance user interfaces using React and Framer Motion.",
    responsibilities: ["Develop modular UI components", "Optimize for 60fps animations", "Collaborate with AI engineers for LLM integrations"],
    requirements: ["3+ years of React experience", "Deep understanding of Tailwind CSS", "Experience with state management"]
  },
  { 
    id: 2, 
    title: "AI / ML Engineer", 
    type: "Full-Time", 
    location: "Hybrid", 
    category: "Engineering",
    description: "Join us to build the neural backbone of our venture studio products.",
    responsibilities: ["Fine-tune LLMs for specific domains", "Architect RAG pipelines", "Deploy scalable AI agents"],
    requirements: ["Python mastery", "Experience with PyTorch or LangChain", "Strong math background"]
  }
];
// const roles = []; // Toggle this to test "No Openings"

export default function Careers() {
  // State for Page View: 'list' (all jobs) or 'details' (single JD page)
  const [pageView, setPageView] = useState("list"); 
  
  // State for Data
  const [selectedJob, setSelectedJob] = useState(null);
  
  // State for Modal (Popup)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Actions ---

  const handleOpenJD = (job) => {
    setSelectedJob(job);
    setPageView("details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGeneralApply = () => {
    setSelectedJob({ title: "General Application", id: null });
    setIsModalOpen(true);
  };

  const handleApplyFromJD = () => {
    setIsModalOpen(true);
  };

  const handleBackToList = () => {
    setPageView("list");
    setTimeout(() => setSelectedJob(null), 300); // Clear after anim
  };

  return (
    <section className="min-h-screen bg-bg px-6 py-32 relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          
          {/* VIEW 1: JOB LISTING PAGE */}
          {pageView === "list" && (
            <motion.div 
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedSection>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-reveal">Join our team.</h1>
                <p className="text-muted text-lg mb-16">Engineering the next generation of AI-first companies.</p>
              </AnimatedSection>

              {/* Roles List */}
              <div className="space-y-6 mb-24">
                {roles.length > 0 ? (
                  roles.map((job) => (
                    <div key={job.id} className="glass-card p-6 md:p-10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-primary/30 transition-all duration-300">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                        <p className="text-muted text-sm mt-2">{job.type} | {job.location}</p>
                      </div>
                      <button 
                        onClick={() => handleOpenJD(job)} 
                        className="btn-primary px-8 py-3 text-sm w-full md:w-auto flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform"
                      >
                        View Details <ArrowRight size={16} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="glass-card p-12 rounded-[2rem] text-center border-dashed border-white/5">
                    <Info className="mx-auto text-muted mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">No Openings Right Now</h3>
                    <p className="text-muted text-sm">We don't have any active roles, but feel free to share your profile below.</p>
                  </div>
                )}
              </div>

              {/* General Application CTA */}
              <AnimatedSection className="border-t border-white/10 pt-20">
                <div className="glass-card p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-primary/5 to-transparent text-center">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Don't see a fit?</h2>
                  <p className="text-muted mb-10 max-w-xl mx-auto">We're always looking for exceptional talent. Share your profile with us for future opportunities.</p>
                  <button 
                    onClick={handleGeneralApply}
                    className="px-10 py-4 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary hover:text-black transition-all"
                  >
                    Share Your Profile
                  </button>
                </div>
              </AnimatedSection>
            </motion.div>
          )}

          {/* VIEW 2: JOB DESCRIPTION (NEW PAGE SIMULATION) */}
          {pageView === "details" && selectedJob && (
            <motion.div 
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <button onClick={handleBackToList} className="text-muted hover:text-primary flex items-center gap-2 mb-8 group transition-colors">
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to positions
              </button>

              <div className="glass-card p-8 md:p-12 rounded-[2rem] mb-8">
                <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">{selectedJob.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm font-mono text-primary uppercase tracking-wider mb-8">
                  <span className="bg-primary/10 px-3 py-1 rounded-md">{selectedJob.location}</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-md">{selectedJob.type}</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-md">{selectedJob.category}</span>
                </div>

                <div className="prose prose-invert max-w-none text-muted leading-relaxed">
                  <p className="text-lg text-white mb-8">{selectedJob.description}</p>
                  
                  <h3 className="text-white text-xl font-bold mt-8 mb-4">Key Responsibilities</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 mb-8">
                    {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>

                  <h3 className="text-white text-xl font-bold mt-8 mb-4">Requirements</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 mb-8">
                    {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              </div>

              {/* Sticky Bottom Bar for Mobile or Standard Button for Desktop */}
              <div className="flex justify-end">
                <button 
                  onClick={handleApplyFromJD}
                  className="btn-primary w-full md:w-auto px-12 py-4 text-lg shadow-lg shadow-primary/20"
                >
                  Apply for this Role
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* POPUP: APPLICATION MODAL */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob?.title || "General Application"} 
      />
    </section>
  );
}

// --- SUB-COMPONENT: APPLICATION MODAL ---
function ApplicationModal({ isOpen, onClose, jobTitle }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  // Check if this is a general inquiry or a specific role
  const isGeneral = jobTitle === "General Application";

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
        setFile(null);
        setErrors({});
    }
  }, [isOpen]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setErrors(prev => ({ ...prev, file: "" }));
    if (!selectedFile) return;
    if (selectedFile.type !== "application/pdf") {
      setErrors(prev => ({ ...prev, file: "PDF only please." }));
      setFile(null);
      return;
    }
    setFile(selectedFile);
  };
const handleSubmit = async (e) => {
  e.preventDefault()
  const form = e.target

  const fd = new FormData()
  fd.append("job", jobTitle)
  fd.append("name", form.fullname.value)
  fd.append("email", form.email.value)
  fd.append("portfolio", form.portfolio.value)
  fd.append("message", form.message.value)
  fd.append("resume", file)

  setIsSubmitting(true)

  const res = await fetch("/api/careers", {
    method: "POST",
    body: fd
  })

  if (res.ok) {
    alert("Application Sent Successfully")
    onClose()
  } else {
    alert("Submission failed. Try again.")
  }

  setIsSubmitting(false)
}


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 pointer-events-none">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 w-full max-w-lg rounded-3xl p-8 shadow-2xl pointer-events-auto relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button onClick={onClose} className="absolute top-6 right-6 text-muted hover:text-white transition-colors">
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold font-heading mb-1 pr-8">
                {isGeneral ? "Introduce Yourself" : "Apply Now"}
              </h2>
              <p className="text-primary text-sm mb-6 font-mono">{jobTitle}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-muted uppercase tracking-wider mb-1 block">Full Name</label>
                  <input name="fullname" type="text" className="input w-full bg-white/5 border-white/10 focus:border-primary/50" placeholder="John Doe" />
                  {errors.fullname && <p className="text-red-400 text-xs mt-1">{errors.fullname}</p>}
                </div>
                
                <div>
                  <label className="text-xs text-muted uppercase tracking-wider mb-1 block">Email</label>
                  <input name="email" type="email" className="input w-full bg-white/5 border-white/10 focus:border-primary/50" placeholder="john@example.com" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-xs text-muted uppercase tracking-wider mb-1 block">LinkedIn / Portfolio</label>
                  <input name="portfolio" type="text" className="input w-full bg-white/5 border-white/10 focus:border-primary/50" placeholder="https://..." />
                </div>

                {/* NEW: Dynamic Text Area */}
                <div>
                  <label className="text-xs text-muted uppercase tracking-wider mb-1 block">
                    {isGeneral ? "Comments" : "Cover Note (Optional)"}
                  </label>
                  <textarea 
                    name="message" 
                    rows={3}
                    className="input w-full bg-white/5 border-white/10 focus:border-primary/50 min-h-[80px] resize-none" 
                    placeholder={isGeneral ? "Tell us about your skills and what kind of role you are looking for..." : "Anything else you'd like us to know?"}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <div 
                    onClick={() => fileInputRef.current.click()} 
                    className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all ${file ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                  >
                    {file ? (
                        <>
                            <CheckCircle className="text-primary mb-2" size={24} />
                            <p className="text-white text-sm font-medium">{file.name}</p>
                        </>
                    ) : (
                        <>
                            <UploadCloud className="text-muted mb-2" size={24} />
                            <p className="text-muted text-sm">Click to upload Resume (PDF)</p>
                        </>
                    )}
                    <input ref={fileInputRef} type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                  </div>
                  {errors.file && <p className="text-red-400 text-xs mt-1 text-center">{errors.file}</p>}
                </div>

                <button disabled={isSubmitting} type="submit" className="btn-primary w-full py-4 mt-2 font-bold text-sm">
                  {isSubmitting ? "Sending..." : "Submit Application"}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}