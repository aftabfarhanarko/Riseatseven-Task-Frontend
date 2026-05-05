"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurServicesButtomMarque = () => {
  const marqueeText = "Consumers • Not Audiences • ";

  return (
    <div className="w-full py-10 bg-[#f5f5f5] overflow-hidden border-b border-black/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center"
        >
          {/* We repeat the text and image enough times for a seamless loop */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[12vw] md:text-[8vw] font-bold text-black uppercase tracking-tighter px-4">
                Consumers
              </span>
              <div className="relative w-[10vw] h-[10vw] md:w-[7vw] md:h-[7vw] rounded-2xl overflow-hidden mx-4 flex-shrink-0">
                <Image 
                  src="/image.png" 
                  alt="Consumers" 
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="text-[12vw] md:text-[8vw] font-bold text-black uppercase tracking-tighter px-4">
                Not Audiences • 
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServicesButtomMarque;