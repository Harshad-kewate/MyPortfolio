"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, AudioWaveform, MapPin, Layers, Radio } from "lucide-react";
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
    <section id="work" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-navy-950 text-cream-100 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-white/10 text-chartreuse font-bold">
            03
          </span>
          <span className="uppercase tracking-widest text-slate-400">
            // SELECTED ARCHITECTURE & CASE STUDIES
          </span>
        </div>

        {/* Section Heading & Minimal Copy */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
            SELECTED WORK.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Production-grade machine learning models, audio processing pipelines, and full-stack platforms engineered with real-world validation.
          </p>
        </div>

        {/* Asymmetric Case Study Layout */}
        <div className="space-y-12 lg:space-y-16">
          {/* FEATURED CASE STUDY: MONSOON MITRA (Large Horizontal) */}
          {monsoon && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/15 p-6 sm:p-10 lg:p-12 hover:border-electricBlue/50 transition-all shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Description (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-electricBlue/20 text-electricBlue font-bold border border-electricBlue/30">
                      FLAGSHIP ML SYSTEM
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-chartreuse">0.25° SPATIAL MESH</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                    MONSOON MITRA // <br />
                    <span className="text-electricBlue">HYPERLOCAL AI</span>
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                    Research-grade atmospheric intelligence platform modeling Indian Summer Monsoon onset and break spells using 13 years of ECMWF ERA5 atmospheric reanalysis data.
                  </p>

                  {/* Verified Metrics Strip */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <div className="px-4 py-2 rounded-xl bg-navy-950 border border-white/10 font-mono">
                      <div className="text-chartreuse font-bold text-xl sm:text-2xl">0.9928</div>
                      <div className="text-[10px] text-slate-400 uppercase">Onset ROC-AUC</div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-navy-950 border border-white/10 font-mono">
                      <div className="text-chartreuse font-bold text-xl sm:text-2xl">0.7381</div>
                      <div className="text-[10px] text-slate-400 uppercase">Onset F1 Score</div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-navy-950 border border-white/10 font-mono">
                      <div className="text-white font-bold text-xl sm:text-2xl">0.25°</div>
                      <div className="text-[10px] text-slate-400 uppercase">Grid Resolution</div>
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveModalProject(monsoon)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-bold bg-electricBlue text-white hover:bg-electricBlue-hover transition-colors shadow-lg"
                    >
                      <span>VIEW ARCHITECTURE & METRICS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Interactive Spatial Visualizer (5 cols) */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative aspect-square w-full max-w-md rounded-2xl bg-navy-950 border border-white/15 p-6 flex flex-col justify-between overflow-hidden">
                    {/* Concentric atmospheric scan lines */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                      <div className="w-64 h-64 rounded-full border border-electricBlue/40 animate-ping" />
                      <div className="absolute w-48 h-48 rounded-full border border-chartreuse/30" />
                      <div className="absolute w-32 h-32 rounded-full border border-white/20" />
                      <div className="absolute w-56 h-56 border-t-2 border-r-2 border-chartreuse rounded-full animate-radar origin-center" />
                    </div>

                    <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-chartreuse">
                        <Radio className="w-3.5 h-3.5 animate-pulse text-chartreuse" />
                        <span>ERA5 GRID MESH</span>
                      </span>
                      <span>15 COORDINATE NODES</span>
                    </div>

                    <div className="relative z-10 p-4 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-white/10 space-y-1 font-mono text-xs">
                      <div className="text-[10px] text-slate-400 uppercase">MODEL ENGINE</div>
                      <div className="text-white font-bold">HistGradientBoostingClassifier</div>
                      <div className="text-[11px] text-chartreuse">Temporal Split: 2012-2020 ➔ 2021-2024</div>
                    </div>

                    <div className="relative z-10 flex justify-between font-mono text-[10px] text-slate-500">
                      <span>STRICT ZERO LEAKAGE</span>
                      <span>FASTAPI BACKEND</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TWO COLUMN ASYMMETRIC GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* POLYLINGO AI (7 cols) */}
            {polylingo && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-vividOrange/50 transition-all shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-vividOrange font-bold tracking-wider uppercase">
                      // SPEECH & VIDEO AI
                    </span>
                    <span className="text-slate-500">2026</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-vividOrange transition-colors">
                    POLYLINGO AI
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    AI-powered lecture and video audio translation platform integrating <strong>OpenAI Whisper</strong> speech-to-text, neural translation, and synthesized voice output.
                  </p>

                  {/* Audio Wave Simulation */}
                  <div className="p-4 rounded-xl bg-navy-950 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-2">
                        <AudioWaveform className="w-4 h-4 text-vividOrange" />
                        <span>WHISPER STT ➔ NEURAL TTS</span>
                      </span>
                      <span className="text-white font-mono text-[11px]">PostgreSQL + Prisma</span>
                    </div>

                    <div className="flex items-end gap-1.5 h-10 py-1 justify-between opacity-80">
                      {[35, 70, 25, 85, 55, 95, 40, 80, 60, 30, 75, 45, 90, 65, 35, 80, 50, 70].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-electricBlue to-vividOrange rounded-full"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(polylingo)}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-vividOrange hover:text-white transition-colors"
                  >
                    <span>VIEW CASE DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs text-slate-500">EDTECH PLATFORM</span>
                </div>
              </motion.div>
            )}

            {/* KRISHICART (5 cols) */}
            {krishi && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5 group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-chartreuse/50 transition-all shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-chartreuse font-bold tracking-wider uppercase">
                      // AGRITECH COMMERCE
                    </span>
                    <span className="text-slate-500">2026</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-chartreuse transition-colors">
                    KRISHICART
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Direct agriculture marketplace connecting farmers with buyers. Features product discovery, secure Firebase authentication, and geospatial mapping via <strong>OpenStreetMap / Leaflet</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-navy-950 border border-white/10 space-y-1.5 font-mono text-xs">
                    <div className="flex items-center gap-1.5 text-chartreuse">
                      <MapPin className="w-4 h-4" />
                      <span>LEAFLET SPATIAL MAPPING</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">Direct farmer inventory & geospatial mandi routing</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  {krishi.githubUrl && (
                    <a
                      href={krishi.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-chartreuse hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalProject(krishi)}
                    className="font-mono text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    SPECS →
                  </button>
                </div>
              </motion.div>
            )}

            {/* ALGORITHMIC SYSTEMS (12 cols) */}
            {algo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-12 group rounded-3xl bg-charcoal-900 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="font-mono text-xs text-slate-400 uppercase">
                    // COMPUTATIONAL FOUNDATIONS
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    10+ Custom C++ Algorithms & Low-Level Data Structures
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
                    Problem-solving programs built from scratch emphasizing recursion, pointers, and memory layout.
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalProject(algo)}
                  className="px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors whitespace-nowrap"
                >
                  VIEW DETAILS →
                </button>
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
