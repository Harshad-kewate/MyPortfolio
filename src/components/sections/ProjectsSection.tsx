"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, AudioWaveform, MapPin, Radio, Code2, Sparkles } from "lucide-react";
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
    <section id="work" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#FAF6F0] text-[#101820] overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-10 right-4 font-mono text-[160px] font-black text-[#101820]/[0.035] select-none pointer-events-none leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-[#E85D2A] text-white font-bold tracking-wider">
            02
          </span>
          <span className="uppercase tracking-widest text-[#101820] font-bold">
            // SELECTED WORK & ARCHITECTURE
          </span>
          <span className="w-2 h-2 rounded-full bg-[#18352F]" />
        </div>

        {/* Section Heading & Short Description */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#101820] leading-[0.92]">
            SELECTED <br />
            <span className="text-[#E85D2A]">SYSTEMS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            A curated collection of machine learning architectures, audio intelligence platforms, and full-stack software built with mathematical rigor.
          </p>
        </div>

        {/* 4 CONTRASTING EDITORIAL CASE STUDIES */}
        <div className="space-y-12 sm:space-y-16">
          {/* ============================================================== */}
          {/* CASE STUDY 01: MONSOON MITRA (Warm Cream + Vivid Orange + Navy) */}
          {/* Asymmetric Layout: Large Visual on Left (7 cols), Info on Right (5 cols) */}
          {/* ============================================================== */}
          {monsoon && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl bg-white border-2 border-charcoal-900 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden hover:shadow-orange-500/10 transition-all"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vividOrange via-chartreuse to-electricBlue" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Large Visual on Left (7 cols) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="relative aspect-[16/10] w-full rounded-2xl bg-navy-950 border-2 border-charcoal-900 p-6 flex flex-col justify-between overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-500">
                    {/* Atmospheric Scan Grid Effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-35 pointer-events-none">
                      <div className="w-80 h-80 rounded-full border border-electricBlue/50 animate-ping" />
                      <div className="absolute w-60 h-60 rounded-full border border-chartreuse/40" />
                      <div className="absolute w-40 h-40 rounded-full border border-white/30" />
                      <div className="absolute w-64 h-64 border-t-2 border-r-2 border-chartreuse rounded-full animate-radar origin-center" />
                      <div className="absolute inset-0 bg-grid-tech opacity-40" />
                    </div>

                    {/* Visual Header */}
                    <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-300">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-chartreuse font-bold">
                        <Radio className="w-3.5 h-3.5 animate-pulse text-chartreuse" />
                        <span>ERA5 SPATIAL MESH (0.25°)</span>
                      </span>
                      <span className="text-white/60">47,490 RECORDS</span>
                    </div>

                    {/* Visual Center Telemetry */}
                    <div className="relative z-10 p-5 rounded-2xl bg-charcoal-900/95 backdrop-blur-md border border-white/15 space-y-2 max-w-sm">
                      <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                        <span>MODEL ALGORITHM</span>
                        <span className="text-chartreuse font-bold">STRICT VALIDATION</span>
                      </div>
                      <div className="font-display font-bold text-white text-base">
                        HistGradientBoostingClassifier
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="w-[88%] bg-gradient-to-r from-electricBlue via-vividOrange to-chartreuse h-full rounded-full" />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] text-slate-400 pt-0.5">
                        <span>Time-Aware Split (2012–2020 ➔ 2021–2024)</span>
                        <span className="text-white font-bold">ZERO LEAKAGE</span>
                      </div>
                    </div>

                    {/* Visual Footer */}
                    <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-slate-400 pt-2 border-t border-white/10">
                      <span>ECMWF REANALYSIS DATA</span>
                      <span className="text-chartreuse font-bold">F1: 0.7381 | ROC-AUC: 0.9928</span>
                    </div>
                  </div>
                </div>

                {/* Information on Right (5 cols) */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-vividOrange text-white font-bold">
                      FEATURED CASE STUDY
                    </span>
                    <span className="text-charcoal-700">01 / 04</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-charcoal-900 leading-tight">
                    MONSOON MITRA // <br />
                    <span className="text-vividOrange">ATMOSPHERIC AI</span>
                  </h3>

                  <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
                    Research-grade atmospheric intelligence platform modeling Indian Summer Monsoon onset and break spells at a <strong>0.25° (~25km) hyperlocal spatial mesh</strong> using 13 years of ECMWF ERA5 reanalysis data.
                  </p>

                  {/* Verified Metrics Chips */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-charcoal-900/5 border border-charcoal-900/10">
                      <div className="font-display font-black text-2xl text-vividOrange">0.9928</div>
                      <div className="font-mono text-[10px] text-charcoal-700 uppercase">Onset ROC-AUC</div>
                    </div>
                    <div className="p-3 rounded-xl bg-charcoal-900/5 border border-charcoal-900/10">
                      <div className="font-display font-black text-2xl text-charcoal-900">0.7381</div>
                      <div className="font-mono text-[10px] text-charcoal-700 uppercase">Onset F1 Score</div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-charcoal-800">
                    {["Python", "Scikit-Learn", "FastAPI", "Next.js", "ERA5 Data"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-charcoal-900/5 border border-charcoal-900/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveModalProject(monsoon)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-charcoal-900 text-white hover:bg-vividOrange transition-colors shadow-lg group-hover:translate-x-1"
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
          {/* CASE STUDY 02: POLYLINGO AI (Electric Blue + Cream Contrast) */}
          {/* Asymmetric Layout: Information on Left (5 cols), Visual on Right (7 cols) */}
          {/* ============================================================== */}
          {polylingo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl bg-electricBlue text-white p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Info on Left (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold backdrop-blur-sm">
                      SPEECH PIPELINE
                    </span>
                    <span className="text-white/60">02 / 04</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                    POLYLINGO AI // <br />
                    <span>AUDIO TRANSLATION</span>
                  </h3>

                  <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                    AI-powered lecture and video audio translation SaaS system integrating <strong>OpenAI Whisper</strong> speech-to-text, neural translation, and synchronized voice synthesis for multilingual educational access.
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-white">
                    {["Whisper STT", "OpenAI API", "PostgreSQL", "Prisma", "Node.js"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/15 border border-white/20 backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveModalProject(polylingo)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-white text-charcoal-900 hover:bg-chartreuse transition-colors shadow-lg"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-electricBlue" />
                    </button>
                  </div>
                </div>

                {/* Large Visual on Right (7 cols): Animated Spectrogram & Pipeline */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] w-full rounded-2xl bg-charcoal-900 border-2 border-white/20 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                    <div className="flex items-center justify-between font-mono text-xs text-slate-300">
                      <span className="flex items-center gap-2">
                        <AudioWaveform className="w-4 h-4 text-vividOrange" />
                        <span>WHISPER SPEECH EXTRACTION</span>
                      </span>
                      <span className="text-chartreuse font-bold">SYNCHRONIZED TTS</span>
                    </div>

                    {/* Animated Multichannel Audio Wave */}
                    <div className="py-6 space-y-3">
                      <div className="flex items-end gap-1.5 sm:gap-2 h-20 justify-between">
                        {[45, 80, 30, 95, 65, 100, 50, 85, 40, 75, 90, 60, 35, 85, 70, 95, 40, 60, 80, 50, 70].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-electricBlue via-vividOrange to-chartreuse rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Original Track [Audio In]</span>
                        <span className="text-chartreuse">Multi-Language Synthesis [Voice Out]</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-navy-950 border border-white/10 flex items-center justify-between font-mono text-xs text-slate-300">
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
            {/* PROJECT 03: KRISHICART (Lime / Chartreuse + Charcoal) (7 cols) */}
            {krishi && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 group relative rounded-3xl bg-chartreuse text-charcoal-900 p-6 sm:p-10 border-2 border-charcoal-900 shadow-2xl flex flex-col justify-between hover:shadow-lime-500/20 transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-charcoal-900 text-chartreuse font-bold">
                      AGRITECH DIRECT COMMERCE
                    </span>
                    <span className="font-bold text-charcoal-700">03 / 04</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-charcoal-900 leading-tight">
                    KRISHICART // <br />
                    <span>GEOSPATIAL MARKETPLACE</span>
                  </h3>

                  <p className="text-charcoal-800 text-sm sm:text-base leading-relaxed font-normal">
                    Agriculture-based e-commerce platform eliminating middlemen between farmers and buyers with product cataloging, search engine, and geospatial mapping via <strong>OpenStreetMap / Leaflet</strong>.
                  </p>

                  {/* Visual Map Simulation */}
                  <div className="p-5 rounded-2xl bg-charcoal-900 text-white space-y-3 shadow-lg">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="flex items-center gap-1.5 text-chartreuse font-bold">
                        <MapPin className="w-4 h-4 text-chartreuse" />
                        <span>INTERACTIVE LEAFLET GEOMESH</span>
                      </span>
                      <span className="text-slate-400">FIREBASE AUTH</span>
                    </div>
                    <div className="font-mono text-xs text-slate-300">
                      Hyperlocal produce listing, live farmer mandi coordinates & responsive client architecture.
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {["Vite", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "Leaflet"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-charcoal-900/10 border border-charcoal-900/20 font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-charcoal-900/20 mt-8 flex flex-wrap items-center justify-between gap-4">
                  {krishi.githubUrl && (
                    <a
                      href={krishi.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-charcoal-900 text-white hover:bg-vividOrange transition-colors shadow-md"
                    >
                      <Github className="w-4 h-4" />
                      <span>OPEN GITHUB REPOSITORY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalProject(krishi)}
                    className="font-mono text-xs font-bold text-charcoal-900 hover:underline"
                  >
                    SPECS & DETAILS →
                  </button>
                </div>
              </motion.div>
            )}

            {/* PROJECT 04: ALGORITHMIC SYSTEMS (Vivid Orange + Cream) (5 cols) */}
            {algo && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5 group relative rounded-3xl bg-charcoal-900 text-white p-6 sm:p-10 border-2 border-white/20 shadow-2xl flex flex-col justify-between hover:border-vividOrange transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-vividOrange text-white font-bold">
                      C++ & SYSTEMS
                    </span>
                    <span className="text-slate-400">04 / 04</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    ALGORITHMIC LOGIC & DATA STRUCTURES
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    Collection of <strong>10+ custom C and C++ algorithmic implementations</strong> focused on recursion, low-level memory layout, pointer arithmetic, and computational efficiency.
                  </p>

                  <div className="p-4 rounded-2xl bg-navy-950 border border-white/10 space-y-2 font-mono text-xs">
                    <div className="text-chartreuse font-bold">10+ VERIFIED CODE MODULES</div>
                    <div className="text-slate-400 text-[11px]">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-white/10 hover:bg-vividOrange text-white transition-colors"
                  >
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs text-slate-500">CORE LOGIC</span>
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
