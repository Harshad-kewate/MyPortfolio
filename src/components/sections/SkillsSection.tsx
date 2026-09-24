"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/ui/SectionHeader";
import { skillCategories } from "@/data/portfolioData";
import { Terminal, Cpu, Database, Globe, Wrench, Layers } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    tag: string;
    context: string;
  } | null>(null);

  const categoryIcons = [
    <Terminal key="0" className="w-4 h-4 text-vividOrange" />,
    <Cpu key="1" className="w-4 h-4 text-electricBlue" />,
    <Globe key="2" className="w-4 h-4 text-chartreuse" />,
    <Database key="3" className="w-4 h-4 text-vividOrange" />,
    <Wrench key="4" className="w-4 h-4 text-electricBlue" />,
  ];

  return (
    <section id="stack" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-charcoal-900 text-cream-100 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          category="SYSTEMS & TECHNOLOGIES"
          title="TECHNICAL STACK & TOOLCHAIN"
          theme="dark"
          description="Strictly verified technologies applied in actual machine learning pipelines, full-stack web applications, and low-level algorithmic logic."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-6 border-b border-white/10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIdx(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 border ${
                activeCategoryIdx === idx
                  ? "bg-white text-charcoal-900 border-white font-bold shadow-lg"
                  : "bg-white/5 text-slate-300 border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              {categoryIcons[idx]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Matrix View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Active Category Skill Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
              <span className="uppercase tracking-wider text-chartreuse font-bold">
                // {skillCategories[activeCategoryIdx].category}
              </span>
              <span>{skillCategories[activeCategoryIdx].skills.length} VERIFIED STACK ITEMS</span>
            </div>

            <p className="text-slate-300 text-sm font-normal mb-4">
              {skillCategories[activeCategoryIdx].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories[activeCategoryIdx].skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3, scale: 1.01 }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  className={`p-5 rounded-2xl bg-navy-950 border transition-all duration-200 cursor-pointer ${
                    skill.highlight
                      ? "border-white/20 hover:border-chartreuse shadow-lg"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-bold text-lg sm:text-xl text-white">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/10 text-chartreuse font-semibold">
                      {skill.tag}
                    </span>
                  </div>

                  <p className="text-slate-400 font-mono text-xs leading-relaxed">
                    {skill.context}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Technical Inspector & Context Panel (4 cols) */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-navy-950 border border-white/15 sticky top-28 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <span className="text-vividOrange font-bold">// STACK TELEMETRY</span>
                <span className="text-chartreuse animate-pulse">ACTIVE</span>
              </div>

              {hoveredSkill ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">
                      SELECTED TECHNOLOGY
                    </div>
                    <div className="font-display text-2xl font-bold text-white mt-1">
                      {hoveredSkill.name}
                    </div>
                    <div className="font-mono text-xs text-chartreuse mt-0.5">
                      TAG: {hoveredSkill.tag}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-charcoal-900 border border-white/10 space-y-1.5 font-mono text-xs">
                    <div className="text-slate-400 text-[10px] uppercase">PRACTICAL APPLICATION</div>
                    <div className="text-slate-200 leading-relaxed">{hoveredSkill.context}</div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
                    <span>Verified in Harshad&apos;s project repositories</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 font-mono text-xs text-slate-400 py-6 text-center">
                  <Layers className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                  <p className="text-slate-300">Hover over any technology node to inspect practical implementation context.</p>
                  <p className="text-slate-500 text-[11px]">Strict zero-hallucination policy: no arbitrary percentage meters.</p>
                </div>
              )}

              {/* Complete Stack Overview Strip */}
              <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
                <div className="text-slate-400 text-[10px] uppercase">ENGINEERING SPECTRUM</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "C++", "C", "JavaScript", "React", "Next.js", "NumPy", "Pandas", "SQL", "Scikit-Learn", "FastAPI", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Git"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
