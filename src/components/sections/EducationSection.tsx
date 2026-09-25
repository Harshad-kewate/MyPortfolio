"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#F6D8C8] text-[#171717] overflow-hidden"
    >
      {/* Background Editorial Watermark */}
      <div className="absolute top-6 right-[-1%] font-display text-[130px] sm:text-[220px] font-black text-[#FFE8D9]/70 select-none pointer-events-none leading-none tracking-tighter">
        SCHOLAR
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-md bg-[#FFD84D] text-[#111111] font-black tracking-wider border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
            05
          </span>
          <span className="uppercase tracking-widest text-[#162A44] font-black">
            // ACADEMIC FORMATION & RECORD
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#1FA6A0] animate-pulse" />
        </div>

        {/* Section Heading */}
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#162A44] leading-[0.92]">
            ACADEMIC <br />
            <span className="text-[#F36F68] drop-shadow-[2px_2px_0px_#162A44]">
              JOURNEY.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#252525] font-medium leading-relaxed max-w-xl">
            Undergraduate Artificial Intelligence & Machine Learning engineering candidate at
            Bansal Institute of Science & Technology, backed by foundational PCM science schooling.
          </p>
        </div>

        {/* EDITORIAL TIMELINE FORMATION */}
        <div className="relative">
          {/* Continuous Thin Deep Navy Connecting Line */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-8 md:left-1/2 w-0.5 bg-[#162A44] md:-translate-x-1/2 pointer-events-none opacity-40" />

          <div className="space-y-16 sm:space-y-24">
            {educationList.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={edu.id}
                  initial={prefersReduced ? undefined : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15 },
                    },
                  }}
                  className={`relative flex flex-col ${
                    isEven ? "md:items-start" : "md:items-end"
                  }`}
                >
                  <div className={`w-full md:w-[54%] ${isEven ? "md:pr-10" : "md:pl-10"}`}>
                    {/* 1. VISUALLY DOMINANT ACADEMIC YEAR (Appears First) */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2"
                    >
                      {/* Huge Year Typography */}
                      <span className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#162A44] tracking-tighter leading-none select-none">
                        {edu.period.split("—")[0].trim()}
                      </span>

                      {/* Coral Highlight Block behind selected year label / badge */}
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-md bg-[#F36F68] text-white font-mono text-xs font-black border border-[#162A44] shadow-[2px_2px_0px_#162A44]">
                          {edu.period}
                        </span>
                        {edu.highlight && (
                          <span className="px-2.5 py-1 rounded-md bg-[#1FA6A0] text-white font-mono text-[11px] font-black uppercase border border-[#162A44]">
                            ACTIVE DEGREE
                          </span>
                        )}
                      </div>
                    </motion.div>

                    {/* 2. THIN DEEP NAVY HORIZONTAL EDITORIAL BAR (Reveals) */}
                    <motion.div
                      variants={{
                        hidden: { scaleX: 0, opacity: 0 },
                        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
                      }}
                      style={{ transformOrigin: isEven ? "left" : "right" }}
                      className="w-full h-1 bg-[#162A44] rounded-full my-3"
                    />

                    {/* 3. MINIMAL & READABLE ACADEMIC INFORMATION (Follows) */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                      className="p-6 sm:p-7 rounded-2xl bg-[#FFE8D9] border-2 border-[#162A44] shadow-[5px_5px_0px_0px_#162A44] hover:-translate-y-1 transition-transform relative"
                    >
                      {/* Milestone index & Location */}
                      <div className="flex items-center justify-between font-mono text-xs font-bold text-[#162A44]/75 mb-2.5">
                        <span className="px-2 py-0.5 rounded bg-[#162A44] text-[#FFD84D] font-mono text-[10px] font-black">
                          MILESTONE 0{idx + 1}
                        </span>
                        <span>{edu.location}</span>
                      </div>

                      {/* Degree Name */}
                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#162A44] tracking-tight leading-snug mb-2">
                        {edu.degree}
                      </h3>

                      {/* Institution & Affiliation */}
                      <div className="space-y-0.5 font-mono text-xs sm:text-sm font-bold text-[#252525]">
                        <div className="flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4 text-[#162A44] shrink-0" />
                          <span>{edu.institution}</span>
                        </div>
                        {edu.affiliation && (
                          <div className="text-xs font-semibold text-[#162A44]/75 pl-5.5">
                            // {edu.affiliation}
                          </div>
                        )}
                      </div>

                      {/* Verified Score Highlight Block */}
                      <div className="mt-4 pt-3.5 border-t border-[#162A44]/15 flex items-center justify-between gap-3">
                        <span className="font-mono text-[11px] font-bold text-[#252525] uppercase">
                          {edu.scoreType}
                        </span>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#FFD84D] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44]">
                          <Award className="w-3.5 h-3.5 text-[#162A44]" />
                          <span className="font-display font-black text-lg text-[#162A44]">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* 4. SUBTLY ANIMATING YELLOW MILESTONE MARKER PIN (Centered on line) */}
                  <motion.div
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
                    }}
                    className={`absolute z-20 top-2 ${
                      isEven
                        ? "left-4 sm:left-8 md:left-1/2 -translate-x-1/2"
                        : "left-4 sm:left-8 md:left-1/2 -translate-x-1/2"
                    }`}
                  >
                    <motion.div
                      animate={prefersReduced ? undefined : { scale: [1, 1.12, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="w-8 h-8 rounded-full bg-[#FFD84D] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] flex items-center justify-center"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#162A44]" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
