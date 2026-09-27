"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, Award, Compass, ArrowDownRight, ArrowDownLeft, ArrowRight, ArrowDown } from "lucide-react";

export const EducationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [0, 1]);

  return (
    <section
      id="education"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#F5EBDD] text-[#162A44] overflow-hidden"
    >
      {/* Editorial Fractured Geometric Borders at the Section Perimeter */}
      {/* Top Fractured Paper Contour */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none z-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,14 L180,4 L360,22 L540,6 L720,24 L900,8 L1080,22 L1260,6 L1440,18"
            stroke="#162A44"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-40"
          />
        </svg>
        <div className="absolute top-2 left-[18%] w-3 h-3 bg-[#E85D2A] rotate-45 border border-[#162A44]" />
        <div className="absolute top-2.5 right-[22%] w-2.5 h-2.5 bg-[#FFD84D] -rotate-12 border border-[#162A44]" />
      </div>

      {/* Bottom Fractured Contour */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 L140,26 L320,8 L500,24 L680,10 L860,26 L1040,8 L1220,24 L1440,12"
            stroke="#162A44"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-40"
          />
        </svg>
        <div className="absolute bottom-2 left-[28%] w-2.5 h-2.5 bg-[#FFD84D] rotate-12 border border-[#162A44]" />
        <div className="absolute bottom-2 right-[15%] w-3 h-3 bg-[#E85D2A] -rotate-45 border border-[#162A44]" />
      </div>

      {/* Background Graphic Watermark */}
      <div className="absolute top-8 right-[-1%] font-display text-[130px] sm:text-[220px] font-black text-[#162A44]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        JOURNEY
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-md bg-[#FFD84D] text-[#111111] font-black tracking-wider border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
            05
          </span>
          <span className="uppercase tracking-widest text-[#162A44] font-black">
            // ACADEMIC EXPEDITION & FOUNDATIONS
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#E85D2A] animate-pulse" />
        </div>

        {/* Section Heading */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="font-display text-3xl min-[360px]:text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#162A44] leading-[0.92] break-words">
            ACADEMIC <br />
            <span className="text-[#E85D2A] drop-shadow-[2px_2px_0px_#162A44]">
              JOURNEY.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#162A44]/85 font-medium leading-relaxed max-w-xl">
            A continuous trajectory flowing through undergraduate Artificial Intelligence & Machine Learning
            at Bansal Institute of Science & Technology, grounded in rigorous PCM science schooling.
          </p>
        </div>

        {/* ============================================================== */}
        {/* EDITORIAL JOURNEY FLOW: Smooth Progressive Path */}
        {/* START ➔ 2024 (AIML) ↘ 2023 (Class XII) ↙ 2021 (Class X) ➔ CURRENT */}
        {/* ============================================================== */}
        <div className="relative">
          {/* Journey Start Tag */}
          <div className="flex items-center gap-2.5 mb-10 font-mono text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#162A44] text-[#FFD84D] shadow-[2px_2px_0px_0px_#E85D2A]">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
              <span>START // ACADEMIC GENESIS</span>
            </span>
            <span className="inline-flex items-center text-[#E85D2A] font-black">
              <ArrowDown className="w-4 h-4" />
            </span>
          </div>

          {/* Desktop Continuous Flowing SVG Guide Path */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1100"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle Base Flow Track */}
              <path
                d="M 280,60 C 280,240 720,200 720,400 C 720,600 280,560 280,780 C 280,950 680,940 760,1020"
                stroke="#162A44"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                className="opacity-20"
              />
              {/* Scroll Animated Progress Stroke */}
              <motion.path
                d="M 280,60 C 280,240 720,200 720,400 C 720,600 280,560 280,780 C 280,950 680,940 760,1020"
                stroke="#E85D2A"
                strokeWidth="2.5"
                fill="none"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Alternating Journey Flow Nodes */}
          <div className="space-y-16 sm:space-y-24 relative z-10">
            {/* ------------------------------------------------------------ */}
            {/* MILESTONE 01: 2024 — 2028 // B.Tech AIML (Left-Aligned) */}
            {/* ------------------------------------------------------------ */}
            {educationList[0] && (
              <motion.div
                initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                {/* Year + Flow Anchor (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-start space-y-2">
                  <div className="flex items-center gap-3">
                    {/* Warm Yellow Marker */}
                    <div className="w-8 h-8 rounded-full bg-[#FFD84D] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#162A44]" />
                    </div>
                    {/* Burnt Orange Highlight Tag */}
                    <span className="px-3 py-1 rounded-md bg-[#E85D2A] text-white font-mono text-xs font-black border border-[#162A44] shadow-[2px_2px_0px_#162A44]">
                      MILESTONE 01 // ACTIVE DEGREE
                    </span>
                  </div>

                  {/* Large Dominant Year Typography */}
                  <h3 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#162A44] tracking-tighter leading-none select-none">
                    2024
                  </h3>

                  <div className="font-mono text-xs font-bold text-[#162A44]/75 pl-1 flex items-center gap-1.5">
                    <span>{educationList[0].period}</span>
                    <span>•</span>
                    <span className="text-[#E85D2A] font-black uppercase">CURRENT ENROLLMENT</span>
                  </div>

                  {/* Flow Arrow indicating direction */}
                  <div className="hidden lg:flex items-center gap-1 text-[#E85D2A] font-mono text-xs font-black pt-2 pl-1">
                    <span>FLOWING DOWNWARD</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimal Academic Card (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#E7F0EA] border-2 border-[#162A44] shadow-[6px_6px_0px_0px_#162A44] hover:-translate-y-1 transition-transform relative overflow-hidden">
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-[#162A44]/70 mb-3">
                      <span>{educationList[0].location}</span>
                      <span className="px-2 py-0.5 rounded bg-[#315CFF] text-white font-mono text-[10px] font-bold">
                        B.TECH SPECIALIZATION
                      </span>
                    </div>

                    <h4 className="font-display font-black text-xl sm:text-2xl text-[#162A44] tracking-tight leading-snug mb-2">
                      {educationList[0].degree}
                    </h4>

                    <div className="font-mono text-sm font-bold text-[#111111] flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-[#162A44] shrink-0" />
                      <span>{educationList[0].institution}</span>
                    </div>

                    {educationList[0].affiliation && (
                      <p className="font-mono text-xs text-[#162A44]/80 pl-6 mb-4">
                        // {educationList[0].affiliation}
                      </p>
                    )}

                    {/* Verified Score Highlight */}
                    <div className="pt-4 border-t-2 border-[#162A44]/15 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-bold text-[#162A44]/80 uppercase">
                        {educationList[0].scoreType}
                      </span>
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFD84D] border-2 border-[#162A44] shadow-[3px_3px_0px_#162A44]">
                        <Award className="w-4 h-4 text-[#162A44]" />
                        <span className="font-display font-black text-xl text-[#111111]">
                          {educationList[0].score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ------------------------------------------------------------ */}
            {/* MILESTONE 02: 2023 — 2024 // Class XII PCM (Right-Shifted) */}
            {/* ------------------------------------------------------------ */}
            {educationList[1] && (
              <motion.div
                initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:pl-16"
              >
                {/* Minimal Academic Card (7 cols, on Left on Desktop) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#E7F0EA] border-2 border-[#162A44] shadow-[6px_6px_0px_0px_#162A44] hover:-translate-y-1 transition-transform relative overflow-hidden">
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-[#162A44]/70 mb-3">
                      <span>{educationList[1].location}</span>
                      <span className="px-2 py-0.5 rounded bg-[#162A44] text-[#FFD84D] font-mono text-[10px] font-bold">
                        SCIENCE (PCM)
                      </span>
                    </div>

                    <h4 className="font-display font-black text-xl sm:text-2xl text-[#162A44] tracking-tight leading-snug mb-2">
                      {educationList[1].degree}
                    </h4>

                    <div className="font-mono text-sm font-bold text-[#111111] flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-[#162A44] shrink-0" />
                      <span>{educationList[1].institution}</span>
                    </div>

                    {educationList[1].affiliation && (
                      <p className="font-mono text-xs text-[#162A44]/80 pl-6 mb-4">
                        // {educationList[1].affiliation}
                      </p>
                    )}

                    {/* Verified Score Highlight */}
                    <div className="pt-4 border-t-2 border-[#162A44]/15 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-bold text-[#162A44]/80 uppercase">
                        {educationList[1].scoreType}
                      </span>
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFD84D] border-2 border-[#162A44] shadow-[3px_3px_0px_#162A44]">
                        <Award className="w-4 h-4 text-[#162A44]" />
                        <span className="font-display font-black text-xl text-[#111111]">
                          {educationList[1].score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year + Flow Anchor (5 cols, on Right on Desktop) */}
                <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start lg:items-end lg:text-right space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-[#E85D2A] text-white font-mono text-xs font-black border border-[#162A44] shadow-[2px_2px_0px_#162A44]">
                      MILESTONE 02 // SENIOR SECONDARY
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FFD84D] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#162A44]" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#162A44] tracking-tighter leading-none select-none">
                    2023
                  </h3>

                  <div className="font-mono text-xs font-bold text-[#162A44]/75 pr-1 flex items-center gap-1.5">
                    <span>{educationList[1].period}</span>
                    <span>•</span>
                    <span className="text-[#162A44] font-bold">PHYSICS • CHEMISTRY • MATH</span>
                  </div>

                  <div className="hidden lg:flex items-center gap-1 text-[#E85D2A] font-mono text-xs font-black pt-2 pr-1">
                    <ArrowDownLeft className="w-4 h-4" />
                    <span>CURVING TOWARD SCHOOLING</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ------------------------------------------------------------ */}
            {/* MILESTONE 03: 2021 — 2022 // Class X High School (Left-Aligned) */}
            {/* ------------------------------------------------------------ */}
            {educationList[2] && (
              <motion.div
                initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                {/* Year + Flow Anchor (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-start space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFD84D] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#162A44]" />
                    </div>
                    <span className="px-3 py-1 rounded-md bg-[#E85D2A] text-white font-mono text-xs font-black border border-[#162A44] shadow-[2px_2px_0px_#162A44]">
                      MILESTONE 03 // HIGH SCHOOL
                    </span>
                  </div>

                  <h3 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#162A44] tracking-tighter leading-none select-none">
                    2021
                  </h3>

                  <div className="font-mono text-xs font-bold text-[#162A44]/75 pl-1 flex items-center gap-1.5">
                    <span>{educationList[2].period}</span>
                    <span>•</span>
                    <span className="text-[#162A44] font-bold">MATHEMATICS & GENERAL SCIENCE</span>
                  </div>

                  <div className="hidden lg:flex items-center gap-1 text-[#E85D2A] font-mono text-xs font-black pt-2 pl-1">
                    <span>CONNECTING TO CURRENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimal Academic Card (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#E7F0EA] border-2 border-[#162A44] shadow-[6px_6px_0px_0px_#162A44] hover:-translate-y-1 transition-transform relative overflow-hidden">
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-[#162A44]/70 mb-3">
                      <span>{educationList[2].location}</span>
                      <span className="px-2 py-0.5 rounded bg-[#162A44] text-[#FFD84D] font-mono text-[10px] font-bold">
                        SECONDARY CURRICULUM
                      </span>
                    </div>

                    <h4 className="font-display font-black text-xl sm:text-2xl text-[#162A44] tracking-tight leading-snug mb-2">
                      {educationList[2].degree}
                    </h4>

                    <div className="font-mono text-sm font-bold text-[#111111] flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-[#162A44] shrink-0" />
                      <span>{educationList[2].institution}</span>
                    </div>

                    {educationList[2].affiliation && (
                      <p className="font-mono text-xs text-[#162A44]/80 pl-6 mb-4">
                        // {educationList[2].affiliation}
                      </p>
                    )}

                    {/* Verified Score Highlight */}
                    <div className="pt-4 border-t-2 border-[#162A44]/15 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-bold text-[#162A44]/80 uppercase">
                        {educationList[2].scoreType}
                      </span>
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFD84D] border-2 border-[#162A44] shadow-[3px_3px_0px_#162A44]">
                        <Award className="w-4 h-4 text-[#162A44]" />
                        <span className="font-display font-black text-xl text-[#111111]">
                          {educationList[2].score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Journey Destination Banner */}
          <div className="mt-16 sm:mt-24 pt-8 border-t-2 border-[#162A44]/20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#E85D2A] animate-pulse" />
              <span className="font-black text-[#162A44] uppercase tracking-wider">
                CURRENT HORIZON: 2024 — 2028 B.TECH AIML EXPEDITION
              </span>
            </div>
            <span className="px-3 py-1 rounded-md bg-[#FFD84D] text-[#111111] font-bold border border-[#162A44] shadow-[2px_2px_0px_#162A44]">
              ALL RECORDS VERIFIED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
