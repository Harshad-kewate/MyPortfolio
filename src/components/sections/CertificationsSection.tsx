"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-cream text-charcoal-900 border-b border-charcoal-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-charcoal-900/5 text-charcoal-900 font-bold border border-charcoal-900/10">
            04
          </span>
          <span className="uppercase tracking-widest text-charcoal-700">
            // INDUSTRY SIMULATIONS & CREDENTIALS
          </span>
        </div>

        {/* Section Heading & Minimal Copy */}
        <div className="mb-14 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-charcoal-900 leading-[0.95]">
            CERTIFICATIONS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            Verified corporate simulations and technical certifications completed across data analytics, cloud, and generative AI.
          </p>
        </div>

        {/* Clean Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-charcoal-900/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-vividOrange font-bold uppercase tracking-wider">
                    // {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal-900 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs text-charcoal-700 mt-1">
                    {cert.organization}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-charcoal-900/5 font-mono text-[10px] text-charcoal-800"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-charcoal-900/10 mt-6 flex items-center justify-between font-mono text-[11px] text-charcoal-700">
                <span>Credential Completed</span>
                <span className="font-bold text-charcoal-900">{cert.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
