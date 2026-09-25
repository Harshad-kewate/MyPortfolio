"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  FileText,
  MapPin,
} from "lucide-react";
import { contactInfo } from "@/data/portfolioData";

const BIO_SPEECH_TEXT =
  "Harshad Kewate is an Artificial Intelligence and Machine Learning undergraduate at Bansal Institute of Science and Technology, Bhopal, graduating in 2026 with a 7.11 CGPA. Driven by building machine learning models that solve genuine environmental and educational challenges, he specializes in atmospheric modeling using 13 years of ECMWF ERA5 climate reanalysis, multilingual audio intelligence pipelines with Whisper, and memory-efficient C++ algorithmic systems.";

export const AboutSection: React.FC = () => {
  const [speechSupported, setSpeechSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeechSupported(true);
    }
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (!speechSupported) return;

    if (isSpeaking && !isPaused) {
      // Pause
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isSpeaking && isPaused) {
      // Resume
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      // Start fresh
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(BIO_SPEECH_TEXT);
      utterance.rate = 0.98;
      utterance.pitch = 1.0;

      // Select natural sounding voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.includes("Natural") ||
            v.name.includes("Google") ||
            v.name.includes("Samantha") ||
            v.name.includes("Daniel") ||
            v.name.includes("David"))
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStop = () => {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#FAF8F5] text-charcoal-900 overflow-hidden"
    >
      {/* Background Editorial Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#111215 1px, transparent 1px), radial-gradient(#111215 1px, #FAF8F5 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      {/* Subtle Warm Amber Glow in top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-vividOrange/[0.06] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier & Listen Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-charcoal-900/10">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-charcoal-900 text-white font-bold">
              01
            </span>
            <span className="uppercase tracking-widest text-charcoal-700 font-semibold">
              // PROFILE & PHILOSOPHY
            </span>
          </div>

          {/* Sleek Web Speech "LISTEN TO BIO" Control */}
          {speechSupported ? (
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-charcoal-900/15 shadow-sm">
              <button
                onClick={handleTogglePlay}
                data-cursor={isSpeaking && !isPaused ? "PAUSE" : "LISTEN"}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all ${
                  isSpeaking && !isPaused
                    ? "bg-vividOrange text-white shadow-md"
                    : isSpeaking && isPaused
                    ? "bg-amber-100 text-charcoal-900"
                    : "bg-charcoal-900 text-white hover:bg-vividOrange"
                }`}
                title={
                  isSpeaking && !isPaused
                    ? "Pause narration"
                    : isSpeaking && isPaused
                    ? "Resume narration"
                    : "Listen to spoken bio"
                }
              >
                {isSpeaking && !isPaused ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSE</span>
                    {/* Animated Soundwave Bars */}
                    <span className="flex items-end gap-0.5 h-3.5 pl-1">
                      <motion.span
                        animate={{ height: ["4px", "14px", "6px"] }}
                        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                        className="w-0.5 bg-white rounded-full"
                      />
                      <motion.span
                        animate={{ height: ["12px", "4px", "14px"] }}
                        transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                        className="w-0.5 bg-white rounded-full"
                      />
                      <motion.span
                        animate={{ height: ["6px", "14px", "5px"] }}
                        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                        className="w-0.5 bg-white rounded-full"
                      />
                      <motion.span
                        animate={{ height: ["10px", "5px", "12px"] }}
                        transition={{ repeat: Infinity, duration: 0.65, ease: "easeInOut", delay: 0.15 }}
                        className="w-0.5 bg-white rounded-full"
                      />
                    </span>
                  </>
                ) : isSpeaking && isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>RESUME BIO</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-chartreuse" />
                    <span>LISTEN TO BIO</span>
                    <span className="font-mono text-[10px] text-white/70 bg-white/20 px-1.5 py-0.5 rounded">
                      ~35s
                    </span>
                  </>
                )}
              </button>

              {isSpeaking && (
                <button
                  onClick={handleStop}
                  className="p-2 rounded-full text-charcoal-700 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="Stop audio narration"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                </button>
              )}
            </div>
          ) : (
            <div className="font-mono text-[11px] text-charcoal-500">
              AUDIO SPEECH SYNTHESIS AVAILABLE
            </div>
          )}
        </div>

        {/* Asymmetric Image-Led Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait with High-Fashion Editorial Offset (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Bold Editorial Offset Backing Block */}
              <div className="absolute -top-3.5 -left-3.5 w-full h-full rounded-3xl bg-electricBlue shadow-lg transform -rotate-1" />

              {/* Secondary Vivid Orange Corner Accent */}
              <div className="absolute -bottom-3 -right-3 w-28 h-28 rounded-2xl bg-vividOrange" />

              {/* Main Portrait Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-cream shadow-2xl border-2 border-charcoal-900">
                <Image
                  src="/harshad-photo.jpeg"
                  alt="Harshad Kewate — AI & ML Engineer"
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.03] saturate-[1.02]"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-transparent to-transparent" />

                {/* Image Inset Badges */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-bold bg-white/95 text-charcoal-900 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    BHOPAL, MP, INDIA
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-display font-black text-2xl tracking-tight uppercase">
                    HARSHAD KEWATE
                  </div>
                  <div className="font-mono text-xs text-chartreuse mt-0.5 flex items-center justify-between">
                    <span>AIML UNDERGRADUATE // BIST</span>
                    <span className="text-white/80">7.11 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl border-2 border-charcoal-900 shadow-xl max-w-[210px]"
              >
                <div className="font-mono text-[10px] text-charcoal-500 uppercase tracking-wider font-bold">
                  ATMOSPHERIC DATA
                </div>
                <div className="font-display font-black text-sm text-charcoal-900 mt-0.5">
                  13 YRS ERA5 REANALYSIS
                </div>
                <div className="font-mono text-[10px] text-electricBlue font-bold mt-1">
                  0.25° RESOLUTION MESH
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Bold Typography & Structured Storytelling (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-charcoal-900 leading-[0.96]">
                BRIDGING THEORY, <br />
                <span className="text-vividOrange">DATA</span> & SCALABLE CODE.
              </h2>

              <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-normal max-w-2xl">
                I am an Artificial Intelligence & Machine Learning undergraduate at{" "}
                <strong className="text-charcoal-950 font-bold">
                  Bansal Institute Of Science & Technology, Bhopal
                </strong>{" "}
                (7.11 CGPA). My focus is on building machine learning systems that address real-world
                environmental predictability, audio intelligence, and computational software.
              </p>
            </div>

            {/* 3 Editorial Light Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 shadow-sm space-y-2 hover:border-electricBlue/50 transition-colors group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-electricBlue uppercase tracking-wider">
                    01 // ATMOSPHERIC AI
                  </span>
                </div>
                <div className="font-display font-bold text-lg text-charcoal-900 group-hover:text-electricBlue transition-colors">
                  ERA5 Climate ML
                </div>
                <p className="font-sans text-xs text-charcoal-600 leading-relaxed">
                  Trained HistGradientBoosting with CalibratedClassifierCV on 13 years of ECMWF ERA5 data (0.9928 ROC-AUC).
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 shadow-sm space-y-2 hover:border-vividOrange/50 transition-colors group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-vividOrange uppercase tracking-wider">
                    02 // AUDIO & GENAI
                  </span>
                </div>
                <div className="font-display font-bold text-lg text-charcoal-900 group-hover:text-vividOrange transition-colors">
                  Speech Pipelines
                </div>
                <p className="font-sans text-xs text-charcoal-600 leading-relaxed">
                  Engineered automated Whisper transcription, context-preserving translation, and voice synthesis pipelines.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-2xl bg-white border border-charcoal-900/10 shadow-sm space-y-2 hover:border-charcoal-900/50 transition-colors group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-charcoal-800 uppercase tracking-wider">
                    03 // SYSTEMS LOGIC
                  </span>
                </div>
                <div className="font-display font-bold text-lg text-charcoal-900 group-hover:text-charcoal-950 transition-colors">
                  C++ & Algorithms
                </div>
                <p className="font-sans text-xs text-charcoal-600 leading-relaxed">
                  Implemented 10+ custom algorithmic modules emphasizing memory bounds and computational efficiency.
                </p>
              </div>
            </div>

            {/* Direct Verified Links Row */}
            <div className="pt-2 flex flex-wrap items-center gap-5 font-mono text-xs">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal-900 text-white font-bold hover:bg-vividOrange transition-colors shadow-sm"
              >
                <span>VERIFY ON LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-charcoal-900/20 text-charcoal-900 font-bold hover:bg-charcoal-900 hover:text-white transition-colors shadow-sm"
              >
                <span>VIEW GITHUB REPOS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={contactInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="RESUME"
                className="inline-flex items-center gap-1.5 text-charcoal-700 hover:text-vividOrange font-bold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL RESUME (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
