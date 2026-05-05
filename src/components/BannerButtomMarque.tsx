"use client";

import { motion } from "framer-motion";
import React from "react";

interface LogoMarqueeProps {
  title?: string;
  items?: string[];
  speed?: number;
  className?: string;
}

const DEFAULT_LOGOS = [
  "Emirates",
  "Shark NINJA",
  "CapitalOne",
  "Red Bull",
  "JD",
  "Sony",
  "Samsung",
  "Nike"
];

const BannerButtomMarque = ({ 
  title = "The agency behind...", 
  items = DEFAULT_LOGOS,
  speed = 30,
  className = ""
}: LogoMarqueeProps) => {
  return (
    <div className={`w-full bg-[#f5f5f5] py-6 flex items-center overflow-hidden border-y border-black/5 ${className}`}>
      {/* Title / Label */}
      <div className="pl-10 pr-12 flex-shrink-0 z-10 bg-[#f5f5f5]">
        <span className="text-[13px] font-medium text-black/60 italic">
          {title}
        </span>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-grow overflow-hidden relative">
        <motion.div
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-20 whitespace-nowrap"
        >
          {/* Double the items for seamless looping */}
          {[...items, ...items].map((logo, i) => (
            <span
              key={i}
              className="text-xl md:text-2xl font-bold text-black tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-default flex items-center"
            >
              {logo === "Red Bull" && <span className="mr-2">🥤</span>}
              {logo === "Emirates" && <span className="mr-2">✈️</span>}
              {logo}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />
      </div>
    </div>
  );
};

export default BannerButtomMarque;