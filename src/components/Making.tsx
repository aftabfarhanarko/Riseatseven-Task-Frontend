"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const CARDS = [
  {
    title: "Pioneers",
    description: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    mission: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    image: "/image.png",
    color: "#a3e635" // Greenish
  },
  {
    title: "Pace",
    description: "In an industry that moves at light speed, we move faster. Our agility allows us to capture search demand before the competition even notices the trend.",
    mission: "Driving growth through rapid execution and real-time data integration.",
    image: "/image.png",
    color: "#22d3ee" // Cyan
  },
  {
    title: "Performance",
    description: "Results are our only metric. We don't just aim for rankings; we aim for market leadership and measurable business impact on every searchable platform.",
    mission: "Delivering category-defining performance that transforms brands into leaders.",
    image: "/image.png",
    color: "#f472b6" // Pink
  }
];

const StackCard = ({ card, index, progress, range, targetScale }: { card: typeof CARDS[0], index: number, progress: any, range: number[], targetScale: number }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ 
          scale,
          top: `calc(-5% + ${index * 25}px)`
        }}
        className="relative w-[90%] max-w-[550px] aspect-[4/5] md:aspect-square bg-black rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center shadow-2xl overflow-hidden"
      >
        {/* Background Decorative Layers (the colored edges seen in the image) */}
        <div 
            className="absolute -z-10 inset-0 translate-x-3 translate-y-3 rounded-[40px] opacity-20"
            style={{ backgroundColor: card.color }}
        />
        
        {/* Card Content */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden mb-8 border-4 border-white/10">
          <Image 
            src={card.image} 
            alt={card.title} 
            fill 
            className="object-cover"
          />
        </div>

        <h3 className="text-[40px] md:text-[55px] font-bold text-white mb-6 tracking-tight">
          {card.title}
        </h3>

        <p className="text-[14px] md:text-[16px] leading-relaxed text-white/70 mb-8 font-medium">
          {card.description}
        </p>

        <p className="text-[14px] md:text-[16px] leading-relaxed text-white font-bold max-w-[400px]">
          {card.mission}
        </p>
      </motion.div>
    </div>
  );
};

const Making = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative bg-[#f5f5f5]">
      {/* Section Title */}
      <div className="pt-20 pb-10 text-center">
        <span className="text-[13px] font-bold text-black/60 uppercase tracking-[2px]">
          Legacy In The Making
        </span>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative">
        {CARDS.map((card, i) => {
          const targetScale = 1 - ( (CARDS.length - i) * 0.05);
          return (
            <StackCard 
              key={`p_${i}`} 
              index={i} 
              card={card} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      {/* Spacer to allow scrolling through all cards */}
      <div className="h-[100vh]" />
    </section>
  );
};

export default Making;