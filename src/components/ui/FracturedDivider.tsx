"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FracturedDividerProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  fillColor: string; // The color of the section this divider belongs to
  position?: "top" | "bottom";
  accentColor?: string;
  className?: string;
}

export const FracturedDivider: React.FC<FracturedDividerProps> = ({
  variant = 1,
  fillColor,
  position = "bottom",
  accentColor = "rgba(255, 77, 0, 0.2)",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle organic parallax shift on scroll
  const xOffset = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.99, 1.01]);

  // Unique organic torn-paper & fractured editorial SVG paths for each section boundary
  const paths = {
    // 1: Hero -> About (Torn paper jagged edge with micro-fractures)
    1: {
      main: "M0,0 L0,32 Q140,55 280,24 T560,42 Q720,12 880,38 T1160,22 Q1300,48 1440,30 L1440,0 Z",
      accent: "M0,35 Q140,58 280,27 T560,45 Q720,15 880,41 T1160,25 Q1300,51 1440,33",
    },
    // 2: About -> Projects (Asymmetric digital fracture with sharp geometric rips)
    2: {
      main: "M0,0 L0,20 L160,48 L320,18 L480,52 L640,28 L800,58 L960,22 L1120,50 L1280,26 L1440,44 L1440,0 Z",
      accent: "M0,23 L160,51 L320,21 L480,55 L640,31 L800,61 L960,25 L1120,53 L1280,29 L1440,47",
    },
    // 3: Projects -> Tech Stack (Organic tear with layered paper slivers)
    3: {
      main: "M0,0 L0,38 C220,10 380,62 580,26 C780,66 940,16 1140,54 C1260,32 1360,46 1440,28 L1440,0 Z",
      accent: "M0,41 C220,13 380,65 580,29 C780,69 940,19 1140,57 C1260,35 1360,49 1440,31",
    },
    // 4: Tech Stack -> Certifications (Crystalline fracture)
    4: {
      main: "M0,0 L0,26 L180,12 L360,44 L540,20 L720,56 L900,18 L1080,48 L1260,24 L1440,40 L1440,0 Z",
      accent: "M0,29 L180,15 L360,47 L540,23 L720,59 L900,21 L1080,51 L1260,27 L1440,43",
    },
    // 5: Certifications -> Education (Dynamic editorial rip)
    5: {
      main: "M0,0 L0,42 Q200,16 400,48 T800,24 Q1000,56 1200,30 T1440,46 L1440,0 Z",
      accent: "M0,45 Q200,19 400,51 T800,27 Q1000,59 1200,33 T1440,49",
    },
    // 6: Education -> Contact (Deep jagged dramatic tear leading into vivid orange)
    6: {
      main: "M0,0 L0,30 L120,60 L280,20 L440,65 L600,25 L760,62 L920,18 L1080,58 L1240,22 L1440,55 L1440,0 Z",
      accent: "M0,34 L120,64 L280,24 L440,69 L600,29 L760,66 L920,22 L1080,62 L1240,26 L1440,59",
    },
  };

  const currentPath = paths[variant] || paths[1];
  const isBottom = position === "bottom";

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden pointer-events-none select-none z-20 ${
        isBottom ? "-mb-1" : "-mt-1"
      } ${className}`}
      style={{
        height: "56px",
        transform: isBottom ? "none" : "rotate(180deg)",
      }}
    >
      <motion.svg
        viewBox="0 0 1440 68"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ x: xOffset, scaleX }}
      >
        {/* Fractured accent underlayer / paper shadow */}
        <path
          d={currentPath.accent}
          fill="none"
          stroke={accentColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Primary torn page silhouette */}
        <path d={currentPath.main} fill={fillColor} />
      </motion.svg>
    </div>
  );
};
