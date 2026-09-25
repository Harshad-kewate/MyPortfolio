"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  AudioWaveform,
  MapPin,
  Radio,
  Star,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  GitBranch,
} from "lucide-react";
import { projects } from "@/data/portfolioData";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";

// --- Clean SVG Icons for Technologies in the Detail Drawers ---
const TechIcons: Record<string, React.ReactNode> = {
  Python: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.748h5.814v.824H3.882S0 5.78 0 11.905c0 6.126 3.4 5.92 3.4 5.92h2.033v-2.853s-.11-3.4 3.344-3.4h5.768s3.236.054 3.236-3.18V2.656S18.25 0 11.914 0zm-3.29 1.86a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm3.462 22.14c6.094 0 5.714-2.656 5.714-2.656l-.006-2.748h-5.814v-.824h8.138s3.882.447 3.882-5.678c0-6.126-3.4-5.92-3.4-5.92h-2.033v2.853s.11 3.4-3.344 3.4H9.405s-3.236-.054-3.236 3.18v5.733s-.472 2.656 5.865 2.656zm3.29-1.86a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
    </svg>
  ),
  "Scikit-Learn": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 stroke-current fill-none" strokeWidth="2" aria-hidden="true">
      <circle cx="6" cy="6" r="3" fill="currentColor" />
      <circle cx="18" cy="9" r="3.5" fill="currentColor" />
      <circle cx="10" cy="18" r="3" fill="currentColor" />
      <line x1="6" y1="6" x2="18" y2="9" />
      <line x1="6" y1="6" x2="10" y2="18" />
    </svg>
  ),
  "ECMWF ERA5": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm0 2.3l6.5 3.8-2.6 1.5-6.5-3.8 2.6-1.5zm-7 4.7l6 3.5v7l-6-3.5V9zm8 10.5v-7l6-3.5v7l-6 3.5z" />
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 4.5l5 7h-4.5l2 7.5-6.5-8.5h4.5l-.5-6z" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.1 16.5l-6.6-8.8V17H9V7h1.6l6.5 8.7V7h1.5v9.5h-1.5z" />
    </svg>
  ),
  "Whisper STT": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 stroke-current fill-none" strokeWidth="2" aria-hidden="true">
      <path d="M12 2v20M17 5v14M7 5v14M22 10v4M2 10v4" />
    </svg>
  ),
  "OpenAI API": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 1.5.55 2.87 1.47 3.93C5.96 12.8 5 14.52 5 16.5 5 19.54 7.46 22 10.5 22h3c3.04 0 5.5-2.46 5.5-5.5 0-1.98-.96-3.7-2.47-4.57C17.45 10.87 18 9.5 18 8c0-3.31-2.69-6-6-6zm0 2.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5S8.5 9.93 8.5 8s1.57-3.5 3.5-3.5z" />
    </svg>
  ),
  "Prisma ORM": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12.4 2.2L3.6 17.4l4.8 4.4 12-4-8-15.6zm.4 3.8l5.2 10.2-7.8 2.6-3.1-2.9 5.7-9.9z" />
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.8L4.6 7 12 3.3 19.4 7 12 9.8zM2 12l10 5 10-5-2-1-8 4-8-4-2 1zm0 5l10 5 10-5-2-1-8 4-8-4-2 1z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 2L3 7.2v10.4L12 23l9-5.4V7.2L12 2zm0 2.3l6.7 3.9v7.8L12 19.9l-6.7-3.9V8.2L12 4.3z" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M2.5 4.5l8.5 16 8.5-16L12 6.5 2.5 4.5zm11 1L9 11.5l3.5 1-2 5 5.5-7.5-3.5-1 1-3.5z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8z" />
    </svg>
  ),
  "OpenStreetMap / Leaflet": <MapPin className="w-3.5 h-3.5 shrink-0" />,
  Firebase: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M4.6 17.5l5.5-10.4 2.9 5.5-5.9 4.9zm13.8-12.8l-2.2 4.1 2.2 4.1 3.1-7.8c.1-.2 0-.4-.2-.4zm-8.2 2.3l-5.6 10.5 7.7 4.3 3.5-8.2-5.6-6.6z" />
    </svg>
  ),
  "Express.js": <Layers className="w-3.5 h-3.5 shrink-0" />,
  "C++": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M11 5C7.7 5 5 7.7 5 11s2.7 6 6 6c2.3 0 4.2-1.3 5.2-3.2h-2.4C13.2 14.5 12.2 15 11 15c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.2 0 2.2.5 2.8 1.2h2.4C15.2 6.3 13.3 5 11 5zm5 4v2h-2v2h2v2h2v-2h2v-2h-2V9h-2zm5 0v2h-1v2h1v2h2v-2h2v-2h-2V9h-2z" />
    </svg>
  ),
  C: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5c2.76 0 5.12 1.71 6.08 4.14h-3.09c-.7-1.01-1.78-1.64-2.99-1.64-2.21 0-4 1.79-4 4s1.79 4 4 4c1.21 0 2.29-.63 2.99-1.64h3.09c-.96 2.43-3.32 4.14-6.08 4.14z" />
    </svg>
  ),
  "Data Structures": <Cpu className="w-3.5 h-3.5 shrink-0" />,
  Algorithms: <Layers className="w-3.5 h-3.5 shrink-0" />,
  "Memory Pointers": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M4 4h16v3H4zm0 6h16v3H4zm0 6h10v3H4z" />
    </svg>
  ),
  Git: <GitBranch className="w-3.5 h-3.5 shrink-0" />,
};

