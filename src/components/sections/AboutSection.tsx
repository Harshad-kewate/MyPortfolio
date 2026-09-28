"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Volume2,
  Play,
  Pause,
  Square,
  Sparkles,
  FileText,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { contactInfo } from "@/data/portfolioData";

const BIO_SPEECH_TEXT =
  "Harshad Kewate is an Artificial Intelligence and Machine Learning undergraduate at Bansal Institute of Science and Technology, Bhopal, graduating in 2026 with a 7.11 CGPA. Driven by building practical machine learning models and clean software applications, he works on climate prediction systems, speech recognition and translation pipelines, and data-driven web applications.";

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
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isSpeaking && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(BIO_SPEECH_TEXT);
      utterance.rate = 0.98;
      utterance.pitch = 1.0;

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
      className="relative py-28 sm:py-36 px-4 sm:px-8 md:px-12 bg-[#DCE8F2] text-[#18352F] overflow-hidden"
    >
      {/* Editorial Watermark */}
      <div className="absolute top-6 left-[-1%] font-display text-[140px] sm:text-[220px] font-black text-[#18352F]/[0.04] select-none pointer-events-none leading-none tracking-tighter">
        EDITORIAL
      </div>

      {/* Asymmetric Warm Sand Secondary Surface in corner */}
      <div className="absolute -top-24 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E9DFCF]/70 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier & Listen Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#18352F]/15">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-[#E85D2A] text-white font-bold tracking-wider">
              01
            </span>
            <span className="uppercase tracking-widest text-[#18352F] font-bold">
              // EDITORIAL PROFILE & PHILOSOPHY
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8D83D] animate-pulse" />
          </div>

          {/* Web Speech "LISTEN TO BIO" Control */}
          {speechSupported && (
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-[#E9DFCF] border-2 border-[#18352F] shadow-sm">
              <button
                onClick={handleTogglePlay}
                data-cursor={isSpeaking && !isPaused ? "PAUSE" : "LISTEN"}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all ${
                  isSpeaking && !isPaused
                    ? "bg-[#E85D2A] text-white shadow-md"
                    : isSpeaking && isPaused
                    ? "bg-[#DCE8F2] text-[#18352F]"
                    : "bg-[#18352F] text-[#E9DFCF] hover:bg-[#E85D2A]"
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
                    {/* Animated Soundwave Equalizer */}
                    <span className="flex items-end gap-0.5 h-3.5 pl-1">
                      <motion.span
                        animate={{ height: ["4px", "14px", "6px"] }}
                        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                        className="w-0.5 bg-[#B8D83D] rounded-full"
                      />
                      <motion.span
                        animate={{ height: ["12px", "4px", "14px"] }}
                        transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                        className="w-0.5 bg-white rounded-full"
                      />
                      <motion.span
                        animate={{ height: ["6px", "14px", "5px"] }}
                        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                        className="w-0.5 bg-[#B8D83D] rounded-full"
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
                    <Volume2 className="w-3.5 h-3.5 text-[#B8D83D]" />
                    <span>LISTEN TO BIO</span>
                    <span className="font-mono text-[10px] text-white/80 bg-white/20 px-1.5 py-0.5 rounded">
                      ~35s
                    </span>
                  </>
                )}
              </button>

              {isSpeaking && (
                <button
                  onClick={handleStop}
                  className="p-2 rounded-full text-[#18352F] hover:text-[#E85D2A] hover:bg-white/40 transition-colors"
                  title="Stop audio narration"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Asymmetrical Composition with Strong Image Placement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait with Warm Sand & Burnt Orange Geometry (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Warm Sand Offset Backer Block */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#E9DFCF] border-2 border-[#18352F] shadow-md transform -rotate-1" />

              {/* Burnt Orange Corner Block */}
              <div className="absolute -bottom-3.5 -right-3.5 w-32 h-32 rounded-2xl bg-[#E85D2A] border-2 border-[#18352F]" />

              {/* Main Portrait Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#E9DFCF] shadow-2xl border-2 border-[#18352F]">
                <Image
                  src="/harshad-photo.jpeg"
                  alt="Harshad Kewate — AI & ML Enthusiast"
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.04] saturate-[1.02]"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18352F]/90 via-transparent to-transparent" />

                {/* Location Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-bold bg-[#E9DFCF] text-[#18352F] border border-[#18352F]/30 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#B8D83D] animate-pulse" />
                    BHOPAL, MP, INDIA
                  </span>
                </div>

                {/* Bottom Inset Name & Degree */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-display font-black text-2xl tracking-tight uppercase">
                    HARSHAD KEWATE
                  </div>
                  <div className="font-mono text-xs text-[#B8D83D] mt-0.5 flex items-center justify-between font-bold">
                    <span>AIML UNDERGRADUATE // BIST</span>
                    <span className="text-white/95">7.11 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Architectural Technical Callout Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 left-2 sm:-left-6 bg-[#E9DFCF] p-3.5 sm:p-4 rounded-2xl border-2 border-[#18352F] shadow-xl max-w-[200px] sm:max-w-[220px]"
              >
                <div className="font-mono text-[10px] text-[#E85D2A] uppercase tracking-wider font-bold">
                  CLIMATE ML
                </div>
                <div className="font-display font-black text-sm text-[#18352F] mt-0.5">
                  13 YRS CLIMATE DATA
                </div>
                <div className="font-mono text-[10px] text-[#18352F]/80 font-bold mt-1">
                  HIGH-RESOLUTION GRID
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Large Typography & Rich Editorial Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#18352F] leading-[0.96] break-normal">
                BRIDGING MACHINE LEARNING, <br />
                <span className="text-[#E85D2A]">DATA</span> & PRACTICAL CODE.
              </h2>

              <p className="text-base sm:text-lg text-[#18352F]/90 leading-relaxed font-normal max-w-2xl">
                Artificial Intelligence & Machine Learning engineering undergraduate at{" "}
                <strong className="text-[#18352F] font-bold">
                  Bansal Institute Of Science & Technology, Bhopal
                </strong>{" "}
                (7.11 CGPA). Dedicated to building practical machine learning models and
                clean software applications that solve genuine environmental and educational challenges.
              </p>
            </div>

            {/* 3 Rich Editorial Cards (Warm Sand Surfaces) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-[#E9DFCF] border-2 border-[#18352F] shadow-sm space-y-2 hover:translate-y-[-2px] transition-transform group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#E85D2A] uppercase tracking-wider">
                    01 // CLIMATE ML
                  </span>
                </div>
                <div className="font-display font-bold text-lg text-[#18352F] group-hover:text-[#E85D2A] transition-colors">
                  Monsoon Prediction
                </div>
                <p className="font-sans text-xs text-[#18352F]/80 leading-relaxed">
                  Trained predictive gradient boosting models on 13 years of climate reanalysis data to forecast monsoon patterns.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-[#E9DFCF] border-2 border-[#18352F] shadow-sm space-y-2 hover:translate-y-[-2px] transition-transform group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#18352F] uppercase tracking-wider">
                    02 // SPEECH AI
                  </span>
                </div>
                <div className="font-display font-bold text-lg text-[#18352F] group-hover:text-[#E85D2A] transition-colors">
                  Audio Translation
                </div>
                <p className="font-sans text-xs text-[#18352F]/80 leading-relaxed">
                  Built end-to-end automated pipelines for lecture speech recognition, multilingual translation, and audio synthesis.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-2xl bg-[#E9DFCF] border-2 border-[#18352F] shadow-sm space-y-2 hover:translate-y-[-2px] transition-transform group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#E85D2A] uppercase tracking-wider">
                    03 // RECOMMENDATION ML
                  </span>
                </div>
                <div className="font-display font-bold text-lg text-[#18352F] group-hover:text-[#E85D2A] transition-colors">
                  Music Mood Classifier
                </div>
                <p className="font-sans text-xs text-[#18352F]/80 leading-relaxed">
                  Applied machine learning classification to analyze audio tempo, valence, and acoustic features for mood-based song recommendations.
                </p>
              </div>
            </div>

            {/* Direct Verified Links Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#18352F] text-[#E9DFCF] font-bold hover:bg-[#E85D2A] hover:text-white transition-colors shadow-md"
              >
                <span>VERIFY ON LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E9DFCF] border-2 border-[#18352F] text-[#18352F] font-bold hover:bg-[#18352F] hover:text-[#E9DFCF] transition-colors shadow-md"
              >
                <span>VIEW GITHUB REPOS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={contactInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="RESUME"
                className="inline-flex items-center gap-1.5 text-[#18352F] hover:text-[#E85D2A] font-bold transition-colors ml-1"
              >
                <FileText className="w-4 h-4 text-[#E85D2A]" />
                <span>OFFICIAL RESUME (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
