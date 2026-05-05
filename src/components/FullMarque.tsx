"use client";

import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';

// Manual wrap function to avoid extra dependencies
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const FullMarque = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000); // baseVelocity = -5 for right-to-left

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden border-b border-black/5">
      <div className="flex whitespace-nowrap flex-nowrap">
        <motion.div
          className="flex whitespace-nowrap gap-10 flex-nowrap"
          style={{ x }}
        >
          {[...Array(6)].map((_, index) => (
            <span 
              key={index} 
              className="block text-[15vw] font-bold text-black uppercase tracking-tighter leading-none select-none"
            >
              Ready to Rise at
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FullMarque;