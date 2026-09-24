"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("INITIALIZING CORE...");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const steps = [
      { at: 15, text: "KERNEL // HARSHAD_KEWATE_V2.8" },
      { at: 40, text: "CALIBRATING ATMOSPHERIC MESH (0.25°)..." },
      { at: 70, text: "INITIALIZING NEURAL AUDIO PIPELINES..." },
      { at: 92, text: "CONNECTING SYSTEMS & ARCHITECTURES..." },
      { at: 100, text: "SYSTEM READY // WELCOME" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        const matchingStep = [...steps].reverse().find((s) => next >= s.at);
        if (matchingStep) {
          setCurrentStep(matchingStep.text);
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        return next;
      });
    }, 24);

    const handleSkip = () => {
      clearInterval(interval);
      setProgress(100);
      setIsFinished(true);
      setTimeout(() => onComplete(), 300);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSkip();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-navy-950 text-cream-100 p-6 md:p-12 select-none"
        >
          {/* Top telemetry */}
          <div className="flex justify-between items-center font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chartreuse animate-pulse" />
              <span>STATION: BHOPAL [23.2599° N, 77.4126° E]</span>
            </div>
            <span className="hidden sm:inline font-mono">SYS_STATUS: BOOT_SEQUENCE</span>
          </div>

          {/* Center typography */}
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="font-mono text-xs sm:text-sm text-vividOrange tracking-widest uppercase">
                // SYSTEM INITIALIZATION
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase">
                HARSHAD KEWATE
              </h1>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm text-slate-300">
                <span className="px-2 py-0.5 rounded bg-white/10 text-chartreuse">AI & ML ENGINEER</span>
                <span className="text-slate-500">•</span>
                <span>ATMOSPHERIC INTELLIGENCE</span>
                <span className="text-slate-500">•</span>
                <span>FULL-STACK ARCHITECTURE</span>
              </div>
            </motion.div>

            {/* Progress Bar & Readout */}
            <div className="mt-12 space-y-3">
              <div className="flex justify-between items-end font-mono text-xs sm:text-sm">
                <span className="text-slate-400 font-mono tracking-wide">{currentStep}</span>
                <span className="text-chartreuse font-bold font-mono text-lg">{progress}%</span>
              </div>

              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-electricBlue via-vividOrange to-chartreuse rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="flex justify-between items-center font-mono text-[11px] text-slate-500">
            <span>B.TECH AIML — BANSAL INSTITUTE OF SCIENCE & TECHNOLOGY</span>
            <span>2024 — 2028</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
