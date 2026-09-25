"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { contactInfo } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "WORK", href: "#work" },
  { label: "STACK", href: "#stack" },
  { label: "ABOUT", href: "#about" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-5 sm:px-8 md:px-12",
          isScrolled
            ? "bg-cream-100/90 dark:bg-charcoal-900/90 backdrop-blur-md border-b border-charcoal-900/10 shadow-sm py-3"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Harshad Kewate"
          >
            <div className="w-8 h-8 rounded-lg bg-vividOrange flex items-center justify-center font-display font-black text-white text-sm shadow-md group-hover:scale-105 transition-transform">
              HK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-charcoal-900 group-hover:text-vividOrange transition-colors">
                HARSHAD KEWATE
              </span>
              <span className="font-sans text-[11px] font-medium text-charcoal-700 tracking-wide">
                AI & ML ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono font-medium tracking-wider text-charcoal-700 hover:text-vividOrange transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vividOrange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Email & Resume */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-charcoal-900 text-white hover:bg-vividOrange transition-all duration-200 shadow-sm"
              title="Send Direct Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </a>

            <a
              href={contactInfo.resumePath}
              download="Harshad_Kewate_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border border-charcoal-900/20 text-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-charcoal-900/5 text-charcoal-900 hover:text-vividOrange focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream-100/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs text-charcoal-700 uppercase tracking-widest block mb-2">
                // NAVIGATION
              </span>

              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 border-b border-charcoal-900/10 text-2xl font-display font-bold uppercase tracking-tight text-charcoal-900 hover:text-vividOrange transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-charcoal-700">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-6 space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs font-bold bg-vividOrange text-white shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH (DIRECT EMAIL)</span>
              </a>

              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs font-bold border border-charcoal-900/20 text-charcoal-900"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
