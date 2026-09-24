"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Download,
  Linkedin,
  Github,
  ArrowUpRight,
  Phone,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-vividOrange text-white overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute right-[-2%] bottom-[-5%] font-display text-[180px] sm:text-[240px] font-black text-black/5 select-none pointer-events-none leading-none">
        HK
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-10 font-mono text-xs text-charcoal-900 font-bold uppercase tracking-widest">
          <span className="px-2.5 py-1 rounded bg-black/15 text-white">06</span>
          <span>// DIRECT TRANSMISSION & CONTACT</span>
        </div>

        {/* Large Typography Callout */}
        <div className="mb-14 sm:mb-20 max-w-4xl">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-white">
            LET’S <br />
            CONNECT.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl font-normal leading-relaxed">
            Open for AI/ML engineering internships, research collaborations, and ambitious software builds.
          </p>
        </div>

        {/* Main Action Block — Direct Email Prominent */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left: Primary Direct Email Action Card (7 cols) */}
          <div className="md:col-span-7 bg-charcoal-900 rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <span className="font-mono text-xs text-chartreuse font-bold uppercase tracking-wider block">
                // DIRECT INBOX ACCESS
              </span>

              {/* Email Address Display */}
              <div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white hover:text-vividOrange transition-colors break-all block"
                >
                  {contactInfo.email}
                </a>
                <span className="font-mono text-xs text-slate-400 mt-1 block">
                  PHONE: {contactInfo.phone} • BHOPAL, MP, INDIA
                </span>
              </div>

              {/* Direct Mailto Primary Button + Copy Option */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  data-cursor="EMAIL"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-vividOrange text-white hover:bg-vividOrange-hover transition-all shadow-lg hover:scale-102"
                >
                  <Mail className="w-4 h-4" />
                  <span>GET IN TOUCH (SEND EMAIL)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-chartreuse" />
                      <span className="text-chartreuse font-bold">COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Resume Download Strip inside box */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-sm text-white">OFFICIAL RESUME</div>
                <div className="font-mono text-[11px] text-slate-400">PDF FORMAT // 1-PAGE SUMMARY</div>
              </div>

              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-chartreuse text-charcoal-900 hover:bg-chartreuse-hover transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Direct Profile Cards (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            {/* LinkedIn Direct Card */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-electricBlue/20 border border-electricBlue/40 flex items-center justify-center text-electricBlue">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">PROFESSIONAL NETWORK</div>
                  <div className="font-display font-bold text-lg text-white group-hover:text-chartreuse transition-colors">
                    LinkedIn Profile
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* GitHub Direct Card */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">CODE REPOSITORIES</div>
                  <div className="font-display font-bold text-lg text-white group-hover:text-chartreuse transition-colors">
                    GitHub / @Harshad-kewate
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
