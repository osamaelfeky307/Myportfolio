"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2500);

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
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Glow blob */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Logo */}
          <motion.div
            className="relative w-[80vw] max-w-[300px] h-[80px] md:h-[96px] mb-3 shrink-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/logos/OsamaElfekyLogo.png"
              alt="Osama Elfeky"
              fill
              className="object-contain object-center"
              priority
            />
          </motion.div>

          {/* Name tagline */}
          <motion.p
            className="text-xs font-mono text-fg-3 uppercase tracking-[0.25em] mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Software Engineer &amp; Medical Informatics
          </motion.p>

          {/* Progress bar with glow */}
          <div className="w-48 h-[3px] bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-accent rounded-full"
              style={{
                boxShadow: "0 0 12px rgba(249,115,22,0.7), 0 0 24px rgba(249,115,22,0.35)",
              }}
            />
          </div>

          <motion.div
            className="mt-4 text-xs font-mono text-fg-3 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 0.4, duration: 1.5, repeat: Infinity }}
          >
            Loading Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
