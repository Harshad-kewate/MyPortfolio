"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechIconItem {
  id: string;
  name: string;
  category: "Language" | "ML & Data" | "Web & Database" | "Tools";
  color: string;
  svg: React.ReactNode;
}

const TECH_ICONS: TechIconItem[] = [
  {
    id: "python",
    name: "Python",
    category: "Language",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
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
    id: "cpp",
    name: "C++",
    category: "Language",
    color: "#00599C",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path
          fill="#00599C"
          d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z"
        />
        <path
          fill="#FFFFFF"
          d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z"
        />
        <path
          fill="#FFFFFF"
          d="M93 59h3v-3h2v3h3v2h-3v3h-2v-3h-3zm14 0h3v-3h2v3h3v2h-3v3h-2v-3h-3z"
        />
      </svg>
    ),
  },
  {
    id: "c",
    name: "C",
    category: "Language",
    color: "#A8B9CC",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path
          fill="#A8B9CC"
          d="M117.8 88.5l-44 25.4c-2.3 1.3-5.2 1.3-7.5 0l-44-25.4c-2.3-1.3-3.8-3.9-3.8-6.6V31.1c0-2.7 1.4-5.2 3.8-6.6l44-25.4c2.3-1.3 5.2-1.3 7.5 0l44 25.4c2.3 1.3 3.8 3.9 3.8 6.6v50.8c0 2.7-1.5 5.3-3.8 6.6z"
        />
        <path
          fill="#283593"
          d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c11.6 0 21.5-7.1 25.7-17.2h-11.5C74.6 80.2 69.8 84 64 84c-11 0-20-9-20-20s9-20 20-20c5.8 0 10.6 3.8 14.2 9.2h11.5C85.5 43.1 75.6 36 64 36z"
        />
      </svg>
    ),
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "ML & Data",
    color: "#013243",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
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
          fill="#FFFFFF"
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
    category: "ML & Data",
    color: "#150458",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="128" height="128" rx="24" fill="#150458" />
        <rect x="36" y="28" width="16" height="72" rx="4" fill="#FF4D00" />
        <rect x="56" y="44" width="16" height="56" rx="4" fill="#E70488" />
        <rect x="76" y="36" width="16" height="64" rx="4" fill="#00D2B4" />
      </svg>
    ),
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "ML & Data",
    color: "#F7931E",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="128" height="128" rx="24" fill="#20232A" />
        <circle cx="50" cy="50" r="22" fill="#F7931E" />
        <circle cx="78" cy="78" r="22" fill="#3499CD" opacity="0.9" />
        <text
          x="64"
          y="70"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#FFFFFF"
          fontFamily="monospace"
        >
          SKL
        </text>
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL & MySQL",
    category: "Web & Database",
    color: "#00758F",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="128" height="128" rx="24" fill="#00758F" />
        <path
          fill="#FFFFFF"
          d="M64 26c-24 0-42 6-42 14v48c0 8 18 14 42 14s42-6 42-14V40c0-8-18-14-42-14zm0 18c-18 0-32-4-32-6s14-6 32-6 32 4 32 6-14 6-32 6zm0 24c-18 0-32-4-32-6V52c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6zm0 24c-18 0-32-4-32-6V76c7 4 19 6 32 6s25-2 32-6v10c0 2-14 6-32 6z"
        />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Web & Database",
    color: "#336791",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="128" height="128" rx="24" fill="#336791" />
        <path
          fill="#FFFFFF"
          d="M64 28c-18 0-32 12-32 30 0 12 7 23 18 28v14l12-6h2c18 0 32-12 32-30s-14-36-32-36zm0 48c-12 0-22-8-22-18s10-18 22-18 22 8 22 18-10 18-22 18z"
        />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Web & Database",
    color: "#47A248",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="128" height="128" rx="24" fill="#131313" />
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
    category: "Web & Database",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path
          fill="#06B6D4"
          d="M32 56c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13zm-20 32c4-16 14-24 30-24 20 0 24 15 35 17 8 2 15-4 19-13-4 16-14 24-30 24-20 0-24-15-35-17-8-2-15 4-19 13z"
        />
      </svg>
    ),
  },
  {
    id: "html5",
    name: "HTML5",
    category: "Web & Database",
    color: "#E34F26",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path fill="#E34F26" d="M19 116L9 4h110l-10 112-45 12z" />
        <path fill="#EF652A" d="M64 116l37-10 8-92H64z" />
        <path
          fill="#ECECEC"
          d="M64 48H44l-2-20h44v-9H31l5 49h28zm0 43l-20-5-2-19H31l3 32 30 9z"
        />
        <path
          fill="#FFFFFF"
          d="M64 48h20l-2 20-18 5v10l29-8 4-46H64zm0-29v9h33l1-9z"
        />
      </svg>
    ),
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Web & Database",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path fill="#1572B6" d="M19 116L9 4h110l-10 112-45 12z" />
        <path fill="#33A9DC" d="M64 116l37-10 8-92H64z" />
        <path
          fill="#ECECEC"
          d="M64 48H44l-2-20h44v-9H31l5 49h28zm0 43l-20-5-2-19H31l3 32 30 9z"
        />
        <path
          fill="#FFFFFF"
          d="M64 48h20l-2 20-18 5v10l29-8 4-46H64zm0-29v9h33l1-9z"
        />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Tools",
    color: "#FFCA28",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path
          fill="#FFCA28"
          d="M20 98l32-60 18 34-36 28zm68-76L74 46l14 26 20-50z"
        />
        <path fill="#FFA000" d="M52 38L20 98l44 26 24-52z" />
        <path fill="#F57C00" d="M64 124l44-26-20-26z" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path
          fill="#F05032"
          d="M124 57L71 4c-4-4-10-4-14 0L44 17l18 18c4-1 9 0 12 3l14-14c1-4 6-6 10-4 5 1 8 6 7 11s-5 8-10 8c-3 0-6-1-8-3L67 50c1 4 0 9-3 12l15 15c4-1 9 0 12 3 5 5 5 12 0 17s-12 5-17 0c-4-4-4-10-1-14L58 68c-3 1-6 1-9 0L31 86v3c0 5-4 10-10 10s-10-5-10-10 5-10 10-10c3 0 6 1 8 3l18-18c-1-3-1-7 1-10L4 67c-4 4-4 10 0 14l53 53c4 4 10 4 14 0l53-53c4-4 4-10 0-14z"
        />
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <path
          fill="#FFFFFF"
          d="M64 8C32 8 6 34 6 66c0 26 17 47 40 55 3 1 4-1 4-3v-11c-16 3-20-8-20-8-3-7-6-9-6-9-5-4 0-4 0-4 6 0 9 6 9 6 5 9 14 6 17 5 1-4 2-6 4-8-13-1-27-7-27-30 0-7 2-12 6-16-1-2-3-8 1-16 0 0 5-2 17 6 5-1 10-2 16-2s11 1 16 2c12-8 17-6 17-6 4 8 2 14 1 16 4 4 6 9 6 16 0 23-14 29-27 30 2 2 4 6 4 12v18c0 2 1 4 4 3 23-8 40-29 40-55 0-32-26-58-58-58z"
        />
      </svg>
    ),
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Tools",
    color: "#F2C811",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
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
    category: "Tools",
    color: "#F37626",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="128" height="128" rx="24" fill="#FFFFFF" />
        <circle cx="64" cy="36" r="14" fill="#F37626" />
        <circle cx="64" cy="92" r="14" fill="#6E6E6E" />
        <circle cx="96" cy="64" r="8" fill="#F37626" />
        <path
          fill="none"
          stroke="#F37626"
          strokeWidth="6"
          d="M32 64c0-18 14-32 32-32s32 14 32 32-14 32-32 32-32-14-32-32"
        />
      </svg>
    ),
  },
  {
    id: "vite",
    name: "Vite",
    category: "Tools",
    color: "#646CFF",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 sm:w-12 sm:h-12">
        <rect width="128" height="128" rx="24" fill="#1E1E2E" />
        <path
          fill="#FFD62E"
          d="M64 20L28 92h28l-8 24 44-72H68l8-24z"
        />
      </svg>
    ),
  },
];

