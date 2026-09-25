"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, AudioWaveform, MapPin, Radio, Code2, Sparkles, Star } from "lucide-react";
import { projects } from "@/data/portfolioData";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const monsoon = projects.find((p) => p.id === "monsoon-mitra");
  const polylingo = projects.find((p) => p.id === "polylingo-ai");
  const krishi = projects.find((p) => p.id === "krishi-cart");
  const algo = projects.find((p) => p.id === "core-cpp-algorithms");

  return (
    <section id="work" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#FFF3E6] text-[#162A44] overflow-hidden">
      {/* Background Editorial Watermark */}
      <div className="absolute top-10 right-[-1%] font-display text-[150px] sm:text-[240px] font-black text-[#162A44]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        SYSTEMS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-md bg-[#F36F68] text-[#162A44] font-black tracking-wider border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
            02
          </span>
          <span className="uppercase tracking-widest text-[#162A44] font-black">
            // SELECTED WORK & ARCHITECTURE
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#1FA6A0] animate-pulse" />
        </div>

        {/* OVERSIZED EDITORIAL OPENING: Magazine Crop Effect */}
        <div className="relative mb-14 sm:mb-20">
          {/* Subtle Coral Graphic Shape Behind Heading */}
          <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-40 sm:w-72 h-16 sm:h-24 bg-[#F36F68]/20 -rotate-2 rounded-3xl pointer-events-none -z-10" />
          <div className="absolute left-1/4 top-0 w-32 sm:w-52 h-1.5 bg-[#F36F68] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#162A44]/15 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[#1FA6A0] font-black">
                <span className="w-2 h-2 rounded-full bg-[#1FA6A0]" />
                <span>SELECTED WORK / PROJECTS</span>
              </div>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-[#162A44] leading-[0.85] select-none">
                PROJ<span className="text-[#F36F68]">ECTS.</span>
              </h2>
            </div>

            <div className="max-w-md font-sans text-sm sm:text-base text-[#252525] font-medium leading-relaxed md:pb-1">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#FFD84D] text-[#111111] font-mono text-xs font-bold mr-2 border border-[#162A44]/20 shadow-[1px_1px_0px_#162A44]">
                04 CASE STUDIES
              </span>
              Curated machine learning architectures, audio intelligence platforms, and full-stack software built with mathematical rigor.
            </div>
          </div>
        </div>

        {/* 4 CONTRASTING EDITORIAL CASE STUDIES */}
        <div className="space-y-14 sm:space-y-20">
          {/* ============================================================== */}
          {/* CASE STUDY 01: MONSOON MITRA — FEATURED PROJECT (Highest Visual Weight) */}
          {/* ============================================================== */}
          {monsoon && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl bg-white border-2 border-[#162A44] p-6 sm:p-10 lg:p-14 shadow-[8px_8px_0px_0px_#162A44] overflow-hidden hover:shadow-[12px_12px_0px_0px_#F36F68] transition-all"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#F36F68] via-[#FFD84D] to-[#1FA6A0]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Large Telemetry Visual on Left (7 cols) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#162A44] border-2 border-[#162A44] p-6 flex flex-col justify-between overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-500">
                    {/* Atmospheric Scan Grid Effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                      <div className="w-80 h-80 rounded-full border border-[#1FA6A0]/50 animate-ping" />
                      <div className="absolute w-60 h-60 rounded-full border border-[#FFD84D]/40" />
                      <div className="absolute w-40 h-40 rounded-full border border-white/30" />
                      <div className="absolute w-64 h-64 border-t-2 border-r-2 border-[#FFD84D] rounded-full animate-radar origin-center" />
                      <div className="absolute inset-0 bg-grid-tech opacity-40" />
                    </div>

                    {/* Visual Header */}
                    <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-300">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#FFD84D] font-bold">
                        <Radio className="w-3.5 h-3.5 animate-pulse text-[#FFD84D]" />
                        <span>ERA5 SPATIAL MESH (0.25°)</span>
                      </span>
                      <span className="text-white/70 font-mono text-xs font-bold">47,490 RECORDS</span>
                    </div>

                    {/* Visual Center Telemetry */}
                    <div className="relative z-10 p-5 rounded-2xl bg-[#101820]/95 backdrop-blur-md border border-white/15 space-y-2 max-w-sm">
                      <div className="flex items-center justify-between font-mono text-[10px] text-slate-300">
                        <span>MODEL ALGORITHM</span>
                        <span className="text-[#FFD84D] font-bold">STRICT VALIDATION</span>
                      </div>
                      <div className="font-display font-bold text-white text-base">
                        HistGradientBoostingClassifier
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="w-[88%] bg-gradient-to-r from-[#F36F68] via-[#FFD84D] to-[#1FA6A0] h-full rounded-full" />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] text-slate-300 pt-0.5">
                        <span>Time-Aware Split (2012–2020 ➔ 2021–2024)</span>
                        <span className="text-white font-bold">ZERO LEAKAGE</span>
                      </div>
                    </div>

                    {/* Visual Footer */}
                    <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-slate-300 pt-2 border-t border-white/10">
                      <span>ECMWF REANALYSIS DATA</span>
                      <span className="text-[#FFD84D] font-bold">F1: 0.7381 | ROC-AUC: 0.9928</span>
                    </div>
                  </div>
                </div>

                {/* Information on Right (5 cols) */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F36F68] text-[#162A44] font-black border border-[#162A44] shadow-[2px_2px_0px_#162A44]">
                      <Star className="w-3.5 h-3.5 fill-[#162A44]" />
                      <span>FEATURED CASE STUDY</span>
                    </span>
                    <span className="text-[#252525]/70 font-bold">01 / 04</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#162A44] leading-tight">
                    MONSOON MITRA // <br />
                    <span className="text-[#F36F68]">ATMOSPHERIC AI</span>
                  </h3>

                  <p className="text-[#252525] text-sm sm:text-base leading-relaxed font-medium">
                    Research-grade atmospheric intelligence platform modeling Indian Summer Monsoon onset and break spells at a <strong>0.25° (~25km) hyperlocal spatial mesh</strong> using 13 years of ECMWF ERA5 reanalysis data.
                  </p>

                  {/* Verified Metrics Chips */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-[#FFF3E6] border-2 border-[#162A44] shadow-[3px_3px_0px_0px_#162A44]">
                      <div className="font-display font-black text-2xl text-[#F36F68]">0.9928</div>
                      <div className="font-mono text-[10px] text-[#162A44] font-bold uppercase">Onset ROC-AUC</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FFF3E6] border-2 border-[#162A44] shadow-[3px_3px_0px_0px_#162A44]">
                      <div className="font-display font-black text-2xl text-[#162A44]">0.7381</div>
                      <div className="font-mono text-[10px] text-[#162A44] font-bold uppercase">Onset F1 Score</div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#162A44]">
                    {["Python", "Scikit-Learn", "FastAPI", "Next.js", "ERA5 Data"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-[#FFF3E6] border border-[#162A44]/30 font-bold">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveModalProject(monsoon)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black bg-[#162A44] text-[#FFF3E6] hover:bg-[#F36F68] hover:text-[#162A44] border-2 border-[#162A44] shadow-[4px_4px_0px_0px_#162A44] transition-all group-hover:translate-x-1"
                    >
                      <span>INSPECT ARCHITECTURE DETAILS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* CASE STUDY 02: POLYLINGO AI (Electric Blue + Deep Navy) */}
          {/* ============================================================== */}
          {polylingo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl bg-[#315CFF] text-white p-6 sm:p-10 lg:p-12 border-2 border-[#162A44] shadow-[6px_6px_0px_0px_#162A44] overflow-hidden hover:shadow-[10px_10px_0px_0px_#162A44] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Info on Left (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20">
                      SPEECH PIPELINE
                    </span>
                    <span className="text-white/70 font-bold">02 / 04</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                    POLYLINGO AI // <br />
                    <span>AUDIO TRANSLATION</span>
                  </h3>

                  <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal">
                    AI-powered lecture and video audio translation SaaS system integrating <strong>OpenAI Whisper</strong> speech-to-text, neural translation, and synchronized voice synthesis for multilingual educational access.
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-white">
                    {["Whisper STT", "OpenAI API", "PostgreSQL", "Prisma", "Node.js"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/15 border border-white/25 backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveModalProject(polylingo)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black bg-white text-[#162A44] hover:bg-[#FFD84D] border-2 border-[#162A44] shadow-[4px_4px_0px_0px_#162A44] transition-all"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-[#162A44]" />
                    </button>
                  </div>
                </div>

                {/* Large Visual on Right (7 cols): Animated Spectrogram & Pipeline */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#101820] border-2 border-white/20 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                    <div className="flex items-center justify-between font-mono text-xs text-slate-300">
                      <span className="flex items-center gap-2">
                        <AudioWaveform className="w-4 h-4 text-[#F36F68]" />
                        <span>WHISPER SPEECH EXTRACTION</span>
                      </span>
                      <span className="text-[#FFD84D] font-bold">SYNCHRONIZED TTS</span>
                    </div>

                    {/* Animated Multichannel Audio Wave */}
                    <div className="py-6 space-y-3">
                      <div className="flex items-end gap-1.5 sm:gap-2 h-20 justify-between">
                        {[45, 80, 30, 95, 65, 100, 50, 85, 40, 75, 90, 60, 35, 85, 70, 95, 40, 60, 80, 50, 70].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#315CFF] via-[#F36F68] to-[#FFD84D] rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                        <span>Original Track [Audio In]</span>
                        <span className="text-[#FFD84D]">Multi-Language Synthesis [Voice Out]</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#162A44] border border-white/15 flex items-center justify-between font-mono text-xs text-slate-200">
                      <span>Database: PostgreSQL + Prisma ORM</span>
                      <span className="text-white font-bold">Redis High-Throughput Cache</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* TWO ASYMMETRIC CONTRASTING CARDS FOR REMAINING PROJECTS */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* PROJECT 03: KRISHICART (Warm Yellow / Lime + Deep Navy) (7 cols) */}
            {krishi && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 group relative rounded-3xl bg-[#D4FF00] text-[#162A44] p-6 sm:p-10 border-2 border-[#162A44] shadow-[6px_6px_0px_0px_#162A44] flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_#162A44] transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#162A44] text-[#D4FF00] font-black">
                      AGRITECH DIRECT COMMERCE
                    </span>
                    <span className="font-bold text-[#162A44]/70">03 / 04</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#162A44] leading-tight">
                    KRISHICART // <br />
                    <span>GEOSPATIAL MARKETPLACE</span>
                  </h3>

                  <p className="text-[#252525] text-sm sm:text-base leading-relaxed font-medium">
                    Agriculture-based e-commerce platform eliminating middlemen between farmers and buyers with product cataloging, search engine, and geospatial mapping via <strong>OpenStreetMap / Leaflet</strong>.
                  </p>

                  {/* Visual Map Simulation */}
                  <div className="p-5 rounded-2xl bg-[#162A44] text-white space-y-3 shadow-lg">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="flex items-center gap-1.5 text-[#D4FF00] font-bold">
                        <MapPin className="w-4 h-4 text-[#D4FF00]" />
                        <span>INTERACTIVE LEAFLET GEOMESH</span>
                      </span>
                      <span className="text-slate-300">FIREBASE AUTH</span>
                    </div>
                    <div className="font-mono text-xs text-slate-200">
                      Hyperlocal produce listing, live farmer mandi coordinates & responsive client architecture.
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {["Vite", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "Leaflet"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-[#162A44]/10 border border-[#162A44]/20 font-bold text-[#162A44]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-[#162A44]/20 mt-8 flex flex-wrap items-center justify-between gap-4">
                  {krishi.githubUrl && (
                    <a
                      href={krishi.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-[#162A44] text-white hover:bg-[#F36F68] hover:text-[#162A44] transition-colors shadow-md"
                    >
                      <Github className="w-4 h-4" />
                      <span>OPEN GITHUB REPOSITORY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalProject(krishi)}
                    className="font-mono text-xs font-bold text-[#162A44] hover:underline"
                  >
                    SPECS & DETAILS →
                  </button>
                </div>
              </motion.div>
            )}

            {/* PROJECT 04: ALGORITHMIC SYSTEMS (Deep Navy + Coral Accents) (5 cols) */}
            {algo && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5 group relative rounded-3xl bg-[#162A44] text-white p-6 sm:p-10 border-2 border-[#162A44] shadow-[6px_6px_0px_0px_#F36F68] flex flex-col justify-between hover:border-[#F36F68] transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#F36F68] text-[#162A44] font-black">
                      C++ & SYSTEMS
                    </span>
                    <span className="text-slate-400">04 / 04</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    ALGORITHMIC LOGIC & DATA STRUCTURES
                  </h3>

                  <p className="text-slate-200 text-sm leading-relaxed font-normal">
                    Collection of <strong>10+ custom C and C++ algorithmic implementations</strong> focused on recursion, low-level memory layout, pointer arithmetic, and computational efficiency.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#101820] border border-white/10 space-y-2 font-mono text-xs">
                    <div className="text-[#FFD84D] font-bold">10+ VERIFIED CODE MODULES</div>
                    <div className="text-slate-300 text-[11px]">
                      Search routines, dynamic memory allocation, recursive sorting, and space-time complexity benchmarks.
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
                    {["C++", "C", "Data Structures", "Algorithms", "Memory Pointers"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(algo)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-white/10 hover:bg-[#F36F68] hover:text-[#162A44] text-white transition-colors"
                  >
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs text-slate-400">CORE LOGIC</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
