"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const EditorialConnector: React.FC = () => {
  return (
    <div className="relative w-full py-6 px-4 bg-gradient-to-b from-[#FAF8F5] to-[#F7F5EE] border-y border-charcoal-900/10 select-none overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-charcoal-600">
        {/* Left: Progression marker */}
        <div className="flex items-center gap-2 font-bold text-charcoal-800">
          <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
          <span>01 PROFILE</span>
          <span className="text-charcoal-400">────────</span>
          <span className="w-1.5 h-1.5 rounded-full bg-vividOrange" />
          <span>02 SELECTED WORK</span>
        </div>

        {/* Center: Editorial star */}
        <div className="flex items-center gap-2 text-charcoal-400">
          <span className="hidden md:inline">23.2599° N, 77.4126° E</span>
          <span>✦</span>
          <span className="font-semibold tracking-wider text-charcoal-700 uppercase">
            ATMOSPHERIC AI & FULL-STACK SYSTEMS
          </span>
        </div>

        {/* Right: Status */}
        <div className="hidden sm:flex items-center gap-2 text-charcoal-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SYSTEMS ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
