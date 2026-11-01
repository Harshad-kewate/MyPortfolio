"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface TechBox {
  id: string;
  name: string;
  category: string;
  role: string;
  project: string;
  svg: React.ReactNode;
}

const TECHNOLOGIES: TechBox[] = [
  {
    id: "html",
    name: "HTML",
    category: "FRONTEND",
    role: "Semantic Web Structure & Accessibility Standards",
    project: "Web Applications & UI Layouts",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.28-3.281h11.25l.282-3.282H4.781l.844 9.843h10.125l-.375 4.219-3.406.938-3.406-.938-.219-2.531H5.156l.375 4.5 6.438 1.781 6.438-1.781.875-9.75H8.531z" />
      </svg>
    ),
  },
  {
    id: "css",
    name: "CSS",
    category: "FRONTEND",
    role: "Modern CSS, Responsive UI & Grid/Flexbox Layouts",
    project: "Portfolio & Interactive Client UI",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413H5.41l.246 2.875h12.67l-.28 3.281H8.813l.25 2.875h8.694l-.563 6.344-5.217 1.438-5.219-1.438-.344-3.843H3.625l.563 6.437 7.789 2.156 7.789-2.156 1.094-12.25.188-2.125.281-3.281z" />
      </svg>
    ),
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "FRONTEND",
    role: "Interactive Dashboards & Data Reporting",
    project: "Business Simulation Analysis",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <rect x="3" y="11" width="4.5" height="10" rx="1.2" />
        <rect x="9.75" y="7" width="4.5" height="14" rx="1.2" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1.2" />
      </svg>
    ),
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "BACKEND",
    role: "High-Performance REST APIs & ML Model Serving",
    project: "Monsoon Mitra // API Endpoints",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 4.5l5.5 7.5h-4.5l2 7.5-6.5-9h4.5l-1-6z" />
      </svg>
    ),
  },
  {
    id: "cpp",
    name: "C++",
    category: "BACKEND",
    role: "Data Structures & Systems Programming",
    project: "Algorithmic Implementations",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M11 5C7.7 5 5 7.7 5 11s2.7 6 6 6c2.3 0 4.2-1.3 5.2-3.2h-2.4C13.2 14.5 12.2 15 11 15c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.2 0 2.2.5 2.8 1.2h2.4C15.2 6.3 13.3 5 11 5zm5 4v2h-2v2h2v2h2v-2h2v-2h-2V9h-2zm5 0v2h-1v2h1v2h2v-2h2v-2h-2V9h-2z" />
      </svg>
    ),
  },
  {
    id: "c",
    name: "C",
    category: "BACKEND",
    role: "Memory Fundamentals & Core Programming",
    project: "Systems Coursework",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.14 0 7.7-2.52 9.24-6.14h-3.32C16.68 17.58 14.53 19 12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7c2.53 0 4.68 1.42 5.92 3.14h3.32C19.7 4.52 16.14 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "DATABASE",
    role: "Relational Schema Design & Persistence",
    project: "PolyLingo AI Data",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 1.5.55 2.87 1.47 3.93C5.96 12.8 5 14.52 5 16.5 5 19.54 7.46 22 10.5 22h3c3.04 0 5.5-2.46 5.5-5.5 0-1.98-.96-3.7-2.47-4.57C17.45 10.87 18 9.5 18 8c0-3.31-2.69-6-6-6zm0 2.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5S8.5 9.93 8.5 8s1.57-3.5 3.5-3.5zm-1.5 9.5h3c1.66 0 3 1.34 3 3s-1.34 3-3 3h-3c-1.66 0-3-1.34-3-3s1.34-3 3-3z" />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    category: "DATABASE",
    role: "Complex Queries, Joins & Aggregations",
    project: "Relational Data Modeling",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm8 14c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.23c2.09 1.37 5.06 2.23 8 2.23s5.91-.86 8-2.23V18zm0-4.5c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.23c2.09 1.37 5.06 2.23 8 2.23s5.91-.86 8-2.23v2.23z" />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "DATABASE",
    role: "Document Databases & CRUD Operations",
    project: "Web Development Projects",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M12 1.5C12 1.5 6.5 6.2 6.5 13.2c0 4.1 3 7.5 5.5 8.8v-10h1v10c2.5-1.3 5.5-4.7 5.5-8.8C18.5 6.2 12 1.5 12 1.5zm0 17.5c-.2 0-.3-.1-.4-.2-.9-.8-3.1-3.1-3.1-5.6 0-3.3 2.5-5.7 3.5-6.5v12.3z" />
      </svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    category: "AI / ML & DATA",
    role: "Machine Learning & Atmospheric Modeling",
    project: "Monsoon Mitra // Harvard CS50P Honors",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.748h5.814v.824H3.882S0 5.78 0 11.905c0 6.126 3.4 5.92 3.4 5.92h2.033v-2.853s-.11-3.4 3.344-3.4h5.768s3.236.054 3.236-3.18V2.656S18.25 0 11.914 0zm-3.29 1.86a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm3.462 22.14c6.094 0 5.714-2.656 5.714-2.656l-.006-2.748h-5.814v-.824h8.138s3.882.447 3.882-5.678c0-6.126-3.4-5.92-3.4-5.92h-2.033v2.853s.11 3.4-3.344 3.4H9.405s-3.236-.054-3.236 3.18v5.733s-.472 2.656 5.865 2.656zm3.29-1.86a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
      </svg>
    ),
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "AI / ML & DATA",
    role: "Model Training & Performance Evaluation",
    project: "Monsoon Mitra // Climate ML",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none" stroke="#080808" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3.2" fill="#080808" />
        <circle cx="18" cy="9" r="3.5" fill="#080808" />
        <circle cx="10" cy="18" r="3.2" fill="#080808" />
        <line x1="6" y1="6" x2="18" y2="9" />
        <line x1="6" y1="6" x2="10" y2="18" />
        <line x1="10" y1="18" x2="18" y2="9" />
      </svg>
    ),
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "AI / ML & DATA",
    role: "Array Operations & Matrix Computation",
    project: "Monsoon Mitra // Data Modeling",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M12 1.5L2.5 7v10L12 22.5l9.5-5.5V7L12 1.5zm0 2.3l6.9 4-2.6 1.5-6.9-4 2.6-1.5zM4.5 8.7l6.5 3.8v7.5l-6.5-3.8V8.7zm8.5 11.3v-7.5l6.5-3.8v7.5l-6.5 3.8z" />
      </svg>
    ),
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "AI / ML & DATA",
    role: "Data Cleaning, Preprocessing & Analysis",
    project: "Monsoon Mitra // Data Pipelines",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <rect x="2.5" y="4" width="4" height="16" rx="1.5" />
        <rect x="10" y="8" width="4" height="12" rx="1.5" />
        <rect x="17.5" y="2" width="4" height="18" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "TOOLS & PLATFORMS",
    role: "Version Control, Branching & Collaboration",
    project: "github.com/Harshad-kewate",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#080808]" aria-hidden="true">
        <path d="M21.6 10.4l-8-8c-.8-.8-2-.8-2.8 0L8.7 4.5l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.9.9.9 2.5 0 3.4s-2.5.9-3.4 0c-.7-.7-.8-1.7-.5-2.5l-3.2-3.2v4.8c.4.3.7.8.7 1.4 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-.6.3-1.1.7-1.4V8.6c-.4-.3-.7-.8-.7-1.4 0-.8.4-1.5 1.1-1.9L8.4 2.8 2.4 8.8c-.8.8-.8 2 0 2.8l8 8c.8.8 2 .8 2.8 0l8.4-8.4c.8-.8.8-2 0-2.8z" />
      </svg>
    ),
  },
];