// Verified Problem-Solution-Approach-Tech Data (strictly derived from Harshad's resume & verified code)
const PROJECT_DETAILS_DATA: Record<
  string,
  {
    problem: string;
    solution: string;
    approach: string;
    technologies: string[];
  }
> = {
  "monsoon-mitra": {
    problem:
      "Forecasting the onset and dry spells of the Indian Summer Monsoon is notoriously chaotic. Traditional simulations rely on coarse atmospheric grids that obscure hyperlocal (~25km) rainfall realities for farmers and regional planning.",
    solution:
      "Engineered a research-grade meteorological intelligence platform that models monsoon onset and break spells at a fine 0.25° (~25km) spatial mesh using 13 years of ECMWF ERA5 reanalysis data.",
    approach:
      "Trained HistGradientBoostingClassifier with probability calibration via CalibratedClassifierCV across 47,490+ records. Applied a strict time-aware temporal train/test split (2012–2020 train, 2021–2024 unseen test) to prevent data leakage, backed by an explainability engine for atmospheric feature attribution and a 14-day historical analogue similarity engine.",
    technologies: ["Python", "Scikit-Learn", "ECMWF ERA5", "FastAPI", "Next.js"],
  },
  "polylingo-ai": {
    problem:
      "Technical video lectures and educational coursework delivered in a single language create steep barriers for multilingual learners who need accurate transcriptions, contextual translation, and natural synchronized audio.",
    solution:
      "Developed an automated AI speech translation SaaS pipeline that transcribes video/audio lectures, performs context-aware neural translation, and synthesizes synchronized multilingual speech.",
    approach:
      "Extracts audio streams and transcribes speech using OpenAI Whisper STT, processes neural translations with target speech synthesis, persists user data and session state in PostgreSQL via Prisma ORM schemas, and caches transcription jobs in Redis for high-throughput processing.",
    technologies: ["Whisper STT", "OpenAI API", "PostgreSQL", "Prisma ORM", "Redis", "Node.js"],
  },
  "krishi-cart": {
    problem:
      "Smallholder agricultural farmers lose substantial margins to multi-tier middleman cartels and lack direct geospatial access to regional produce buyers and live mandi rates.",
    solution:
      "Created a location-aware agritech e-commerce marketplace connecting farmers directly with agricultural produce buyers with transparent pricing and zero intermediary markups.",
    approach:
      "Architected a responsive modern client with Vite and Tailwind CSS integrated with OpenStreetMap and Leaflet for visual farm and mandi location mapping, Firebase for secure phone authentication and session management, and a Node.js REST API for produce inventory indexing.",
    technologies: ["Vite", "Tailwind CSS", "OpenStreetMap / Leaflet", "Firebase", "Node.js", "Express.js"],
  },
  "core-cpp-algorithms": {
    problem:
      "Complex computational problem-solving and systems engineering require deterministic memory allocation, pointer bounds, and space-time optimization that high-level abstractions conceal.",
    solution:
      "Engineered a systematic suite of 10+ custom C and C++ algorithmic modules implementing foundational data structures, search routines, and recursive optimizations from scratch.",
    approach:
      "Implemented manual pointer bounds, dynamic arrays, recursive sorting algorithms, and rigorous space-time complexity benchmarks adhering to C++ standard conventions with detailed verification test cases.",
    technologies: ["C++", "C", "Data Structures", "Algorithms", "Memory Pointers", "Git"],
  },
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

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
          {/* CASE STUDY 01: MONSOON MITRA — FEATURED PROJECT */}
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
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                      <div className="w-80 h-80 rounded-full border border-[#1FA6A0]/50 animate-ping" />
                      <div className="absolute w-60 h-60 rounded-full border border-[#FFD84D]/40" />
                      <div className="absolute w-40 h-40 rounded-full border border-white/30" />
                      <div className="absolute w-64 h-64 border-t-2 border-r-2 border-[#FFD84D] rounded-full animate-radar origin-center" />
                      <div className="absolute inset-0 bg-grid-tech opacity-40" />
                    </div>

                    <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-300">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#FFD84D] font-bold">
                        <Radio className="w-3.5 h-3.5 animate-pulse text-[#FFD84D]" />
                        <span>ERA5 SPATIAL MESH (0.25°)</span>
                      </span>
                      <span className="text-white/70 font-mono text-xs font-bold">47,490 RECORDS</span>
                    </div>

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

                    <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-slate-300 pt-2 border-t border-white/10">
                      <span>ECMWF REANALYSIS DATA</span>
                      <span className="text-[#FFD84D] font-bold">F1: 0.7381 | ROC-AUC: 0.9928</span>
                    </div>
                  </div>
                </div>

                {/* Information on Right (5 cols) */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                  {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F36F68] text-[#162A44] font-black border border-[#162A44] shadow-[2px_2px_0px_#162A44]">
                        <Star className="w-3.5 h-3.5 fill-[#162A44]" />
                        <span>FEATURED CASE STUDY</span>
                      </span>
                      <span className="text-[#252525]/70 font-bold">01 / 04</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleDetails("monsoon-mitra")}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-mono text-xs font-black bg-[#FFD84D] text-[#162A44] hover:bg-[#F36F68] hover:text-[#162A44] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] transition-all cursor-pointer"
                      aria-expanded={expandedProjectId === "monsoon-mitra"}
                    >
                      <span>{expandedProjectId === "monsoon-mitra" ? "COLLAPSE DETAILS" : "VIEW DETAILS"}</span>
                      {expandedProjectId === "monsoon-mitra" ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
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
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black bg-[#162A44] text-[#FFF3E6] hover:bg-[#F36F68] hover:text-[#162A44] border-2 border-[#162A44] shadow-[4px_4px_0px_0px_#162A44] transition-all group-hover:translate-x-1 cursor-pointer"
                    >
                      <span>INSPECT ARCHITECTURE DETAILS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* EXPANDABLE PROBLEM -> SOLUTION -> APPROACH -> TECH PANEL */}
              <AnimatePresence>
                {expandedProjectId === "monsoon-mitra" && (
                  <ProjectExpandableDrawer details={PROJECT_DETAILS_DATA["monsoon-mitra"]} theme="cream" />
                )}
              </AnimatePresence>
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
                  {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20">
                        SPEECH PIPELINE
                      </span>
                      <span className="text-white/70 font-bold">02 / 04</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleDetails("polylingo-ai")}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-mono text-xs font-black bg-[#FFD84D] text-[#162A44] hover:bg-white border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] transition-all cursor-pointer"
                      aria-expanded={expandedProjectId === "polylingo-ai"}
                    >
                      <span>{expandedProjectId === "polylingo-ai" ? "COLLAPSE DETAILS" : "VIEW DETAILS"}</span>
                      {expandedProjectId === "polylingo-ai" ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
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
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black bg-white text-[#162A44] hover:bg-[#FFD84D] border-2 border-[#162A44] shadow-[4px_4px_0px_0px_#162A44] transition-all cursor-pointer"
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

              {/* EXPANDABLE PROBLEM -> SOLUTION -> APPROACH -> TECH PANEL */}
              <AnimatePresence>
                {expandedProjectId === "polylingo-ai" && (
                  <ProjectExpandableDrawer details={PROJECT_DETAILS_DATA["polylingo-ai"]} theme="blue" />
                )}
              </AnimatePresence>
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
                  {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#162A44] text-[#D4FF00] font-black">
                        AGRITECH DIRECT COMMERCE
                      </span>
                      <span className="font-bold text-[#162A44]/70">03 / 04</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleDetails("krishi-cart")}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-mono text-xs font-black bg-[#162A44] text-[#D4FF00] hover:bg-white hover:text-[#162A44] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] transition-all cursor-pointer"
                      aria-expanded={expandedProjectId === "krishi-cart"}
                    >
                      <span>{expandedProjectId === "krishi-cart" ? "COLLAPSE DETAILS" : "VIEW DETAILS"}</span>
                      {expandedProjectId === "krishi-cart" ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
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

                  {/* EXPANDABLE PROBLEM -> SOLUTION -> APPROACH -> TECH PANEL */}
                  <AnimatePresence>
                    {expandedProjectId === "krishi-cart" && (
                      <ProjectExpandableDrawer details={PROJECT_DETAILS_DATA["krishi-cart"]} theme="lime" />
                    )}
                  </AnimatePresence>
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
                    className="font-mono text-xs font-bold text-[#162A44] hover:underline cursor-pointer"
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
                  {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F36F68] text-[#162A44] font-black">
                        C++ & SYSTEMS
                      </span>
                      <span className="text-slate-400">04 / 04</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleDetails("core-cpp-algorithms")}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-mono text-xs font-black bg-[#FFD84D] text-[#162A44] hover:bg-[#F36F68] border-2 border-white shadow-[2px_2px_0px_#F36F68] transition-all cursor-pointer"
                      aria-expanded={expandedProjectId === "core-cpp-algorithms"}
                    >
                      <span>{expandedProjectId === "core-cpp-algorithms" ? "COLLAPSE DETAILS" : "VIEW DETAILS"}</span>
                      {expandedProjectId === "core-cpp-algorithms" ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
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

                  {/* EXPANDABLE PROBLEM -> SOLUTION -> APPROACH -> TECH PANEL */}
                  <AnimatePresence>
                    {expandedProjectId === "core-cpp-algorithms" && (
                      <ProjectExpandableDrawer details={PROJECT_DETAILS_DATA["core-cpp-algorithms"]} theme="navy" />
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(algo)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-white/10 hover:bg-[#F36F68] hover:text-[#162A44] text-white transition-colors cursor-pointer"
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

// --- Expandable Drawer Component for Problem -> Solution -> Approach -> Technology ---
interface ProjectExpandableDrawerProps {
  details: {
    problem: string;
    solution: string;
    approach: string;
    technologies: string[];
  };
  theme: "cream" | "blue" | "lime" | "navy";
}

const ProjectExpandableDrawer: React.FC<ProjectExpandableDrawerProps> = ({ details, theme }) => {
  // Adaptive themes matching each card's identity
  const containerClasses = {
    cream: "bg-[#FFF3E6] text-[#162A44] border-2 border-[#162A44] shadow-[4px_4px_0px_#162A44]",
    blue: "bg-[#162A44] text-white border-2 border-white/30 shadow-[4px_4px_0px_#315CFF]",
    lime: "bg-[#162A44] text-white border-2 border-[#162A44] shadow-[4px_4px_0px_#162A44]",
    navy: "bg-[#101820] text-slate-200 border-2 border-white/20 shadow-[4px_4px_0px_#F36F68]",
  }[theme];

  const subBoxClasses = {
    cream: "bg-white/80 border border-[#162A44]/15",
    blue: "bg-white/10 border border-white/15",
    lime: "bg-white/10 border border-white/15",
    navy: "bg-white/5 border border-white/10",
  }[theme];

  const pillClasses = {
    cream: "bg-white text-[#162A44] border border-[#162A44]/25 shadow-sm",
    blue: "bg-white/15 text-white border border-white/20",
    lime: "bg-[#D4FF00]/15 text-[#D4FF00] border border-[#D4FF00]/30",
    navy: "bg-white/10 text-white border border-white/15",
  }[theme];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, marginTop: 0 }}
      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
      exit={{ opacity: 0, height: 0, marginTop: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className={`p-6 sm:p-8 rounded-3xl ${containerClasses} space-y-6`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-current/15 pb-3 font-mono text-xs">
          <span className="font-black uppercase tracking-wider">
            // ARCHITECTURAL BREAKDOWN & METHODOLOGY
          </span>
          <span className="px-2 py-0.5 rounded bg-[#FFD84D] text-[#111111] font-bold text-[10px]">
            VERIFIED ANALYSIS
          </span>
        </div>

        {/* 4 Required Parts in an Asymmetric 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* 1. PROBLEM */}
          <div className={`p-5 rounded-2xl ${subBoxClasses} space-y-2`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#F36F68] tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F36F68]" />
              <span>1. PROBLEM</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {details.problem}
            </p>
          </div>

          {/* 2. SOLUTION */}
          <div className={`p-5 rounded-2xl ${subBoxClasses} space-y-2`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#1FA6A0] tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#1FA6A0]" />
              <span>2. SOLUTION</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {details.solution}
            </p>
          </div>

          {/* 3. APPROACH */}
          <div className={`p-5 rounded-2xl ${subBoxClasses} space-y-2`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#315CFF] tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#315CFF]" />
              <span>3. APPROACH</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {details.approach}
            </p>
          </div>

          {/* 4. TECHNOLOGY */}
          <div className={`p-5 rounded-2xl ${subBoxClasses} space-y-3`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#FFD84D] tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FFD84D]" />
              <span>4. TECHNOLOGY</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {details.technologies.map((techName) => (
                <span
                  key={techName}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold ${pillClasses} transition-transform hover:scale-102`}
                >
                  {TechIcons[techName] || <Layers className="w-3.5 h-3.5 shrink-0" />}
                  <span>{techName}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
