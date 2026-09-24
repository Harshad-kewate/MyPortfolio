"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { contactInfo } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "STACK", href: "#stack" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ["work", "about", "stack", "certifications", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 md:px-12",
          isScrolled
            ? "bg-navy-950/85 backdrop-blur-md border-b border-white/10 shadow-xl py-3"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Harshad Kewate Portfolio Home"
          >
            <div className="w-9 h-9 rounded bg-vividOrange flex items-center justify-center font-display font-black text-white text-base tracking-tighter shadow-md group-hover:scale-105 transition-transform">
              HK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-cream-100 group-hover:text-vividOrange transition-colors">
                HARSHAD KEWATE
              </span>
              <span className="font-mono text-[10px] text-chartreuse tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-chartreuse animate-pulse" />
                AI & ML ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200",
                    isActive
                      ? "bg-cream-100 text-charcoal-900 font-bold shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile trigger */}
          <div className="flex items-center gap-3">
            <a
              href={contactInfo.resumePath}
              download="Harshad_Kewate_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-chartreuse text-charcoal-900 hover:bg-chartreuse-hover transition-all duration-200 shadow-md hover:scale-102"
              title="Download Harshad Kewate Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME PDF</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-cream-100 hover:text-chartreuse focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            <div className="space-y-3">
              <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
                // SYSTEM NAVIGATION
              </div>

              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-white/10 text-2xl font-display font-bold uppercase tracking-tight text-cream-100 hover:text-vividOrange transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <a
                href={contactInfo.resumePath}
                download="Harshad_Kewate_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-sm font-bold bg-chartreuse text-charcoal-900 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <div className="flex items-center justify-between font-mono text-xs text-slate-400 pt-2">
                <span>BHOPAL, MP, IN</span>
                <span className="text-vividOrange">HARSHAD KEWATE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
