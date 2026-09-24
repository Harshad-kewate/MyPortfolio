"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-navy-950 text-cream-100 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-white/10 text-chartreuse font-bold">
            05
          </span>
          <span className="uppercase tracking-widest text-slate-400">
            // ACADEMIC FORMATION
          </span>
        </div>

        {/* Section Heading & Minimal Copy */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
            ACADEMIC JOURNEY.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Formal undergraduate engineering degree in Artificial Intelligence & Machine Learning along with foundational science schooling.
          </p>
        </div>

        {/* Concise Timeline Cards */}
        <div className="space-y-6">
          {educationList.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ y: -3 }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                edu.highlight
                  ? "bg-charcoal-900 border-chartreuse/40 shadow-xl"
                  : "bg-charcoal-900/50 border-white/10"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-chartreuse font-semibold">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="text-slate-400">{edu.location}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                    {edu.degree}
                  </h3>

                  <div className="font-mono text-sm text-vividOrange">
                    {edu.institution}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-navy-950 border border-white/10 font-mono text-left md:text-right shrink-0">
                  <div className="text-[10px] text-slate-400 uppercase">{edu.scoreType}</div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-chartreuse mt-0.5">
                    {edu.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
