"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Radio,
  CheckCircle2,
  Cpu,
  Layers,
  ExternalLink,
  X,
  Compass,
} from "lucide-react";

interface OrbitNode {
  id: string;
  name: string;
  ring: "inner" | "middle" | "outer";
  angleDeg: number; // Position on orbit circle
  role: string;
  project: string;
  color: string;
  duration: number;
  svg: React.ReactNode;
}

const ORBIT_NODES: OrbitNode[] = [
  // INNER RING: Atmospheric AI & Math (5 nodes)
  {
    id: "python",
    name: "Python",
    ring: "inner",
    angleDeg: 0,
    role: "Core ML & ERA5 Climate Wrangling",
    project: "Monsoon Mitra // CS50P Honors",
    color: "#3776AB",
    duration: 4.2,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
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
    ring: "inner",
    angleDeg: 72,
    role: "HistGradientBoosting & 0.9928 ROC-AUC",
    project: "Monsoon Mitra // Atmospheric AI",
    color: "#F7931E",
    duration: 5.1,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#18352F" />
        <circle cx="50" cy="50" r="22" fill="#F7931E" />
        <circle cx="78" cy="78" r="22" fill="#315CFF" opacity="0.9" />
        <text x="64" y="70" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FFF" fontFamily="monospace">
          SKL
        </text>
      </svg>
    ),
  },
  {
    id: "numpy",
    name: "NumPy",
    ring: "inner",
    angleDeg: 144,
    role: "0.25° Mesh Spatial Linear Algebra",
    project: "Monsoon Mitra // ERA5 Grid",
    color: "#013243",
    duration: 4.6,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#013243" />
        <path fill="#4DABCF" d="M32 36l32-18 32 18v56l-32 18-32-18V36zm32 10.8L44.8 57.6v23.2L64 91.6l19.2-10.8V57.6L64 46.8z" />
      </svg>
    ),
  },
  {
    id: "pandas",
    name: "Pandas",
    ring: "inner",
    angleDeg: 216,
    role: "47,490+ Daily Weather Series Records",
    project: "Monsoon Mitra // Data Wrangling",
    color: "#150458",
    duration: 5.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#150458" />
        <rect x="36" y="28" width="16" height="72" rx="4" fill="#E85D2A" />
        <rect x="56" y="44" width="16" height="56" rx="4" fill="#B8D83D" />
        <rect x="76" y="36" width="16" height="64" rx="4" fill="#315CFF" />
      </svg>
    ),
  },
  {
    id: "fastapi",
    name: "FastAPI",
    ring: "inner",
    angleDeg: 288,
    role: "Sub-Second Async Prediction Server",
    project: "Monsoon Mitra // Inference Engine",
    color: "#009688",
    duration: 3.9,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#009688" />
        <path fill="#FFF" d="M64 20L32 72h28l-8 36 44-56H68l8-24z" />
      </svg>
    ),
  },

  // MIDDLE RING: Systems & Persistence (6 nodes)
  {
    id: "cpp",
    name: "C++",
    ring: "middle",
    angleDeg: 30,
    role: "Pointers, Dynamic Alloc & Time Bounds",
    project: "10+ Algorithmic Implementations",
    color: "#00599C",
    duration: 4.8,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <path fill="#00599C" d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z" />
        <path fill="#FFF" d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z" />
      </svg>
    ),
  },
  {
    id: "c",
    name: "C",
    ring: "middle",
    angleDeg: 90,
    role: "Hardware Addressing & Foundational Logic",
    project: "Systems Programming Modules",
    color: "#283593",
    duration: 5.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <path fill="#A8B9CC" d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z" />
        <path fill="#18352F" d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z" />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    ring: "middle",
    angleDeg: 150,
    role: "ACID Relational Schema & Audio Logs",
    project: "PolyLingo AI Engine",
    color: "#336791",
    duration: 4.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#336791" />
        <path fill="#FFF" d="M64 28c-18 0-32 12-32 30 0 12 7 23 18 28v14l12-6h2c18 0 32-12 32-30s-14-36-32-36zm0 48c-12 0-22-8-22-18s10-18 22-18 22 8 22 18-10 18-22 18z" />
      </svg>
    ),
  },
  {
    id: "prisma",
    name: "Prisma ORM",
    ring: "middle",
    angleDeg: 210,
    role: "Type-Safe Client & Relation Joins",
    project: "PolyLingo Audio Pipeline",
    color: "#2D3748",
    duration: 5.0,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#2D3748" />
        <path fill="#FFF" d="M56 24L32 80l24 24 40-20-40-60zm4 18l24 38-24 12V42z" />
      </svg>
    ),
  },
  {
    id: "redis",
    name: "Redis",
    ring: "middle",
    angleDeg: 270,
    role: "In-Memory Transcription Cache",
    project: "PolyLingo Video Jobs",
    color: "#DC382D",
    duration: 4.1,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#DC382D" />
        <path fill="#FFF" d="M64 24L24 44v40l40 20 40-20V44L64 24zm0 18l24 12-24 12-24-12 24-12z" />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    ring: "middle",
    angleDeg: 330,
    role: "Window Aggregations & Query Plans",
    project: "DBMS & Analytics Dashboards",
    color: "#00758F",
    duration: 4.9,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#00758F" />
        <path fill="#FFF" d="M64 26c-24 0-42 6-42 14v48c0 8 18 14 42 14s42-6 42-14V40c0-8-18-14-42-14zm0 18c-18 0-32-4-32-6s14-6 32-6 32 4 32 6-14 6-32 6z" />
      </svg>
    ),
  },

  // OUTER RING: Full-Stack & Tooling (7 nodes)
  {
    id: "nextjs",
    name: "Next.js",
    ring: "outer",
    angleDeg: 15,
    role: "Streaming SSR & App Router APIs",
    project: "PolyLingo AI & Portfolio",
    color: "#18352F",
    duration: 4.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#18352F" />
        <path fill="#FFF" d="M36 38h14v52H36V38zm56 0H78l-30 40v12h14l30-40V38z" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    ring: "outer",
    angleDeg: 65,
    role: "Editorial Tokens & Fluid Micro-UI",
    project: "KrishiCart // Monsoon UI",
    color: "#06B6D4",
    duration: 5.2,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <path fill="#06B6D4" d="M32 56c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13z" />
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    ring: "outer",
    angleDeg: 115,
    role: "REST Controller & Audio Job Queues",
    project: "KrishiCart // PolyLingo",
    color: "#339933",
    duration: 4.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <path fill="#339933" d="M64 8L16 35.7v56.6L64 120l48-27.7V35.7L64 8zm0 18.2l34 19.6v39.2L64 105.4 30 85V45.8L64 26.2z" />
      </svg>
    ),
  },
  {
    id: "powerbi",
    name: "Power BI",
    ring: "outer",
    angleDeg: 170,
    role: "Simulated Telemetry & KPI Reports",
    project: "Deloitte Data Simulation",
    color: "#F2C811",
    duration: 5.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#E8B20B" />
        <rect x="32" y="60" width="16" height="40" rx="3" fill="#FFF" />
        <rect x="56" y="44" width="16" height="56" rx="3" fill="#FFF" />
        <rect x="80" y="28" width="16" height="72" rx="3" fill="#FFF" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git & GitHub",
    ring: "outer",
    angleDeg: 225,
    role: "Semantic Commits & CI Repos",
    project: "github.com/Harshad-kewate",
    color: "#F05032",
    duration: 4.7,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <path fill="#F05032" d="M124 57L71 4c-4-4-10-4-14 0L44 17l18 18c4-1 9 0 12 3l14-14c1-4 6-6 10-4 5 1 8 6 7 11s-5 8-10 8c-3 0-6-1-8-3L67 50c1 4 0 9-3 12l15 15c4-1 9 0 12 3 5 5 5 12 0 17s-12 5-17 0c-4-4-4-10-1-14L58 68c-3 1-6 1-9 0L31 86v3c0 5-4 10-10 10s-10-5-10-10 5-10 10-10c3 0 6 1 8 3l18-18c-1-3-1-7 1-10L4 67c-4 4-4 10 0 14l53 53c4 4 10 4 14 0l53-53c4-4 4-10 0-14z" />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    ring: "outer",
    angleDeg: 280,
    role: "Auth Tokens & Farmer Phone Sessions",
    project: "KrishiCart Agritech",
    color: "#FFA000",
    duration: 5.0,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <path fill="#FFCA28" d="M20 98l32-60 18 34-36 28zm68-76L74 46l14 26 20-50z" />
        <path fill="#FFA000" d="M52 38L20 98l44 26 24-52z" />
        <path fill="#F57C00" d="M64 124l44-26-20-26z" />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    ring: "outer",
    angleDeg: 330,
    role: "BSON Document Storage & Catalogs",
    project: "Full-Stack Web Sprints",
    color: "#47A248",
    duration: 4.8,
    svg: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="128" height="128" rx="24" fill="#18352F" />
        <path fill="#47A248" d="M64 16s-24 24-24 52c0 20 14 36 24 44 10-8 24-24 24-44 0-28-24-52-24-52zm0 88c-4-4-16-16-16-36 0-16 10-32 16-40 6 8 16 24 16 40 0 20-12 32-16 36z" />
      </svg>
    ),
  },
];

