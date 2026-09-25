"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface LinkedInToastProps {
  active?: boolean;
}

const VISIBILITY_DURATION_MS = 10000; // Exactly 10 seconds
const REPEAT_INTERVAL_MS = 80000; // Repeat after 80 seconds

export const LinkedInToast: React.FC<LinkedInToastProps> = ({ active = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const prefersReduced = useReducedMotion();
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const repeatTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !active) return;

    let isMounted = true;

    const triggerCycle = () => {
      if (!isMounted) return;

      // Show notification
      setIsVisible(true);
      setCycleKey((prev) => prev + 1);

      // Keep the notification visible for EXACTLY 10 seconds
      hideTimeoutRef.current = setTimeout(() => {
        if (!isMounted) return;
        setIsVisible(false);

        // Repeat/show the same notification again AFTER 80 SECONDS
        repeatTimeoutRef.current = setTimeout(() => {
          triggerCycle();
        }, REPEAT_INTERVAL_MS);
      }, VISIBILITY_DURATION_MS);
    };

    // Show immediately when the website is opened (400ms smooth post-load delay)
    const initialDelay = setTimeout(() => {
      triggerCycle();
    }, 400);

    return () => {
      isMounted = false;
      clearTimeout(initialDelay);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (repeatTimeoutRef.current) clearTimeout(repeatTimeoutRef.current);
    };
  }, [active]);

  const handleClick = () => {
    setIsVisible(false);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    if (repeatTimeoutRef.current) clearTimeout(repeatTimeoutRef.current);

    // Schedule next appearance 80 seconds after interaction
    repeatTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setCycleKey((prev) => prev + 1);
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, VISIBILITY_DURATION_MS);
    }, REPEAT_INTERVAL_MS);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={`linkedin-toast-container-${cycleKey}`}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -24, scale: 0.95 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-20 z-[60] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 md:right-8"
        >
          <a
            href="https://www.linkedin.com/in/harshad-kewate-87b718308"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            aria-label="Visit Harshad Kewate's LinkedIn Profile"
            className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-[#FFF3E6] text-[#162A44] border-2 border-[#162A44] shadow-[4px_4px_0px_0px_#162A44] hover:shadow-[6px_6px_0px_0px_#E85D2A] hover:-translate-y-0.5 transition-all select-none overflow-hidden cursor-pointer backdrop-blur-sm"
          >
            {/* Small Official LinkedIn Icon Badge */}
            <div className="w-7 h-7 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </div>

            {/* Notification Text */}
            <div className="flex flex-col pr-1 text-left">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#162A44]/70 font-bold leading-tight">
                HARSHAD KEWATE // LINKEDIN
              </span>
              <span className="font-display font-black text-xs sm:text-sm text-[#162A44] group-hover:text-[#E85D2A] transition-colors whitespace-nowrap">
                Visit my LinkedIn Profile →
              </span>
            </div>

            {/* 10-Second Duration Progress Timer Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#162A44]/15 overflow-hidden">
              <motion.div
                key={`progress-timer-${cycleKey}`}
                className="h-full bg-[#E85D2A]"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
