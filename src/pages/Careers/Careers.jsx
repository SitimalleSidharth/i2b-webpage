import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, ChevronLeft, UploadCloud } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";

// const roles = [ ... ]
const roles = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    type: "Full-time",
    location: "On-site",
    category: "Engineering",
    experience: "2+ Years",
    description: "Shape our AI-first product from scratch. Work directly with founders to build intelligent features that define our core offering. Own ML pipelines end-to-end.",
    responsibilities: [
      "Design and implement end-to-end machine learning pipelines.",
      "Collaborate with founders to integrate AI features into the core product.",
      "Optimize LLM performance and manage deployment architectures.",
      "Stay updated with the latest advancements in AI/ML and apply them to product development."
    ],
    requirements: [
      "2+ years of experience in AI/ML development.",
      "Strong proficiency in Python and frameworks like PyTorch or TensorFlow.",
      "Experience with Large Language Models (LLMs) and Prompt Engineering.",
      "Knowledge of MLOps practices and FastAPI for API development."
    ]
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    type: "Full-time",
    location: "On-site",
    category: "Infrastructure",
    experience: "3-5 Years",
    description: "Architect our cloud infrastructure for scale. Design systems that can handle 0 to millions of users. Own DevOps, security, and reliability from day one.",
    responsibilities: [
      "Architect and maintain scalable cloud infrastructure on AWS/GCP/Azure.",
      "Implement and manage container orchestration using Kubernetes.",
      "Automate infrastructure provisioning using Terraform.",
      "Establish robust CI/CD pipelines and ensure system reliability and security."
    ],
    requirements: [
      "3-5 years of experience in Cloud Engineering or DevOps.",
      "Hands-on experience with AWS, GCP, or Azure.",
      "Expertise in Kubernetes and Docker.",
      "Proficiency in Terraform and CI/CD tools."
    ]
  },
  {
    id: "senior-java-developer",
    title: "Senior Java Developer",
    type: "Full-time",
    location: "On-site",
    category: "Engineering",
    experience: "4-6 Years",
    description: "Build robust backend systems that power our product. Design APIs, databases, and microservices. Make critical architecture decisions with high autonomy.",
    responsibilities: [
      "Develop high-performance backend systems using Java 17+ and Spring Boot.",
      "Design and implement microservices architecture.",
      "Manage and optimize PostgreSQL databases.",
      "Implement messaging systems using Kafka or RabbitMQ."
    ],
    requirements: [
      "4-6 years of professional experience in Java development.",
      "Strong expertise in Spring Boot and Microservices.",
      "Proficiency in PostgreSQL and database design.",
      "Experience with message brokers like Kafka or RabbitMQ."
    ]
  }
];

