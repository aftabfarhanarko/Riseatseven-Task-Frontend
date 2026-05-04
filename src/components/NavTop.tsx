"use client";

import { motion } from "framer-motion";

const NavTop = () => {
  return (
    <div className="w-full bg-zinc-50 py-3 px-4 dark:bg-black">
      <div className="mx-auto w-full">
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#9df3d8] px-6 text-[13px] font-medium tracking-tight text-zinc-900 transition-colors duration-300 hover:bg-[#86e9ca] dark:bg-[#064e3b] dark:text-emerald-50 dark:hover:bg-[#065f46]"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: "-40px" },
            }}
            transition={{ 
              duration: 0.4, 
              ease: [0.19, 1, 0.22, 1] // Snappy "tick" easing
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* First state */}
            <div className="flex h-10 shrink-0 items-center gap-2">
              <span className="text-lg leading-none">🚨</span>
              <span>Where are your customers actually searching? Download the report</span>
            </div>
            {/* Hover state (Bottom text rolls in) */}
            <div className="flex h-10 shrink-0 items-center gap-2">
              <span className="text-lg leading-none">🚨</span>
              <span>Where are your customers actually searching? Download the report</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NavTop;
