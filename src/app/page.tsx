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
    <main className="relative min-h-screen bg-[#F4EFE6] text-[#18352F] selection:bg-[#E85D2A] selection:text-white">
      {/* Brand Cinematic Video Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* HERO SECTION (Warm Cream / Deep Ink) */}
      <HeroSection />

      {/* Ticker Ribbon: High-voltage acid lime ribbon */}
      <MarqueeTicker />

      {/* Global Torn-Paper Seam 1: Hero -> 01 About */}
      <FracturedDivider
        variant={1}
        fromColor="#F4EFE6"
        toColor="#DCE8F2"
        accentColor="#E85D2A"
        accentSecondary="rgba(24, 53, 47, 0.2)"
        height={84}
      />

      {/* 01 // ABOUT SECTION (Soft Powder Blue #DCE8F2 + Warm Sand #E9DFCF) */}
      <AboutSection />

      {/* Global Torn-Paper Seam 2: 01 About -> 02 Projects */}
      <FracturedDivider
        variant={2}
        fromColor="#DCE8F2"
        toColor="#FAF6F0"
        accentColor="#B8D83D"
        accentSecondary="#E85D2A"
        height={84}
      />

      {/* 02 // PROJECTS SECTION (Warm Ivory #FAF6F0 + Signal/Burnt Orange #E85D2A) */}
      <ProjectsSection />

      {/* Global Torn-Paper Seam 3: 02 Projects -> 03 Tech Stack */}
      <FracturedDivider
        variant={3}
        fromColor="#FAF6F0"
        toColor="#DCE5D5"
        accentColor="#315CFF"
        accentSecondary="#E85D2A"
        height={84}
      />

      {/* 03 // TECH STACK (Compact Constellation on Soft Sage #DCE5D5 + Deep Forest) */}
      <SkillsSection />

      {/* Global Torn-Paper Seam 4: 03 Tech Stack -> 04 Certifications */}
      <FracturedDivider
        variant={4}
        fromColor="#DCE5D5"
        toColor="#F5EBE1"
        accentColor="#E85D2A"
        accentSecondary="rgba(24, 53, 47, 0.25)"
        height={84}
      />

      {/* 04 // CERTIFICATIONS (Creative Minimal Slips on Muted Peach #F5EBE1) */}
      <CertificationsSection />

      {/* Global Torn-Paper Seam 5: 04 Certifications -> 05 Education */}
      <FracturedDivider
        variant={5}
        fromColor="#F5EBE1"
        toColor="#D9E2EC"
        accentColor="#18352F"
        accentSecondary="#E85D2A"
        height={88}
      />

      {/* 05 // EDUCATION SECTION (Soft Blue-Grey #D9E2EC + Navy) */}
      <EducationSection />

      {/* Global Torn-Paper Seam 6: 05 Education -> 06 Contact */}
      <FracturedDivider
        variant={6}
        fromColor="#D9E2EC"
        toColor="#18352F"
        accentColor="#B8D83D"
        accentSecondary="#E85D2A"
        height={88}
      />

      {/* 06 // CONTACT SECTION (Deep Forest #18352F + Warm Cream with Direct Message Form) */}
      <ContactSection />

      {/* Global Torn-Paper Seam 7: 06 Contact -> Footer */}
      <FracturedDivider
        variant={7}
        fromColor="#18352F"
        toColor="#101820"
        accentColor="#E85D2A"
        accentSecondary="#B8D83D"
        height={84}
      />

      {/* FOOTER (Deep Ink Navy) */}
      <Footer />
    </main>
  );
}
