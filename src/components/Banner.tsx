"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./NavBar";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLATFORM_LOGOS = [
  { name: "Google" },
  { name: "ChatGPT" },
  { name: "Gemini" },
  { name: "TikTok" },
  { name: "YouTube" },
  { name: "Pinterest" },
  { name: "GIPHY" },
  { name: "reddit" },
  { name: "amazon" },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = (delay = 0, duration = 0.7) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease: [0.16, 1, 0.3, 1] },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

function AwardsBadges() {
  return (
    <motion.div
      {...fadeUp(0.3, 0.6)}
      className="flex flex-col items-center gap-4 mb-8"
    >
      <p className="text-[10px] tracking-[3px] text-white/70 uppercase font-medium">
        #1 MOST RECOMMENDED CONTENT MARKETING AGENCY
      </p>
      <div className="flex items-center gap-6 opacity-80">
        <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-white/60">Global Search Awards</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-white/60">The Drum</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-white/60">Social Media Awards</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-white/60">Content Awards</span>
        </div>
      </div>
    </motion.div>
  );
}

function HeroHeadline() {
  return (
    <div className="relative text-center select-none">
      {/* Line 1 */}
      <motion.h1
        {...fadeUp(0.4, 0.85)}
        className="text-[clamp(60px,12vw,140px)] font-bold leading-[0.9] tracking-[-4px] font-sans m-0 text-white"
      >
        We Create
      </motion.h1>

      {/* Line 2 — inline with red bull can */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <motion.h1
          {...fadeUp(0.55, 0.85)}
          className="text-[clamp(60px,12vw,140px)] font-bold leading-[0.9] tracking-[-4px] font-sans m-0 text-white"
        >
          Category
        </motion.h1>

        <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
            className="relative w-[80px] h-[100px] md:w-[120px] md:h-[150px] mx-2"
        >
            <Image
                src="/image.png"
                alt="Red Bull Can"
                fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
        </motion.div>

        <motion.h1
          {...fadeUp(0.65, 0.85)}
          className="text-[clamp(60px,12vw,140px)] font-bold leading-[0.9] tracking-[-4px] font-sans m-0 text-white"
        >
          Leaders
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.85, 0.6)}
        className="text-xl md:text-2xl text-white font-medium mt-6 tracking-tight"
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
      className="flex gap-x-12 gap-y-6 items-center mt-16 flex-wrap justify-center px-12 opacity-70"
    >
      {PLATFORM_LOGOS.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.05 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          className="cursor-pointer text-lg font-bold tracking-tight text-white/90"
        >
          {p.name}
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Banner() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden text-white flex flex-col">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
            src="/image.png"
            alt="Background"
            fill
            className="object-cover opacity-40 blur-3xl scale-110"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* NavBar integrated at the top */}
      <NavBar />

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <AwardsBadges />
        <HeroHeadline />
        <PlatformLogos />
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end px-12 py-10 gap-6"
      >
        <div className="flex flex-col gap-1">
          <p className="text-[13px] text-white/50 max-w-[400px] leading-relaxed font-medium text-center md:text-left">
            Organic media planners creating, distributing & optimising
          </p>
          <p className="text-[13px] text-white/50 max-w-[400px] leading-relaxed font-medium text-center md:text-left">
            <span className="text-white/80 font-bold">search-first</span> content for SEO, Social, PR, Ai and LLM search
          </p>
        </div>

        <div className="text-center md:text-right">
            <p className="text-[13px] text-white font-bold mb-1">
                4 Global Offices serving
            </p>
            <p className="text-[13px] text-white/50 font-medium">
                UK, USA (New York) & EU
            </p>
        </div>
      </motion.div>
    </div>
  );
}