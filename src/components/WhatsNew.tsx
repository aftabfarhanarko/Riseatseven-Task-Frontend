"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const NEWS_ARTICLES = [
  {
    tag: "News",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    author: "Carrie Rose",
    time: "2 mins",
    image: "/image.png"
  },
  {
    tag: "Food/Hospitality/Drink",
    title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
    author: "Ray Saddiq",
    time: "2 mins",
    image: "/image.png"
  },
  {
    tag: "Food/Hospitality/Drink",
    title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
    author: "Carrie Rose",
    time: "2 mins",
    image: "/image.png"
  }
];

const NewsCard = ({ article, index }: { article: typeof NEWS_ARTICLES[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-5 group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
        <Image 
          src={article.image} 
          alt={article.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tag Overlay */}
        <div className="absolute top-6 left-6">
          <span className="bg-black/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/10">
            {article.tag}
          </span>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-4 px-1">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-zinc-200 overflow-hidden relative">
             <Image src="/image.png" alt={article.author} fill className="object-cover" />
          </div>
          <span className="text-[12px] font-bold text-black/60">{article.author}</span>
        </div>
        <div className="flex items-center gap-1.5 text-black/40">
           <span className="text-[12px]">⏱</span>
           <span className="text-[12px] font-bold">{article.time}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[22px] font-bold text-black leading-[1.2] tracking-tight group-hover:text-black/70 transition-colors px-1">
        {article.title}
      </h3>
    </motion.div>
  );
};

const WhatsNew = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-10 md:px-20 border-b border-black/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-16 border-b border-black/10 pb-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[60px] md:text-[80px] font-bold text-black leading-none tracking-[-3px] flex items-center gap-4"
          >
            What's 
            <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-2xl overflow-hidden mt-2">
              <Image 
                src="/image.png" 
                alt="Whats New" 
                fill 
                className="object-cover"
              />
            </div>
            New
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-bold border border-black/5 hover:bg-zinc-100 transition-colors shadow-sm"
          >
            Explore More Thoughts ↗
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {NEWS_ARTICLES.map((article, index) => (
            <NewsCard key={index} article={article} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatsNew;