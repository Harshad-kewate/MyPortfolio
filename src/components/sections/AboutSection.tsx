"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/ui/SectionHeader";
import { bioData, contactInfo } from "@/data/portfolioData";
import { Brain, Code2, Database, Terminal, ArrowUpRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream text-charcoal-900 border-b border-charcoal-900/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          category="BACKGROUND & ENGINEERING DIRECTION"
          title="BRIDGING THEORY, DATA & SCALABLE CODE"
          theme="light"
          description="A look into my academic journey, core engineering interests, and technical philosophy as an AIML undergraduate."
        />

        {/* Editorial Pull Quote */}
        <div className="mb-16 pb-12 border-b border-charcoal-900/10">
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal-900 leading-[1.15]">
            “Motivated to transform mathematical models and raw datasets into tangible, high-impact systems that solve actual real-world problems.”
          </blockquote>
        </div>

        {/* Asymmetric 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Academic & Background (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-vividOrange uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal-900">
              AIML at Bansal Institute
            </h3>

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              Currently pursuing my B.Tech in Artificial Intelligence & Machine Learning (2024–2028) at{" "}
              <strong>Bansal Institute Of Science & Technology, Bhopal</strong>. Maintaining an academic
              standing of <strong>7.11 CGPA</strong> through my 3rd semester.
            </p>

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              Before my undergraduate degree, I completed my Class XII (74%) and Class X (65%) at Govt.
              Excellence School, Pandhurna, building deep curiosity in mathematics, physics, and computational thinking.
            </p>

            <div className="p-4 rounded-xl bg-charcoal-900/5 border border-charcoal-900/10 font-mono text-xs text-charcoal-800 space-y-2">
              <div className="font-bold uppercase tracking-wider text-charcoal-900">// ACADEMIC STANDING</div>
              <div className="flex justify-between">
                <span>Degree:</span>
                <span className="font-bold">B.Tech AIML (2024-2028)</span>
              </div>
              <div className="flex justify-between">
                <span>Current CGPA:</span>
                <span className="font-bold text-vividOrange">7.11 / 10.0</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span>Bhopal, MP, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Technical Philosophy & Focus Areas (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-electricBlue uppercase tracking-wider">
              <Brain className="w-4 h-4" />
              <span>TECHNICAL DIRECTIONS</span>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal-900">
              Focus & Research Areas
            </h3>

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              My engineering focus centers on applying machine learning to domain-rich datasets—such as atmospheric climate
              observations with <strong>ECMWF ERA5</strong>—as well as speech-to-text multilingual translation pipelines and
              robust web software.
            </p>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-charcoal-800">
              {bioData.focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-charcoal-900/5">
                  <span className="text-vividOrange font-bold">0{idx + 1}</span>
                  <span className="font-sans font-medium">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engineering Track Record & Collaboration (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-chartreuse-dark uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>PRACTICAL EXECUTION</span>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal-900">
              Hackathons & Logic Building
            </h3>

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              Believer in learning by shipping. I have developed <strong>10+ C++ programs and custom algorithms</strong> to
              solidify low-level memory logic, pointer handling, and computational efficiency.
            </p>

            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              Participated in <strong>5+ hackathons and collaborative team sprints</strong>, turning ideas into working prototypes
              under tight deadlines while coordinating full-stack integrations.
            </p>

            <div className="pt-2">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold px-4 py-2.5 rounded-full bg-charcoal-900 text-white hover:bg-vividOrange transition-colors"
              >
                <span>VISIT GITHUB REPOSITORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
