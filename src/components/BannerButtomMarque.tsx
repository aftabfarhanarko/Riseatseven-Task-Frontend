"use client";

import { 
  ThreeDScrollTriggerContainer, 
  ThreeDScrollTriggerRow 
} from '@/components/ui/ThreeDScrollTrigger';

const BannerButtomMarque = () => {
  const marqueeText = "RISE AT SEVEN • SEARCH-FIRST CREATIVE • ORGANIC PERFORMANCE • ";

  return (
    <div className="w-full py-12 bg-black border-y border-white/10 overflow-hidden">
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={-2} className="py-2">
          <div className="flex items-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-[8vw] font-bold text-white uppercase tracking-tighter whitespace-nowrap px-4">
                {marqueeText}
              </span>
            ))}
          </div>
        </ThreeDScrollTriggerRow>
        
        <ThreeDScrollTriggerRow baseVelocity={2} className="py-2">
          <div className="flex items-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-[8vw] font-bold text-transparent stroke-white stroke-1 uppercase tracking-tighter whitespace-nowrap px-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                {marqueeText}
              </span>
            ))}
          </div>
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </div>
  );
};

export default BannerButtomMarque;