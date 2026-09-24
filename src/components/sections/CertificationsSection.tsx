"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/ui/SectionHeader";
import { certifications } from "@/data/portfolioData";
import { Award, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-cream text-charcoal-900 border-b border-charcoal-900/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          category="INDUSTRY SIMULATIONS & CREDENTIALS"
          title="CERTIFICATIONS & SPECIALIZATIONS"
          theme="light"
          description="Verified certifications and corporate simulations completed across Data Analytics, Cybersecurity, Cloud Computing, Generative AI, and Python."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-charcoal-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Issuer & Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-vividOrange">
                    // {cert.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal-900/5 text-[11px] font-mono text-charcoal-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-charcoal-900 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 font-mono text-xs text-charcoal-700">
                    <span className="font-bold text-charcoal-900">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.organization}</span>
                  </div>
                </div>

                {/* Topics Covered */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-charcoal-700 uppercase mb-2">
                    Validated Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-charcoal-900/5 font-mono text-[11px] text-charcoal-800 border border-charcoal-900/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Genuine Status */}
              <div className="pt-6 border-t border-charcoal-900/10 mt-6 flex items-center justify-between font-mono text-xs">
                <span className="text-charcoal-700 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Credential Completed</span>
                </span>

                <span className="text-[11px] font-bold text-charcoal-800">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
