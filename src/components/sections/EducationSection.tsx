"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#E52420] text-[#111111] overflow-hidden"
    >
      {/* Background Editorial Watermark */}
      <div className="absolute top-4 right-[-1%] font-display text-[120px] sm:text-[200px] font-black text-black/10 select-none pointer-events-none leading-none tracking-tighter">
        SCHOLAR
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-[#FFD928] text-[#111111] font-black tracking-wider border-2 border-[#111111]">
            05
          </span>
          <span className="uppercase tracking-widest text-[#FFD928] font-black">
            // ACADEMIC FORMATION
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD928] animate-pulse" />
        </div>

        {/* Section Heading */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#111111] leading-[0.92]">
            ACADEMIC <br />
            <span className="text-[#FFD928] drop-shadow-[2px_2px_0px_#111111]">
              JOURNEY.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#FFF4D6] font-medium leading-relaxed max-w-xl">
            Formal undergraduate engineering degree in Artificial Intelligence & Machine Learning
            along with foundational schooling in physics, chemistry, and mathematics.
          </p>
        </div>

        {/* BOLD EDITORIAL TIMELINE */}
        <div className="relative">
          {/* Thin Black Connecting Timeline Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 w-0.5 bg-[#111111] -translate-x-1/2 hidden sm:block pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {educationList.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={edu.id}
                  initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12`}
                >
                  {/* Central Yellow Timeline Marker Pin */}
                  <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#FFD928] border-2 border-[#111111] shadow-[2px_2px_0px_0px_#111111] items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                  </div>

                  {/* Large Year Display Block (Opposite Side) */}
                  <div
                    className={`w-full sm:w-1/2 font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#FFD928] tracking-tight ${
                      isEven ? "sm:text-left sm:pl-10" : "sm:text-right sm:pr-10"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-black/20 rounded-xl text-[#FFF4D6] border border-black/30">
                      {edu.period}
                    </span>
                  </div>

                  {/* Asymmetric Academic Milestone Card */}
                  <div className="w-full sm:w-1/2">
                    <div
                      className={`p-6 sm:p-8 rounded-3xl border-2 border-[#111111] transition-all ${
                        edu.highlight
                          ? "bg-[#FFD928] text-[#111111] shadow-[6px_6px_0px_0px_#111111]"
                          : "bg-[#FFF4D6] text-[#111111] shadow-[4px_4px_0px_0px_#111111]"
                      }`}
                    >
                      <div className="space-y-3">
                        {/* Period & Location Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs font-black">
                          <span className="px-2.5 py-0.5 rounded bg-[#111111] text-[#FFD928]">
                            0{idx + 1} // MILESTONE
                          </span>
                          <span className="text-[#111111]/70">{edu.location}</span>
                        </div>

                        {/* Degree Title */}
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] tracking-tight leading-snug">
                          {edu.degree}
                        </h3>

                        {/* Institution */}
                        <div className="font-mono text-sm font-bold text-[#111111]/85">
                          {edu.institution}
                          {edu.affiliation && (
                            <span className="block text-xs font-normal text-[#111111]/70 mt-0.5">
                              {edu.affiliation}
                            </span>
                          )}
                        </div>

                        {/* Score Highlight Block */}
                        <div className="pt-2 flex items-center justify-between border-t-2 border-[#111111]/15">
                          <span className="font-mono text-[11px] font-bold text-[#111111]/70 uppercase">
                            {edu.scoreType}
                          </span>
                          <span className="font-display font-black text-2xl text-[#111111] px-3 py-1 rounded-xl bg-white border-2 border-[#111111] shadow-[2px_2px_0px_0px_#111111]">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
