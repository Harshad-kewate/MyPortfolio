"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Phase 1 -> Phase 2 (Video begins)
    const t1 = setTimeout(() => {
      setPhase(2);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // In case autoplay is restricted, proceed smoothly
        });
      }
    }, 600);

    // Phase 2 -> Phase 3 (Typographic overlay)
    const t2 = setTimeout(() => {
      setPhase(3);
    }, 1600);

    // Fallback maximum timeout to guarantee transition even if video stalls
    const maxTimer = setTimeout(() => {
      triggerExit();
    }, 3800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") triggerExit();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(maxTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const triggerExit = () => {
    setPhase(4);
    setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 400);
  };

  const handleVideoEnded = () => {
    triggerExit();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: 0,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#0A0C10] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Background Ambient Video Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: phase >= 2 ? (phase === 4 ? 0.3 : 0.85) : 0,
              scale: phase === 4 ? 1.15 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <video
              ref={videoRef}
              src="/intro_video.mp4"
              muted
              playsInline
              autoPlay
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.9]"
            />
            {/* Cinematic subtle vignette / tone mapping */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-[#0A0C10]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/50 via-transparent to-[#0A0C10]/50" />
          </motion.div>

          {/* Phase 1: Minimal HK Monogram */}
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative z-20 flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-2xl bg-vividOrange flex items-center justify-center font-display font-black text-2xl text-white shadow-2xl">
                HK
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                HARSHAD KEWATE
              </span>
            </motion.div>
          )}

          {/* Phase 3 & 4: Overlay Minimal Typography & Editorial Mask */}
          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 text-center px-6 max-w-4xl"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-chartreuse font-mono text-xs uppercase tracking-widest mb-4">
                PORTFOLIO 2026 // AI & ML
              </div>

              <h1 className="font-display text-4xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-2xl">
                HARSHAD KEWATE
              </h1>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm text-slate-300">
                <span className="text-vividOrange font-bold uppercase">AI & ML ENTHUSIAST</span>
                <span className="text-white/40 hidden sm:inline">•</span>
                <span className="hidden sm:inline">CREATIVE SYSTEMS</span>
                <span className="text-white/40">•</span>
                <span>BHOPAL</span>
              </div>
            </motion.div>
          )}

          {/* Skip prompt */}
          <div className="absolute top-6 right-6 z-30">
            <button
              onClick={triggerExit}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-slate-300 hover:text-white font-mono text-[11px] tracking-wider transition-colors"
            >
              SKIP [ESC] →
            </button>
          </div>

          {/* Bottom subtle progress line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-vividOrange via-chartreuse to-electricBlue"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
