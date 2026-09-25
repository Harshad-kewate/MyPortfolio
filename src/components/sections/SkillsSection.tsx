"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Terminal,
  Database,
  Radio,
  Workflow,
  ExternalLink,
} from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  category: "AI & Numerical ML" | "Systems & Backend" | "Data & Storage" | "DevOps & Tools";
  role: string;
  description: string;
  usedInProjects: string[];
  color: string;
  badgeAccent: string;
  floatDuration: number;
  floatDelay: number;
  orbitRadius: number;
  svg: React.ReactNode;
}

const TECH_NODES: TechNode[] = [
  {
    id: "python",
    name: "Python",
    category: "AI & Numerical ML",
    role: "Core AI/ML & Atmospheric Scripting",
    description:
      "Primary computational language for training atmospheric ML models, ECMWF ERA5 climate data wrangling, and REST microservices.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI", "CS50P Python Honors (Harvard)"],
    color: "#3776AB",
    badgeAccent: "#FF4D1C",
    floatDuration: 4.2,
    floatDelay: 0.1,
    orbitRadius: 1.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
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
    category: "AI & Numerical ML",
    role: "Classifier Training & Probability Calibration",
    description:
      "Trained HistGradientBoosting with CalibratedClassifierCV on 13 years of hourly atmospheric reanalysis, achieving 0.9928 ROC-AUC.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI"],
    color: "#F7931E",
    badgeAccent: "#B8E000",
    floatDuration: 5.1,
    floatDelay: 0.3,
    orbitRadius: 1.8,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#101820" />
        <circle cx="50" cy="50" r="22" fill="#F7931E" />
        <circle cx="78" cy="78" r="22" fill="#315CFF" opacity="0.9" />
        <text
          x="64"
          y="70"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#FFF9F0"
          fontFamily="monospace"
        >
          SKL
        </text>
      </svg>
    ),
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "AI & Numerical ML",
    role: "Multidimensional Grid Mathematics",
    description:
      "Applied across 0.25° latitude-longitude spatial grid computations, vector cosine distances, and tensor transformations.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI"],
    color: "#013243",
    badgeAccent: "#315CFF",
    floatDuration: 4.6,
    floatDelay: 0.5,
    orbitRadius: 1.2,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#013243" />
        <path
          fill="#4DABCF"
          d="M32 36l32-18 32 18v56l-32 18-32-18V36zm32 10.8L44.8 57.6v23.2L64 91.6l19.2-10.8V57.6L64 46.8z"
        />
        <text
          x="64"
          y="72"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#FFF9F0"
          fontFamily="monospace"
        >
          NP
        </text>
      </svg>
    ),
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "AI & Numerical ML",
    role: "Atmospheric Time-Series Feature Engineering",
    description:
      "Cleaned, indexed, and aggregated 47,490+ meteorological time-series records from ECMWF ERA5 datasets for predictive pipeline ingestion.",
    usedInProjects: ["Monsoon Mitra // Atmospheric AI"],
    color: "#150458",
    badgeAccent: "#FF4D1C",
    floatDuration: 5.4,
    floatDelay: 0.2,
    orbitRadius: 1.6,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#150458" />
        <rect x="36" y="28" width="16" height="72" rx="4" fill="#FF4D1C" />
        <rect x="56" y="44" width="16" height="56" rx="4" fill="#B8E000" />
        <rect x="76" y="36" width="16" height="64" rx="4" fill="#315CFF" />
      </svg>
    ),
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Systems & Backend",
    role: "High-Performance Asynchronous Inference APIs",
    description:
      "Asynchronous Python web service with Pydantic validation serving real-time monsoon onset predictions and sub-second classification queries.",
    usedInProjects: ["Monsoon Mitra // Inference Engine"],
    color: "#009688",
    badgeAccent: "#B8E000",
    floatDuration: 3.8,
    floatDelay: 0.4,
    orbitRadius: 1.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#009688" />
        <path
          fill="#FFF9F0"
          d="M64 20L32 72h28l-8 36 44-56H68l8-24z"
        />
      </svg>
    ),
  },
  {
    id: "cpp",
    name: "C++",
    category: "Systems & Backend",
    role: "Algorithmic Engineering & Memory Bounds",
    description:
      "Engineered 10+ core algorithmic modules with rigorous attention to memory pointers, dynamic allocation, recursion, and computational complexity.",
    usedInProjects: ["10+ Algorithmic Systems & Data Structures"],
    color: "#00599C",
    badgeAccent: "#315CFF",
    floatDuration: 4.8,
    floatDelay: 0.15,
    orbitRadius: 1.7,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#00599C"
          d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z"
        />
        <path
          fill="#FFF9F0"
          d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z"
        />
        <path
          fill="#FFF9F0"
          d="M93 59h3v-3h2v3h3v2h-3v3h-2v-3h-3zm14 0h3v-3h2v3h3v2h-3v3h-2v-3h-3z"
        />
      </svg>
    ),
  },
  {
    id: "c",
    name: "C",
    category: "Systems & Backend",
    role: "Foundational Memory Logic & Architecture",
    description:
      "Deep understanding of hardware pointers, manual memory addressing, system calls, and structured algorithm building.",
    usedInProjects: ["Algorithmic Problem Solving Programs"],
    color: "#283593",
    badgeAccent: "#101820",
    floatDuration: 5.3,
    floatDelay: 0.6,
    orbitRadius: 1.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#A8B9CC"
          d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z"
        />
        <path
          fill="#101820"
          d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z"
        />
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js (App Router)",
    category: "Systems & Backend",
    role: "Production Server Components & Modern SSR",
    description:
      "Full-stack architecture with streaming server components, optimized edge asset pipelines, and high-performance client hydration.",
    usedInProjects: ["PolyLingo AI", "Official Engineering Portfolio"],
    color: "#101820",
    badgeAccent: "#FF4D1C",
    floatDuration: 4.1,
    floatDelay: 0.25,
    orbitRadius: 1.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#101820" />
        <path
          fill="#FFF9F0"
          d="M36 38h14v52H36V38zm56 0H78l-30 40v12h14l30-40V38z"
        />
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "Systems & Backend",
    role: "RESTful Service Orchestration",
    description:
      "Asynchronous request routing, middle-tier controllers, authentication middleware, and audio processing queues.",
    usedInProjects: ["KrishiCart", "PolyLingo AI Services"],
    color: "#339933",
    badgeAccent: "#B8E000",
    floatDuration: 4.9,
    floatDelay: 0.35,
    orbitRadius: 1.6,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#339933"
          d="M64 8L16 35.7v56.6L64 120l48-27.7V35.7L64 8zm0 18.2l34 19.6v39.2L64 105.4 30 85V45.8L64 26.2z"
        />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Data & Storage",
    role: "Relational Schema Design & ACID Persistence",
    description:
      "Primary relational database managing user accounts, transcription processing logs, and relational foreign-key schemas.",
    usedInProjects: ["PolyLingo AI"],
    color: "#336791",
    badgeAccent: "#315CFF",
    floatDuration: 4.5,
    floatDelay: 0.2,
    orbitRadius: 1.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#336791" />
        <path
          fill="#FFF9F0"
          d="M64 28c-18 0-32 12-32 30 0 12 7 23 18 28v14l12-6h2c18 0 32-12 32-30s-14-36-32-36zm0 48c-12 0-22-8-22-18s10-18 22-18 22 8 22 18-10 18-22 18z"
        />
      </svg>
    ),
  },
  {
    id: "prisma",
    name: "Prisma ORM",
    category: "Data & Storage",
    role: "Type-Safe Database Modeling",
    description:
      "Declarative schema migrations, relational joins, and strictly typed database query pipelines.",
    usedInProjects: ["PolyLingo AI"],
    color: "#2D3748",
    badgeAccent: "#FF4D1C",
    floatDuration: 5.2,
    floatDelay: 0.45,
    orbitRadius: 1.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#2D3748" />
        <path
          fill="#FFF9F0"
          d="M56 24L32 80l24 24 40-20-40-60zm4 18l24 38-24 12V42z"
        />
      </svg>
    ),
  },
  {
    id: "redis",
    name: "Redis",
    category: "Data & Storage",
    role: "Sub-Millisecond In-Memory Caching",
    description:
      "High-throughput caching layer for active video metadata, user rate-limiting, and processed transcription query results.",
    usedInProjects: ["PolyLingo AI"],
    color: "#DC382D",
    badgeAccent: "#FF4D1C",
    floatDuration: 3.9,
    floatDelay: 0.1,
    orbitRadius: 1.7,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#DC382D" />
        <path
          fill="#FFF9F0"
          d="M64 24L24 44v40l40 20 40-20V44L64 24zm0 18l24 12-24 12-24-12 24-12z"
        />
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    category: "Data & Storage",
    role: "Relational Queries & Indexing",
    description:
      "Complex aggregations, window functions, table joins, and query optimization for analytics dashboards.",
    usedInProjects: ["Database Management Systems Coursework", "Analytics Dashboards"],
    color: "#00758F",
    badgeAccent: "#B8E000",
    floatDuration: 5.0,
    floatDelay: 0.3,
    orbitRadius: 1.3,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#00758F" />
        <path
          fill="#FFF9F0"
          d="M64 26c-24 0-42 6-42 14v48c0 8 18 14 42 14s42-6 42-14V40c0-8-18-14-42-14zm0 18c-18 0-32-4-32-6s14-6 32-6 32 4 32 6-14 6-32 6zm0 24c-18 0-32-4-32-6V52c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6zm0 24c-18 0-32-4-32-6V76c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6z"
        />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Data & Storage",
    role: "Document-Based NoSQL Collections",
    description:
      "BSON document modeling, flexible inventory schemas, and unstructured catalog queries.",
    usedInProjects: ["Web Development Applications"],
    color: "#47A248",
    badgeAccent: "#B8E000",
    floatDuration: 4.7,
    floatDelay: 0.55,
    orbitRadius: 1.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#101820" />
        <path
          fill="#47A248"
          d="M64 16s-24 24-24 52c0 20 14 36 24 44 10-8 24-24 24-44 0-28-24-52-24-52zm0 88c-4-4-16-16-16-36 0-16 10-32 16-40 6 8 16 24 16 40 0 20-12 32-16 36z"
        />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Systems & Backend",
    role: "Editorial UI Design Tokens & Micro-Interactions",
    description:
      "Rapid responsive design systems, fluid typography clamping, and accessible semantic components.",
    usedInProjects: ["KrishiCart", "Monsoon Mitra // UI", "Engineering Portfolio"],
    color: "#06B6D4",
    badgeAccent: "#315CFF",
    floatDuration: 4.3,
    floatDelay: 0.15,
    orbitRadius: 1.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#06B6D4"
          d="M32 56c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13zm-20 32c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13z"
        />
      </svg>
    ),
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "DevOps & Tools",
    role: "Interactive Analytics & KPI Dashboards",
    description:
      "Business reports, telemetry storytelling, and visual data insights developed in simulated corporate scenarios.",
    usedInProjects: ["Deloitte Data Simulation"],
    color: "#F2C811",
    badgeAccent: "#B8E000",
    floatDuration: 5.5,
    floatDelay: 0.4,
    orbitRadius: 1.6,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect width="128" height="128" rx="24" fill="#E8B20B" />
        <rect x="32" y="60" width="16" height="40" rx="3" fill="#FFF9F0" />
        <rect x="56" y="44" width="16" height="56" rx="3" fill="#FFF9F0" />
        <rect x="80" y="28" width="16" height="72" rx="3" fill="#FFF9F0" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "DevOps & Tools",
    role: "Distributed Version Control & Workflows",
    description:
      "Feature branching, semantic commits, automated PR reviews, and open-source collaboration on GitHub.",
    usedInProjects: ["github.com/Harshad-kewate", "5+ Hackathons"],
    color: "#F05032",
    badgeAccent: "#FF4D1C",
    floatDuration: 4.4,
    floatDelay: 0.2,
    orbitRadius: 1.5,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#F05032"
          d="M124 57L71 4c-4-4-10-4-14 0L44 17l18 18c4-1 9 0 12 3l14-14c1-4 6-6 10-4 5 1 8 6 7 11s-5 8-10 8c-3 0-6-1-8-3L67 50c1 4 0 9-3 12l15 15c4-1 9 0 12 3 5 5 5 12 0 17s-12 5-17 0c-4-4-4-10-1-14L58 68c-3 1-6 1-9 0L31 86v3c0 5-4 10-10 10s-10-5-10-10 5-10 10-10c3 0 6 1 8 3l18-18c-1-3-1-7 1-10L4 67c-4 4-4 10 0 14l53 53c4 4 10 4 14 0l53-53c4-4 4-10 0-14z"
        />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "DevOps & Tools",
    role: "Cloud Authentication & Session Security",
    description:
      "Secure user authentication, credential tokens, and cloud profile persistence in hyperlocal agritech apps.",
    usedInProjects: ["KrishiCart"],
    color: "#FFCA28",
    badgeAccent: "#FF4D1C",
    floatDuration: 4.9,
    floatDelay: 0.5,
    orbitRadius: 1.4,
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
        <path fill="#FFCA28" d="M20 98l32-60 18 34-36 28zm68-76L74 46l14 26 20-50z" />
        <path fill="#FFA000" d="M52 38L20 98l44 26 24-52z" />
        <path fill="#F57C00" d="M64 124l44-26-20-26z" />
      </svg>
    ),
  },
];

