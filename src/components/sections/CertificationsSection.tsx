"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Award,
} from "lucide-react";

export const CertificationsSection: React.FC = () => {
  // Only display certificates with real, verified files
  const verifiedCerts = certifications.filter((c) => Boolean(c.fileUrl || c.verifyUrl));
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const total = verifiedCerts.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  // Smooth scroll to card when index changes
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 360; // approximate card width + gap
      sliderRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handleOpenCertificate = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#FFF4D6] text-[#111111] overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute top-6 left-[-1%] font-display text-[120px] sm:text-[200px] font-black text-[#111111]/[0.035] select-none pointer-events-none leading-none tracking-tighter">
        HONORS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Identifier & Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-[#111111]/20">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-[#E52420] text-white font-black tracking-wider border-2 border-[#111111]">
              04
            </span>
            <span className="uppercase tracking-widest text-[#111111] font-black">
              // VERIFIED CREDENTIALS
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E52420] animate-pulse" />
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#111111]/70 mr-2">
              [ 0{currentIndex + 1} / 0{total} ]
            </span>

            <button
              onClick={handlePrev}
              aria-label="Previous certificate"
              className="w-10 h-10 rounded-xl bg-white border-2 border-[#111111] shadow-[2px_2px_0px_0px_#111111] hover:bg-[#FFD928] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center text-[#111111]"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next certificate"
              className="w-10 h-10 rounded-xl bg-white border-2 border-[#111111] shadow-[2px_2px_0px_0px_#111111] hover:bg-[#FFD928] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center text-[#111111]"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="font-display text-3xl min-[360px]:text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#111111] leading-[0.92] break-words">
            VERIFIED <br />
            <span className="text-[#E52420] underline decoration-[#FFD928] decoration-4">
              CERTIFICATES.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#111111]/80 font-medium leading-relaxed">
            Click any certificate card to open the authentic, official document. No fake URLs.
          </p>
        </div>

        {/* HORIZONTAL SLIDER CONTAINER */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {verifiedCerts.map((cert, idx) => {
            const fileUrl = cert.fileUrl || cert.verifyUrl || "#";
            const isActive = idx === currentIndex;

            return (
              <div
                key={cert.id}
                className="w-[260px] min-[360px]:w-[290px] sm:w-[350px] md:w-[380px] shrink-0 snap-start select-none"
              >
                {/* Clickable Card Anchor */}
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenCertificate(fileUrl);
                  }}
                  data-cursor="OPEN PDF"
                  className={`group block h-full p-6 sm:p-7 rounded-3xl border-2 border-[#111111] transition-all flex flex-col justify-between ${
                    isActive
                      ? "bg-white shadow-[6px_6px_0px_0px_#E52420] ring-2 ring-[#FFD928]"
                      : "bg-[#FFF9F0] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#111111] hover:-translate-y-1"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Marker: Index & Organization Logo / Badge */}
                    <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111]/15">
                      <span className="font-mono text-xs font-black text-[#111111] px-2.5 py-1 rounded bg-[#FFD928] border-2 border-[#111111]">
                        0{idx + 1} // AUTHENTIC
                      </span>

                      <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-[#111111]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E52420]" />
                        <span>PDF VERIFIED</span>
                      </span>
                    </div>

                    {/* Small Certificate Preview Thumbnail */}
                    <div className="w-full aspect-[4/3] rounded-2xl bg-[#FFF4D6] border-2 border-[#111111] flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-102 transition-transform">
                      <FileText className="w-12 h-12 text-[#E52420] mb-2" />
                      <span className="font-display font-black text-xs text-center text-[#111111] uppercase tracking-tight line-clamp-2">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-[10px] text-[#111111]/60 mt-1 uppercase">
                        {cert.year || "VERIFIED"}
                      </span>

                      {/* Corner Open Indicator */}
                      <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-[#FFD928] border border-[#111111] flex items-center justify-center text-[#111111] group-hover:bg-[#E52420] group-hover:text-white transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111] tracking-tight group-hover:text-[#E52420] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    {/* Minimal Metadata */}
                    <div className="font-mono text-xs text-[#111111]/70 font-semibold space-y-1">
                      <div>ISSUER: <strong>{cert.issuer}</strong></div>
                      <div>AUTHORITY: {cert.organization}</div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="mt-6 pt-4 border-t-2 border-[#111111]/15">
                    <span className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs font-black bg-[#FFD928] text-[#111111] border-2 border-[#111111] group-hover:bg-[#E52420] group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_#111111]">
                      <span>VIEW OFFICIAL PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Active Dot Indicators */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {verifiedCerts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Jump to certificate ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === currentIndex
                  ? "w-8 bg-[#E52420]"
                  : "w-2.5 bg-[#111111]/30 hover:bg-[#111111]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