export const SkillsSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<OrbitNode>(ORBIT_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  // Orbital radius constants (scaled for compact responsive viewport)
  // Outer radius ~ 260px, middle ~ 180px, inner ~ 110px
  const getRadius = (ring: "inner" | "middle" | "outer") => {
    switch (ring) {
      case "inner":
        return 115;
      case "middle":
        return 185;
      case "outer":
        return 255;
    }
  };

  return (
    <section
      id="stack"
      className="relative py-20 sm:py-24 px-5 sm:px-8 md:px-12 bg-[#DCE5D5] text-[#18352F] overflow-hidden"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute top-4 right-[-1%] font-display text-[120px] sm:text-[180px] font-black text-[#18352F]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        CONSTELLATION
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier & Compact Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#E85D2A] text-white font-bold tracking-wider">
              03
            </span>
            <span className="uppercase tracking-widest text-[#18352F] font-bold">
              // CORE COMPUTATIONAL ORBIT
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8D83D] animate-pulse" />
          </div>

          <span className="text-[#18352F]/75 font-semibold text-[11px] hidden sm:inline">
            TAP ANY NODE TO INSPECT ITS REAL PROJECT IMPLEMENTATION
          </span>
        </div>

        {/* Compact Heading Block */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#18352F] leading-[0.92]">
              TECH <span className="text-[#E85D2A]">CONSTELLATION.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#18352F]/85 max-w-xl font-normal">
              A compact living system of mathematical libraries, atmospheric ML frameworks, and C++ logic.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#18352F]/80">
            <span className="px-3 py-1 rounded-full bg-white/40 border border-[#18352F]/20 font-bold">
              18 AUTHENTIC TECHNOLOGIES
            </span>
            <span className="hidden md:inline font-bold text-[#E85D2A]">
              ZERO INVENTED SKILLS
            </span>
          </div>
        </div>

        {/* COMPACT INTERACTIVE ORBITAL SYSTEM */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] sm:h-[540px] flex items-center justify-center select-none">
          {/* Orbital SVG Background Concentric Rings & Constellation Rays */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Outer Orbit Circle */}
            <circle
              cx="300"
              cy="300"
              r="255"
              fill="none"
              stroke="#18352F"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              opacity="0.25"
            />
            {/* Middle Orbit Circle */}
            <circle
              cx="300"
              cy="300"
              r="185"
              fill="none"
              stroke="#18352F"
              strokeWidth="1.2"
              strokeDasharray="3 5"
              opacity="0.3"
            />
            {/* Inner Orbit Circle */}
            <circle
              cx="300"
              cy="300"
              r="115"
              fill="none"
              stroke="#E85D2A"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.4"
            />

            {/* Connecting Constellation Ray lines between related clusters */}
            <path
              d="M300,300 L300,185 L390,210 L410,300 L370,410 L230,410 L190,300 Z"
              fill="none"
              stroke="#18352F"
              strokeWidth="0.8"
              opacity="0.15"
            />
          </svg>

          {/* Central Interactive Core Hub */}
          <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#18352F] text-[#DCE5D5] border-2 border-[#B8D83D] shadow-2xl p-2 text-center">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#B8D83D] font-bold uppercase tracking-wider">
              CORE HUB
            </span>
            <span className="font-display font-black text-sm sm:text-base text-white tracking-tight uppercase mt-0.5">
              TECH STACK
            </span>
            <span className="font-mono text-[9px] text-[#E85D2A] font-bold mt-1">
              ORBITAL MESH
            </span>

            {/* Micro rotating indicator ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute -inset-1.5 rounded-full border border-dashed border-[#E85D2A]/60 pointer-events-none"
            />
          </div>

          {/* Floating Orbiting Nodes */}
          {ORBIT_NODES.map((node) => {
            const radius = getRadius(node.ring);
            const rad = (node.angleDeg * Math.PI) / 180;
            // Center is (0, 0) relative to flex container
            const xPos = Math.cos(rad) * radius;
            const yPos = Math.sin(rad) * radius;

            const isActive = activeNode.id === node.id;
            const isHovered = hoveredNode === node.id;

            return (
              <motion.div
                key={node.id}
                style={{
                  left: `calc(50% + ${xPos}px)`,
                  top: `calc(50% + ${yPos}px)`,
                }}
                animate={
                  prefersReduced
                    ? undefined
                    : {
                        y: [-3, 3, -3],
                        x: [-2, 2, -2],
                        rotate: [-1, 1, -1],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: node.duration,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.15, zIndex: 40 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveNode(node)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                  isActive ? "z-30 scale-110" : "z-10"
                }`}
                title={`${node.name} • ${node.project}`}
              >
                {/* Compact Node Capsule */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border-2 shadow-md transition-all ${
                    isActive
                      ? "bg-[#18352F] text-white border-[#E85D2A] shadow-xl ring-2 ring-[#B8D83D]/40"
                      : isHovered
                      ? "bg-white text-[#18352F] border-[#E85D2A] shadow-lg"
                      : "bg-[#E9DFCF] text-[#18352F] border-[#18352F]/20 hover:border-[#18352F]"
                  }`}
                >
                  <div className="shrink-0">{node.svg}</div>
                  <span className="font-display font-bold text-xs tracking-tight whitespace-nowrap">
                    {node.name}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Active Node Detail Card Overlay (Positioned in bottom corner of constellation) */}
          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 z-40 bg-[#18352F] text-white p-3.5 sm:p-4 rounded-2xl border-2 border-[#B8D83D] shadow-2xl max-w-xs sm:max-w-sm pointer-events-auto"
              >
                <div className="flex items-center justify-between gap-3 mb-1.5 pb-1.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-white/10">{activeNode.svg}</span>
                    <span className="font-display font-black text-sm text-white">
                      {activeNode.name}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#E85D2A] text-white uppercase">
                    {activeNode.ring} ORBIT
                  </span>
                </div>

                <div className="space-y-1 font-mono text-[11px]">
                  <div className="text-[#B8D83D] font-bold">
                    // {activeNode.role}
                  </div>
                  <div className="text-white/80 text-[10px] flex items-center gap-1 pt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#E85D2A] shrink-0" />
                    <span>Applied in: <strong>{activeNode.project}</strong></span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
