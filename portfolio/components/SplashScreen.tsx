"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2500); // 2.5 seconds total loading time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Logo Container */}
          <div className="relative w-[80vw] max-w-[320px] h-[80px] md:h-[100px] mb-10 shrink-0">
            <Image
              src="/logos/OsamaElfekyLogo.png"
              alt="Osama Elfeky"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Progress Container */}
          <div className="w-48 h-[2px] bg-border/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-accent rounded-full"
            />
          </div>
          
          <div className="mt-4 text-xs font-mono text-fg-3 uppercase tracking-widest animate-pulse">
            Loading Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
