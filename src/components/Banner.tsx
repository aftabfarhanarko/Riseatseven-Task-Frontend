"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlatformLogo {
  name: string;
  icon?: string;
  color?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  "Services",
  "International",
  "About",
  "Work",
  "Careers",
  "Blog",
  "Webinar",
];

const PLATFORM_LOGOS: PlatformLogo[] = [
  { name: "Google" },
  { name: "ChatGPT", icon: "✦", color: "#10a37f" },
  { name: "Gemini", color: "#4285F4" },
  { name: "TikTok", icon: "♪" },
  { name: "YouTube", icon: "▶", color: "#FF0000" },
  { name: "Pinterest", icon: "P", color: "#E60023" },
  { name: "GIPHY" },
  { name: "reddit", icon: "⬤", color: "#FF4500" },
  { name: "amazon" },
];

const AWARDS = [
  "Global Search Awards",
  "The Drum",
  "UK Social Media Awards",
  "UK Content Awards",
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease: [0.16, 1, 0.3, 1] },
});

const stagger = (i: number, base = 0.08) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 + i * base, duration: 0.5, ease: "easeOut" },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 flex items-center px-10 h-16 border-b border-white/10"
    >
      {/* Logo */}
      <div className="flex items-center gap-1 mr-auto font-serif text-[22px] tracking-tight text-white">
        Rise at Seven
        <span className="text-sm text-gray-400">↗</span>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {NAV_ITEMS.map((item, i) => (
          <motion.a
            key={item}
            href="#"
            {...stagger(i, 0.05)}
            whileHover={{ color: "#fff" }}
            className="text-sm text-white/60 no-underline cursor-pointer font-sans hover:text-white transition-colors"
          >
            {["Services", "International", "About"].includes(item)
              ? `${item} +`
              : item}
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.4 }}
        whileHover={{
          backgroundColor: "#ffffff",
          color: "#000",
          scale: 1.04,
        }}
        whileTap={{ scale: 0.97 }}
        className="ml-9 bg-transparent border border-white/50 text-white py-2 px-6 rounded-full text-sm cursor-pointer flex items-center gap-1.5 font-sans transition-colors duration-200"
      >
        Get In Touch ↗
      </motion.button>
    </motion.nav>
  );
}

function AwardsBadges() {
  return (
    <motion.div
      {...fadeUp(0.3, 0.6)}
      className="flex flex-col items-center gap-2.5 mb-7"
    >
      <p className="text-[11px] tracking-[2.5px] text-white/40 uppercase font-sans">
        #1 Most Recommended Content Marketing Agency
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        {AWARDS.map((award, i) => (
          <motion.div
            key={award}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.35 }}
            className="border border-white/15 rounded px-2.5 py-1 text-[10px] text-white/40 tracking-wide font-sans"
          >
            {award}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FloatingRocket() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.9, duration: 0.7, type: "spring", stiffness: 220 }}
      className="w-[76px] h-[76px] rounded-[18px] bg-gradient-to-br from-[#12122a] to-[#1c1c3d] border-2 border-white/12 flex items-center justify-center text-[38px] flex-shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
    >
      <motion.span
        animate={{ y: [0, -7, 0], rotate: [0, 6, -4, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="block"
      >
        🚀
      </motion.span>
    </motion.div>
  );
}

function HeroHeadline() {
  return (
    <div className="relative text-center">
      {/* Line 1 */}
      <motion.h1
        {...fadeUp(0.4, 0.85)}
        className="text-[clamp(56px,10vw,112px)] font-bold leading-[0.92] tracking-[-3px] font-['Helvetica_Neue','Arial_Black','Haas_Grotesk_Display',sans-serif] m-0 text-white"
      >
        We Create
      </motion.h1>

      {/* Line 2 — inline with rocket pill */}
      <div className="flex items-center justify-center gap-[18px] mt-1">
        <motion.h1
          {...fadeUp(0.55, 0.85)}
          className="text-[clamp(56px,10vw,112px)] font-bold leading-[0.92] tracking-[-3px] font-['Helvetica_Neue','Arial_Black','Haas_Grotesk_Display',sans-serif] m-0 text-white"
        >
          Category
        </motion.h1>

        <FloatingRocket />

        <motion.h1
          {...fadeUp(0.65, 0.85)}
          className="text-[clamp(56px,10vw,112px)] font-bold leading-[0.92] tracking-[-3px] font-['Helvetica_Neue','Arial_Black','Haas_Grotesk_Display',sans-serif] m-0 text-white"
        >
          Leaders
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.85, 0.6)}
        className="text-lg text-white/65 mt-5 font-normal tracking-wider font-sans"
      >
        on every searchable platform
      </motion.p>
    </div>
  );
}

