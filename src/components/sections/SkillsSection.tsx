"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  usedInProjects: string[];
  color: string;
  size: "large" | "medium";
  floatDuration: number;
  svg: React.ReactNode;
}

const TECH_NODES: TechNode[] = [
  {
    id: "python",
    name: "Python",
    category: "Programming Language",
    role: "Core AI/ML & Numerical Scripting",
    description: "Primary language for training atmospheric ML models, ERA5 climate data wrangling, and backend service integration.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI", "CS50P Python Honors"],
    color: "#3776AB",
    size: "large",
    floatDuration: 4.8,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <path
          fill="#3776AB"
          d="M63.5 8c-18.7 0-31.5 5.8-31.5 17.5V36h32v4.5H23.5C11.8 40.5 2 48.7 2 64.5s9.8 24 21.5 24H32v-11.5c0-13 11-23.5 24-23.5h32c10.5 0 19-8.5 19-19V25.5C107 13.8 82.2 8 63.5 8zm-14 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
        />
        <path
          fill="#FFD43B"
          d="M64.5 120c18.7 0 31.5-5.8 31.5-17.5V92H64v-4.5h40.5c11.7 0 21.5-8.2 21.5-24s-9.8-24-21.5-24H96v11.5c0 13-11 23.5-24 23.5H40c-10.5 0-19 8.5-19 19v8.5C21 114.2 45.8 120 64.5 120zm14-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        />
      </svg>
    ),
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "Machine Learning Framework",
    role: "Model Training & Calibration",
    description: "Trained HistGradientBoosting classifiers with CalibratedClassifierCV for monsoon onset (0.9928 ROC-AUC) and break spells.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI"],
    color: "#F7931E",
    size: "large",
    floatDuration: 5.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#20232A" />
        <circle cx="50" cy="50" r="22" fill="#F7931E" />
        <circle cx="78" cy="78" r="22" fill="#3499CD" opacity="0.9" />
        <text x="64" y="70" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">
          SKL
        </text>
      </svg>
    ),
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Numerical Computing",
    role: "Multidimensional Matrix Math",
    description: "Applied across 0.25° spatial grid computations, vector cosine distances, and tensor transformations.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI"],
    color: "#013243",
    size: "medium",
    floatDuration: 4.2,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#013243" />
        <path fill="#4DABCF" d="M32 36l32-18 32 18v56l-32 18-32-18V36zm32 10.8L44.8 57.6v23.2L64 91.6l19.2-10.8V57.6L64 46.8z" />
        <text x="64" y="72" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">NP</text>
      </svg>
    ),
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "Data Engineering",
    role: "Time-Series Data Wrangling",
    description: "Cleaning and restructuring 13 years of ECMWF ERA5 reanalysis records (~47,490 daily records) into temporal features.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI"],
    color: "#150458",
    size: "medium",
    floatDuration: 5.1,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#150458" />
        <rect x="36" y="28" width="16" height="72" rx="4" fill="#FF4D00" />
        <rect x="56" y="44" width="16" height="56" rx="4" fill="#E70488" />
        <rect x="76" y="36" width="16" height="64" rx="4" fill="#00D2B4" />
      </svg>
    ),
  },
  {
    id: "cpp",
    name: "C++",
    category: "Systems Language",
    role: "Algorithmic Problem Solving",
    description: "Wrote 10+ core programs focusing on memory pointers, dynamic allocation, recursion, and time-complexity optimization.",
    usedInProjects: ["10+ Algorithmic Systems & Data Structures"],
    color: "#00599C",
    size: "large",
    floatDuration: 4.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <path fill="#00599C" d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z" />
        <path fill="#FFFFFF" d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z" />
        <path fill="#FFFFFF" d="M93 59h3v-3h2v3h3v2h-3v3h-2v-3h-3zm14 0h3v-3h2v3h3v2h-3v3h-2v-3h-3z" />
      </svg>
    ),
  },
  {
    id: "c",
    name: "C",
    category: "Low-Level Language",
    role: "Foundational Memory Logic",
    description: "Understands pointers, low-level data structures, and computer science architecture foundations.",
    usedInProjects: ["Algorithmic Problem Solving Programs"],
    color: "#A8B9CC",
    size: "medium",
    floatDuration: 5.6,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <path fill="#A8B9CC" d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z" />
        <path fill="#283593" d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z" />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Relational Database",
    role: "Relational Data Modeling & Storage",
    description: "Primary database store integrated with Prisma ORM for user accounts, video metadata, and job logs.",
    usedInProjects: ["PolyLingo AI"],
    color: "#336791",
    size: "large",
    floatDuration: 4.9,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#336791" />
        <path fill="#FFFFFF" d="M64 28c-18 0-32 12-32 30 0 12 7 23 18 28v14l12-6h2c18 0 32-12 32-30s-14-36-32-36zm0 48c-12 0-22-8-22-18s10-18 22-18 22 8 22 18-10 18-22 18z" />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    category: "Database Language",
    role: "Relational Queries & Aggregations",
    description: "Writing complex queries, table schemas, and indexing for relational data analytics.",
    usedInProjects: ["Database Management Coursework", "Analytics Projects"],
    color: "#00758F",
    size: "medium",
    floatDuration: 5.2,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#00758F" />
        <path fill="#FFFFFF" d="M64 26c-24 0-42 6-42 14v48c0 8 18 14 42 14s42-6 42-14V40c0-8-18-14-42-14zm0 18c-18 0-32-4-32-6s14-6 32-6 32 4 32 6-14 6-32 6zm0 24c-18 0-32-4-32-6V52c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6zm0 24c-18 0-32-4-32-6V76c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6z" />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Document Store",
    role: "NoSQL JSON Collections",
    description: "Storing unstructured document data, user catalogs, and product metadata.",
    usedInProjects: ["Web Development Projects"],
    color: "#47A248",
    size: "medium",
    floatDuration: 4.6,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#131313" />
        <path fill="#47A248" d="M64 16s-24 24-24 52c0 20 14 36 24 44 10-8 24-24 24-44 0-28-24-52-24-52zm0 88c-4-4-16-16-16-36 0-16 10-32 16-40 6 8 16 24 16 40 0 20-12 32-16 36z" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Modern CSS Framework",
    role: "Editorial UI & Design Tokens",
    description: "Rapid responsive interface styling, custom design systems, and fluid layouts.",
    usedInProjects: ["KrishiCart", "Monsoon Mitra // Frontend"],
    color: "#06B6D4",
    size: "large",
    floatDuration: 5.0,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <path fill="#06B6D4" d="M32 56c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13zm-20 32c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13z" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    role: "Distributed Code Management",
    description: "Branching strategies, collaborative workflows, and code versioning across repositories.",
    usedInProjects: ["All 5+ Collaborative Hackathons & Repositories"],
    color: "#F05032",
    size: "medium",
    floatDuration: 4.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <path fill="#F05032" d="M124 57L71 4c-4-4-10-4-14 0L44 17l18 18c4-1 9 0 12 3l14-14c1-4 6-6 10-4 5 1 8 6 7 11s-5 8-10 8c-3 0-6-1-8-3L67 50c1 4 0 9-3 12l15 15c4-1 9 0 12 3 5 5 5 12 0 17s-12 5-17 0c-4-4-4-10-1-14L58 68c-3 1-6 1-9 0L31 86v3c0 5-4 10-10 10s-10-5-10-10 5-10 10-10c3 0 6 1 8 3l18-18c-1-3-1-7 1-10L4 67c-4 4-4 10 0 14l53 53c4 4 10 4 14 0l53-53c4-4 4-10 0-14z" />
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    category: "Code Hosting",
    role: "Open-Source & Repositories",
    description: "Hosting production code, continuous integration triggers, and open collaboration (@Harshad-kewate).",
    usedInProjects: ["github.com/Harshad-kewate"],
    color: "#FFFFFF",
    size: "large",
    floatDuration: 5.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <path fill="#FFFFFF" d="M64 8C32 8 6 34 6 66c0 26 17 47 40 55 3 1 4-1 4-3v-11c-16 3-20-8-20-8-3-7-6-9-6-9-5-4 0-4 0-4 6 0 9 6 9 6 5 9 14 6 17 5 1-4 2-6 4-8-13-1-27-7-27-30 0-7 2-12 6-16-1-2-3-8 1-16 0 0 5-2 17 6 5-1 10-2 16-2s11 1 16 2c12-8 17-6 17-6 4 8 2 14 1 16 4 4 6 9 6 16 0 23-14 29-27 30 2 2 4 6 4 12v18c0 2 1 4 4 3 23-8 40-29 40-55 0-32-26-58-58-58z" />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud Services",
    role: "Authentication & Real-Time Sync",
    description: "User authentication, phone verification, and session security in KrishiCart.",
    usedInProjects: ["KrishiCart"],
    color: "#FFCA28",
    size: "medium",
    floatDuration: 4.7,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <path fill="#FFCA28" d="M20 98l32-60 18 34-36 28zm68-76L74 46l14 26 20-50z" />
        <path fill="#FFA000" d="M52 38L20 98l44 26 24-52z" />
        <path fill="#F57C00" d="M64 124l44-26-20-26z" />
      </svg>
    ),
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Business Intelligence",
    role: "Data Visualization & Dashboards",
    description: "Designing reports, KPI dashboards, and interactive visual storytelling from datasets.",
    usedInProjects: ["Deloitte Data Simulation"],
    color: "#F2C811",
    size: "medium",
    floatDuration: 5.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#E8B20B" />
        <rect x="32" y="60" width="16" height="40" rx="3" fill="#FFFFFF" />
        <rect x="56" y="44" width="16" height="56" rx="3" fill="#FFFFFF" />
        <rect x="80" y="28" width="16" height="72" rx="3" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "jupyter",
    name: "Jupyter",
    category: "Interactive Notebooks",
    role: "Exploratory Data Analysis",
    description: "Prototyping features, Matplotlib data plots, and testing ML pipeline iterations.",
    usedInProjects: ["Monsoon Mitra // R&D"],
    color: "#F37626",
    size: "medium",
    floatDuration: 4.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#FFFFFF" />
        <circle cx="64" cy="36" r="14" fill="#F37626" />
        <circle cx="64" cy="92" r="14" fill="#6E6E6E" />
        <circle cx="96" cy="64" r="8" fill="#F37626" />
        <path fill="none" stroke="#F37626" strokeWidth="6" d="M32 64c0-18 14-32 32-32s32 14 32 32-14 32-32 32-32-14-32-32" />
      </svg>
    ),
  },
  {
    id: "vite",
    name: "Vite",
    category: "Build Tool",
    role: "Fast Bundling & Hot Reloading",
    description: "High-speed frontend development runtime and optimized production bundling.",
    usedInProjects: ["KrishiCart"],
    color: "#646CFF",
    size: "medium",
    floatDuration: 5.1,
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 sm:w-11 sm:h-11">
        <rect width="128" height="128" rx="24" fill="#1E1E2E" />
        <path fill="#FFD62E" d="M64 20L28 92h28l-8 24 44-72H68l8-24z" />
      </svg>
    ),
  },
];

