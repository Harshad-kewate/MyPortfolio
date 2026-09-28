"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

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
    category: "Programming & ML",
    role: "Machine Learning & Data Modeling",
    project: "Monsoon Mitra // Harvard CS50P Honors",
    rotation: -1.8,
    duration: 4.1,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.748h5.814v.824H3.882S0 5.78 0 11.905c0 6.126 3.4 5.92 3.4 5.92h2.033v-2.853s-.11-3.4 3.344-3.4h5.768s3.236.054 3.236-3.18V2.656S18.25 0 11.914 0zm-3.29 1.86a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm3.462 22.14c6.094 0 5.714-2.656 5.714-2.656l-.006-2.748h-5.814v-.824h8.138s3.882.447 3.882-5.678c0-6.126-3.4-5.92-3.4-5.92h-2.033v2.853s.11 3.4-3.344 3.4H9.405s-3.236-.054-3.236 3.18v5.733s-.472 2.656 5.865 2.656zm3.29-1.86a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
      </svg>
    ),
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "Machine Learning",
    role: "Model Training & Performance Evaluation",
    project: "Monsoon Mitra // Climate ML",
    rotation: 1.5,
    duration: 4.8,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3.2" fill="#111111" />
        <circle cx="18" cy="9" r="3.5" fill="#111111" />
        <circle cx="10" cy="18" r="3.2" fill="#111111" />
        <line x1="6" y1="6" x2="18" y2="9" />
        <line x1="6" y1="6" x2="10" y2="18" />
        <line x1="10" y1="18" x2="18" y2="9" />
      </svg>
    ),
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Numerical Computing",
    role: "Array Operations & Matrix Computation",
    project: "Monsoon Mitra // Data Modeling",
    rotation: -2.2,
    duration: 4.4,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M12 1.5L2.5 7v10L12 22.5l9.5-5.5V7L12 1.5zm0 2.3l6.9 4-2.6 1.5-6.9-4 2.6-1.5zM4.5 8.7l6.5 3.8v7.5l-6.5-3.8V8.7zm8.5 11.3v-7.5l6.5-3.8v7.5l-6.5 3.8z" />
      </svg>
    ),
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "Data Processing",
    role: "Data Cleaning, Preprocessing & Analysis",
    project: "Monsoon Mitra // Data Pipelines",
    rotation: 2.1,
    duration: 5.2,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <rect x="2.5" y="4" width="4" height="16" rx="1.5" />
        <rect x="10" y="8" width="4" height="12" rx="1.5" />
        <rect x="17.5" y="2" width="4" height="18" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend & APIs",
    role: "High-Performance REST APIs & ML Serving",
    project: "Monsoon Mitra // API Endpoints",
    rotation: -1.2,
    duration: 3.8,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 4.5l5.5 7.5h-4.5l2 7.5-6.5-9h4.5l-1-6z" />
      </svg>
    ),
  },
  {
    id: "cpp",
    name: "C++",
    category: "Languages & Algorithms",
    role: "Data Structures & Systems Programming",
    project: "Algorithmic Implementations",
    rotation: 1.8,
    duration: 4.6,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M11 5C7.7 5 5 7.7 5 11s2.7 6 6 6c2.3 0 4.2-1.3 5.2-3.2h-2.4C13.2 14.5 12.2 15 11 15c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.2 0 2.2.5 2.8 1.2h2.4C15.2 6.3 13.3 5 11 5zm5 4v2h-2v2h2v2h2v-2h2v-2h-2V9h-2zm5 0v2h-1v2h1v2h2v-2h2v-2h-2V9h-2z" />
      </svg>
    ),
  },
  {
    id: "c",
    name: "C",
    category: "Languages & Systems",
    role: "Memory Fundamentals & Core Programming",
    project: "Systems Coursework",
    rotation: -2.5,
    duration: 5.3,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.14 0 7.7-2.52 9.24-6.14h-3.32C16.68 17.58 14.53 19 12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7c2.53 0 4.68 1.42 5.92 3.14h3.32C19.7 4.52 16.14 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Relational Databases",
    role: "Relational Schema Design & Persistence",
    project: "PolyLingo AI Data",
    rotation: 1.2,
    duration: 4.5,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 1.5.55 2.87 1.47 3.93C5.96 12.8 5 14.52 5 16.5 5 19.54 7.46 22 10.5 22h3c3.04 0 5.5-2.46 5.5-5.5 0-1.98-.96-3.7-2.47-4.57C17.45 10.87 18 9.5 18 8c0-3.31-2.69-6-6-6zm0 2.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5S8.5 9.93 8.5 8s1.57-3.5 3.5-3.5zm-1.5 9.5h3c1.66 0 3 1.34 3 3s-1.34 3-3 3h-3c-1.66 0-3-1.34-3-3s1.34-3 3-3z" />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    category: "Database Queries",
    role: "Complex Queries, Joins & Aggregations",
    project: "Relational Data Modeling",
    rotation: -1.9,
    duration: 5.1,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm8 14c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.23c2.09 1.37 5.06 2.23 8 2.23s5.91-.86 8-2.23V18zm0-4.5c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.23c2.09 1.37 5.06 2.23 8 2.23s5.91-.86 8-2.23v2.23z" />
      </svg>
    ),
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Business Intelligence",
    role: "Interactive Dashboards & Data Reporting",
    project: "Business Simulation Analysis",
    rotation: -1.4,
    duration: 5.4,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <rect x="3" y="11" width="4.5" height="10" rx="1.2" />
        <rect x="9.75" y="7" width="4.5" height="14" rx="1.2" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1.2" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Developer Tools",
    role: "Version Control, Branching & Collaboration",
    project: "github.com/Harshad-kewate",
    rotation: 2.2,
    duration: 4.4,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M21.6 10.4l-8-8c-.8-.8-2-.8-2.8 0L8.7 4.5l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.9.9.9 2.5 0 3.4s-2.5.9-3.4 0c-.7-.7-.8-1.7-.5-2.5l-3.2-3.2v4.8c.4.3.7.8.7 1.4 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-.6.3-1.1.7-1.4V8.6c-.4-.3-.7-.8-.7-1.4 0-.8.4-1.5 1.1-1.9L8.4 2.8 2.4 8.8c-.8.8-.8 2 0 2.8l8 8c.8.8 2 .8 2.8 0l8.4-8.4c.8-.8.8-2 0-2.8z" />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Databases",
    role: "Document Databases & CRUD Operations",
    project: "Web Development Projects",
    rotation: 1.9,
    duration: 5.1,
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#111111]" aria-hidden="true">
        <path d="M12 1.5C12 1.5 6.5 6.2 6.5 13.2c0 4.1 3 7.5 5.5 8.8v-10h1v10c2.5-1.3 5.5-4.7 5.5-8.8C18.5 6.2 12 1.5 12 1.5zm0 17.5c-.2 0-.3-.1-.4-.2-.9-.8-3.1-3.1-3.1-5.6 0-3.3 2.5-5.7 3.5-6.5v12.3z" />
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
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#E7F0EA] text-[#162A44] overflow-hidden"
    >
      {/* Editorial Fractured Geometric Borders at the Section Perimeter */}
      {/* Top Fractured Paper Contour Line & Accent Flecks */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none z-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 L120,4 L280,24 L460,8 L640,28 L820,6 L1000,22 L1180,10 L1320,26 L1440,14"
            stroke="#162A44"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="opacity-40"
          />
        </svg>

        {/* Small Orange & Yellow Accent Fragments Floating Along Edge */}
        <div className="absolute top-2 left-[12%] w-3 h-3 bg-[#E85D2A] rotate-45 border border-[#162A44] shadow-[1px_1px_0px_#162A44]" />
        <div className="absolute top-3 left-[48%] w-2.5 h-2.5 bg-[#FFD84D] -rotate-12 border border-[#162A44]" />
        <div className="absolute top-1 right-[18%] w-3.5 h-2 bg-[#315CFF] rotate-12 border border-[#162A44]" />
      </div>

      {/* Bottom Fractured Contour Line & Accent Fragments */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,14 L160,28 L340,10 L520,26 L700,8 L880,24 L1060,12 L1240,28 L1440,16"
            stroke="#162A44"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="opacity-40"
          />
        </svg>
        <div className="absolute bottom-2 left-[24%] w-2.5 h-2.5 bg-[#FFD84D] rotate-12 border border-[#162A44]" />
        <div className="absolute bottom-3 right-[32%] w-3 h-3 bg-[#E85D2A] -rotate-45 border border-[#162A44] shadow-[1px_1px_0px_#162A44]" />
      </div>

      {/* Background Graphic Watermark */}
      <div className="absolute top-6 right-[-1%] font-display text-[130px] sm:text-[220px] font-black text-[#162A44]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        STACK
      </div>

      {/* Subtle Animated Connecting Neural / Circuit Lines (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M60,80 C180,40 260,160 420,90 S640,180 820,110 S1100,160 1380,80"
          fill="none"
          stroke="#162A44"
          strokeWidth="2"
          strokeDasharray="6 8"
          animate={prefersReduced ? undefined : { strokeDashoffset: [0, -40] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
        <motion.path
          d="M80,260 C240,320 380,220 560,300 S820,240 1020,320 S1240,240 1400,290"
          fill="none"
          stroke="#162A44"
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
            <span className="px-2.5 py-1 rounded-md bg-[#FFD84D] text-[#111111] font-black tracking-wider border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
              03
            </span>
            <span className="uppercase tracking-widest text-[#162A44] font-black">
              // TECHNICAL SKILLS & STACK
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E85D2A] animate-pulse" />
          </div>

          <span className="font-mono text-xs font-bold text-[#162A44]/75 hidden sm:inline">
            CLICK ANY SKILL TO VIEW APPLICATION DETAILS
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-[#162A44] leading-[0.95] break-normal">
            <span className="inline-block whitespace-nowrap">TECHNOLOGY</span> <br />
            <span className="inline-block whitespace-nowrap text-[#E85D2A] drop-shadow-[2px_2px_0px_#162A44]">
              ECOSYSTEM.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#162A44]/85 font-medium leading-relaxed max-w-xl">
            Languages, frameworks, and libraries used across machine learning models and practical software engineering projects.
          </p>
        </div>

        {/* BENTO-STYLE EDITORIAL TECHNOLOGY MATRIX (Warm Cream Surface #F5EBDD) */}
        <div className="relative rounded-3xl bg-[#F5EBDD] border-2 border-[#162A44] shadow-[6px_6px_0px_0px_#162A44] sm:shadow-[8px_8px_0px_0px_#162A44] p-4 sm:p-7 md:p-8 overflow-hidden">
          {/* Subtle Technical Corner Accents & Slivers */}
          <div className="absolute top-2.5 left-3 text-xs font-mono font-bold text-[#162A44]/30 select-none pointer-events-none">+</div>
          <div className="absolute top-2.5 right-3 text-xs font-mono font-bold text-[#162A44]/30 select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 left-3 text-xs font-mono font-bold text-[#162A44]/30 select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 right-3 text-xs font-mono font-bold text-[#162A44]/30 select-none pointer-events-none">+</div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#E85D2A]/10 -rotate-45 translate-x-8 -translate-y-8 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#FFD84D]/20 rotate-12 -translate-x-6 translate-y-6 pointer-events-none" />

          {/* Editorial Bento Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-[#162A44]/15 relative z-10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#162A44] font-black">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E85D2A] animate-pulse" />
              <span className="uppercase tracking-wider">// CORE TECHNOLOGIES & TOOLS</span>
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-[#162A44]/70 font-bold hidden sm:flex items-center gap-2">
              <span>12 KEY TECHNOLOGIES</span>
              <span>•</span>
              <span>BENTO GRID</span>
            </div>
          </div>

          {/* 12-Item Balanced Editorial Bento Grid */}
          <div className="grid grid-cols-2 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {TECHNOLOGIES.map((tech, idx) => {
              const isSelected = activeTech?.id === tech.id;

              return (
                <motion.div
                  key={tech.id}
                  style={{ rotate: tech.rotation * 0.3 }}
                  animate={
                    prefersReduced
                      ? undefined
                      : {
                          y: [-2, 2, -2],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: tech.duration,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotate: 0,
                    y: -4,
                    zIndex: 20,
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTech(isSelected ? null : tech)}
                  className="cursor-pointer select-none"
                >
                  <div
                    className={`h-full p-3.5 sm:p-4 rounded-2xl border-2 border-[#162A44] flex flex-col justify-between transition-all ${
                      isSelected
                        ? "bg-white text-[#111111] shadow-[5px_5px_0px_0px_#E85D2A] ring-2 ring-[#E85D2A]"
                        : "bg-[#FFD84D] text-[#111111] shadow-[3px_3px_0px_0px_#162A44] hover:shadow-[5px_5px_0px_0px_#162A44]"
                    }`}
                  >
                    {/* Top Row: Index + Technical Category Tag */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#162A44]/15">
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#162A44]/80">
                        0{idx + 1} // {tech.category.split(" ")[0]}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#162A44]/60" />
                    </div>

                    {/* Middle Row: Crisp 24px Logo in Tile + Name & Category */}
                    <div className="flex items-center gap-3 py-1">
                      <div className="shrink-0 p-2 rounded-xl bg-white/80 border border-[#162A44]/20 shadow-sm flex items-center justify-center">
                        {tech.svg}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#111111] leading-tight truncate">
                          {tech.name}
                        </div>
                        <div className="font-mono text-[10px] sm:text-[11px] font-bold text-[#162A44]/80 tracking-tight truncate mt-0.5">
                          {tech.category}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Role / usage hint */}
                    <div className="pt-2 mt-2 border-t border-[#162A44]/10 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#162A44]/75">
                      <span className="truncate">{tech.role.split("&")[0].trim()}</span>
                      <span className="text-[11px] font-bold shrink-0 ml-1">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Inspection Detail Card (Reveals on tap/click) */}
        <AnimatePresence>
          {activeTech && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-8 p-4 sm:p-6 rounded-2xl bg-[#F5EBDD] text-[#111111] border-2 border-[#162A44] shadow-[5px_5px_0px_0px_#162A44] sm:shadow-[8px_8px_0px_0px_#162A44] max-w-2xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#162A44]/80 font-bold uppercase tracking-wider">
                  <span>{activeTech.category}</span>
                  <span>•</span>
                  <span>ID: {activeTech.id.toUpperCase()}</span>
                </div>

                <div className="font-display font-black text-xl text-[#111111] flex items-center gap-2.5">
                  <div className="shrink-0 scale-110 origin-center">{activeTech.svg}</div>
                  <span>{activeTech.name}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#162A44] text-[#FFD84D]">
                    VERIFIED
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E85D2A] text-white">
                    CORE
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#315CFF] text-white">
                    PROD
                  </span>
                </div>

                <p className="font-mono text-xs font-semibold text-[#162A44] pt-0.5">
                  // {activeTech.role}
                </p>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[#111111] font-bold pt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#162A44] shrink-0" />
                  <span>Applied in: <u className="underline-offset-2">{activeTech.project}</u></span>
                </div>
              </div>

              <button
                onClick={() => setActiveTech(null)}
                className="self-start sm:self-center p-2 rounded-lg bg-[#162A44] text-[#FFD84D] hover:bg-black transition-colors"
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