function PlatformLogos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.8 }}
      className="flex gap-9 items-center mt-12 flex-wrap justify-center px-12"
    >
      {PLATFORM_LOGOS.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ delay: 1.2 + i * 0.06 }}
          whileHover={{ opacity: 1, scale: 1.12 }}
          className="cursor-pointer flex items-center gap-1.5"
        >
          {p.icon && (
            <span
              className="text-base font-bold"
              style={{ color: p.color ?? "#fff" }}
            >
              {p.icon}
            </span>
          )}
          <span
            className={`
              text-white
              ${p.name === "amazon" ? "text-xl" : "text-[17px]"}
              ${p.name === "Google" ? "font-medium" : "font-semibold"}
              ${p.name === "Gemini" ? "font-serif italic" : ""}
              ${p.name === "amazon" ? "font-['Arial_Black',sans-serif]" : ""}
              ${p.name === "GIPHY" ? "tracking-[1.5px]" : ""}
              ${p.name === "Gemini" ? "font-serif italic" : "font-sans"}
            `}
          >
            {p.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ParallaxBackground({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_75%_55%_at_58%_38%,rgba(140,85,25,0.55)_0%,rgba(50,15,5,0.75)_50%,#000_100%)]" />

      {/* Parallax warm orb */}
      <motion.div
        animate={{ x: mouseX * 50, y: mouseY * 35 }}
        transition={{ type: "spring", stiffness: 70, damping: 22 }}
        className="absolute w-[700px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(210,130,30,0.28)_0%,transparent_70%)] top-[8%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />

      {/* Parallax cool orb */}
      <motion.div
        animate={{ x: -mouseX * 35, y: -mouseY * 25 }}
        transition={{ type: "spring", stiffness: 55, damping: 28 }}
        className="absolute w-[500px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(70,25,130,0.22)_0%,transparent_70%)] bottom-[18%] right-[18%] z-0 pointer-events-none"
      />
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#080808] overflow-hidden text-white"
    >
      {/* Background */}
      <ParallaxBackground mouseX={mouse.x} mouseY={mouse.y} />

      {/* Nav */}
      <NavBar />

      {/* Hero */}
      <div className="relative z-[5] flex flex-col items-center pt-16 pb-12 text-center">
        <AwardsBadges />
        <HeroHeadline />
        <PlatformLogos />
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="relative z-[5] flex justify-between items-end px-10 py-[18px] border-t border-white/10 mt-4"
      >
        <p className="text-xs text-white/40 max-w-[360px] leading-relaxed font-sans">
          Organic media planners creating, distributing &amp; optimising
          search-first content for SEO, Social, PR, AI and LLM search.
        </p>
        <p className="text-xs text-white/40 text-right font-sans">
          4 Global Offices serving
          <br />
          <span className="text-white/65">UK · USA (New York) · EU</span>
        </p>
      </motion.div>

      {/* ChatGPT FAB */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.4, type: "spring" }}
        whileHover={{
          scale: 1.12,
          boxShadow: "0 0 28px rgba(16,163,127,0.6)",
        }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-7 right-7 w-11 h-11 rounded-full bg-[#10a37f] border-none flex items-center justify-center text-xl cursor-pointer z-50 text-white shadow-[0_0_20px_rgba(16,163,127,0.35)]"
      >
        ✦
      </motion.button>
    </div>
  );
}
