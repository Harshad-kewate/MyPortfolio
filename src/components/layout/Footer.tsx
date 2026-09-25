"use client";

import React from "react";
import { ArrowUp, Terminal, ShieldCheck, Heart } from "lucide-react";
import { contactInfo } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101820] text-slate-400 py-14 px-4 sm:px-8 md:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Telemetry */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white font-display font-bold text-sm uppercase">
            <span className="w-2 h-2 rounded-full bg-chartreuse animate-pulse" />
            <span>HARSHAD KEWATE</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-slate-400">AI & ML ENGINEER</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-slate-500">BHOPAL, MADHYA PRADESH, INDIA</span>
        </div>

        {/* Center: Tech stack */}
        <div className="text-center text-slate-500 text-[11px]">
          NEXT.JS 15 • TYPESCRIPT • TAILWIND CSS • FRAMER MOTION
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-cream-100 hover:text-chartreuse transition-colors focus:outline-none"
          aria-label="Back to top"
        >
          <span>ASCEND TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-600">
        <div>© 2026 HARSHAD KEWATE. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-chartreuse" />
          <span>AUTHENTIC ENGINEERING PORTFOLIO</span>
        </div>
      </div>
    </footer>
  );
};
