"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download, Mail, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-32 pb-14 sm:pb-16 px-4 sm:px-8 md:px-12 bg-[#F4EFE6] text-[#18352F] overflow-hidden">
      {/* Background Subtle Color Accents */}
      <div className="absolute top-12 right-[-5%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-[#E85D2A]/10 blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-6 left-[-5%] w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-[#B8D83D]/10 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Actions (7 cols) */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0.05 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-8"
          >
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E85D2A]" />
              <span className="font-mono text-xs font-bold tracking-widest text-[#18352F]/70 uppercase">
                PORTFOLIO 2026 // AI & ML
              </span>
              <span className="w-2 h-2 rounded-full bg-[#B8D83D] animate-pulse" />
            </div>

            {/* Giant Bold Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tight text-[#18352F] leading-[0.92] sm:leading-[0.88] break-words">
                HARSHAD <br />
                <span className="text-[#E85D2A]">KEWATE</span>
              </h1>
              <p className="font-mono text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#18352F]/90 pt-1">
                AI & ML ENTHUSIAST
              </p>
            </div>

            {/* Short Minimal Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#18352F]/80 max-w-lg font-normal leading-relaxed">
              Engineering machine learning pipelines, atmospheric predictive models, and scalable software systems with mathematical precision.
            </p>

            {/* Actions: View Work, Resume, Direct Email */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#work"
                data-cursor="VIEW"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-[#18352F] text-white hover:bg-[#E85D2A] transition-all duration-200 shadow-lg hover:scale-102"
              >
                <span>VIEW WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                data-cursor="DOWNLOAD"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4 text-vividOrange" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                data-cursor="EMAIL"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold text-charcoal-700 hover:text-vividOrange transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Smaller Circular Portrait (Head to Collar) with Signature Color Accents (5 cols) */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: prefersReduced ? 0.05 : 0.8, delay: prefersReduced ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-2 sm:pt-0"
          >
            <div className="relative">
              {/* Asymmetric Vivid Orange Architectural Circle behind portrait */}
              <div className="absolute -top-2.5 -right-2.5 sm:-top-3.5 sm:-right-3.5 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-vividOrange border-2 border-[#18352F]" />
              
              {/* Subtle accent border */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-[#18352F]/30 pointer-events-none" />

              {/* Main Circular Photo Frame (Head to Shirt/Collar Only) */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-charcoal-900 shadow-2xl border-2 sm:border-3 border-[#18352F]">
                <Image
                  src="/harshad-photo.jpeg"
                  alt="Harshad Kewate — AI & ML Enthusiast"
                  fill
                  priority
                  className="object-cover object-[50%_14%] scale-110 hover:scale-115 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Clean Name & Degree Subtitle aligned with smaller circular photo */}
            <div className="mt-4 sm:mt-5 text-center lg:text-right space-y-0.5">
              <div className="font-display font-black text-lg sm:text-xl text-[#18352F] tracking-tight uppercase">
                HARSHAD KEWATE
              </div>
              <div className="font-mono text-xs text-[#E85D2A] font-bold">
                B.TECH AIML // BIST BHOPAL
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
