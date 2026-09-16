"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface CarouselProps {
  photos: string[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function Carousel({ photos, autoplay = false, autoplayInterval = 3500 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  const next = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    setIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    setProgress(0);
    lastTimestampRef.current = null;
  }, [photos.length]);

  const prev = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    setIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    setProgress(0);
    lastTimestampRef.current = null;
  }, [photos.length]);

  // Autoplay with smooth progress bar using requestAnimationFrame
  useEffect(() => {
    if (!autoplay || photos.length <= 1 || isPaused) {
      lastTimestampRef.current = null;
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const elapsed = timestamp - lastTimestampRef.current;
      const newProgress = Math.min((elapsed / autoplayInterval) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        setIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
        setProgress(0);
        lastTimestampRef.current = timestamp;
      }

      progressRef.current = requestAnimationFrame(animate);
    };

    progressRef.current = requestAnimationFrame(animate);

    return () => {
      if (progressRef.current) {
        cancelAnimationFrame(progressRef.current);
      }
    };
  }, [autoplay, autoplayInterval, isPaused, photos.length, index]);

  // Touch / swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) {
      next();
    } else if (diff < -threshold) {
      prev();
    }
    setIsPaused(false);
  };

  if (!photos || photos.length === 0) return null;

  return (
    <div 
      className="relative w-full rounded-md border border-border overflow-hidden group"
      onMouseEnter={() => autoplay && setIsPaused(true)}
      onMouseLeave={() => autoplay && setIsPaused(false)}
    >
      
      {/* Autoplay progress bar */}
      {autoplay && photos.length > 1 && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-border/30 z-20">
          <div 
            className="h-full bg-accent transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div 
        className="overflow-hidden w-full aspect-video relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div 
          className="flex h-full"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {photos.map((photo, i) => (
            <div key={i} className="w-full shrink-0 h-full relative bg-neutral-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo} alt={`Photo ${i + 1}`} className="w-full h-full object-contain pointer-events-none" />
              
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

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                  setProgress(0);
                  lastTimestampRef.current = null;
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
