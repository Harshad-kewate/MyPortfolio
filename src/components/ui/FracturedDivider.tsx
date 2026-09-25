"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export type DividerVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface FracturedDividerProps {
  variant?: DividerVariant;
  fromColor: string; // The color of the section above
  toColor: string; // The color of the section below
  accentColor?: string; // Primary highlight edge stroke
  accentSecondary?: string; // Secondary paper shadow / sliver stroke
  className?: string;
  height?: number; // Height in px, default 76
}

export const FracturedDivider: React.FC<FracturedDividerProps> = ({
  variant = 1,
  fromColor,
  toColor,
  accentColor = "#FF4D1C",
  accentSecondary = "rgba(16, 24, 32, 0.15)",
  className = "",
  height = 80,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Sophisticated subtle physical shift on scroll
  const xOffset = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [-8, 8]);
  const scaleX = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [0.995, 1.005]);

  // 7 distinct irregular, torn-paper digital fracture contours
  const pathData: Record<
    DividerVariant,
    { accent: string; accentSub?: string; fill: string }
  > = {
    // 1: Hero -> Projects (Sharp torn paper with micro-perforations)
    1: {
      accent:
        "M0,42 Q140,68 300,32 T620,56 Q780,22 960,52 T1260,28 Q1350,48 1440,36",
      accentSub:
        "M0,45 Q140,71 300,35 T620,59 Q780,25 960,55 T1260,31 Q1350,51 1440,39",
      fill:
        "M0,90 L0,42 Q140,68 300,32 T620,56 Q780,22 960,52 T1260,28 Q1350,48 1440,36 L1440,90 Z",
    },
    // 2: Projects -> Tech (Dynamic jagged rip with triangular paper teeth)
    2: {
      accent:
        "M0,36 L110,64 L240,26 L380,68 L530,30 L690,66 L840,24 L990,62 L1140,28 L1290,60 L1440,34",
      accentSub:
        "M0,40 L110,68 L240,30 L380,72 L530,34 L690,70 L840,28 L990,66 L1140,32 L1290,64 L1440,38",
      fill:
        "M0,90 L0,36 L110,64 L240,26 L380,68 L530,30 L690,66 L840,24 L990,62 L1140,28 L1290,60 L1440,34 L1440,90 Z",
    },
    // 3: Tech -> About (Asymmetric sweeping torn edge with layered paper slivers)
    3: {
      accent:
        "M0,48 C180,16 340,76 540,34 C740,78 920,20 1120,62 C1260,34 1360,54 1440,32",
      accentSub:
        "M0,52 C180,20 340,80 540,38 C740,82 920,24 1120,66 C1260,38 1360,58 1440,36",
      fill:
        "M0,90 L0,48 C180,16 340,76 540,34 C740,78 920,20 1120,62 C1260,34 1360,54 1440,32 L1440,90 Z",
    },
    // 4: About -> Certifications (Crystalline geometric rip with staggered steps)
    4: {
      accent:
        "M0,40 L160,20 L320,58 L480,22 L640,64 L800,26 L960,60 L1120,24 L1280,56 L1440,30",
      accentSub:
        "M0,44 L160,24 L320,62 L480,26 L640,68 L800,30 L960,64 L1120,28 L1280,60 L1440,34",
      fill:
        "M0,90 L0,40 L160,20 L320,58 L480,22 L640,64 L800,26 L960,60 L1120,24 L1280,56 L1440,30 L1440,90 Z",
    },
    // 5: Certifications -> Education (Deep dramatic organic torn contour carving into Navy)
    5: {
      accent:
        "M0,34 Q200,74 420,26 T840,64 Q1060,18 1260,54 T1440,32",
      accentSub:
        "M0,38 Q200,78 420,30 T840,68 Q1060,22 1260,58 T1440,36",
      fill:
        "M0,90 L0,34 Q200,74 420,26 T840,64 Q1060,18 1260,54 T1440,32 L1440,90 Z",
    },
    // 6: Education -> Contact (High-voltage zigzag rupture leading into Signal Orange)
    6: {
      accent:
        "M0,44 L100,74 L220,24 L360,78 L500,28 L660,74 L820,22 L980,72 L1140,26 L1280,68 L1440,32",
      accentSub:
        "M0,48 L100,78 L220,28 L360,82 L500,32 L660,78 L820,26 L980,76 L1140,30 L1280,72 L1440,36",
      fill:
        "M0,90 L0,44 L100,74 L220,24 L360,78 L500,28 L660,74 L820,22 L980,72 L1140,26 L1280,68 L1440,32 L1440,90 Z",
    },
    // 7: Contact -> Footer (Angular paper tear closing into Deep Ink Navy)
    7: {
      accent:
        "M0,38 L140,62 L300,28 L460,66 L620,30 L780,62 L940,26 L1100,58 L1260,32 L1440,54",
      accentSub:
        "M0,42 L140,66 L300,32 L460,70 L620,34 L780,66 L940,30 L1100,62 L1260,36 L1440,58",
      fill:
        "M0,90 L0,38 L140,62 L300,28 L460,66 L620,30 L780,62 L940,26 L1100,58 L1260,32 L1440,54 L1440,90 Z",
    },
  };

  const selected = pathData[variant] || pathData[1];

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden pointer-events-none select-none z-20 -my-1 ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ x: xOffset, scaleX }}
      >
        {/* Top section background fill — zero gap */}
        <rect x="0" y="0" width="1440" height="90" fill={fromColor} />

        {/* Secondary paper sliver / shadow edge */}
        {selected.accentSub && (
          <path
            d={selected.accentSub}
            fill="none"
            stroke={accentSecondary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
        )}

        {/* Primary fractured accent contour */}
        <path
          d={selected.accent}
          fill="none"
          stroke={accentColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {/* Bottom section torn fill — perfectly meets toColor */}
        <path d={selected.fill} fill={toColor} />
      </motion.svg>
    </div>
  );
};
