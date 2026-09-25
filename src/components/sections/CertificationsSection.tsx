"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import { Award, ShieldCheck, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#FFF9F0] text-[#101820] overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-10 right-4 font-mono text-[160px] font-black text-charcoal-900/[0.03] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center justify-between mb-8 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-charcoal-900 text-white font-bold">
              04
            </span>
            <span className="uppercase tracking-widest text-charcoal-700">
              // VERIFIED INDUSTRY CREDENTIALS
            </span>
          </div>

          <span className="font-mono text-xs text-charcoal-700 hidden sm:block">
            CLICK CARD TO OPEN DIRECT PDF CERTIFICATE ↗
          </span>
        </div>

        {/* Section Heading & Minimal Copy */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-charcoal-900 leading-[0.92]">
            AUTHENTIC <br />
            <span className="text-vividOrange">CREDENTIALS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            Directly viewable certificates across Python, Generative AI, Cybersecurity, and Cloud Computing. Every certificate opens authentic verified files.
          </p>
        </div>

        {/* Editorial Layout: Asymmetric Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => {
            const isClickable = Boolean(cert.fileUrl || cert.verifyUrl);
            const targetUrl = cert.fileUrl || cert.verifyUrl || "#";

            const CardWrapper = isClickable ? motion.a : motion.div;
            const cardProps = isClickable
              ? {
                  href: targetUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-cursor": "VIEW PDF",
                }
              : {};

            return (
              <CardWrapper
                key={cert.id}
                {...(cardProps as any)}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 transition-all shadow-md hover:shadow-2xl cursor-pointer ${
                  idx === 0
                    ? "bg-white border-charcoal-900 md:col-span-2 lg:col-span-1 shadow-lg"
                    : "bg-white border-charcoal-900/10 hover:border-charcoal-900"
                }`}
              >
                {/* Top Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-vividOrange uppercase tracking-wider">
                      // {cert.issuer}
                    </span>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal-900/5 text-[11px] font-mono text-charcoal-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{cert.year || "VERIFIED"}</span>
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-charcoal-900 leading-snug group-hover:text-vividOrange transition-colors">
                      {cert.title}
                    </h3>
                    <div className="font-mono text-xs text-charcoal-700 mt-1">
                      {cert.organization}
                      {cert.certCode && ` • Code: ${cert.certCode}`}
                    </div>
                  </div>

                  {/* Competency Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-0.5 rounded-md bg-charcoal-900/5 font-mono text-[10px] text-charcoal-800 font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-charcoal-900/10 mt-6 flex items-center justify-between font-mono text-xs">
                  {isClickable ? (
                    <div className="flex items-center gap-2 font-bold text-charcoal-900 group-hover:text-vividOrange transition-colors">
                      <FileText className="w-4 h-4 text-vividOrange" />
                      <span>OPEN CERTIFICATE PDF</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  ) : (
                    <span className="text-charcoal-700">Verified on Resume</span>
                  )}

                  <span className="text-[11px] font-bold text-charcoal-700">
                    {cert.category}
                  </span>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
