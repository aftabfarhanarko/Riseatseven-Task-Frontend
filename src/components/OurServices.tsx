"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { left: "Digital PR", right: "Organic Social & Content" },
  { left: "Search & Growth Strategy", right: "Content Experience" },
  { left: "Data & Insights", right: "Onsite SEO" },
];

const OurServices = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-10 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-16 border-b border-black/10 pb-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[60px] md:text-[80px] font-bold text-black leading-none tracking-[-3px] flex items-center gap-4"
          >
            Our 
            <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-2xl overflow-hidden mt-2">
              <Image 
                src="/image.png" 
                alt="Services" 
                fill 
                className="object-cover"
              />
            </div>
            Services
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-bold border border-black/5 hover:bg-zinc-100 transition-colors shadow-sm mb-4"
          >
            View All Services ↗
          </motion.button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
          {services.map((row, index) => (
            <React.Fragment key={index}>
              {/* Left Column Item */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer border-b border-black/10 py-8"
              >
                <h3 className="text-[32px] md:text-[45px] font-bold text-black tracking-tight group-hover:pl-4 transition-all duration-300">
                  {row.left}
                </h3>
              </motion.div>

              {/* Right Column Item */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.1) + 0.05 }}
                className="group cursor-pointer border-b border-black/10 py-8"
              >
                <h3 className="text-[32px] md:text-[45px] font-bold text-black tracking-tight group-hover:pl-4 transition-all duration-300">
                  {row.right}
                </h3>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from "react";
export default OurServices;