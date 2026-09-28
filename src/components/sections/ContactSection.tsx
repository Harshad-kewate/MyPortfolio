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
  Send,
  MessageSquare,
  Sparkles,
  Loader2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError("Please fill out all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      // Direct server-side API dispatch — does NOT open mailto: or third party mail clients
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message.");
      }

      setFormSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Automatically reset status message after 7 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 7000);
    } catch (err: any) {
      setFormError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-4 sm:px-8 md:px-12 bg-[#18352F] text-[#F4EFE6] overflow-hidden"
    >
      {/* Editorial HK Watermark */}
      <div className="absolute right-[-2%] bottom-[-5%] font-display text-[180px] sm:text-[280px] font-black text-black/10 select-none pointer-events-none leading-none">
        HK
      </div>

      {/* Ambient Burnt Orange Glow */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E85D2A]/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-10 font-mono text-xs text-[#E9DFCF] font-bold uppercase tracking-widest">
          <span className="px-2.5 py-1 rounded bg-[#E85D2A] text-white">06</span>
          <span>// GET IN TOUCH & CONTACT</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8D83D] animate-pulse" />
        </div>

        {/* Large Typography Callout */}
        <div className="mb-14 sm:mb-20 max-w-4xl">
          <h2 className="font-display text-3xl min-[360px]:text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.92] text-[#F4EFE6] break-normal">
            <span className="inline-block whitespace-nowrap">LET’S</span> <br />
            <span className="inline-block whitespace-nowrap text-[#E85D2A]">CONNECT.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[#F4EFE6]/90 max-w-2xl font-normal leading-relaxed">
            Open for AI/ML engineering internships, full-stack opportunities, and collaborative software projects.
            Send a direct message below.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Direct Message Form + Fast Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Real In-Page Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#E9DFCF] text-[#18352F] rounded-3xl p-4 sm:p-8 md:p-10 border-2 border-[#18352F] shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#18352F]/15">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#E85D2A]" />
                <span className="font-mono text-xs text-[#18352F] font-bold uppercase tracking-wider">
                  SEND A MESSAGE
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#18352F]/70 font-semibold">
                DIRECT CONTACT
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs font-bold text-[#18352F] uppercase tracking-wider"
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
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#18352F]/30 text-[#18352F] placeholder-[#18352F]/40 font-sans text-sm focus:outline-none focus:border-[#E85D2A] focus:ring-1 focus:ring-[#E85D2A] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs font-bold text-[#18352F] uppercase tracking-wider"
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
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#18352F]/30 text-[#18352F] placeholder-[#18352F]/40 font-sans text-sm focus:outline-none focus:border-[#E85D2A] focus:ring-1 focus:ring-[#E85D2A] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs font-bold text-[#18352F] uppercase tracking-wider"
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
                  className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#18352F]/30 text-[#18352F] placeholder-[#18352F]/40 font-sans text-sm focus:outline-none focus:border-[#E85D2A] focus:ring-1 focus:ring-[#E85D2A] transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {formError && (
                <div className="font-mono text-xs text-rose-800 bg-rose-100 border border-rose-300 px-3.5 py-2.5 rounded-xl font-bold">
                  {formError}
                </div>
              )}

              {/* Success Notification — Stays on page */}
              {formSubmitted && (
                <div className="p-4 rounded-xl bg-[#DCE5D5] border-2 border-[#18352F] text-[#18352F] font-mono text-xs flex items-center gap-2.5 shadow-sm">
                  <Check className="w-4 h-4 text-[#18352F] shrink-0" />
                  <span className="font-bold">
                    Message sent successfully! Harshad has received your note and will follow up shortly.
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="SEND"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold bg-[#E85D2A] text-white hover:bg-[#18352F] transition-all shadow-lg hover:scale-102 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE ↗</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Fast Channels & Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="bg-[#E9DFCF] text-[#18352F] rounded-3xl p-4 sm:p-7 border-2 border-[#18352F] shadow-xl space-y-4">
              <span className="font-mono text-xs text-[#E85D2A] font-bold uppercase tracking-wider block">
                // DIRECT EMAIL ADDRESS
              </span>

              <div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-display font-black text-xl sm:text-2xl text-[#18352F] hover:text-[#E85D2A] transition-colors break-all block"
                >
                  {contactInfo.email}
                </a>
                <span className="font-mono text-xs text-[#18352F]/70 mt-1 block font-semibold">
                  PHONE: {contactInfo.phone} • BHOPAL, MP, INDIA
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold bg-[#18352F] text-[#E9DFCF] hover:bg-[#E85D2A] hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B8D83D]" />
                      <span className="text-[#B8D83D]">COPIED TO CLIPBOARD!</span>
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
            <div className="bg-[#E9DFCF] text-[#18352F] rounded-2xl p-5 border-2 border-[#18352F] shadow-xl flex items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-sm text-[#18352F]">
                  OFFICIAL RESUME
                </div>
                <div className="font-mono text-[11px] text-[#18352F]/70 font-semibold">
                  PDF FORMAT // 1-PAGE SUMMARY
                </div>
              </div>

              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                data-cursor="RESUME"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold bg-[#18352F] text-[#E9DFCF] hover:bg-[#E85D2A] hover:text-white transition-colors shadow-md shrink-0"
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
              className="group p-5 rounded-2xl bg-[#E9DFCF] border-2 border-[#18352F] hover:border-[#E85D2A] transition-all flex items-center justify-between shadow-xl text-[#18352F]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#18352F] flex items-center justify-center text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#18352F]/70 uppercase font-semibold">
                    PROFESSIONAL NETWORK
                  </div>
                  <div className="font-display font-bold text-base text-[#18352F] group-hover:text-[#E85D2A] transition-colors">
                    LinkedIn Profile
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#18352F] group-hover:text-[#E85D2A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* GitHub Direct Card */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="group p-5 rounded-2xl bg-[#E9DFCF] border-2 border-[#18352F] hover:border-[#E85D2A] transition-all flex items-center justify-between shadow-xl text-[#18352F]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#18352F] flex items-center justify-center text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#18352F]/70 uppercase font-semibold">
                    CODE REPOSITORIES
                  </div>
                  <div className="font-display font-bold text-base text-[#18352F] group-hover:text-[#E85D2A] transition-colors">
                    GitHub / @Harshad-kewate
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#18352F] group-hover:text-[#E85D2A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
