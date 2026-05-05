"use client";

import { motion } from "framer-motion";

const FOOTER_LINKS = [
  {
    title: "",
    links: ["Services", "Work", "About", "Culture", "Meet The Risers"]
  },
  {
    title: "",
    links: ["Testimonials", "Blog", "Webinars", "Careers"]
  },
  {
    title: "",
    links: ["Sheffield", "Manchester", "London", "New York", "Contact"]
  }
];

const SOCIAL_ICONS = ["f", "X", "in", "y", "t", "@"];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-10 md:px-20 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Row: Newsletter & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left: Newsletter */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[20px] font-bold tracking-tight">Stay updated with Rise news</h3>
            <div className="relative max-w-[400px]">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-4 px-6 text-[14px] focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#a3e635] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold hover:scale-105 transition-transform">
                ↗
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_ICONS.map((icon) => (
                <a 
                  key={icon} 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[12px] font-bold hover:bg-white hover:text-black transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((col, i) => (
              <div key={i} className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <a 
                    key={link} 
                    href="#" 
                    className="text-[14px] font-bold text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Big Logo */}
        <div className="w-full mb-12 select-none pointer-events-none">
          <h1 className="text-[12vw] md:text-[15vw] font-bold leading-none tracking-[-0.05em] m-0 p-0 flex items-start">
            Rise at Seven
            <span className="text-[2vw] mt-[2vw] ml-2">®</span>
          </h1>
        </div>

        {/* Bottom Legal Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/40 font-medium">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span>Company Number 11955187</span>
            <span className="hidden md:inline">•</span>
            <span>VAT Registered GB 322402945</span>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms & conditions</a>
          </div>
          
          <div className="text-[11px] text-white/40 font-medium">
            Website MadeByShape
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;