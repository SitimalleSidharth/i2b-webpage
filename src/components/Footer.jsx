import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/#about" },
      { name: "What We Do", href: "/#whatwedo" },
      { name: "Careers", href: "/careers" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    Social: [
      { name: "LinkedIn", href: "#", icon: <Linkedin size={16} /> },
      { name: "Twitter", href: "#", icon: <Twitter size={16} /> },
      { name: "GitHub", href: "#", icon: <Github size={16} /> },
    ],
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-bg px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl font-bold tracking-tighter text-white mb-6 block">
              I2B<span className="text-primary">.</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Engineering the next generation of AI-first intelligent businesses and consumer platforms.
            </p>
            <div className="flex gap-4">
              {footerLinks.Social.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-muted hover:text-primary hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted hover:text-white text-sm transition-colors flex items-center group">
                      {link.name} 
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.Resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted hover:text-white text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Office</h4>
              <p className="text-muted text-sm leading-relaxed">
                Innovation Hub,<br />
                Financial District,<br />
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-muted text-xs font-mono">
            &copy; {currentYear} I2B TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          {/* <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono text-muted uppercase tracking-tighter">Systems Operational</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}