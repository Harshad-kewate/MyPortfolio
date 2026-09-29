"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
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
  KNN: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 stroke-current fill-none" strokeWidth="2" aria-hidden="true">
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <circle cx="18" cy="7" r="2" fill="currentColor" />
      <circle cx="8" cy="18" r="2" fill="currentColor" />
      <circle cx="17" cy="17" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2.5" strokeDasharray="2 2" />
    </svg>
  ),
  "Scikit-learn": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 stroke-current fill-none" strokeWidth="2" aria-hidden="true">
      <circle cx="6" cy="6" r="3" fill="currentColor" />
      <circle cx="18" cy="9" r="3.5" fill="currentColor" />
      <circle cx="10" cy="18" r="3" fill="currentColor" />
      <line x1="6" y1="6" x2="18" y2="9" />
      <line x1="6" y1="6" x2="10" y2="18" />
    </svg>
  ),
  Pandas: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current" aria-hidden="true">
      <path d="M8.5 3a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 8.5 21H10v-7H8v-2h2V9H8V7h2V3H8.5zm7 0H14v4h2v2h-2v3h2v2h-2v7h1.5a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 15.5 3z" />
    </svg>
  ),
  Flask: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2v4a2 2 0 0 1-.5 1.4L4.2 14.8A4 4 0 0 0 7.3 21h9.4a4 4 0 0 0 3.1-6.2L14.5 7.4A2 2 0 0 1 14 6V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  "JioSaavn API": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" fill="currentColor" />
      <circle cx="18" cy="16" r="3" fill="currentColor" />
    </svg>
  ),
};

// Verified Problem-Solution-Approach-Tech Data (strictly derived from Harshad's resume & verified project details)
const PROJECT_DETAILS_DATA: Record<
  string,
  {
    name: string;
    purpose: string;
    problem: string;
    solution: string;
    approach: string;
    technologies: string[];
  }
