"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Carousel({ photos }: { photos: string[] }) {
  const [index, setIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  if (!photos || photos.length === 0) return null;

  return (
    <div className="relative w-full rounded-md border border-border overflow-hidden group">
      
      <div className="overflow-hidden w-full aspect-video relative">
        <motion.div 
          className="flex h-full"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {photos.map((photo, i) => (
            <div key={i} className="w-full shrink-0 h-full relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo} alt={`Photo ${i + 1}`} className="w-full h-full object-cover pointer-events-none" />
              
              {/* Subtle gradient overlay to make pagination dots more visible */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

      {photos.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-fg hover:bg-white hover:text-accent transition-colors opacity-100 md:opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-fg hover:bg-white hover:text-accent transition-colors opacity-100 md:opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {photos.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
