"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, ExternalLink, Terminal, ShieldCheck, Sparkles } from "lucide-react";
import { contactInfo, bioData } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-8 md:px-12 bg-navy-950 bg-grid-tech overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-electricBlue/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] rounded-full bg-vividOrange/10 blur-[140px] pointer-events-none" />

      {/* Top Telemetry / Status Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/10 font-mono text-[11px] sm:text-xs text-slate-400 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-chartreuse font-medium">
            <span className="w-2 h-2 rounded-full bg-chartreuse animate-pulse" />
            LIVE TELEMETRY
          </span>
          <span className="text-slate-600">/</span>
          <span>LAT: 23.2599° N, LNG: 77.4126° E [BHOPAL, IN]</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">TIME [IST]:</span>
            <span className="text-cream-100 font-bold">{time || "12:00:00"}</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="hidden sm:inline text-slate-300">B.TECH AIML (2024–2028)</span>
        </div>
      </div>

      {/* Main Hero Composition */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1 my-auto">
        {/* Left Column: Bold Typography & CTAs (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-vividOrange animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-cream-200">
              Machine Learning & Software Engineering
            </span>
          </div>

          {/* Primary Name Headline */}
          <div className="space-y-1">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
              HARSHAD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream-100 via-white to-chartreuse">
                KEWATE
              </span>
            </h1>
            <div className="pt-2">
              <span className="font-mono text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-vividOrange">
                AI & ML ENGINEER
              </span>
            </div>
          </div>

          {/* Objective Statement from Resume */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            Motivated AIML undergraduate building data handling pipelines, atmospheric machine learning
            models, and scalable full-stack applications. Focused on engineering efficient, research-backed
            solutions that solve real-world problems.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#work"
              data-cursor="EXPLORE"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-vividOrange text-white hover:bg-vividOrange-hover transition-all duration-200 shadow-lg shadow-vividOrange/20 hover:scale-102"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href={contactInfo.resumePath}
              download="Harshad_Kewate_Resume.pdf"
              data-cursor="DOWNLOAD"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-chartreuse transition-all duration-200"
            >
              <Download className="w-4 h-4 text-chartreuse" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href="#contact"
              data-cursor="TALK"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>CONTACT</span>
            </a>
          </div>

          {/* Verified Stats Strip */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 max-w-xl">
            {bioData.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Authentic Professional Portrait & Technical HUD (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Background geometric accents */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-vividOrange/20 via-electricBlue/20 to-chartreuse/20 rounded-2xl blur-lg opacity-70" />

            {/* Editorial Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/15 p-2 shadow-2xl">
              {/* Technical framing corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-chartreuse z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-chartreuse z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-chartreuse z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-chartreuse z-20 pointer-events-none" />

              {/* Photo Container */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-navy-900">
                <Image
                  src="/harshad-photo.jpeg"
                  alt="Harshad Kewate — AI & ML Engineer"
                  fill
                  priority
                  className="object-cover object-top hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay at base for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                {/* Floating engineer badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-navy-950/90 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-sm text-white">HARSHAD KEWATE</div>
                      <div className="font-mono text-[10px] text-chartreuse">
                        AIML UNDERGRADUATE // BIST BHOPAL
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/10 text-[10px] font-mono text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-chartreuse" />
                      <span>VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card sub-strip */}
              <div className="mt-2 px-2 py-1.5 flex items-center justify-between font-mono text-[10px] text-slate-400">
                <span>INDEX // PORTFOLIO_V2</span>
                <span className="text-vividOrange">HARSHAD-KEWATE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between text-slate-500 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          <span>SCROLL TO EXPLORE ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <span>01 / 06</span>
        </div>
      </div>
    </section>
  );
};