export default function Careers() {
  const [pageView, setPageView] = useState("list");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenJD = (job) => {
    setSelectedJob(job);
    setPageView("details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGeneralApply = () => {
    setSelectedJob({ title: "General Application", id: null });
    setIsModalOpen(true);
  };

  const handleApplyFromJD = () => setIsModalOpen(true);

  const handleBackToList = () => {
    setPageView("list");
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <section className="min-h-screen bg-bg px-6 py-32 relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatePresence mode="wait">

          {pageView === "list" && (
            <motion.div key="list" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <AnimatedSection>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Join our Journey.</h1>
                <p className="text-muted text-lg mb-16">Engineering the next generation of Consumer Tech.</p>
              </AnimatedSection>

              {roles.length > 0 && (
                <div className="space-y-6 mb-24">
                  {roles.map((job) => (
                    <div key={job.id} className="glass-card p-6 md:p-10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-primary/30 transition-all">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                        <p className="text-muted text-sm mt-2">{job.type} | {job.location}</p>
                      </div>
                      <button onClick={() => handleOpenJD(job)} className="btn-primary px-8 py-3 text-sm w-full md:w-auto flex items-center justify-center gap-2">
                        View Details <ArrowRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <AnimatedSection className={`border-t border-white/10 pt-10 ${roles.length === 0 ? "pt-0 border-none" : ""}`}>
                <div className="glass-card p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-primary/5 to-transparent text-center">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Build the future with us</h2>
                  <p className="text-muted mb-10 max-w-2xl mx-auto">
                    We’re building long-term teams, not just filling open positions.<br />
                    If you believe you can add value to what we’re creating, we’d love to hear from you.<br /><br />
                    Share your profile and we’ll reach out when a role that matches your strengths opens up.
                  </p>
                  <button onClick={handleGeneralApply} className="px-10 py-4 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary hover:text-black transition-all">
                    Share Your Profile
                  </button>
                </div>
              </AnimatedSection>
            </motion.div>
          )}

          {pageView === "details" && selectedJob && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto pt-10 md:pt-0" // Added pt-10 here
            >
              {/* Optimized Back Button */}
              <button
                onClick={handleBackToList}
                className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted hover:text-primary hover:border-primary/30 transition-all w-fit md:bg-transparent md:border-none md:px-0"
              >
                <ChevronLeft size={20} />
                <span className="text-sm font-medium">Back to positions</span>
              </button>

              <div className="glass-card p-8 md:p-12 rounded-[2rem] mb-8">
                <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">{selectedJob.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm font-mono text-primary uppercase tracking-wider mb-8">
                  <span className="bg-primary/10 px-3 py-1 rounded-md">{selectedJob.location}</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-md">{selectedJob.type}</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-md">{selectedJob.category}</span>
                </div>

                <div className="prose prose-invert text-muted">
                  <p className="text-lg text-white mb-8">{selectedJob.description}</p>
                  <h3 className="text-white text-xl font-bold mb-4">Key Responsibilities</h3>
                  <ul className="list-disc ml-5 space-y-2 mb-8">
                    {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                  <h3 className="text-white text-xl font-bold mb-4">Requirements</h3>
                  <ul className="list-disc ml-5 space-y-2">
                    {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end">
                <button onClick={handleApplyFromJD} className="btn-primary px-12 py-4 text-lg shadow-primary/20">
                  Apply for this Role
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} jobTitle={selectedJob?.title || "General Application"} />
    </section>
  );
}

/* -------- MODAL -------- */
function ApplicationModal({ isOpen, onClose, jobTitle }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const isGeneral = jobTitle === "General Application";

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [isOpen, onClose]);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f && f.type === "application/pdf") setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload your resume (PDF)");
    if (!window.grecaptcha) return alert("Captcha not ready");

    const token = await window.grecaptcha.execute("YOUR_RECAPTCHA_SITE_KEY", { action: "careers" });
    const fd = new FormData();
    fd.append("job", jobTitle);
    fd.append("name", e.target.fullname.value);
    fd.append("email", e.target.email.value);
    fd.append("portfolio", e.target.portfolio.value);
    fd.append("message", e.target.message.value);
    fd.append("cv", file);
    fd.append("token", token);
    fd.append("website", e.target.website.value);

    setIsSubmitting(true);
    const res = await fetch("/api/careers", { method: "POST", body: fd });
    res.ok ? (alert("Application Sent Successfully"), onClose()) : alert("Submission failed");
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150]" />
          <div className="fixed inset-0 z-[160] flex items-center justify-center px-4 py-10 pointer-events-none">
            <motion.div className="relative bg-[#111] border border-white/10 w-full max-w-2xl rounded-[2.5rem] p-10 pointer-events-auto max-h-[80vh] overflow-y-auto">
              <button onClick={onClose} className="absolute top-6 right-6 text-muted hover:text-white"><X size={24} /></button>
              <h2 className="text-2xl font-bold mb-1">{isGeneral ? "Introduce Yourself" : "Apply Now"}</h2>
              <p className="text-primary text-sm mb-6 font-mono">{jobTitle}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="website" className="hidden" />
                <input name="fullname" className="input w-full bg-white/5 border-white/10" placeholder="Full Name" />
                <input name="email" type="email" className="input w-full bg-white/5 border-white/10" placeholder="Email" />
                <input name="portfolio" className="input w-full bg-white/5 border-white/10" placeholder="LinkedIn / Portfolio" />
                <textarea name="message" className="input w-full bg-white/5 border-white/10 min-h-[80px]" placeholder={isGeneral ? "Tell us about your skills..." : "Anything else you'd like us to know?"} />
                <div onClick={() => fileInputRef.current.click()} className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer ${file ? "border-primary/50 bg-primary/5" : "border-white/10 hover:border-white/30 hover:bg-white/5"}`}>
                  {file ? <><CheckCircle className="text-primary mb-2" size={24} /><p>{file.name}</p></> : <><UploadCloud className="text-muted mb-2" size={24} /><p>Upload Resume (PDF) — Required</p></>}
                  <input ref={fileInputRef} type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                </div>
                <button disabled={isSubmitting} type="submit" className="btn-primary w-full py-4 mt-2">
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