> = {
  "monsoon-mitra": {
    name: "Monsoon Mitra",
    purpose:
      "An AI-powered climate prediction system designed to forecast Indian Summer Monsoon onset and dry spells with high regional accuracy, helping farmers make timely agricultural decisions.",
    problem:
      "Forecasting Indian Summer Monsoon onset is complex. Traditional global weather simulations run on coarse grids that miss hyperlocal (~25km) rainfall patterns vital for farmers.",
    solution:
      "A machine-learning climate system that models monsoon onset and dry spells at a high-resolution 0.25° (~25km) grid using 13 years of ECMWF ERA5 reanalysis data.",
    approach:
      "ECMWF ERA5 Climate Data → Gradient Boosting Classifier → Time-Aware Validation (Zero Leakage) → Fast Onset Inferences via FastAPI.",
    technologies: ["Python", "Scikit-Learn", "ECMWF ERA5", "FastAPI", "Next.js"],
  },
  "polylingo-ai": {
    name: "PolyLingo AI",
    purpose:
      "An automated speech translation platform that converts video and lecture audio into multiple languages with synchronized voice synthesis, breaking language barriers in education.",
    problem:
      "Single-language video lectures create steep educational barriers for multilingual students who need accurate transcriptions, contextual translations, and natural audio.",
    solution:
      "An automated AI speech translation platform that transcribes lecture speech, performs context-aware neural translation, and synthesizes synchronized multilingual speech.",
    approach:
      "Audio Stream Extraction → Whisper Speech-to-Text → Neural Translation → Multilingual Voice Synthesis → Job Queue & Caching.",
    technologies: ["Whisper STT", "OpenAI API", "PostgreSQL", "Prisma ORM", "Redis", "Node.js"],
  },
  "krishi-cart": {
    name: "KrishiCart",
    purpose:
      "A direct agritech marketplace connecting local farmers with verified wholesale produce buyers, featuring transparent pricing, real-time listings, and interactive farm-to-buyer location mapping.",
    problem:
      "Smallholder agricultural farmers lose substantial margins to multi-tier middleman networks and lack direct geospatial access to regional produce buyers and live market rates.",
    solution:
      "A location-aware agritech e-commerce marketplace connecting farmers directly with agricultural produce buyers with transparent pricing and zero middleman markups.",
    approach:
      "Modern Web Client → OpenStreetMap & Leaflet Geospatial View → Firebase Phone Auth → Node.js REST API Produce Indexing.",
    technologies: ["Vite", "Tailwind CSS", "OpenStreetMap / Leaflet", "Firebase", "Node.js", "Express.js"],
  },
  "music-mood-recommendation": {
    name: "Music Mood Recommendation System",
    purpose:
      "A machine-learning recommendation system that predicts song mood and curates personalized music recommendations based on acoustic features like tempo, energy, and rhythm.",
    problem:
      "Discovering songs that match a listener's current emotional vibe requires analyzing intrinsic acoustic features rather than relying solely on broad genre tags.",
    solution:
      "A machine-learning based music recommendation system that predicts music mood and recommends suitable songs based on audio features.",
    approach:
      "Audio Feature Extraction (BPM, Energy, Valence, Danceability) → KNN Mood Classification (Happy, Sad, Energetic, Calm) → Flask ML REST API → JioSaavn Song Discovery → React Frontend.",
    technologies: [
      "Python",
      "KNN",
      "Scikit-learn",
      "Pandas",
      "Flask",
      "React",
      "Tailwind CSS",
      "JioSaavn API",
    ],
  },
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleDetails = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const monsoon = projects.find((p) => p.id === "monsoon-mitra");
  const polylingo = projects.find((p) => p.id === "polylingo-ai");
  const krishi = projects.find((p) => p.id === "krishi-cart");
  const musicMood = projects.find((p) => p.id === "music-mood-recommendation");

  const total = 4;

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      const targetLeft = children[index].offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : total - 1;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < total - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Sync active counter with touch swipe / manual scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollLeft = container.scrollLeft;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    let closestIndex = 0;
    let minDiff = Infinity;
    children.forEach((child, index) => {
      const diff = Math.abs(child.offsetLeft - container.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });
    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  return (
    <section id="work" className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-[#FFF3E6] text-[#162A44] overflow-hidden">
      {/* Background Editorial Watermark */}
      <div className="absolute top-10 right-[-1%] font-display text-[70px] sm:text-[130px] font-black text-[#162A44]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        SYSTEMS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier & Controls Bar (Identical interaction style to CertificationsSection) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-[#162A44]/15">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-2.5 py-1 rounded-md bg-[#F36F68] text-[#162A44] font-black tracking-wider border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
              02
            </span>
            <span className="uppercase tracking-widest text-[#162A44] font-black">
              // SELECTED WORK & ARCHITECTURE
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#1FA6A0] animate-pulse" />
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#162A44]/70 mr-2">
              [ 0{currentIndex + 1} / 0{total} ]
            </span>

            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-xl bg-white border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44] hover:bg-[#FFD84D] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center text-[#162A44] cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-xl bg-white border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44] hover:bg-[#FFD84D] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center text-[#162A44] cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* EDITORIAL OPENING: Clean & Balanced */}
        <div className="relative mb-8 sm:mb-12">
          <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-32 sm:w-60 h-12 sm:h-20 bg-[#F36F68]/20 -rotate-2 rounded-3xl pointer-events-none -z-10" />
          <div className="absolute left-1/4 top-0 w-24 sm:w-44 h-1.5 bg-[#F36F68] rounded-full pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[#1FA6A0] font-black">
              <span className="w-2 h-2 rounded-full bg-[#1FA6A0]" />
              <span>SELECTED WORK / ARCHITECTURAL CASE STUDIES</span>
            </div>
            <h2 className="font-display text-3xl min-[360px]:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#162A44] leading-[0.95] select-none break-normal">
              <span className="inline-block whitespace-nowrap">PROJ<span className="text-[#F36F68]">ECTS.</span></span>
            </h2>
          </div>
        </div>

        {/* HORIZONTAL SLIDER CONTAINER (Identical structure to CertificationsSection) */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-7 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {/* ============================================================== */}
          {/* SLIDE 01: MONSOON MITRA — FEATURED ATMOSPHERIC AI */}
          {/* ============================================================== */}
          {monsoon && (
            <div className="w-[85vw] min-[360px]:w-[84vw] sm:w-[78vw] md:w-[74vw] lg:w-[840px] xl:w-[890px] max-w-[88vw] shrink-0 snap-start select-none">
              <div className="group relative h-full rounded-3xl bg-white border-2 border-[#162A44] p-3.5 sm:p-5 lg:p-6 shadow-[5px_5px_0px_0px_#162A44] sm:shadow-[6px_6px_0px_0px_#162A44] overflow-hidden hover:shadow-[8px_8px_0px_0px_#F36F68] transition-all flex flex-col justify-between">
                {/* Top Accent Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F36F68] via-[#FFD84D] to-[#1FA6A0]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center">
                  {/* Large Telemetry Visual on Left (7 cols) */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#162A44] border-2 border-[#162A44] p-3 sm:p-4 flex flex-col justify-between overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-500">
                      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                        <div className="w-80 h-80 rounded-full border border-[#1FA6A0]/50 animate-pulse" />
                        <div className="absolute w-60 h-60 rounded-full border border-[#FFD84D]/40" />
                        <div className="absolute w-40 h-40 rounded-full border border-white/30" />
                        <div className="absolute w-64 h-64 border-t-2 border-r-2 border-[#FFD84D] rounded-full animate-radar origin-center" />
                        <div className="absolute inset-0 bg-grid-tech opacity-40" />
                      </div>

                      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-300">
                        <span className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFD84D] font-bold text-[10px] sm:text-xs">
                          <Radio className="w-3.5 h-3.5 animate-pulse text-[#FFD84D]" />
                          <span>CLIMATE ML PREDICTION SYSTEM</span>
                        </span>
                        <span className="text-white/80 font-mono text-[10px] sm:text-xs font-bold">13 YRS DATA</span>
                      </div>

                      <div className="relative z-10 p-2.5 sm:p-3.5 rounded-2xl bg-[#101820]/95 backdrop-blur-md border border-white/15 space-y-1.5 max-w-sm">
                        <div className="flex items-center justify-between font-mono text-[10px] text-slate-300">
                          <span>CORE PREDICTIVE CAPABILITY</span>
                          <span className="text-[#FFD84D] font-bold">VALIDATED MODEL</span>
                        </div>
                        <div className="font-display font-bold text-white text-xs sm:text-sm">
                          Monsoon Onset & Dry Spell Prediction
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div className="w-[88%] bg-gradient-to-r from-[#F36F68] via-[#FFD84D] to-[#1FA6A0] h-full rounded-full" />
                        </div>
                        <div className="flex justify-between font-mono text-[9px] sm:text-[10px] text-slate-300 pt-0.5">
                          <span>Time-Series Split (Zero Leakage)</span>
                          <span className="text-white font-bold">HIGH RELIABILITY</span>
                        </div>
                      </div>

                      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-300 pt-1.5 border-t border-white/10">
                        <span>ECMWF ERA5 CLIMATE DATA</span>
                        <span className="text-[#FFD84D] font-bold">0.99 ROC-AUC SCORE</span>
                      </div>
                    </div>
                  </div>

                  {/* Information on Right (5 cols) */}
                  <div className="lg:col-span-5 order-1 lg:order-2 space-y-3 sm:space-y-4">
                    {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F36F68] text-[#162A44] font-black border border-[#162A44] shadow-[1.5px_1.5px_0px_#162A44] text-[10px] sm:text-[11px]">
                          <Star className="w-3 h-3 fill-[#162A44]" />
                          <span>FEATURED PROJECT</span>
                        </span>
                        <span className="text-[#252525]/70 font-bold text-[10px] sm:text-[11px]">01 / 04</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleDetails("monsoon-mitra")}
                        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-mono text-xs font-black bg-[#FFD84D] text-[#162A44] hover:bg-[#F36F68] hover:text-[#162A44] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] transition-all cursor-pointer"
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

                    <h3 className="font-display text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[28px] font-black uppercase tracking-tight text-[#162A44] leading-tight">
                      MONSOON MITRA // <br />
                      <span className="text-[#F36F68]">CLIMATE ML PREDICTOR</span>
                    </h3>

                    <p className="text-[#252525] text-xs sm:text-sm leading-relaxed font-medium">
                      An AI-driven climate forecasting system designed to predict Indian Summer Monsoon onset and dry spells with high regional accuracy, helping farmers make timely agricultural decisions.
                    </p>

                    {/* Recruiter-Friendly Highlight Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-[#FFF3E6] border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
                        <div className="font-display font-black text-lg sm:text-xl text-[#F36F68]">13 Years</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-[#162A44] font-bold uppercase">Climate Data (ERA5)</div>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-[#FFF3E6] border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
                        <div className="font-display font-black text-lg sm:text-xl text-[#162A44]">0.99 ROC-AUC</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-[#162A44] font-bold uppercase">Onset Prediction Score</div>
                      </div>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1 font-mono text-xs text-[#162A44]">
                      {["Python", "Scikit-Learn", "FastAPI", "Next.js", "ERA5 Data"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-[#FFF3E6] border border-[#162A44]/30 font-bold text-[10px] sm:text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-0.5">
                      <button
                        onClick={() => setActiveModalProject(monsoon)}
                        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full font-mono text-xs sm:text-sm font-black bg-[#162A44] text-[#FFF3E6] hover:bg-[#F36F68] hover:text-[#162A44] border-2 border-[#162A44] shadow-[2.5px_2.5px_0px_0px_#162A44] transition-all group-hover:translate-x-0.5 cursor-pointer"
                      >
                        <span>VIEW PROJECT DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
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
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* SLIDE 02: POLYLINGO AI (Electric Blue + Deep Navy) */}
          {/* ============================================================== */}
          {polylingo && (
            <div className="w-[85vw] min-[360px]:w-[84vw] sm:w-[78vw] md:w-[74vw] lg:w-[840px] xl:w-[890px] max-w-[88vw] shrink-0 snap-start select-none">
              <div className="group relative h-full rounded-3xl bg-[#315CFF] text-white p-3.5 sm:p-5 lg:p-6 border-2 border-[#162A44] shadow-[5px_5px_0px_0px_#162A44] overflow-hidden hover:shadow-[8px_8px_0px_0px_#162A44] transition-all flex flex-col justify-between">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center">
                  {/* Info on Left (5 cols) */}
                  <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                    {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20 text-[10px] sm:text-[11px]">
                          SPEECH AI & TRANSLATION
                        </span>
                        <span className="text-white/70 font-bold text-[10px] sm:text-[11px]">02 / 04</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleDetails("polylingo-ai")}
                        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-mono text-xs font-black bg-[#FFD84D] text-[#162A44] hover:bg-white border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] transition-all cursor-pointer"
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

                    <h3 className="font-display text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[28px] font-black uppercase tracking-tight text-white leading-tight">
                      POLYLINGO AI // <br />
                      <span>VOICE TRANSLATION</span>
                    </h3>

                    <p className="text-white/95 text-xs sm:text-sm leading-relaxed font-normal">
                      An automated speech translation platform that converts video and lecture audio into multiple languages with synchronized voice synthesis, breaking language barriers in education.
                    </p>

                    {/* Recruiter-Friendly Highlight Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                        <div className="font-display font-black text-lg sm:text-xl text-white">Whisper AI</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-white/80 font-bold uppercase">Speech Recognition</div>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                        <div className="font-display font-black text-lg sm:text-xl text-[#FFD84D]">Sync Audio</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-white/80 font-bold uppercase">Multilingual Synthesis</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 font-mono text-xs text-white">
                      {["Whisper STT", "OpenAI API", "PostgreSQL", "Prisma", "Node.js"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-white/15 border border-white/25 backdrop-blur-sm text-[10px] sm:text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-0.5">
                      <button
                        onClick={() => setActiveModalProject(polylingo)}
                        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full font-mono text-xs sm:text-sm font-black bg-white text-[#162A44] hover:bg-[#FFD84D] border-2 border-[#162A44] shadow-[2.5px_2.5px_0px_0px_#162A44] transition-all cursor-pointer"
                      >
                        <span>VIEW PROJECT DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#162A44]" />
                      </button>
                    </div>
                  </div>

                  {/* Large Visual on Right (7 cols): Animated Spectrogram & Pipeline */}
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#101820] border-2 border-white/20 p-3 sm:p-4.5 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                      <div className="flex items-center justify-between font-mono text-xs text-slate-300">
                        <span className="flex items-center gap-2">
                          <AudioWaveform className="w-4 h-4 text-[#F36F68]" />
                          <span>SPEECH TRANSLATION PIPELINE</span>
                        </span>
                        <span className="text-[#FFD84D] font-bold text-[11px]">AUTOMATED WORKFLOW</span>
                      </div>

                      {/* Animated Multichannel Audio Wave */}
                      <div className="py-3 sm:py-4 space-y-2">
                        <div className="flex items-end gap-1.5 sm:gap-2 h-14 sm:h-18 justify-between">
                          {[45, 80, 30, 95, 65, 100, 50, 85, 40, 75, 90, 60, 35, 85, 70, 95, 40, 60, 80, 50, 70].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-[#315CFF] via-[#F36F68] to-[#FFD84D] rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-300">
                          <span>Original Audio Track [Input]</span>
                          <span className="text-[#FFD84D]">Synthesized Voice [Output]</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#162A44] border border-white/15 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-200">
                        <span>Architecture: Node.js & Next.js</span>
                        <span className="text-white font-bold">Storage: PostgreSQL & Redis</span>
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
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* SLIDE 03: KRISHICART (Warm Yellow / Lime + Deep Navy) */}
          {/* ============================================================== */}
          {krishi && (
            <div className="w-[85vw] min-[360px]:w-[84vw] sm:w-[78vw] md:w-[74vw] lg:w-[840px] xl:w-[890px] max-w-[88vw] shrink-0 snap-start select-none">
              <div className="group relative h-full rounded-3xl bg-[#D4FF00] text-[#162A44] p-3.5 sm:p-5 lg:p-6 border-2 border-[#162A44] shadow-[5px_5px_0px_0px_#162A44] flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#162A44] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center">
                  {/* Left Column: Details & Actions (6 cols) */}
                  <div className="lg:col-span-6 space-y-3 sm:space-y-3.5">
                    {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#162A44] text-[#D4FF00] font-black text-[10px] sm:text-[11px]">
                          AGRITECH MARKETPLACE
                        </span>
                        <span className="font-bold text-[#162A44]/70 text-[10px] sm:text-[11px]">03 / 04</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleDetails("krishi-cart")}
                        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-mono text-xs font-black bg-[#162A44] text-[#D4FF00] hover:bg-white hover:text-[#162A44] border-2 border-[#162A44] shadow-[2px_2px_0px_#162A44] transition-all cursor-pointer"
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

                    <h3 className="font-display text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[28px] font-black uppercase tracking-tight text-[#162A44] leading-tight">
                      KRISHICART // <br />
                      <span>DIRECT FARM COMMERCE</span>
                    </h3>

                    <p className="text-[#252525] text-xs sm:text-sm leading-relaxed font-medium">
                      A direct agritech marketplace connecting local farmers with verified wholesale produce buyers, featuring transparent pricing, real-time listings, and interactive farm-to-buyer location mapping.
                    </p>

                    {/* Recruiter-Friendly Highlight Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/70 border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
                        <div className="font-display font-black text-lg sm:text-xl text-[#162A44]">0% Fees</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-[#162A44] font-bold uppercase">Direct Farmer Trade</div>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/70 border-2 border-[#162A44] shadow-[2px_2px_0px_0px_#162A44]">
                        <div className="font-display font-black text-lg sm:text-xl text-[#162A44]">Live Maps</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-[#162A44] font-bold uppercase">Leaflet & OpenStreetMap</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 font-mono text-xs">
                      {["Vite", "Tailwind CSS", "Node.js", "Express.js", "Firebase", "Leaflet"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-[#162A44]/10 border border-[#162A44]/20 font-bold text-[#162A44] text-[10px] sm:text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-1 flex flex-wrap items-center gap-2.5">
                      {krishi.githubUrl && (
                        <a
                          href={krishi.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full font-mono text-xs font-bold bg-[#162A44] text-white hover:bg-[#F36F68] hover:text-[#162A44] transition-colors shadow-md"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GITHUB</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() => setActiveModalProject(krishi)}
                        className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full font-mono text-xs font-bold border-2 border-[#162A44] text-[#162A44] hover:bg-white transition-colors cursor-pointer"
                      >
                        <span>VIEW DETAILS →</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Map Simulation (6 cols) */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#162A44] text-white p-3 sm:p-4 flex flex-col justify-between overflow-hidden shadow-2xl border-2 border-[#162A44]">
                      <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-2">
                        <span className="flex items-center gap-1.5 text-[#D4FF00] font-bold text-[11px] sm:text-xs">
                          <MapPin className="w-3.5 h-3.5 text-[#D4FF00]" />
                          <span>INTERACTIVE MARKETPLACE MAP</span>
                        </span>
                        <span className="text-slate-300 font-bold text-[10px] sm:text-[11px]">VERIFIED PRODUCERS</span>
                      </div>

                      {/* Map Coordinate Simulation graphic */}
                      <div className="my-2 py-2.5 px-3 rounded-xl bg-[#101820]/90 border border-white/10 space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px]">
                          <span className="text-[#D4FF00]">DIRECT TRADE PLATFORM</span>
                          <span className="text-slate-400">REGIONAL MANDI ROUTING</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <div className="w-[72%] bg-gradient-to-r from-[#D4FF00] to-[#1FA6A0] h-full rounded-full" />
                        </div>
                        <div className="flex justify-between font-mono text-[9px] sm:text-[10px] text-slate-300">
                          <span>Real-Time Buyer-Farmer Pairing</span>
                          <span className="text-white font-bold">ZERO MIDDLEMAN COMMISSIONS</span>
                        </div>
                      </div>

                      <div className="font-mono text-[10px] sm:text-[11px] text-slate-300 flex items-center justify-between pt-1">
                        <span>Live Produce Catalog</span>
                        <span className="text-[#D4FF00] font-bold">Secure Authentication</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE PROBLEM -> SOLUTION -> APPROACH -> TECH PANEL */}
                <AnimatePresence>
                  {expandedProjectId === "krishi-cart" && (
                    <ProjectExpandableDrawer details={PROJECT_DETAILS_DATA["krishi-cart"]} theme="lime" />
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* SLIDE 04: MUSIC MOOD RECOMMENDATION SYSTEM (Deep Navy + Audio ML) */}
          {/* ============================================================== */}
          {musicMood && (
            <div className="w-[85vw] min-[360px]:w-[84vw] sm:w-[78vw] md:w-[74vw] lg:w-[840px] xl:w-[890px] max-w-[88vw] shrink-0 snap-start select-none">
              <div className="group relative h-full rounded-3xl bg-[#162A44] text-white p-3.5 sm:p-5 lg:p-6 border-2 border-[#162A44] shadow-[5px_5px_0px_0px_#F36F68] flex flex-col justify-between hover:border-[#F36F68] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-center">
                  {/* Left Column: Details & Actions (6 cols) */}
                  <div className="lg:col-span-6 space-y-3 sm:space-y-3.5">
                    {/* Subtle interactive VIEW DETAILS option ABOVE Title */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F36F68] text-[#162A44] font-black text-[10px] sm:text-[11px]">
                          MACHINE LEARNING & AUDIO
                        </span>
                        <span className="text-slate-400 text-[10px] sm:text-[11px]">04 / 04</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleDetails("music-mood-recommendation")}
                        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-mono text-xs font-black bg-[#FFD84D] text-[#162A44] hover:bg-[#F36F68] border-2 border-white shadow-[2px_2px_0px_#F36F68] transition-all cursor-pointer"
                        aria-expanded={expandedProjectId === "music-mood-recommendation"}
                      >
                        <span>{expandedProjectId === "music-mood-recommendation" ? "COLLAPSE DETAILS" : "VIEW DETAILS"}</span>
                        {expandedProjectId === "music-mood-recommendation" ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <h3 className="font-display text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[28px] font-black uppercase tracking-tight text-white leading-tight">
                      MUSIC MOOD RECOMMENDATION SYSTEM
                    </h3>

                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                      A machine-learning recommendation system that predicts song mood and curates personalized music recommendations based on acoustic features like tempo, energy, and rhythm.
                    </p>

                    {/* Recruiter-Friendly Highlight Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 border border-white/15">
                        <div className="font-display font-black text-lg sm:text-xl text-[#FFD84D]">4 Moods</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-slate-300 font-bold uppercase">Happy, Energetic, Calm, Sad</div>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 border border-white/15">
                        <div className="font-display font-black text-lg sm:text-xl text-[#F36F68]">KNN Model</div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-slate-300 font-bold uppercase">Scikit-Learn Classifier</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 font-mono text-xs text-slate-300">
                      {[
                        "Python",
                        "KNN",
                        "Scikit-learn",
                        "Pandas",
                        "Flask",
                        "React",
                        "Tailwind CSS",
                        "JioSaavn API",
                      ].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-[10px] sm:text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-1 flex items-center gap-3">
                      <button
                        onClick={() => setActiveModalProject(musicMood)}
                        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-[#F36F68] text-[#162A44] hover:bg-[#FFD84D] transition-colors cursor-pointer shadow-md"
                      >
                        <span>VIEW PROJECT DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Audio Mood Spectrum & Feature Radar (6 cols) */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#101820] border-2 border-white/15 p-3 sm:p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
                      <div className="flex items-center justify-between font-mono text-xs text-[#FFD84D] font-bold border-b border-white/10 pb-2">
                        <span className="text-[11px] sm:text-xs">ACOUSTIC MOOD CLASSIFICATION</span>
                        <span className="text-[10px] text-slate-300 uppercase">4 MOOD CATEGORIES</span>
                      </div>

                      {/* 4 Mood Quadrants display */}
                      <div className="grid grid-cols-2 gap-2 my-2">
                        <div className="p-2 rounded-xl bg-white/5 border border-[#FFD84D]/30 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#FFD84D]">HAPPY</span>
                          <span className="text-[10px] font-mono text-slate-300">Upbeat Melody</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5 border border-[#F36F68]/30 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#F36F68]">ENERGETIC</span>
                          <span className="text-[10px] font-mono text-slate-300">High Intensity</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5 border border-[#1FA6A0]/30 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#1FA6A0]">CALM</span>
                          <span className="text-[10px] font-mono text-slate-300">Gentle Rhythm</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5 border border-[#315CFF]/30 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#315CFF]">SAD</span>
                          <span className="text-[10px] font-mono text-slate-300">Low Energy</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-[#162A44] border border-white/10 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-300">
                        <span>Music Discovery: JioSaavn API</span>
                        <span className="text-[#FFD84D] font-bold">Flask REST API</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE PROBLEM -> SOLUTION -> APPROACH -> TECH PANEL */}
                <AnimatePresence>
                  {expandedProjectId === "music-mood-recommendation" && (
                    <ProjectExpandableDrawer details={PROJECT_DETAILS_DATA["music-mood-recommendation"]} theme="navy" />
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
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
    name: string;
    purpose: string;
    problem: string;
    solution: string;
    approach: string;
    technologies: string[];
  };
  theme: "cream" | "blue" | "lime" | "navy";
}

const ProjectExpandableDrawer: React.FC<ProjectExpandableDrawerProps> = ({ details, theme }) => {
  const prefersReduced = useReducedMotion();

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

  const workflowPillClasses = {
    cream: "bg-[#162A44]/5 text-[#162A44] border border-[#162A44]/15",
    blue: "bg-white/15 text-white border border-white/20",
    lime: "bg-[#D4FF00]/15 text-[#D4FF00] border border-[#D4FF00]/30",
    navy: "bg-white/10 text-slate-200 border border-white/15",
  }[theme];

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0, marginTop: 0 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, height: "auto", marginTop: 20 }}
      exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0, marginTop: 0 }}
      transition={{ duration: prefersReduced ? 0.05 : 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className={`p-3 sm:p-4 md:p-5 rounded-2xl ${containerClasses} space-y-3 sm:space-y-4`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-current/15 pb-2.5 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="font-black uppercase tracking-wider text-[11px] sm:text-xs">
              // {details.name.toUpperCase()} // PROJECT OVERVIEW
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#FFD84D] text-[#111111] font-bold text-[10px]">
            RECRUITER OVERVIEW
          </span>
        </div>

        {/* Short Purpose / What it does */}
        <div className={`p-3 sm:p-3.5 rounded-xl ${subBoxClasses} space-y-1`}>
          <div className="font-mono text-[10px] sm:text-[11px] font-bold uppercase text-[#E85D2A] tracking-wider">
            WHAT IT DOES // PURPOSE
          </div>
          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            {details.purpose}
          </p>
        </div>

        {/* 4 Required Areas in an Asymmetric 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* 1. PROBLEM */}
          <div className={`p-3 sm:p-3.5 rounded-xl ${subBoxClasses} space-y-1.5`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#F36F68] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F36F68]" />
              <span>1. PROBLEM</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {details.problem}
            </p>
          </div>

          {/* 2. SOLUTION */}
          <div className={`p-3 sm:p-3.5 rounded-xl ${subBoxClasses} space-y-1.5`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#1FA6A0] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1FA6A0]" />
              <span>2. SOLUTION</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {details.solution}
            </p>
          </div>

          {/* 3. APPROACH (Rendered as short clear workflow steps) */}
          <div className={`p-3 sm:p-3.5 rounded-xl ${subBoxClasses} space-y-2`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#315CFF] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
              <span>3. APPROACH // WORKFLOW</span>
            </div>
            {details.approach.includes(" → ") ? (
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {details.approach.split(" → ").map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md font-mono text-[10px] sm:text-[11px] font-bold ${workflowPillClasses}`}>
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="text-[#E85D2A] font-bold text-xs select-none">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                {details.approach}
              </p>
            )}
          </div>

          {/* 4. TECHNOLOGY */}
          <div className={`p-3 sm:p-3.5 rounded-xl ${subBoxClasses} space-y-2`}>
            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-[#FFD84D] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD84D]" />
              <span>4. TECHNOLOGY</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {details.technologies.map((techName) => (
                <span
                  key={techName}
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg font-mono text-[10px] sm:text-[11px] font-bold ${pillClasses} transition-transform hover:scale-102`}
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