export const SkillsSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<TechNode>(TECH_NODES[0]);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <section id="stack" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-navy-950 text-cream-100 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-electricBlue/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center justify-between mb-8 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-white/10 text-chartreuse font-bold">
              03
            </span>
            <span className="uppercase tracking-widest text-slate-400">
              // INTERACTIVE ECOSYSTEM
            </span>
          </div>

          <span className="font-mono text-xs text-slate-500 hidden sm:block">
            HOVER OR TAP TO INSPECT DETAILS
          </span>
        </div>

        {/* Section Heading & Minimal Copy */}
        <div className="mb-14 sm:mb-16 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.92]">
            TECH <br />
            <span className="text-chartreuse">ECOSYSTEM.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A dynamic network of verified technologies applied in production ML pipelines, relational models, and systems engineering.
          </p>
        </div>

        {/* Interactive Ecosystem Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Main Floating Constellation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-charcoal-900 border border-white/15 shadow-2xl">
              {/* Subtle Hub Header */}
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-6 pb-4 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-chartreuse animate-pulse" />
                  <span>ACTIVE MATRIX: {TECH_NODES.length} TECHNOLOGIES</span>
                </span>
                <span className="text-white/60">ZERO HALLUCINATION</span>
              </div>

              {/* Dynamic Icons Grid with Subtle Float Animations */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                {TECH_NODES.map((node) => {
                  const isSelected = activeNode.id === node.id;

                  return (
                    <motion.button
                      key={node.id}
                      animate={{
                        y: [-2.5, 2.5, -2.5],
                      }}
                      transition={{
                        duration: node.floatDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      onClick={() => setActiveNode(node)}
                      onMouseEnter={() => {
                        setActiveNode(node);
                        setIsHovering(true);
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                      className={`relative aspect-square rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center transition-all cursor-pointer border ${
                        isSelected
                          ? "bg-white/15 border-chartreuse shadow-lg shadow-chartreuse/10"
                          : isHovering
                          ? "bg-navy-950/60 border-white/10 opacity-60"
                          : "bg-navy-950 border-white/10 hover:border-white/30"
                      }`}
                      aria-label={node.name}
                    >
                      {/* Active indicator dot */}
                      {isSelected && (
                        <span
                          className="absolute top-2 right-2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: node.color }}
                        />
                      )}

                      {/* SVG Icon */}
                      <div className="relative z-10 transition-transform">
                        {node.svg}
                      </div>

                      {/* Micro Label */}
                      <span className="font-mono text-[10px] sm:text-[11px] text-slate-300 font-semibold mt-2 truncate w-full text-center">
                        {node.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Technical Dossier & Project Association Panel (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-3xl bg-charcoal-900 border-2 border-white/15 shadow-2xl space-y-6"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                  <span className="text-chartreuse font-bold uppercase tracking-wider">
                    // DOSSIER SPECIFICATION
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[11px]">
                    {activeNode.category}
                  </span>
                </div>

                {/* Technology Name & Role */}
                <div className="space-y-1">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white flex items-center gap-3">
                    <span>{activeNode.name}</span>
                    <span
                      className="w-3.5 h-3.5 rounded-full inline-block"
                      style={{ backgroundColor: activeNode.color }}
                    />
                  </h3>
                  <div className="font-mono text-xs text-vividOrange font-medium">
                    {activeNode.role}
                  </div>
                </div>

                {/* Practical Engineering Description */}
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider">
                    HOW HARSHAD USES IT:
                  </div>
                  <p className="font-sans text-sm text-slate-200 leading-relaxed font-normal">
                    {activeNode.description}
                  </p>
                </div>

                {/* Verified Associated Projects */}
                <div className="space-y-2 pt-2 border-t border-white/10 font-mono text-xs">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider">
                    APPLIED IN VERIFIED PROJECTS:
                  </div>
                  <div className="space-y-1.5">
                    {activeNode.usedInProjects.map((proj) => (
                      <div
                        key={proj}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-950 border border-white/10 text-slate-300 font-sans text-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-chartreuse shrink-0" />
                        <span className="font-medium">{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>STRICTLY VERIFIED EXPERIENCE</span>
                  <span className="text-chartreuse">ACTIVE IN CODEBASE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
