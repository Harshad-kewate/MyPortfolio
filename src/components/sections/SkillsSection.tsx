"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, Radio, Terminal, Sparkles, X } from "lucide-react";

interface TechBox {
  id: string;
  name: string;
  category: string;
  role: string;
  project: string;
  rotation: number;
  duration: number;
  svg: React.ReactNode;
}

const TECHNOLOGIES: TechBox[] = [
  {
    id: "python",
    name: "Python",
    category: "AI & Numerical ML",
    role: "Atmospheric ML Modeling & Data Scripting",
    project: "Monsoon Mitra // CS50P Honors (Harvard)",
    rotation: -1.8,
    duration: 4.1,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 text-black">
        <path
          fill="#111111"
          d="M63.5 8c-18.7 0-31.5 5.8-31.5 17.5V36h32v4.5H23.5C11.8 40.5 2 48.7 2 64.5s9.8 24 21.5 24H32v-11.5c0-13 11-23.5 24-23.5h32c10.5 0 19-8.5 19-19V25.5C107 13.8 82.2 8 63.5 8zm-14 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
        />
        <path
          fill="#111111"
          d="M64.5 120c18.7 0 31.5-5.8 31.5-17.5V92H64v-4.5h40.5c11.7 0 21.5-8.2 21.5-24s-9.8-24-21.5-24H96v11.5c0 13-11 23.5-24 23.5H40c-10.5 0-19 8.5-19 19v8.5C21 114.2 45.8 120 64.5 120zm14-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        />
      </svg>
    ),
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "Machine Learning",
    role: "HistGradientBoosting & 0.9928 ROC-AUC",
    project: "Monsoon Mitra // Atmospheric AI",
    rotation: 1.5,
    duration: 4.8,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <circle cx="50" cy="50" r="22" fill="#111111" />
        <circle cx="78" cy="78" r="22" fill="#111111" opacity="0.8" />
        <text x="64" y="70" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FFD928" fontFamily="monospace">
          SKL
        </text>
      </svg>
    ),
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Numerical Math",
    role: "0.25° ECMWF Grid Vectorized Computation",
    project: "Monsoon Mitra // ERA5 Grid",
    rotation: -2.2,
    duration: 4.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M32 36l32-18 32 18v56l-32 18-32-18V36zm32 10.8L44.8 57.6v23.2L64 91.6l19.2-10.8V57.6L64 46.8z" />
      </svg>
    ),
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "Data Wrangling",
    role: "47,490+ Atmospheric Time-Series Records",
    project: "Monsoon Mitra // Data Pipeline",
    rotation: 2.1,
    duration: 5.2,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <rect x="36" y="28" width="16" height="72" rx="4" fill="#111111" />
        <rect x="56" y="44" width="16" height="56" rx="4" fill="#111111" />
        <rect x="76" y="36" width="16" height="64" rx="4" fill="#111111" />
      </svg>
    ),
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Inference APIs",
    role: "Sub-Second Asynchronous Prediction Endpoints",
    project: "Monsoon Mitra // Inference Engine",
    rotation: -1.2,
    duration: 3.8,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M64 20L32 72h28l-8 36 44-56H68l8-24z" />
      </svg>
    ),
  },
  {
    id: "cpp",
    name: "C++",
    category: "Systems & Algorithms",
    role: "Manual Memory Pointer Bounds & Data Structures",
    project: "10+ Custom Algorithmic Implementations",
    rotation: 1.8,
    duration: 4.6,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z" />
        <path fill="#FFD928" d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z" />
      </svg>
    ),
  },
  {
    id: "c",
    name: "C",
    category: "Low-Level Computing",
    role: "Hardware Pointers & Systems Foundations",
    project: "Computer Science Architecture Coursework",
    rotation: -2.5,
    duration: 5.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z" />
        <path fill="#FFD928" d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z" />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Relational DB",
    role: "Relational Data Modeling & ACID Schemas",
    project: "PolyLingo AI Storage",
    rotation: 1.2,
    duration: 4.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M64 28c-18 0-32 12-32 30 0 12 7 23 18 28v14l12-6h2c18 0 32-12 32-30s-14-36-32-36zm0 48c-12 0-22-8-22-18s10-18 22-18 22 8 22 18-10 18-22 18z" />
      </svg>
    ),
  },
  {
    id: "prisma",
    name: "Prisma ORM",
    category: "Database Client",
    role: "Declarative Schema Migrations & Relations",
    project: "PolyLingo Audio Pipeline",
    rotation: -1.5,
    duration: 4.9,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M56 24L32 80l24 24 40-20-40-60zm4 18l24 38-24 12V42z" />
      </svg>
    ),
  },
  {
    id: "redis",
    name: "Redis",
    category: "In-Memory Store",
    role: "Sub-Millisecond Job & Transcription Caching",
    project: "PolyLingo AI Queue Cache",
    rotation: 2.3,
    duration: 4.0,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M64 24L24 44v40l40 20 40-20V44L64 24zm0 18l24 12-24 12-24-12 24-12z" />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    category: "Relational Queries",
    role: "Window Aggregations & Query Execution Plans",
    project: "DBMS & Analytics Reports",
    rotation: -1.9,
    duration: 5.1,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M64 26c-24 0-42 6-42 14v48c0 8 18 14 42 14s42-6 42-14V40c0-8-18-14-42-14zm0 18c-18 0-32-4-32-6s14-6 32-6 32 4 32 6-14 6-32 6zm0 24c-18 0-32-4-32-6V52c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6zm0 24c-18 0-32-4-32-6V76c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6z" />
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-Stack Web",
    role: "Streaming Server Components & API Handlers",
    project: "PolyLingo AI & Official Portfolio",
    rotation: 1.4,
    duration: 4.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M36 38h14v52H36V38zm56 0H78l-30 40v12h14l30-40V38z" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Design Systems",
    role: "Editorial Tokens & Fluid Clamp Typography",
    project: "KrishiCart // Monsoon UI",
    rotation: -2.0,
    duration: 5.0,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M32 56c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13zm-20 32c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13z" />
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    role: "REST APIs & Asynchronous Video Transcoding",
    project: "KrishiCart // PolyLingo Services",
    rotation: 1.7,
    duration: 4.7,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M64 8L16 35.7v56.6L64 120l48-27.7V35.7L64 8zm0 18.2l34 19.6v39.2L64 105.4 30 85V45.8L64 26.2z" />
      </svg>
    ),
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Analytics & BI",
    role: "Simulated Corporate KPI Storytelling",
    project: "Deloitte Data Simulation",
    rotation: -1.4,
    duration: 5.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <rect x="32" y="60" width="16" height="40" rx="3" fill="#111111" />
        <rect x="56" y="44" width="16" height="56" rx="3" fill="#111111" />
        <rect x="80" y="28" width="16" height="72" rx="3" fill="#111111" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Version Control",
    role: "Semantic Commits & Open-Source Repositories",
    project: "github.com/Harshad-kewate",
    rotation: 2.2,
    duration: 4.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M124 57L71 4c-4-4-10-4-14 0L44 17l18 18c4-1 9 0 12 3l14-14c1-4 6-6 10-4 5 1 8 6 7 11s-5 8-10 8c-3 0-6-1-8-3L67 50c1 4 0 9-3 12l15 15c4-1 9 0 12 3 5 5 5 12 0 17s-12 5-17 0c-4-4-4-10-1-14L58 68c-3 1-6 1-9 0L31 86v3c0 5-4 10-10 10s-10-5-10-10 5-10 10-10c3 0 6 1 8 3l18-18c-1-3-1-7 1-10L4 67c-4 4-4 10 0 14l53 53c4 4 10 4 14 0l53-53c4-4 4-10 0-14z" />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud Services",
    role: "Secure Phone Auth & Farmer Session State",
    project: "KrishiCart Agritech",
    rotation: -1.7,
    duration: 4.8,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M20 98l32-60 18 34-36 28zm68-76L74 46l14 26 20-50z" />
        <path fill="#111111" d="M52 38L20 98l44 26 24-52z" />
        <path fill="#111111" d="M64 124l44-26-20-26z" />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Document Store",
    role: "BSON Schemas & Flexible Catalogs",
    project: "Full-Stack Web Sprints",
    rotation: 1.9,
    duration: 5.1,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5">
        <path fill="#111111" d="M64 16s-24 24-24 52c0 20 14 36 24 44 10-8 24-24 24-44 0-28-24-52-24-52zm0 88c-4-4-16-16-16-36 0-16 10-32 16-40 6 8 16 24 16 40 0 20-12 32-16 36z" />
      </svg>
    ),
  },
];

