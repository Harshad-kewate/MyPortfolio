"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#D9E2EC] text-[#101820] overflow-hidden"
    >
      {/* Editorial Watermark */}
      <div className="absolute top-8 right-[-1%] font-display text-[140px] sm:text-[220px] font-black text-[#101820]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        ACADEMIA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-10 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-[#E85D2A] text-white font-bold tracking-wider">
            05
          </span>
          <span className="uppercase tracking-widest text-[#101820] font-bold">
            // ACADEMIC FORMATION
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#18352F]" />
        </div>

        {/* Section Heading & Minimal Copy */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#101820] leading-[0.95]">
            ACADEMIC <br />
            <span className="text-[#E85D2A]">JOURNEY.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#101820]/80 leading-relaxed font-normal">
            Formal undergraduate engineering degree in Artificial Intelligence & Machine Learning along with foundational science schooling.
          </p>
        </div>

        {/* Concise Timeline Cards */}
        <div className="space-y-6">
          {educationList.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ y: -3 }}
              className={`p-6 sm:p-8 rounded-3xl border-2 transition-all ${
                edu.highlight
                  ? "bg-white border-[#101820] shadow-xl"
                  : "bg-white/80 border-[#101820]/20"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#E85D2A] font-bold">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="text-[#101820]/60">{edu.location}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#101820]">
                    {edu.degree}
                  </h3>

                  <div className="font-mono text-sm text-[#101820]/80 font-semibold">
                    {edu.institution}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#D9E2EC] border border-[#101820]/20 font-mono text-left md:text-right shrink-0">
                  <div className="text-[10px] text-[#101820]/70 uppercase font-bold">
                    {edu.scoreType}
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#E85D2A] mt-0.5">
                    {edu.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
