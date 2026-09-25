"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FracturedDividerProps {
  variant?: 1 | 2 | 3 | 4;
  fromColor: string; // The color of the section above
  toColor: string; // The color of the section below
  accentColor?: string; // Highlight edge stroke
  className?: string;
}

export const FracturedDivider: React.FC<FracturedDividerProps> = ({
  variant = 1,
  fromColor,
  toColor,
  accentColor = "rgba(255, 77, 0, 0.4)",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Micro parallax shift for physical torn feel
  const xOffset = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  // Unique organic cut paths for each transition
  const pathData = {
    // 1: Organic dynamic paper rip (e.g. Projects Cream -> Tech Stack Navy)
    1: {
      accent:
        "M0,45 Q160,72 340,35 T700,58 Q900,22 1080,54 T1280,30 Q1360,50 1440,38",
      fill:
        "M0,90 L0,45 Q160,72 340,35 T700,58 Q900,22 1080,54 T1280,30 Q1360,50 1440,38 L1440,90 Z",
    },
    // 2: Crystalline geometric fracture (e.g. Tech Stack Navy -> Certs Cream)
    2: {
      accent:
        "M0,38 L140,65 L280,28 L440,62 L600,32 L780,68 L940,26 L1100,60 L1260,34 L1440,55",
      fill:
        "M0,90 L0,38 L140,65 L280,28 L440,62 L600,32 L780,68 L940,26 L1100,60 L1260,34 L1440,55 L1440,90 Z",
    },
    // 3: Layered digital tear (e.g. Certs Cream -> Education Navy)
    3: {
      accent:
        "M0,48 C200,18 360,75 560,36 C760,78 960,24 1160,62 C1280,38 1360,52 1440,34",
      fill:
        "M0,90 L0,48 C200,18 360,75 560,36 C760,78 960,24 1160,62 C1280,38 1360,52 1440,34 L1440,90 Z",
    },
    // 4: High-energy electric rupture (e.g. Education Navy -> Contact Vivid Orange)
    4: {
      accent:
        "M0,42 L120,70 L260,28 L420,74 L580,30 L740,70 L900,22 L1060,68 L1220,26 L1340,58 L1440,36",
      fill:
        "M0,90 L0,42 L120,70 L260,28 L420,74 L580,30 L740,70 L900,22 L1060,68 L1220,26 L1340,58 L1440,36 L1440,90 Z",
    },
  };

  const selected = pathData[variant] || pathData[1];

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden pointer-events-none select-none z-20 -my-1 ${className}`}
      style={{ height: "76px" }}
    >
      <motion.svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ x: xOffset }}
      >
        {/* Top section background fill */}
        <rect x="0" y="0" width="1440" height="90" fill={fromColor} />

        {/* Accent glow line beneath the torn edge */}
        <path
          d={selected.accent}
          fill="none"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />

        {/* Bottom section organic torn fill */}
        <path d={selected.fill} fill={toColor} />
      </motion.svg>
    </div>
  );
};
