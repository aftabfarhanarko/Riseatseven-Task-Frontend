"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { name: "Services", hasPlus: true },
  { name: "Industries", hasPlus: true },
  { name: "International", hasPlus: true },
  { name: "About", hasPlus: true },
  { name: "Work", badge: "25" },
  { name: "Careers" },
  { name: "Blog" },
  { name: "Webinar" },
];

const INTERNATIONAL_LINKS = [
  "US Digital PR",
  "Spain Digital PR",
  "Germany Digital PR",
  "Netherlands Digital PR",
];

const NavBar = () => {
  const [isInternationalHovered, setIsInternationalHovered] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="text-white text-2xl font-bold tracking-tight font-sans">
          Rise at Seven
          <span className="inline-block ml-1 text-white/40 group-hover:text-white transition-colors duration-300">↗</span>
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => item.name === "International" && setIsInternationalHovered(true)}
            onMouseLeave={() => item.name === "International" && setIsInternationalHovered(false)}
          >
            <a
              href="#"
              className={`
                relative text-[13px] font-semibold transition-all duration-300 flex items-center gap-1 group px-4 py-2 rounded-full
                ${item.name === "International" && isInternationalHovered 
                  ? "bg-white text-black" 
                  : "text-white/80 hover:text-white"}
              `}
            >
              {item.name}
              {item.hasPlus && (
                <span className={`text-[10px] ${item.name === "International" && isInternationalHovered ? "text-black/40" : "text-white/40 group-hover:text-white"}`}>
                  +
                </span>
              )}
              {item.badge && (
                <span className="absolute -top-2 -right-4 bg-[#a3e635]/20 text-[#a3e635] text-[9px] px-1.5 py-0.5 rounded-full font-bold border border-[#a3e635]/30">
                  {item.badge}
                </span>
              )}
            </a>

            {/* International Dropdown */}
            {item.name === "International" && (
              <AnimatePresence>
                {isInternationalHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-[32px] p-10 shadow-2xl flex gap-12"
                  >
                    {/* Left Side Links */}
                    <div className="flex flex-col gap-4 flex-1">
                      {INTERNATIONAL_LINKS.map((link) => (
                        <a
                          key={link}
                          href="#"
                          className="text-2xl font-bold text-black hover:opacity-60 transition-opacity tracking-tight"
                        >
                          {link}
                        </a>
                      ))}
                    </div>

                    {/* Right Side Image */}
                    <div className="relative w-[240px] h-[180px] rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src="/image.png"
                        alt="International Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all hover:bg-zinc-200 shadow-lg shadow-white/5"
      >
        Get In Touch
        <span className="text-sm">↗</span>
      </motion.button>
    </motion.nav>
  );
};

export default NavBar;