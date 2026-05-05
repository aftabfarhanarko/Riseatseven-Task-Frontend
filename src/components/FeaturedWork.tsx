"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedWork = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-10 md:px-20 border-b border-black/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column - Small Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[400px]"
        >
          <p className="text-[17px] md:text-[19px] leading-[1.3] text-black font-semibold tracking-tight">
            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
          </p>
        </motion.div>

        {/* Right Column - Large Heading and Buttons */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-[60px] md:text-[85px] font-bold text-black leading-[0.9] tracking-[-3px]">
              Driving Demand & <br />
              <span className="flex items-center gap-4">
                Discovery
                <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-2xl overflow-hidden flex-shrink-0 mt-2">
                  <Image 
                    src="/image.png" 
                    alt="Discovery" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </span>
            </h2>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-8"
          >
            <button className="bg-white text-black px-8 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-zinc-100 transition-colors shadow-sm">
              Our Story <span className="text-lg">↗</span>
            </button>
            <button className="text-black text-[15px] font-bold flex items-center gap-2 hover:opacity-60 transition-opacity">
              Our Services <span className="text-lg">↗</span>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;