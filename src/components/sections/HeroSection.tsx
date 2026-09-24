"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-5 sm:px-8 md:px-12 bg-cream text-charcoal-900 overflow-hidden border-b border-charcoal-900/10">
      {/* Background Subtle Color Accents */}
      <div className="absolute top-12 right-[-5%] w-[420px] h-[420px] rounded-full bg-vividOrange/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-6 left-[-5%] w-[380px] h-[380px] rounded-full bg-electricBlue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-vividOrange" />
              <span className="font-mono text-xs font-bold tracking-widest text-charcoal-700 uppercase">
                PORTFOLIO 2026 // AI & ML
              </span>
            </div>

            {/* Giant Bold Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tight text-charcoal-900 leading-[0.88]">
                HARSHAD <br />
                <span className="text-vividOrange">KEWATE</span>
              </h1>
              <p className="font-mono text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-charcoal-800 pt-1">
                AI & ML ENGINEER
              </p>
            </div>

            {/* Short Minimal Copy */}
            <p className="text-base sm:text-lg text-charcoal-700 max-w-lg font-normal leading-relaxed">
              Engineering machine learning pipelines, atmospheric predictive models, and scalable software systems with mathematical precision.
            </p>

            {/* Actions: View Work, Resume, Direct Email */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#work"
                data-cursor="VIEW"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-charcoal-900 text-white hover:bg-vividOrange transition-all duration-200 shadow-lg hover:scale-102"
              >
                <span>VIEW WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                data-cursor="DOWNLOAD"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4 text-vividOrange" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                data-cursor="EMAIL"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold text-charcoal-700 hover:text-vividOrange transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Professional Portrait with Strong Color Blocking (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Asymmetric Vivid Orange Architectural Block behind portrait */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-vividOrange" />
              
              {/* Subtle accent border */}
              <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 rounded-3xl border-2 border-charcoal-900 pointer-events-none" />

              {/* Main Photo Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-charcoal-900 shadow-2xl border border-charcoal-900/10">
                <Image
                  src="/harshad-photo.jpeg"
                  alt="Harshad Kewate — AI & ML Engineer"
                  fill
                  priority
                  className="object-cover object-top hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom gradient & clean name caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-display font-bold text-lg sm:text-xl">
                    HARSHAD KEWATE
                  </div>
                  <div className="font-mono text-xs text-chartreuse font-medium mt-0.5">
                    B.TECH AIML // BIST BHOPAL
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
