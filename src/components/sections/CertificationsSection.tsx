"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import { ArrowUpRight, FileText, CheckCircle2, Shield, ExternalLink } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#F5EBE1] text-[#24272E] overflow-hidden"
    >
      {/* Editorial Background Watermark */}
      <div className="absolute top-8 left-[-1%] font-display text-[140px] sm:text-[220px] font-black text-[#24272E]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        HONORS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#E85D2A] text-white font-bold tracking-wider">
              04
            </span>
            <span className="uppercase tracking-widest text-[#24272E] font-bold">
              // VERIFIED CREDENTIALS & HONORS
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#18352F]" />
          </div>

          <span className="font-mono text-xs text-[#24272E]/70 font-semibold hidden sm:inline">
            CLICK ANY SLIP TO OPEN DIRECT OFFICIAL PDF ↗
          </span>
        </div>

        {/* Minimal Section Heading */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#24272E] leading-[0.92]">
            AUTHENTIC <br />
            <span className="text-[#E85D2A]">CREDENTIALS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#24272E]/80 leading-relaxed font-normal">
            Directly verifiable documents across Python software engineering, Generative AI foundation models, and cybersecurity simulations.
          </p>
        </div>

        {/* CREATIVE MINIMAL STAGGERED / DIAGONAL ARRANGEMENT */}
        <div className="relative space-y-4 sm:space-y-6">
          {/* Subtle Vertical Connecting Guide Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-[1.5px] bg-[#24272E]/15 pointer-events-none hidden md:block" />

          {certifications.map((cert, idx) => {
            const targetUrl = cert.fileUrl || cert.verifyUrl || "#";
            const rotationDegree = idx % 2 === 0 ? "-1.5deg" : "1.5deg";

            return (
              <motion.a
                key={cert.id}
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VIEW PDF"
                whileHover={{ x: 6 }}
                className="group relative block p-5 sm:p-7 rounded-2xl bg-[#FAF6F0] border-2 border-[#24272E]/20 hover:border-[#E85D2A] shadow-sm hover:shadow-md transition-all select-none"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  {/* Left: Numbering Marker & Organization Mark */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Index Pin */}
                    <span className="w-10 h-10 rounded-xl bg-[#24272E] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 group-hover:bg-[#E85D2A] transition-colors">
                      0{idx + 1}
                    </span>

                    {/* Miniature Tilted Certificate Thumbnail */}
                    <div
                      style={{ transform: `rotate(${rotationDegree})` }}
                      className="hidden sm:flex w-12 h-14 rounded-lg bg-white border border-[#24272E]/20 shadow-sm items-center justify-center text-[#24272E] group-hover:rotate-0 group-hover:scale-105 transition-transform shrink-0"
                    >
                      <FileText className="w-6 h-6 text-[#E85D2A]" />
                    </div>

                    {/* Title & Concise Metadata */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#24272E]/60 uppercase">
                        <span className="font-bold text-[#E85D2A]">
                          {cert.issuer}
                        </span>
                        <span>•</span>
                        <span>{cert.organization}</span>
                        {cert.year && (
                          <>
                            <span>•</span>
                            <span>{cert.year}</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#24272E] group-hover:text-[#E85D2A] transition-colors tracking-tight">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Status Pill & Direct Action Button */}
                  <div className="flex items-center gap-3 shrink-0 self-end md:self-center font-mono text-xs">
                    <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24272E]/5 text-[#24272E] text-[11px] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#18352F]" />
                      VERIFIED
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold bg-[#24272E] text-white group-hover:bg-[#E85D2A] transition-colors shadow-sm">
                      <span>OPEN DOCUMENT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
