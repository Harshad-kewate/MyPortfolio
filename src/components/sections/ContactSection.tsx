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
  Globe,
  Phone,
  ArrowUpRight,
  Send,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-vividOrange text-white overflow-hidden">
      {/* Abstract geometric background elements */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-black/10 blur-2xl pointer-events-none" />
      <div className="absolute left-10 top-10 font-mono text-[140px] font-black text-black/5 select-none pointer-events-none leading-none">
        06
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs text-charcoal-900 font-bold uppercase tracking-widest">
          <span className="px-2.5 py-1 rounded bg-black/15 text-white">06</span>
          <span>// INITIATE TRANSMISSION</span>
        </div>

        {/* Large Typography Callout */}
        <div className="mb-14 sm:mb-20 max-w-4xl">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] text-white">
            LET’S BUILD SOMETHING COMPUTATIONAL, SCALABLE & USEFUL.
          </h2>
          <p className="mt-6 text-base sm:text-xl text-white/90 max-w-2xl font-normal leading-relaxed">
            Open for software engineering internships, machine learning research collaborations, and ambitious AI product builds.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Transmission Card (7 cols) */}
          <div className="md:col-span-7 bg-charcoal-900 rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="text-chartreuse font-bold">// DIRECT INBOX</span>
                <span className="text-slate-500">BHOPAL, MP [IST]</span>
              </div>

              <div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  PRIMARY EMAIL ADDRESS
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white hover:text-vividOrange transition-colors break-all mt-1 block"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-chartreuse" />
                      <span className="text-chartreuse">COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-vividOrange text-white hover:bg-vividOrange-hover transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>WRITE EMAIL</span>
                </a>
              </div>

              {/* Phone info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 font-mono text-sm text-slate-300">
                <Phone className="w-4 h-4 text-chartreuse" />
                <span>PHONE: {contactInfo.phone}</span>
              </div>
            </div>

            {/* Resume Download Callout inside box */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-base text-white">OFFICIAL RESUME</div>
                <div className="font-mono text-xs text-slate-400">PDF FORMAT // 1-PAGE SUMMARY</div>
              </div>

              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-chartreuse text-charcoal-900 hover:bg-chartreuse-hover transition-colors shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Presence (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            {/* LinkedIn Card */}
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
                  <div className="font-mono text-xs text-slate-400 uppercase">PROFESSIONAL PROFILE</div>
                  <div className="font-display font-bold text-lg text-white group-hover:text-chartreuse transition-colors">
                    LinkedIn / harshad-kewate
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* GitHub Card */}
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

            {/* Portfolio Link Card */}
            <a
              href={contactInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-chartreuse/20 border border-chartreuse/40 flex items-center justify-center text-chartreuse">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">WEB DEPLOYMENT</div>
                  <div className="font-display font-bold text-lg text-white group-hover:text-chartreuse transition-colors">
                    harshad-kewate.github.io
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
