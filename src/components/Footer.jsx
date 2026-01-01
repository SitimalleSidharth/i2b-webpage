import { Link } from "react-router-dom";
import { Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import i2b_logo from "../assets/i2b_logo2.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    Company: [{ name: "About Us", href: "/#about" }, { name: "What We Do", href: "/#whatwedo" }, { name: "Careers", href: "/careers" }],
    Legal: [{ name: "Privacy Policy", href: "#" }, { name: "Terms of Service", href: "#" }],
    Social: [{ icon: <Linkedin size={18} />, href: "#" }, 
        // { icon: <Twitter size={18} />, href: "#" },
         { icon: <Mail size={18} />, href: "mailto:contact@i2b.in" }]
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-bg px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl font-bold tracking-tighter text-white mb-6 block">
                                    i2b<span className="text-primary">.</span>

             {/* <img src={i2b_logo} alt="I2B Logo" className="h-6 w-auto" /> */}
              
            </Link>
            <p className="text-muted text-[14px] md:text-sm leading-relaxed mb-8 max-w-sm">
              Engineering the next generation of AI-first intelligent businesses.
            </p>
            <div className="flex gap-4">
              {footerLinks.Social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-11 h-11 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-muted hover:text-primary hover:border-primary transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-heading font-bold text-white mb-5 uppercase tracking-widest text-[10px]">Company</h4>
              <ul className="space-y-4">
                {footerLinks.Company.map(l => (
                  <li key={l.name}>
                    <a href={l.href} className="text-muted hover:text-white text-[14px] md:text-sm transition-colors flex items-center group">
                      {l.name}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-heading font-bold text-white mb-5 uppercase tracking-widest text-[10px]">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.Legal.map(l => (
                  <li key={l.name}>
                    <a href={l.href} className="text-muted hover:text-white text-[14px] md:text-sm transition-colors">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div>
              <h4 className="font-heading font-bold text-white mb-5 uppercase tracking-widest text-[10px]">Office</h4>
              <p className="text-muted text-[14px] md:text-sm leading-relaxed">
                Mahaveer Gateway <br/>
                Unit No.03,14th Floor, Bull Circle, Madhava Reddy Colony <br/>
                Nanakramguda, Gachibowli, Hyderabad, Telangana 500032
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center md:text-left">
          <p className="text-muted text-[10px] font-mono uppercase tracking-widest">
            &copy; {currentYear} I2B TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
