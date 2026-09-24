"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";
import { contactInfo } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-charcoal-900 text-cream-100 overflow-hidden border-b border-white/10">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-[-10%] w-96 h-96 rounded-full bg-electricBlue/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-white/10 text-chartreuse font-bold">
            01
          </span>
          <span className="uppercase tracking-widest text-slate-400">
            // EDITORIAL PROFILE & PHILOSOPHY
          </span>
        </div>

        {/* Asymmetric Image-Led Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Large Image Composition with Strong Color Blocking (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Electric Blue Color Block Accent */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-electricBlue/80" />

              {/* Secondary Lime Line Accent */}
              <div className="absolute -bottom-3 -right-3 w-1/2 h-1/2 rounded-3xl border-2 border-chartreuse pointer-events-none" />

              {/* Editorial Portrait Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-navy-950 shadow-2xl border border-white/15">
                <Image
                  src="/harshad-photo.jpeg"
                  alt="Harshad Kewate — Profile"
                  fill
                  className="object-cover object-top filter contrast-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 font-mono text-xs text-cream-100 flex items-center justify-between">
                  <span className="font-bold text-chartreuse">HARSHAD KEWATE</span>
                  <span className="text-slate-400">BHOPAL, IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bold Typography & Short Impact Blocks (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.96]">
                BRIDGING THEORY, <br />
                <span className="text-electricBlue">DATA</span> & SCALABLE CODE.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                AIML undergraduate at <strong>Bansal Institute Of Science & Technology, Bhopal</strong> (7.11 CGPA).
                Driven by building machine learning models that solve genuine environmental and educational challenges.
              </p>
            </div>

            {/* 3 Short Impact Blocks (Visual & Concise) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Block 1 */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="font-mono text-xs font-bold text-chartreuse uppercase">
                  01 / MACHINE LEARNING
                </div>
                <div className="font-display font-bold text-lg text-white">Atmospheric AI</div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Modeling meteorological onset & break phases using 13 years of ECMWF ERA5 reanalysis at 0.25° resolution.
                </p>
              </div>

              {/* Block 2 */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="font-mono text-xs font-bold text-vividOrange uppercase">
                  02 / AUDIO & GENAI
                </div>
                <div className="font-display font-bold text-lg text-white">Speech Pipelines</div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Orchestrating Whisper STT, neural lecture translation, and voice synthesis for multilingual course access.
                </p>
              </div>

              {/* Block 3 */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="font-mono text-xs font-bold text-electricBlue uppercase">
                  03 / SYSTEMS LOGIC
                </div>
                <div className="font-display font-bold text-lg text-white">C++ & Algorithms</div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  10+ custom algorithmic implementations with attention to memory efficiency and computational bounds.
                </p>
              </div>
            </div>

            {/* Concise Footer Callout */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-chartreuse hover:text-white transition-colors"
              >
                <span>VERIFY ON LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-slate-600">•</span>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                <span>VIEW GITHUB REPOS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
