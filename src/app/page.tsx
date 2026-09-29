"use client";

import React, { useState, useEffect } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FracturedDivider } from "@/components/ui/FracturedDivider";
import { LinkedInToast } from "@/components/ui/LinkedInToast";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return sessionStorage.getItem("portfolio_has_loaded") === "true";
      } catch (e) {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "auto";
        }
        if (sessionStorage.getItem("portfolio_has_loaded") === "true") {
          setLoadingComplete(true);
        }
      } catch (e) {}
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-[#F4EFE6] text-[#111111] selection:bg-[#FFD928] selection:text-[#111111] overflow-x-hidden">
      {/* Brand Cinematic Video Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Welcome LinkedIn Profile Notification */}
      <LinkedInToast active={loadingComplete} />

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* HERO SECTION (Warm Cream / Deep Ink) */}
      <HeroSection />

      {/* Ticker Ribbon: High-voltage yellow ribbon */}
      <MarqueeTicker />

      {/* Global Torn-Paper Seam 1: Hero -> 01 About */}
      <FracturedDivider
        variant={1}
        fromColor="#F4EFE6"
        toColor="#DCE8F2"
        accentColor="#E52420"
        accentSecondary="#FFD928"
        height={84}
      />

      {/* 01 // ABOUT SECTION (Soft Powder Blue #DCE8F2 + Warm Sand #E9DFCF) */}
      <AboutSection />

      {/* Global Torn-Paper Seam 2: 01 About -> 02 Projects (Warm Cream) */}
      <FracturedDivider
        variant={2}
        fromColor="#DCE8F2"
        toColor="#FFF3E6"
        accentColor="#F36F68"
        accentSecondary="#FFD84D"
        height={84}
      />

      {/* 02 // PROJECTS SECTION (Warm Editorial Cream #FFF3E6 + Deep Navy #162A44 + Soft Coral #F36F68) */}
      <ProjectsSection />

      {/* Global Torn-Paper Seam 3: 02 Projects -> 03 Technology (Champagne #F8E7C9) */}
      <FracturedDivider
        variant={3}
        fromColor="#FFF3E6"
        toColor="#F8E7C9"
        accentColor="#E85D2A"
        accentSecondary="#FFD84D"
        height={88}
      />

      {/* 03 // TECHNOLOGY SECTION (Champagne #F8E7C9 + Deep Navy #162A44) */}
      <SkillsSection />

      {/* Global Torn-Paper Seam 4: 03 Technology -> 04 Certifications (Warm Neutral) */}
      <FracturedDivider
        variant={4}
        fromColor="#F8E7C9"
        toColor="#FFF4D6"
        accentColor="#FFD84D"
        accentSecondary="#E85D2A"
        height={88}
      />

      {/* 04 // CERTIFICATIONS SECTION (Horizontal Slider on Warm Neutral #FFF4D6) */}
      <CertificationsSection />

      {/* Global Torn-Paper Seam 5: 04 Certifications -> 05 Academic Journey (Warm Cream) */}
      <FracturedDivider
        variant={5}
        fromColor="#FFF4D6"
        toColor="#F5EBDD"
        accentColor="#E85D2A"
        accentSecondary="#FFD84D"
        height={92}
      />

      {/* 05 // ACADEMIC JOURNEY (Warm Cream #F5EBDD + Soft Sage #E7F0EA + Deep Navy #162A44) */}
      <EducationSection />

      {/* Global Torn-Paper Seam 6: 05 Academic Journey -> 06 Contact */}
      <FracturedDivider
        variant={6}
        fromColor="#F5EBDD"
        toColor="#18352F"
        accentColor="#E85D2A"
        accentSecondary="#FFD84D"
        height={88}
      />

      {/* 06 // CONTACT SECTION (Deep Forest #18352F + Warm Cream with Direct Send API) */}
      <ContactSection />

      {/* Global Torn-Paper Seam 7: 06 Contact -> Footer */}
      <FracturedDivider
        variant={7}
        fromColor="#18352F"
        toColor="#101820"
        accentColor="#E52420"
        accentSecondary="#FFD928"
        height={84}
      />

      {/* FOOTER (Deep Ink Navy) */}
      <Footer />
    </main>
  );
}
