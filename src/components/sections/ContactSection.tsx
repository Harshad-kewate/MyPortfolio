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
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    if (formError) setFormError("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError("Please fill out all fields before sending.");
      return;
    }

    // Construct structured mailto link
    const subject = `Portfolio Contact — ${formState.name.trim()}`;
    const body = `Hi Harshad,

${formState.message.trim()}

---
Sender Name: ${formState.name.trim()}
Sender Email: ${formState.email.trim()}`;

    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setFormSubmitted(true);
    setFormError("");

    // Trigger user's default email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#FF4D1C] text-white overflow-hidden"
    >
      {/* Editorial HK Watermark */}
      <div className="absolute right-[-2%] bottom-[-5%] font-display text-[180px] sm:text-[280px] font-black text-black/5 select-none pointer-events-none leading-none">
        HK
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-chartreuse/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
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
          <p className="mt-6 text-lg sm:text-xl text-white/95 max-w-2xl font-normal leading-relaxed">
            Open for AI/ML engineering internships, research collaborations, and ambitious software builds.
            Send a direct note below or reach out via email.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Direct DM Form + Fast Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Compact Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-charcoal-900 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-chartreuse" />
                <span className="font-mono text-xs text-chartreuse font-bold uppercase tracking-wider">
                  DIRECT TRANSMISSION FORM
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                OPENS PRE-FILLED MAIL CLIENT
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-chartreuse focus:ring-1 focus:ring-chartreuse transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-chartreuse focus:ring-1 focus:ring-chartreuse transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Share project details, opportunities, or inquiries..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-chartreuse focus:ring-1 focus:ring-chartreuse transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {formError && (
                <div className="font-mono text-xs text-rose-400 bg-rose-950/40 border border-rose-800/50 px-3 py-2 rounded-lg">
                  {formError}
                </div>
              )}

              {/* Success Notification */}
              {formSubmitted && (
                <div className="p-3.5 rounded-xl bg-chartreuse/15 border border-chartreuse/40 text-chartreuse font-mono text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    Email client launched! If it didn't open automatically, send directly to{" "}
                    <strong>{contactInfo.email}</strong>.
                  </span>
                </div>
              )}

              {/* Submit Button & Direct Fast Mailto Alternative */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  data-cursor="TRANSMIT"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-vividOrange text-white hover:bg-vividOrange-hover transition-all shadow-lg hover:scale-102"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE ↗</span>
                </button>

                <a
                  href={`mailto:${contactInfo.email}`}
                  data-cursor="EMAIL"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>DIRECT EMAIL ME ↗</span>
                </a>
              </div>
            </form>
          </div>

          {/* Column 2: Direct Channels & Verified Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="bg-charcoal-900 rounded-3xl p-6 sm:p-7 border border-white/10 shadow-xl space-y-4">
              <span className="font-mono text-xs text-chartreuse font-bold uppercase tracking-wider block">
                // VERIFIED PRIMARY INBOX
              </span>

              <div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-display font-black text-xl sm:text-2xl text-white hover:text-vividOrange transition-colors break-all block"
                >
                  {contactInfo.email}
                </a>
                <span className="font-mono text-xs text-slate-400 mt-1 block">
                  PHONE: {contactInfo.phone} • BHOPAL, MP, INDIA
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-chartreuse" />
                      <span className="text-chartreuse font-bold">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Official Resume Download Card */}
            <div className="bg-charcoal-900 rounded-2xl p-5 border border-white/10 shadow-xl flex items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-sm text-white">
                  OFFICIAL RESUME
                </div>
                <div className="font-mono text-[11px] text-slate-400">
                  PDF FORMAT // 1-PAGE SUMMARY
                </div>
              </div>

              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                data-cursor="RESUME"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold bg-chartreuse text-charcoal-900 hover:bg-chartreuse-hover transition-colors shadow-md shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>

            {/* LinkedIn Direct Card */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LINKEDIN"
              className="group p-5 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-electricBlue/50 transition-all flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-electricBlue/20 border border-electricBlue/40 flex items-center justify-center text-electricBlue">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">
                    PROFESSIONAL NETWORK
                  </div>
                  <div className="font-display font-bold text-base text-white group-hover:text-chartreuse transition-colors">
                    LinkedIn Profile
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* GitHub Direct Card */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="group p-5 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between shadow-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">
                    CODE REPOSITORIES
                  </div>
                  <div className="font-display font-bold text-base text-white group-hover:text-chartreuse transition-colors">
                    GitHub / @Harshad-kewate
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
