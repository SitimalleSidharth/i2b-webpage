import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Paperclip, AlertCircle, CheckCircle, ArrowRight, Info } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";

// Production Data: Set to [] to trigger "No Openings" state
// const roles = [
//   { 
//     id: 1, 
//     title: "Frontend Engineer", 
//     type: "Full-Time", 
//     location: "Remote", 
//     category: "Engineering",
//     description: "We are looking for a Frontend Engineer with a passion for building beautiful, high-performance user interfaces using React and Framer Motion.",
//     responsibilities: ["Develop modular UI components", "Optimize for 60fps animations", "Collaborate with AI engineers for LLM integrations"],
//     requirements: ["3+ years of React experience", "Deep understanding of Tailwind CSS", "Experience with state management"]
//   },
//   { 
//     id: 2, 
//     title: "AI / ML Engineer", 
//     type: "Full-Time", 
//     location: "Hybrid", 
//     category: "Engineering",
//     description: "Join us to build the neural backbone of our venture studio products.",
//     responsibilities: ["Fine-tune LLMs for specific domains", "Architect RAG pipelines", "Deploy scalable AI agents"],
//     requirements: ["Python mastery", "Experience with PyTorch or LangChain", "Strong math background"]
//   }
// ];
const roles = [];
export default function Careers() {
  const [viewState, setViewState] = useState("list"); // list, jd, apply
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  // Close drawer on Escape key click
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeOverlay();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = selectedJob ? 'hidden' : 'unset';
  }, [selectedJob]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUrl = (url) => { try { new URL(url); return true; } catch { return false; } };

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

  const closeOverlay = () => {
    setViewState("list");
    setSelectedJob(null);
    setFile(null);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};

    if (!form.fullname.value.trim()) newErrors.fullname = "Name is mandatory.";
    if (!validateEmail(form.email.value)) newErrors.email = "Invalid email.";
    if (form.portfolio && form.portfolio.value && !validateUrl(form.portfolio.value)) {
        newErrors.portfolio = "Invalid URL.";
    }
    if (!file) newErrors.file = "Resume is required.";

    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 2000)); // Simulate Production API
    alert("Application successfully sent to I2B Technologies!");
    closeOverlay();
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-bg px-6 py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-reveal">Join our team.</h1>
          <p className="text-muted text-lg mb-16">Engineering the next generation of AI-first companies.</p>
        </AnimatedSection>

        {/* Conditional Rendering: Openings vs No Openings */}
        <div className="space-y-6 mb-24">
          {roles.length > 0 ? (
            roles.map((job) => (
              <div key={job.id} className="glass-card p-6 md:p-10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 group">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-muted text-sm">{job.type} | {job.location}</p>
                </div>
                <button 
                  onClick={() => { setSelectedJob(job); setViewState("jd"); }} 
                  className="btn-primary px-8 py-3 text-sm w-full md:w-auto"
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-12 rounded-[2rem] text-center border-dashed border-white/5">
              <Info className="mx-auto text-muted mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">No Openings Right Now</h3>
              <p className="text-muted text-sm">We don't have any active roles, but feel free to share your profile below.</p>
            </motion.div>
          )}
        </div>

        {/* General Application Section */}
        <AnimatedSection className="border-t border-white/10 pt-20">
          <div className="glass-card p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-primary/5 to-transparent text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Don't see a fit?</h2>
            <p className="text-muted mb-10 max-w-xl mx-auto">We're always looking for exceptional talent. Share your profile with us for future opportunities.</p>
            <button 
              onClick={() => { setSelectedJob({ title: "General Application" }); setViewState("apply"); }}
              className="px-10 py-4 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary hover:text-black transition-all"
            >
              Share Your Profile
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Side Drawer Overlay */}
      <AnimatePresence>
        {selectedJob && (
          <>
            {/* z-index 150+ to ensure it stays above the Navbar */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={closeOverlay} 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[150]" 
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} 
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[550px] bg-panel border-l border-white/10 z-[160] p-8 md:p-12 overflow-y-auto shadow-2xl"
            >
              {/* Close Button: Higher z-index to stay clickable */}
              <button 
                onClick={closeOverlay} 
                className="absolute top-20 right-6 p-2 text-muted hover:text-white transition-colors z-[170]"
                aria-label="Close drawer"
              >
                <X size={28} />
              </button>
              
              {/* STAGE 1: Job Description */}
              {viewState === "jd" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12">
                  <h2 className="font-heading text-3xl font-bold mb-2">{selectedJob.title}</h2>
                  <div className="flex gap-4 text-primary text-xs font-mono mb-8 uppercase tracking-widest">
                    <span>{selectedJob.location}</span> • <span>{selectedJob.type}</span>
                  </div>
                  <p className="text-muted leading-relaxed mb-8">{selectedJob.description}</p>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">Key Responsibilities</h4>
                      <ul className="list-disc list-inside text-muted text-sm space-y-2 ml-2">
                        {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">Requirements</h4>
                      <ul className="list-disc list-inside text-muted text-sm space-y-2 ml-2">
                        {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                  </div>

                  <button onClick={() => setViewState("apply")} className="btn-primary w-full py-5 flex items-center justify-center gap-2">
                    Proceed to Apply <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {/* STAGE 2: Application Form */}
              {viewState === "apply" && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="mt-12">
                  {selectedJob.id && (
                    <button onClick={() => setViewState("jd")} className="text-primary text-xs mb-4 flex items-center gap-1 cursor-pointer">← Back to Details</button>
                  )}
                  <h2 className="font-heading text-2xl font-bold mb-8">
                    {selectedJob.id ? "Application Form" : "General Application"}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <input name="fullname" type="text" className="input" placeholder="Full Name (Mandatory)" required />
                      {errors.fullname && <p className="text-red-400 text-[10px]">{errors.fullname}</p>}
                    </div>
                    <div className="space-y-1">
                      <input name="email" type="email" className="input" placeholder="Email Address" required />
                      {errors.email && <p className="text-red-400 text-[10px]">{errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <input name="portfolio" type="text" className="input" placeholder="LinkedIn or Portfolio URL" />
                      {errors.portfolio && <p className="text-red-400 text-[10px]">{errors.portfolio}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <div 
                        onClick={() => fileInputRef.current.click()} 
                        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl transition-all bg-white/5 cursor-pointer ${file ? 'border-primary/50' : 'border-white/10 hover:border-primary/30'}`}
                      >
                        {file ? <CheckCircle className="text-primary" /> : <Paperclip className="text-muted" />}
                        <p className="text-xs mt-2 px-4">{file ? file.name : "Upload Resume (PDF Only)"}</p>
                        <input ref={fileInputRef} type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                      </div>
                      {errors.file && <p className="text-red-400 text-[10px]">{errors.file}</p>}
                    </div>

                    <button disabled={isSubmitting} type="submit" className="btn-primary w-full py-5 mt-4">
                      {isSubmitting ? "Processing..." : "Submit Application"}
                    </button>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}