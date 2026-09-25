"use client";

import React, { useState } from "react";
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

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F4EFE6] text-[#111111] selection:bg-[#FFD928] selection:text-[#111111]">
      {/* Brand Cinematic Video Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

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

      {/* Global Torn-Paper Seam 2: 01 About -> 02 Projects */}
      <FracturedDivider
        variant={2}
        fromColor="#DCE8F2"
        toColor="#FAF6F0"
        accentColor="#FFD928"
        accentSecondary="#E52420"
        height={84}
      />

      {/* 02 // PROJECTS SECTION (Warm Ivory #FAF6F0 + Signal Orange) */}
      <ProjectsSection />

      {/* Global Torn-Paper Seam 3: 02 Projects -> 03 Technology (Coral Red) */}
      <FracturedDivider
        variant={3}
        fromColor="#FAF6F0"
        toColor="#F45B55"
        accentColor="#FFD84D"
        accentSecondary="#FF7770"
        height={88}
      />

      {/* 03 // TECHNOLOGY SECTION (Coral Red #F45B55 + Warm Yellow Boxes #FFD84D) */}
      <SkillsSection />

      {/* Global Torn-Paper Seam 4: 03 Technology -> 04 Certifications (Warm Neutral) */}
      <FracturedDivider
        variant={4}
        fromColor="#F45B55"
        toColor="#FFF4D6"
        accentColor="#FFD84D"
        accentSecondary="#FF7770"
        height={88}
      />

      {/* 04 // CERTIFICATIONS SECTION (Horizontal Slider on Warm Neutral #FFF4D6) */}
      <CertificationsSection />

      {/* Global Torn-Paper Seam 5: 04 Certifications -> 05 Academic Journey (Soft Coral Red) */}
      <FracturedDivider
        variant={5}
        fromColor="#FFF4D6"
        toColor="#F06A63"
        accentColor="#FFD84D"
        accentSecondary="#FF8A7F"
        height={92}
      />

      {/* 05 // ACADEMIC JOURNEY (Soft Coral Red #F06A63 + Bright Yellow #FFD84D) */}
      <EducationSection />

      {/* Global Torn-Paper Seam 6: 05 Academic Journey -> 06 Contact */}
      <FracturedDivider
        variant={6}
        fromColor="#F06A63"
        toColor="#18352F"
        accentColor="#FFD84D"
        accentSecondary="#171717"
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
