"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/ui/SectionHeader";
import { Badge } from "@/ui/Badge";
import { ProjectModal } from "./ProjectModal";
import { projects } from "@/data/portfolioData";
import { Project } from "@/types";
import {
  ArrowUpRight,
  Github,
  Compass,
  AudioWaveform,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  TrendingUp,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: "ALL ARCHITECTURE", value: "ALL", count: projects.length },
    {
      label: "MACHINE LEARNING & AI",
      value: "Machine Learning & AI",
      count: projects.filter((p) => p.category === "Machine Learning & AI").length,
    },
    {
      label: "FULL-STACK SYSTEMS",
      value: "Full-Stack Systems",
      count: projects.filter((p) => p.category === "Full-Stack Systems").length,
    },
    {
      label: "ALGORITHMS & C++",
      value: "Algorithms & Systems",
      count: projects.filter((p) => p.category === "Algorithms & Systems").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-navy-950 text-cream-100 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          category="SELECTED SYSTEMS & ARCHITECTURE"
          title="PROVEN CODE, MODELS & PLATFORMS"
          theme="dark"
          description="Engineered machine learning systems, multilingual audio pipelines, and full-stack software built with mathematical rigor and clean design."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 border ${
                selectedCategory === cat.value
                  ? "bg-cream-100 text-charcoal-900 border-cream-100 font-bold shadow-md"
                  : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="space-y-12 lg:space-y-16">
          {/* FEATURED PROJECT 1: Monsoon Mitra // MONSOON AI (Large Horizontal) */}
          {filteredProjects.some((p) => p.id === "monsoon-mitra") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-charcoal-900 to-navy-900 border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl hover:border-electricBlue/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Info (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-electricBlue/20 text-electricBlue font-bold border border-electricBlue/30">
                      FLAGSHIP RESEARCH & ML
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-chartreuse font-medium">ECMWF ERA5 13-YR REANALYSIS</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.98]">
                    MONSOON MITRA // <br />
                    <span className="text-electricBlue">HYPERLOCAL AI</span>
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                    Research-grade atmospheric intelligence platform modeling Indian Summer Monsoon
                    onset, active transitions, and break conditions at <strong>0.25° (~25km) spatial mesh</strong>.
                    Engineered using HistGradientBoostingClassifier with strict temporal train/test split (2012–2020 train, 2021–2024 unseen test) and spatial holdout validation.
                  </p>

                  {/* Real Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
                      <div className="font-display font-black text-2xl text-chartreuse">0.9928</div>
                      <div className="font-mono text-[11px] text-slate-400">Onset ROC-AUC</div>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
                      <div className="font-display font-black text-2xl text-chartreuse">0.7381</div>
                      <div className="font-mono text-[11px] text-slate-400">Onset F1 Score</div>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
                      <div className="font-display font-black text-2xl text-electricBlue">0.9950</div>
                      <div className="font-mono text-[11px] text-slate-400">Break ROC-AUC</div>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
                      <div className="font-display font-black text-2xl text-white">0.25°</div>
                      <div className="font-mono text-[11px] text-slate-400">Spatial Mesh</div>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Python", "Scikit-Learn", "FastAPI", "Next.js", "HistGradientBoosting", "ECMWF ERA5"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-white/5 font-mono text-xs text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() =>
                        setActiveModalProject(projects.find((p) => p.id === "monsoon-mitra") || null)
                      }
                      data-cursor="INSPECT"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-bold bg-electricBlue text-white hover:bg-electricBlue-hover transition-colors shadow-lg shadow-electricBlue/20"
                    >
                      <span>INSPECT ARCHITECTURE & METRICS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual (5 cols): Atmospheric Radar / Mesh Graphic */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full aspect-square max-w-md rounded-2xl bg-navy-950 border border-white/15 p-6 flex flex-col justify-between overflow-hidden group-hover:border-electricBlue/40 transition-colors">
                    {/* SVG Spatial Radar Simulation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <div className="w-72 h-72 rounded-full border border-electricBlue/40 animate-ping" />
                      <div className="absolute w-56 h-56 rounded-full border border-chartreuse/30" />
                      <div className="absolute w-40 h-40 rounded-full border border-white/20" />
                      <div className="absolute w-24 h-24 rounded-full border border-electricBlue/50" />
                      <div className="absolute w-full h-[1px] bg-electricBlue/30" />
                      <div className="absolute h-full w-[1px] bg-electricBlue/30" />
                      <div className="absolute w-64 h-64 border-t-2 border-r-2 border-chartreuse/70 rounded-full animate-radar origin-center" />
                    </div>

                    {/* Telemetry Head */}
                    <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-chartreuse">
                        <span className="w-1.5 h-1.5 rounded-full bg-chartreuse animate-pulse" />
                        MODEL: HIST_GRADIENT_BOOST
                      </span>
                      <span>MESH: 15 GRIDS</span>
                    </div>

                    {/* Dynamic Simulated Node Data */}
                    <div className="relative z-10 space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-charcoal-900/90 backdrop-blur-md border border-white/10 space-y-1.5">
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>ATMOSPHERIC ANALOGUE ENGINE</span>
                          <span className="text-chartreuse font-bold">MATCH: 2018 SIMILARITY</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div className="w-[84%] bg-gradient-to-r from-electricBlue to-chartreuse h-full rounded-full" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>Vector Cosine Distance</span>
                          <span className="text-white font-mono">0.842</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-charcoal-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-slate-400">TIME SPLIT PROTOCOL</div>
                          <div className="text-white font-bold text-xs">2012-2020 ➔ 2021-2024</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-chartreuse/15 text-chartreuse text-[10px] font-bold">
                          ZERO LEAKAGE
                        </span>
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="relative z-10 flex justify-between font-mono text-[10px] text-slate-500 pt-2 border-t border-white/10">
                      <span>CORD: 0.25° MESH</span>
                      <span>47,490 DAILY RECORDS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TWO-COLUMN ASYMMETRIC GRID FOR REMAINING PROJECTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* PROJECT 2: PolyLingo AI (7 cols) */}
            {filteredProjects.some((p) => p.id === "polylingo-ai") && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-vividOrange/50 transition-colors shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-vividOrange font-bold tracking-wider">
                      // GENERATIVE AI & AUDIO PIPELINE
                    </span>
                    <span className="font-mono text-xs text-slate-500">2026</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-vividOrange transition-colors">
                    POLYLINGO AI
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    AI-powered lecture and video translation platform that simplifies multilingual access to educational content.
                    Integrates speech-to-text processing via <strong>OpenAI Whisper</strong>, automated subtitle generation, and synchronized voice synthesis.
                  </p>

                  {/* Audio Wave Simulation Box */}
                  <div className="p-4 rounded-xl bg-navy-950 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-2">
                        <AudioWaveform className="w-4 h-4 text-vividOrange" />
                        <span>AUDIO PROCESSING PIPELINE</span>
                      </span>
                      <span className="text-chartreuse font-bold">WHISPER STT</span>
                    </div>

                    {/* Animated audio bars */}
                    <div className="flex items-end gap-1.5 h-12 py-1 justify-between">
                      {[40, 75, 30, 90, 60, 85, 45, 100, 65, 35, 80, 50, 95, 70, 40, 85, 30, 60].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-electricBlue to-vividOrange rounded-full opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                      <span>PostgreSQL + Prisma Schema</span>
                      <span className="text-white">Redis Cache</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "OpenAI API", "Whisper", "PostgreSQL", "Prisma"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-white/5 font-mono text-xs text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <button
                    onClick={() =>
                      setActiveModalProject(projects.find((p) => p.id === "polylingo-ai") || null)
                    }
                    data-cursor="EXPAND"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-vividOrange hover:text-white transition-colors"
                  >
                    <span>VIEW ARCHITECTURE DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs text-slate-500">FULL-STACK SAAS</span>
                </div>
              </motion.div>
            )}

            {/* PROJECT 3: KrishiCart (5 cols) */}
            {filteredProjects.some((p) => p.id === "krishi-cart") && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5 group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-chartreuse/50 transition-colors shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-chartreuse font-bold tracking-wider">
                      // AGRITECH & GEOLOCATION
                    </span>
                    <span className="font-mono text-xs text-slate-500">May 2026</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-chartreuse transition-colors">
                    KRISHICART
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Agriculture-based e-commerce platform connecting farmers directly with produce buyers.
                    Features product cataloging, search engine, secure Firebase authentication, and geospatial mandi mapping with <strong>OpenStreetMap / Leaflet</strong>.
                  </p>

                  {/* Leaflet / Geo box */}
                  <div className="p-4 rounded-xl bg-navy-950 border border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5 text-chartreuse">
                        <MapPin className="w-4 h-4 text-chartreuse" />
                        <span>GEOSPATIAL LEAFLET MESH</span>
                      </span>
                      <span>FIREBASE AUTH</span>
                    </div>
                    <div className="text-slate-300 text-[11px] leading-relaxed">
                      Farmer-to-buyer direct listings with location coordinates and responsive React UI.
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "Leaflet"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-white/5 font-mono text-xs text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/Harshad-kewate/krishi-cart-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-chartreuse hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() =>
                      setActiveModalProject(projects.find((p) => p.id === "krishi-cart") || null)
                    }
                    data-cursor="INSPECT"
                    className="font-mono text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    SPECS
                  </button>
                </div>
              </motion.div>
            )}

            {/* PROJECT 4: Algorithmic Logic & Systems (12 cols) */}
            {filteredProjects.some((p) => p.id === "core-cpp-algorithms") && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-12 group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/15 p-6 sm:p-8 hover:border-white/30 transition-colors shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                      <span className="text-vividOrange font-bold">// CORE COMPUTATIONAL LOGIC</span>
                      <span>•</span>
                      <span>10+ VERIFIED C++ PROGRAMS</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                      ALGORITHMIC LOGIC & LOW-LEVEL DATA STRUCTURES
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                      Custom algorithms and data structures written in C and C++ emphasizing memory management,
                      pointers, recursion, and algorithmic time/space trade-offs. The computational foundation powering machine learning models.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {["C++", "C", "Data Structures", "Recursion", "Memory Pointers", "Algorithms"].map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded bg-white/5 font-mono text-xs text-slate-400 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end gap-3">
                    <div className="font-mono text-right text-xs text-slate-400">
                      <span className="text-chartreuse font-bold text-lg font-display block">10+ PROGRAMS</span>
                      <span>Problem-Solving & Logic Building</span>
                    </div>

                    <button
                      onClick={() =>
                        setActiveModalProject(projects.find((p) => p.id === "core-cpp-algorithms") || null)
                      }
                      data-cursor="VIEW"
                      className="px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors"
                    >
                      EXPLORE CONCEPTS
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Modal View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
