"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, Award, CheckCircle2, Calendar } from "lucide-react";

export const EducationSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#F06A63] text-[#171717] overflow-hidden"
    >
      {/* Editorial Watermark */}
      <div className="absolute top-4 right-[-1%] font-display text-[120px] sm:text-[200px] font-black text-[#FF8A7F]/30 select-none pointer-events-none leading-none tracking-tighter">
        SCHOLAR
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-[#FFD84D] text-[#171717] font-black tracking-wider border-2 border-[#171717] shadow-[2px_2px_0px_0px_#171717]">
            05
          </span>
          <span className="uppercase tracking-widest text-[#FFF3D6] font-black">
            // ACADEMIC FORMATION & RECORD
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] animate-pulse" />
        </div>

        {/* Section Heading */}
        <div className="mb-14 sm:mb-24 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#171717] leading-[0.92]">
            ACADEMIC <br />
            <span className="text-[#FFD84D] drop-shadow-[2px_2px_0px_#171717]">
              JOURNEY.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#FFF3D6] font-medium leading-relaxed max-w-xl">
            Undergraduate Artificial Intelligence & Machine Learning engineering candidate at
            Bansal Institute of Science & Technology, backed by rigorous foundational PCM schooling.
          </p>
        </div>

        {/* ASYMMETRIC EDITORIAL TIMELINE */}
        <div className="relative">
          {/* Continuous Thin Dark Timeline Line (Desktop Centered, Mobile Left) */}
          <div className="absolute top-8 bottom-8 left-5 md:left-1/2 w-0.5 bg-[#171717] md:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-16 sm:space-y-24">
            {educationList.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={edu.id}
                  initial={prefersReduced ? undefined : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative"
                >
                  {/* Desktop Layout (md and up): Alternating Asymmetric Columns */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Left Column */}
                    {isEven ? (
                      /* Big Condensed Year (Left) */
                      <div className="flex flex-col items-end pr-8 text-right">
                        <span className="font-display font-black text-5xl lg:text-7xl text-[#FFD84D] tracking-tighter leading-none drop-shadow-[3px_3px_0px_#171717]">
                          {edu.period}
                        </span>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="font-mono text-xs uppercase tracking-widest text-[#FFF3D6] font-bold">
                            // MILESTONE 0{idx + 1}
                          </span>
                          {edu.highlight && (
                            <span className="px-2 py-0.5 rounded bg-[#315CFF] text-white font-mono text-[10px] font-black">
                              ACTIVE DEGREE
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Milestone Card (Left) */
                      <div className="pr-8">
                        <MilestoneCard edu={edu} idx={idx} />
                      </div>
                    )}

                    {/* Right Column */}
                    {isEven ? (
                      /* Milestone Card (Right) */
                      <div className="pl-8">
                        <MilestoneCard edu={edu} idx={idx} />
                      </div>
                    ) : (
                      /* Big Condensed Year (Right) */
                      <div className="flex flex-col items-start pl-8 text-left">
                        <span className="font-display font-black text-5xl lg:text-7xl text-[#FFD84D] tracking-tighter leading-none drop-shadow-[3px_3px_0px_#171717]">
                          {edu.period}
                        </span>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="font-mono text-xs uppercase tracking-widest text-[#FFF3D6] font-bold">
                            // MILESTONE 0{idx + 1}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile & Small Screens Layout (< md): Indented with left timeline pin */}
                  <div className="md:hidden pl-12 relative">
                    {/* Mobile Year Pill */}
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="font-display font-black text-3xl sm:text-4xl text-[#FFD84D] tracking-tight drop-shadow-[2px_2px_0px_#171717]">
                        {edu.period}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#171717] text-[#FFD84D] font-mono text-[10px] font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <MilestoneCard edu={edu} idx={idx} />
                  </div>

                  {/* Yellow Timeline Pin Marker (Centered on Desktop, Left on Mobile) */}
                  <div className="absolute left-5 md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FFD84D] border-2 border-[#171717] shadow-[2px_2px_0px_0px_#171717] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#171717]" />
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

interface MilestoneCardProps {
  edu: (typeof educationList)[0];
  idx: number;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ edu, idx }) => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF3D6] text-[#171717] border-2 border-[#171717] shadow-[6px_6px_0px_0px_#171717] hover:-translate-y-1 transition-transform relative overflow-hidden">
      {/* Top Header Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 font-mono text-xs font-bold text-[#493330]">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-[#171717] text-[#FFD84D] font-mono text-[11px] font-black">
            ACADEMIC 0{idx + 1}
          </span>
          <span>{edu.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#171717]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{edu.period}</span>
        </div>
      </div>

      {/* Yellow Highlight Block Behind Degree */}
      <div className="inline-block bg-[#FFD84D] px-3.5 py-1.5 rounded-xl border-2 border-[#171717] shadow-[2px_2px_0px_0px_#171717] mb-3">
        <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl text-[#171717] tracking-tight leading-snug">
          {edu.degree}
        </h3>
      </div>

      {/* Institution & Affiliation Details */}
      <div className="space-y-1 font-mono text-sm font-bold text-[#171717]">
        <div className="flex items-start gap-2">
          <GraduationCap className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
          <span className="text-[#171717]">{edu.institution}</span>
        </div>
        {edu.affiliation && (
          <div className="text-xs font-semibold text-[#493330] pl-6">
            // {edu.affiliation}
          </div>
        )}
      </div>

      {/* Concise Bullet Details */}
      {edu.details && edu.details.length > 0 && (
        <ul className="mt-4 pt-3.5 border-t border-[#171717]/15 space-y-2 font-mono text-xs text-[#493330] leading-relaxed">
          {edu.details.map((detail, dIdx) => (
            <li key={dIdx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-1.5 shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Yellow Highlight Block Behind Score / Academic Metric */}
      <div className="mt-5 pt-4 border-t-2 border-[#171717]/15 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="block font-mono text-[10px] font-bold text-[#493330] uppercase tracking-wider">
            {edu.scoreType}
          </span>
          <span className="font-mono text-xs font-bold text-[#171717]">
            VERIFIED MARKSHEET
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFD84D] border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717]">
          <Award className="w-4 h-4 text-[#171717]" />
          <span className="font-display font-black text-xl sm:text-2xl text-[#171717]">
            {edu.score}
          </span>
        </div>
      </div>
    </div>
  );
};