export const SkillsSection: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<TechIconItem | null>(null);

  return (
    <section id="stack" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-cream text-charcoal-900 border-b border-charcoal-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Identifier */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-charcoal-900/5 text-charcoal-900 font-bold border border-charcoal-900/10">
              02
            </span>
            <span className="uppercase tracking-widest text-charcoal-700">
              // VERIFIED TECHNOLOGIES & TOOLCHAIN
            </span>
          </div>

          <div className="font-mono text-xs text-charcoal-700 hidden sm:block">
            HOVER ICON TO REVEAL
          </div>
        </div>

        {/* Section Heading & Minimal Copy */}
        <div className="mb-14 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-charcoal-900 leading-[0.95]">
            TECHNICAL STACK.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            Visual toolchain of verified technologies actively applied in machine learning pipelines, climate datasets, and systems programming.
          </p>
        </div>

        {/* Floating Tooltip Indicator Bar */}
        <div className="min-h-[44px] mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredTech ? (
              <motion.div
                key={hoveredTech.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-charcoal-900 text-white font-mono text-xs sm:text-sm font-bold shadow-lg"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: hoveredTech.color }}
                />
                <span>{hoveredTech.name}</span>
                <span className="text-white/40">//</span>
                <span className="text-chartreuse font-normal text-xs">
                  {hoveredTech.category}
                </span>
              </motion.div>
            ) : (
              <div className="font-mono text-xs text-charcoal-700 tracking-wider">
                [ INTERACTIVE ICON MATRIX ]
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Pure Icon Grid — Zero Paragraph Text */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-6">
          {TECH_ICONS.map((tech) => (
            <motion.div
              key={tech.id}
              whileHover={{ y: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              className="group relative aspect-square rounded-2xl bg-white border border-charcoal-900/10 p-4 sm:p-5 flex items-center justify-center shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Subtle hover background tint */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent to-vividOrange/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Centered SVG Icon */}
              <div className="relative z-10 filter group-hover:drop-shadow-md transition-all">
                {tech.svg}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