export const SkillsSection: React.FC = () => {
  const [activeModalTech, setActiveModalTech] = useState<TechBox | null>(null);
  const prefersReduced = useReducedMotion();

  const getTech = (id: string) => TECHNOLOGIES.find((t) => t.id === id);

  const frontendTechs = ["html", "css", "powerbi"].map(getTech).filter(Boolean) as TechBox[];
  const backendTechs = ["fastapi", "cpp", "c"].map(getTech).filter(Boolean) as TechBox[];
  const databaseTechs = ["postgresql", "sql", "mongodb"].map(getTech).filter(Boolean) as TechBox[];
  const aiMlTechs = ["python", "scikit-learn", "numpy", "pandas"].map(getTech).filter(Boolean) as TechBox[];
  const toolsTechs = ["git"].map(getTech).filter(Boolean) as TechBox[];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalTech(null);
      }
    };
    if (activeModalTech) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalTech]);

  // Render an individual technology logo button with smooth hover tooltip
  const renderTechIcon = (tech: TechBox) => {
    return (
      <div key={tech.id} className="relative group/tech">
        <motion.button
          type="button"
          whileHover={prefersReduced ? undefined : { y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveModalTech(tech)}
          aria-label={`View ${tech.name} specifications`}
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-[#FFFDF7] border-2 border-[#080808] shadow-[2px_2px_0px_0px_#080808] hover:border-[#F12222] hover:shadow-[3px_3px_0px_0px_#F12222] hover:bg-[#FFD92F]/20 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center p-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F12222]"
        >
          {tech.svg}
        </motion.button>

        {/* Elegant Tooltip revealing name on hover / keyboard focus */}
        <div
          role="tooltip"
          className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 group-focus-within/tech:opacity-100 pointer-events-none transition-all duration-200 transform group-hover/tech:-translate-y-1 z-30 select-none"
        >
          <div className="px-2.5 py-1 rounded-md bg-[#080808] text-[#FFF3D6] border border-[#080808] shadow-[2px_2px_0px_0px_#FFD92F] font-mono text-[10px] sm:text-[11px] font-black tracking-wider uppercase whitespace-nowrap flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F12222] shrink-0" />
            <span>{tech.name}</span>
          </div>
          {/* Tooltip downward caret */}
          <div className="w-2 h-2 bg-[#080808] border-r border-b border-[#080808] rotate-45 mx-auto -mt-1" />
        </div>
      </div>
    );
  };

  return (
    <section
      id="stack"
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#FFF3D6] text-[#080808] overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute top-6 right-[-1%] font-display text-[110px] sm:text-[180px] lg:text-[240px] font-black text-[#080808]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        TECH.SYS
      </div>

      {/* Subtle Corner Editorial Markers */}
      <div className="absolute top-4 left-4 sm:left-8 font-mono text-[9px] font-black tracking-widest text-[#080808]/40 flex items-center gap-1.5 select-none pointer-events-none">
        <span className="w-1.5 h-1.5 bg-[#F12222]" />
        <span>SYS_ARCH // 03.MATRIX</span>
      </div>
      <div className="absolute top-4 right-4 sm:right-8 font-mono text-[9px] font-black tracking-widest text-[#080808]/40 hidden sm:flex items-center gap-1.5 select-none pointer-events-none">
        <span>LAYER_COUNT: 05</span>
        <span className="w-1.5 h-1.5 bg-[#FFD92F] border border-[#080808]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-[#080808]/15 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-sm bg-[#080808] text-[#FFD92F] font-mono font-black tracking-wider border-2 border-[#080808] shadow-[2px_2px_0px_0px_#F12222]">
              03
            </span>
            <span className="uppercase tracking-widest text-[#080808] font-black">
              // SYSTEM ARCHITECTURE & TECH STACK
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F12222] animate-pulse" />
          </div>

          <span className="font-mono text-xs font-bold text-[#080808]/75 hidden sm:inline flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD92F] border border-[#080808]" />
            [HOVER / TAP LOGO TO INSPECT]
          </span>
        </div>

        {/* Section Heading: Large, Bold, Wide Futuristic Display Typography */}
        <div className="mb-10 sm:mb-14 max-w-4xl">
          <div className="flex items-center gap-2 mb-2 font-mono text-[10px] sm:text-[11px] font-black tracking-widest text-[#F12222] uppercase">
            <span className="w-2 h-2 bg-[#F12222]" />
            <span>DISCIPLINARY TAXONOMY // CORE MATRIX</span>
          </div>

          <h2 className="font-display text-3xl min-[360px]:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#080808] leading-[0.92] break-normal">
            <span>TECH</span>{" "}
            <span className="text-[#F12222] relative inline-block">
              ECOSYSTEM
              <span className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1.5 sm:h-2.5 bg-[#FFD92F]" />
            </span>
            <span className="text-[#080808]">.</span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#080808]/85 font-medium leading-relaxed max-w-2xl">
            14 production-tested technologies organized into 5 specialized system layers. Hover or tap any logo for specifications, role, and practical deployment.
          </p>
        </div>

        {/* COMPACT BENTO GRID (CREAM SURFACES, BOLD BLACK OUTLINES, SUBTLE OFFSET SHADOWS) */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-5 relative z-10">
          {/* ============================================================== */}
          {/* 1. FRONTEND — 3 LOGOS */}
          {/* ============================================================== */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl bg-[#FFFDF7] text-[#080808] border-2 border-[#080808] shadow-[4px_4px_0px_0px_#080808] p-4 sm:p-5 flex flex-col justify-start">
            <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#080808]/15">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded-sm font-mono text-[9px] font-black tracking-wider bg-[#FFD92F] text-[#080808] border border-[#080808]">
                  01
                </span>
                <h3 className="font-display text-xs sm:text-sm font-black uppercase tracking-tight text-[#080808]">
                  FRONTEND
                </h3>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#080808]/60 uppercase tracking-wider">
                3 UNITS
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {frontendTechs.map(renderTechIcon)}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 2. BACKEND — 3 LOGOS */}
          {/* ============================================================== */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl bg-[#FFFDF7] text-[#080808] border-2 border-[#080808] shadow-[4px_4px_0px_0px_#080808] p-4 sm:p-5 flex flex-col justify-start">
            <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#080808]/15">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded-sm font-mono text-[9px] font-black tracking-wider bg-[#FFD92F] text-[#080808] border border-[#080808]">
                  02
                </span>
                <h3 className="font-display text-xs sm:text-sm font-black uppercase tracking-tight text-[#080808]">
                  BACKEND
                </h3>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#080808]/60 uppercase tracking-wider">
                3 UNITS
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {backendTechs.map(renderTechIcon)}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 3. DATABASE — 3 LOGOS */}
          {/* ============================================================== */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl bg-[#FFFDF7] text-[#080808] border-2 border-[#080808] shadow-[4px_4px_0px_0px_#080808] p-4 sm:p-5 flex flex-col justify-start">
            <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#080808]/15">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded-sm font-mono text-[9px] font-black tracking-wider bg-[#FFD92F] text-[#080808] border border-[#080808]">
                  03
                </span>
                <h3 className="font-display text-xs sm:text-sm font-black uppercase tracking-tight text-[#080808]">
                  DATABASE
                </h3>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#080808]/60 uppercase tracking-wider">
                3 UNITS
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {databaseTechs.map(renderTechIcon)}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 4. AI / ML & DATA — 4 LOGOS (FEATURE MODULE) */}
          {/* ============================================================== */}
          <div className="md:col-span-4 lg:col-span-7 rounded-2xl bg-[#FFFDF7] text-[#080808] border-2 border-[#080808] shadow-[4px_4px_0px_0px_#F12222] p-4 sm:p-5 relative overflow-hidden flex flex-col justify-start">
            {/* Top Red & Yellow Accent Hairline */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F12222] via-[#FFD92F] to-[#F12222]" />

            <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#080808]/15">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded-sm font-mono text-[9px] font-black tracking-wider bg-[#F12222] text-white border border-[#080808]">
                  04
                </span>
                <h3 className="font-display text-xs sm:text-sm font-black uppercase tracking-tight text-[#080808]">
                  AI / ML & DATA
                </h3>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F12222] animate-pulse hidden sm:inline-block" />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] font-black text-[#F12222] uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD92F] border border-[#080808]" />
                CORE FOCUS // 4 UNITS
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {aiMlTechs.map(renderTechIcon)}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 5. TOOLS & PLATFORMS — 1 LOGO */}
          {/* ============================================================== */}
          <div className="md:col-span-2 lg:col-span-5 rounded-2xl bg-[#FFFDF7] text-[#080808] border-2 border-[#080808] shadow-[4px_4px_0px_0px_#080808] p-4 sm:p-5 flex flex-col justify-start">
            <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#080808]/15">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded-sm font-mono text-[9px] font-black tracking-wider bg-[#FFD92F] text-[#080808] border border-[#080808]">
                  05
                </span>
                <h3 className="font-display text-xs sm:text-sm font-black uppercase tracking-tight text-[#080808]">
                  TOOLS & PLATFORMS
                </h3>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#080808]/60 uppercase tracking-wider">
                1 UNIT
              </span>
            </div>

            {/* 1 Logo + Compact Organic Tag */}
            <div className="flex items-center gap-3">
              {toolsTechs.map(renderTechIcon)}
              <div className="flex flex-col justify-center px-3 py-2 rounded-xl bg-[#FFF3D6] border border-[#080808]/20 font-mono text-[9px] sm:text-[10px] text-[#080808] truncate">
                <span className="text-[#F12222] font-black uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD92F] border border-[#080808]" />
                  VCS & COLLABORATION
                </span>
                <span className="block text-[#080808]/75 font-bold text-[9px] sm:text-[10px] mt-0.5">
                  Git & GitHub Workflows
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CLICK / TAP INTERACTIVE DETAIL MODAL POPOVER */}
        <AnimatePresence>
          {activeModalTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setActiveModalTech(null)}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-[#080808]/70 backdrop-blur-xs"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeModalTech.name} details`}
            >
              <motion.div
                initial={prefersReduced ? { scale: 1, opacity: 0 } : { scale: 0.94, opacity: 0, y: 12 }}
                animate={prefersReduced ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1, y: 0 }}
                exit={prefersReduced ? { scale: 1, opacity: 0 } : { scale: 0.94, opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-2xl bg-[#FFFDF7] text-[#080808] border-2 border-[#080808] shadow-[8px_8px_0px_0px_#080808] p-5 sm:p-6 overflow-hidden"
              >
                {/* Top Red & Yellow Accent Hairline */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F12222] via-[#FFD92F] to-[#F12222]" />

                {/* Top Bar with Category, Verified Tag, and Close Button */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#080808]/15 mt-1">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
                    <span className="px-2 py-0.5 rounded-sm bg-[#080808] text-[#FFD92F] uppercase tracking-wider font-black">
                      {activeModalTech.category}
                    </span>
                    <span className="text-[#F12222] font-black uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F12222]" />
                      VERIFIED STACK
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalTech(null)}
                    className="p-1.5 rounded-lg bg-[#080808] text-[#FFF3D6] hover:bg-[#F12222] hover:text-white transition-colors cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-[#F12222]"
                    title="Close details (Esc)"
                    aria-label="Close details"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Technology Identity */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-13 h-13 rounded-xl bg-[#FFF3D6] border-2 border-[#080808] shadow-[2px_2px_0px_0px_#080808] flex items-center justify-center p-2.5 shrink-0">
                    {activeModalTech.svg}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-2xl text-[#080808] uppercase tracking-tight leading-none">
                      {activeModalTech.name}
                    </h4>
                    <span className="font-mono text-[11px] text-[#080808]/70 font-bold uppercase mt-1 block">
                      SYSTEM ID // {activeModalTech.id}
                    </span>
                  </div>
                </div>

                {/* Concise Engineering Purpose / Usage */}
                <div className="space-y-2 bg-[#FFF3D6] rounded-xl p-3.5 border border-[#080808]/20 mb-4">
                  <div className="font-mono text-[10px] text-[#080808] font-black uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F12222]" />
                    ROLE & ENGINEERING SPECIFICATION
                  </div>
                  <p className="font-mono text-xs text-[#080808] leading-relaxed font-bold">
                    // {activeModalTech.role}
                  </p>
                </div>

                {/* Practical Coursework & Project Application */}
                <div className="flex items-start gap-2 font-mono text-xs text-[#080808] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#F12222] shrink-0 mt-0.5" />
                  <span>
                    Applied in: <u className="underline-offset-2 text-[#080808] font-black">{activeModalTech.project}</u>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
