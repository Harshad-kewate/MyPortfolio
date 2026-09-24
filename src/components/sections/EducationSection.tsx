"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/ui/SectionHeader";
import { educationList, additionalHighlights } from "@/data/portfolioData";
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-navy-950 text-cream-100 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          category="ACADEMIC BACKGROUND & SCHOLARSHIP"
          title="ACADEMIC TRAJECTORY & ENGINEERING MILESTONES"
          theme="dark"
          description="Formal degree education in Artificial Intelligence & Machine Learning, secondary schooling, and collaborative engineering milestones."
        />

        {/* Education Timeline Cards */}
        <div className="space-y-8 mb-16">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${
                edu.highlight
                  ? "bg-gradient-to-r from-charcoal-900 to-navy-900 border-chartreuse/40 shadow-2xl"
                  : "bg-charcoal-900/60 border-white/10"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Period & Degree Info (8 cols) */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-chartreuse font-bold">
                      {edu.period}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{edu.location}</span>
                    {edu.affiliation && (
                      <>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400">{edu.affiliation}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                    {edu.degree}
                  </h3>

                  <div className="font-mono text-sm text-vividOrange font-medium">
                    {edu.institution}
                  </div>

                  <ul className="pt-2 space-y-2">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-chartreuse flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Academic Standing / Score Pill (4 cols) */}
                <div className="lg:col-span-4 flex flex-col lg:items-end justify-center lg:h-full pt-4 lg:pt-0">
                  <div className="p-4 sm:p-5 rounded-2xl bg-navy-950 border border-white/10 text-left lg:text-right w-full sm:w-auto">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                      {edu.scoreType}
                    </span>
                    <span className="font-display font-black text-3xl sm:text-4xl text-chartreuse block mt-1">
                      {edu.score}
                    </span>
                    <span className="font-mono text-xs text-slate-500 mt-1 block">
                      Verified Academic Record
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Initiatives & Hackathons (From Resume 'Additional') */}
        <div className="pt-8 border-t border-white/10">
          <div className="font-mono text-xs uppercase tracking-widest text-chartreuse mb-6">
            // COLLABORATIVE BUILDS & CONTINUOUS R&D
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 space-y-3"
              >
                <div className="font-display font-extrabold text-2xl text-white">
                  {item.metric}
                </div>
                <div className="font-mono text-xs font-bold text-vividOrange uppercase">
                  {item.title}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