export const SkillsSection: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechBox | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="stack"
      className="relative py-20 sm:py-24 px-5 sm:px-8 md:px-12 bg-[#E52420] text-[#111111] overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute top-4 right-[-1%] font-display text-[120px] sm:text-[200px] font-black text-black/10 select-none pointer-events-none leading-none tracking-tighter">
        TECH
      </div>

      {/* Subtle Animated Connecting Neural / Circuit Lines (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M60,80 C180,40 260,160 420,90 S640,180 820,110 S1100,160 1380,80"
          fill="none"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="6 8"
          animate={prefersReduced ? undefined : { strokeDashoffset: [0, -40] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
        <motion.path
          d="M80,260 C240,320 380,220 560,300 S820,240 1020,320 S1240,240 1400,290"
          fill="none"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="6 8"
          animate={prefersReduced ? undefined : { strokeDashoffset: [0, 40] }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#FFD928] text-[#111111] font-black tracking-wider border-2 border-[#111111]">
              03
            </span>
            <span className="uppercase tracking-widest text-[#FFD928] font-black">
              // CORE COMPUTATIONAL STACK
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD928] animate-pulse" />
          </div>

          <span className="font-mono text-xs font-bold text-[#FFF4D6] hidden sm:inline">
            CLICK ANY YELLOW LABEL TO INSPECT REAL USAGE
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#111111] leading-[0.92]">
            TECHNOLOGY <br />
            <span className="text-[#FFD928] drop-shadow-[2px_2px_0px_#111111]">
              ECOSYSTEM.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#FFF4D6] font-medium leading-relaxed max-w-xl">
            A hot, kinetic cluster of mathematical libraries, atmospheric ML frameworks, and C++ systems.
            Verified tools only.
          </p>
        </div>

        {/* COMPACT YELLOW BOXES CLUSTER (Slightly irregular editorial labels) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-4 sm:p-8 rounded-3xl bg-black/10 border-2 border-black/20 backdrop-blur-sm">
          {TECHNOLOGIES.map((tech) => {
            const isSelected = activeTech?.id === tech.id;

            return (
              <motion.div
                key={tech.id}
                style={{ rotate: tech.rotation }}
                animate={
                  prefersReduced
                    ? undefined
                    : {
                        y: [-3, 3, -3],
                        x: [-1.5, 1.5, -1.5],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: tech.duration,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  y: -5,
                  zIndex: 30,
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTech(isSelected ? null : tech)}
                className="cursor-pointer select-none"
              >
                {/* Editorial Yellow Label Box */}
                <div
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 border-[#111111] font-display font-black text-xs sm:text-sm tracking-tight transition-all ${
                    isSelected
                      ? "bg-white text-[#111111] shadow-[5px_5px_0px_0px_#111111] ring-2 ring-[#FFD928]"
                      : "bg-[#FFD928] text-[#111111] shadow-[3px_3px_0px_0px_#111111] hover:shadow-[5px_5px_0px_0px_#111111]"
                  }`}
                >
                  <div className="shrink-0">{tech.svg}</div>
                  <span className="whitespace-nowrap uppercase">{tech.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Inspection Detail Card (Reveals on tap/click) */}
        <AnimatePresence>
          {activeTech && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FFD928] text-[#111111] border-2 border-[#111111] shadow-[6px_6px_0px_0px_#111111] max-w-2xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#111111]/70 font-bold uppercase">
                  <span>{activeTech.category}</span>
                  <span>•</span>
                  <span>ID: {activeTech.id.toUpperCase()}</span>
                </div>

                <div className="font-display font-black text-xl text-[#111111] flex items-center gap-2">
                  <span>{activeTech.name}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#111111] text-[#FFD928]">
                    VERIFIED
                  </span>
                </div>

                <p className="font-mono text-xs font-semibold text-[#111111]/90 pt-0.5">
                  // {activeTech.role}
                </p>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[#111111] font-bold pt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Applied in: <u>{activeTech.project}</u></span>
                </div>
              </div>

              <button
                onClick={() => setActiveTech(null)}
                className="self-start sm:self-center p-2 rounded-lg bg-[#111111] text-[#FFD928] hover:bg-black transition-colors"
                title="Close inspector"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