const CATEGORIES = [
  "ALL",
  "AI & Numerical ML",
  "Systems & Backend",
  "Data & Storage",
  "DevOps & Tools",
] as const;

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeNode, setActiveNode] = useState<TechNode>(TECH_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const filteredNodes =
    selectedCategory === "ALL"
      ? TECH_NODES
      : TECH_NODES.filter((node) => node.category === selectedCategory);

  return (
    <section
      id="stack"
      className="relative py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#F4EFE6] text-[#101820] overflow-hidden"
    >
      {/* Editorial Watermark */}
      <div className="absolute top-8 right-[-1%] font-display text-[140px] sm:text-[220px] font-black text-[#101820]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        TECHNOLOGY
      </div>

      {/* Subtle Millimeter Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#101820 1px, transparent 1px), linear-gradient(90deg, #101820 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#FF4D1C] text-white font-bold tracking-wider">
              02
            </span>
            <span className="uppercase tracking-widest text-[#101820] font-semibold">
              // TECHNICAL ARCHITECTURE & ECOSYSTEM
            </span>
            <span className="w-2 h-2 rounded-full bg-[#B8E000] animate-pulse" />
          </div>

          <span className="text-[#101820]/70 font-semibold hidden md:inline">
            INTERACTIVE KINETIC SYSTEM • TAP TO INSPECT ARCHITECTURE
          </span>
        </div>

        {/* High-Impact Editorial Heading Block */}
        <div className="mb-12 sm:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#101820] leading-[0.92]">
              CORE <br />
              COMPUTATIONAL <br />
              <span className="text-[#FF4D1C]">STACK.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm sm:text-base text-[#101820]/80 leading-relaxed font-normal">
              A kinetic ecosystem of mathematical libraries, atmospheric ML frameworks, distributed
              databases, and low-level C++ architectures powering real-world applications.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[#101820]">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#B8E000]" />
                18 VERIFIED TOOLS
              </span>
              <span>•</span>
              <span className="text-[#315CFF] font-bold">NO FAKE PROGRESS BARS</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#101820]/15">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-[#101820] text-[#FFF9F0] shadow-md scale-102"
                  : "bg-[#FFF9F0] border border-[#101820]/15 text-[#101820] hover:border-[#FF4D1C] hover:text-[#FF4D1C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MAIN INTERACTIVE KINETIC ECOSYSTEM CANVAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas: Floating Animated Nodes & Circuit Lines (7 cols) */}
          <div className="lg:col-span-7 relative p-6 sm:p-8 rounded-3xl bg-[#FFF9F0] border-2 border-[#101820] shadow-xl overflow-hidden min-h-[520px]">
            {/* Corner Editorial Architectural Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FF4D1C] pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#B8E000] pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#315CFF] pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#101820] pointer-events-none" />

            {/* Header Telemetry inside Canvas */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#101820]/10 font-mono text-[11px] text-[#101820]/60">
              <span className="flex items-center gap-1.5 font-bold text-[#101820]">
                <Radio className="w-3.5 h-3.5 text-[#FF4D1C] animate-pulse" />
                KINETIC MATRIX
              </span>
              <span>FILTER: {selectedCategory}</span>
            </div>

            {/* Subtle Animated Neural Connecting Network Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#101820" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotGrid)" />

              {/* Dynamic SVG circuit paths between key cluster anchors */}
              <motion.path
                d="M80,100 C180,60 260,180 380,120 S520,240 600,160"
                fill="none"
                stroke="#FF4D1C"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                animate={
                  prefersReduced
                    ? undefined
                    : { strokeDashoffset: [0, -40] }
                }
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              />
              <motion.path
                d="M100,280 C200,340 320,260 440,320 S540,280 620,380"
                fill="none"
                stroke="#315CFF"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                animate={
                  prefersReduced
                    ? undefined
                    : { strokeDashoffset: [0, 40] }
                }
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
              />
              <motion.path
                d="M150,420 C280,380 380,440 500,400"
                fill="none"
                stroke="#B8E000"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                animate={
                  prefersReduced
                    ? undefined
                    : { strokeDashoffset: [0, -30] }
                }
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />
            </svg>

            {/* Kinetic Floating Interactive Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 relative z-10">
              {filteredNodes.map((node) => {
                const isActive = activeNode.id === node.id;
                const isHovered = hoveredNode === node.id;

                // Subtle orbital movement parameters
                const floatY = prefersReduced
                  ? [0, 0]
                  : [-node.orbitRadius * 2.5, node.orbitRadius * 2.5, -node.orbitRadius * 2.5];
                const floatX = prefersReduced
                  ? [0, 0]
                  : [-node.orbitRadius, node.orbitRadius, -node.orbitRadius];
                const rotateVal = prefersReduced
                  ? [0, 0]
                  : [-0.8, 0.8, -0.8];

                return (
                  <motion.div
                    key={node.id}
                    animate={{
                      y: floatY,
                      x: floatX,
                      rotate: rotateVal,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: node.floatDuration,
                      delay: node.floatDelay,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveNode(node)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`cursor-pointer p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between select-none ${
                      isActive
                        ? "bg-[#101820] text-[#FFF9F0] border-[#FF4D1C] shadow-lg"
                        : isHovered
                        ? "bg-white border-[#315CFF] shadow-md"
                        : "bg-[#F4EFE6]/90 border-[#101820]/15 hover:border-[#101820]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-1 rounded-lg bg-white/10">{node.svg}</div>
                      <span
                        className={`w-2 h-2 rounded-full mt-1 ${
                          isActive
                            ? "bg-[#B8E000] animate-pulse"
                            : "bg-[#101820]/20"
                        }`}
                      />
                    </div>

                    <div className="mt-3">
                      <div
                        className={`font-display font-bold text-sm tracking-tight truncate ${
                          isActive ? "text-[#FFF9F0]" : "text-[#101820]"
                        }`}
                      >
                        {node.name}
                      </div>

                      <div
                        className={`font-mono text-[10px] uppercase truncate ${
                          isActive ? "text-[#B8E000]" : "text-[#101820]/60"
                        }`}
                      >
                        {node.category}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Status Ribbon inside canvas */}
            <div className="mt-6 pt-4 border-t border-[#101820]/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#101820]/70">
              <span className="flex items-center gap-1">
                <Workflow className="w-3 h-3 text-[#315CFF]" />
                DYNAMIC FLOATING VECTORS
              </span>
              <span>ACTIVE NODE: {activeNode.name}</span>
            </div>
          </div>

          {/* Right Panel: Selected Architecture Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-[#101820] text-[#FFF9F0] rounded-3xl p-6 sm:p-8 border-2 border-[#101820] shadow-2xl relative overflow-hidden"
              >
                {/* Visual Accent Top Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: activeNode.badgeAccent }}
                />

                {/* Dossier Header */}
                <div className="flex items-start justify-between gap-4 mb-6 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                      {activeNode.svg}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-[#B8E000] uppercase font-bold tracking-wider">
                        {activeNode.category}
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#FFF9F0]">
                        {activeNode.name}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded font-mono text-[10px] font-bold bg-[#FF4D1C] text-white">
                    VERIFIED
                  </span>
                </div>

                {/* Architectural Role */}
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 mb-5">
                  <span className="font-mono text-[10px] text-[#FFF9F0]/60 uppercase block mb-1">
                    // ARCHITECTURAL ROLE
                  </span>
                  <p className="font-sans font-semibold text-sm text-[#B8E000]">
                    {activeNode.role}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[10px] text-[#FFF9F0]/60 uppercase block">
                    // TECHNICAL USAGE & IMPLEMENTATION
                  </span>
                  <p className="text-sm text-[#FFF9F0]/90 leading-relaxed font-normal">
                    {activeNode.description}
                  </p>
                </div>

                {/* Projects Where Used */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="font-mono text-[10px] text-[#FFF9F0]/60 uppercase block">
                    // APPLIED IN AUTHENTIC BUILDS
                  </span>
                  <div className="space-y-1.5">
                    {activeNode.usedInProjects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 font-mono text-xs text-[#FFF9F0]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D1C] shrink-0" />
                        <span>{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Telemetry Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                  <span>ID: {activeNode.id.toUpperCase()}</span>
                  <span className="text-[#315CFF]">PRODUCTION RIGOR</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Companion Information Strip */}
            <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#101820]/15 flex items-center justify-between gap-3 text-xs font-mono text-[#101820]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FF4D1C]" />
                <span className="font-bold">GENUINE COMPETENCIES ONLY</span>
              </div>
              <span className="text-[#101820]/60 hidden sm:inline">ZERO INVENTED METRICS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
