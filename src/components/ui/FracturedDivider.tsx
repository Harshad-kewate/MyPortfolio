"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export type DividerVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface FracturedDividerProps {
  variant?: DividerVariant;
  fromColor: string; // The color of the section above
  toColor: string; // The color of the section below
  accentColor?: string; // Tomato red accent (#F12222)
  accentSecondary?: string; // Bright yellow accent (#FFD92F)
  lineColor?: string; // Thin black separator line (#080808)
  className?: string;
  height?: number; // Height in px, default 80
}

interface VariantData {
  accent: string;
  accentSub: string;
  fill: string;
  yLeft: number;
  yRight: number;
  redDash: string;
  redOffset: number;
  yellowDash: string;
  yellowOffset: number;
  markers: Array<{ x: number; y: number; type: "dot" | "dash" | "cross" | "diamond" }>;
}

export const FracturedDivider: React.FC<FracturedDividerProps> = ({
  variant = 1,
  fromColor,
  toColor,
  accentColor = "#F12222",
  accentSecondary = "#FFD92F",
  lineColor = "#080808",
  className = "",
  height = 80,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle physical shift on scroll
  const xOffset = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [-6, 6]);
  const scaleX = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [0.996, 1.004]);

  // 7 distinct irregular, torn-paper digital fracture contours with editorial markers
  const pathData: Record<DividerVariant, VariantData> = {
    // 1: Hero -> About
    1: {
      accent:
        "M0,42 Q140,68 300,32 T620,56 Q780,22 960,52 T1260,28 Q1350,48 1440,36",
      accentSub:
        "M0,45 Q140,71 300,35 T620,59 Q780,25 960,55 T1260,31 Q1350,51 1440,39",
      fill:
        "M0,90 L0,42 Q140,68 300,32 T620,56 Q780,22 960,52 T1260,28 Q1350,48 1440,36 L1440,90 Z",
      yLeft: 42,
      yRight: 36,
      redDash: "75 520",
      redOffset: 140,
      yellowDash: "110 480",
      yellowOffset: 380,
      markers: [
        { x: 300, y: 32, type: "dot" },
        { x: 780, y: 22, type: "dash" },
        { x: 1120, y: 46, type: "cross" },
      ],
    },
    // 2: About -> Projects
    2: {
      accent:
        "M0,36 L110,64 L240,26 L380,68 L530,30 L690,66 L840,24 L990,62 L1140,28 L1290,60 L1440,34",
      accentSub:
        "M0,40 L110,68 L240,30 L380,72 L530,34 L690,70 L840,28 L990,66 L1140,32 L1290,64 L1440,38",
      fill:
        "M0,90 L0,36 L110,64 L240,26 L380,68 L530,30 L690,66 L840,24 L990,62 L1140,28 L1290,60 L1440,34 L1440,90 Z",
      yLeft: 36,
      yRight: 34,
      redDash: "60 450",
      redOffset: 180,
      yellowDash: "95 470",
      yellowOffset: 410,
      markers: [
        { x: 380, y: 68, type: "cross" },
        { x: 840, y: 24, type: "diamond" },
        { x: 1140, y: 28, type: "dash" },
      ],
    },
    // 3: Projects -> Technology
    3: {
      accent:
        "M0,48 C180,16 340,76 540,34 C740,78 920,20 1120,62 C1260,34 1360,54 1440,32",
      accentSub:
        "M0,52 C180,20 340,80 540,38 C740,82 920,24 1120,66 C1260,38 1360,58 1440,36",
      fill:
        "M0,90 L0,48 C180,16 340,76 540,34 C740,78 920,20 1120,62 C1260,34 1360,54 1440,32 L1440,90 Z",
      yLeft: 48,
      yRight: 32,
      redDash: "85 480",
      redOffset: 160,
      yellowDash: "115 440",
      yellowOffset: 390,
      markers: [
        { x: 340, y: 76, type: "dash" },
        { x: 740, y: 78, type: "dot" },
        { x: 1120, y: 62, type: "cross" },
      ],
    },
    // 4: Technology -> Certifications
    4: {
      accent:
        "M0,40 L160,20 L320,58 L480,22 L640,64 L800,26 L960,60 L1120,24 L1280,56 L1440,30",
      accentSub:
        "M0,44 L160,24 L320,62 L480,26 L640,68 L800,30 L960,64 L1120,28 L1280,60 L1440,34",
      fill:
        "M0,90 L0,40 L160,20 L320,58 L480,22 L640,64 L800,26 L960,60 L1120,24 L1280,56 L1440,30 L1440,90 Z",
      yLeft: 40,
      yRight: 30,
      redDash: "70 460",
      redOffset: 90,
      yellowDash: "120 500",
      yellowOffset: 290,
      markers: [
        { x: 480, y: 22, type: "diamond" },
        { x: 800, y: 26, type: "cross" },
        { x: 1120, y: 24, type: "dot" },
      ],
    },
    // 5: Certifications -> Education
    5: {
      accent:
        "M0,34 Q200,74 420,26 T840,64 Q1060,18 1260,54 T1440,32",
      accentSub:
        "M0,38 Q200,78 420,30 T840,68 Q1060,22 1260,58 T1440,36",
      fill:
        "M0,90 L0,34 Q200,74 420,26 T840,64 Q1060,18 1260,54 T1440,32 L1440,90 Z",
      yLeft: 34,
      yRight: 32,
      redDash: "80 500",
      redOffset: 210,
      yellowDash: "100 460",
      yellowOffset: 440,
      markers: [
        { x: 420, y: 26, type: "dash" },
        { x: 840, y: 64, type: "cross" },
        { x: 1260, y: 54, type: "diamond" },
      ],
    },
    // 6: Education -> Contact
    6: {
      accent:
        "M0,44 L100,74 L220,24 L360,78 L500,28 L660,74 L820,22 L980,72 L1140,26 L1280,68 L1440,32",
      accentSub:
        "M0,48 L100,78 L220,28 L360,82 L500,32 L660,78 L820,26 L980,76 L1140,30 L1280,72 L1440,36",
      fill:
        "M0,90 L0,44 L100,74 L220,24 L360,78 L500,28 L660,74 L820,22 L980,72 L1140,26 L1280,68 L1440,32 L1440,90 Z",
      yLeft: 44,
      yRight: 32,
      redDash: "65 440",
      redOffset: 130,
      yellowDash: "90 480",
      yellowOffset: 350,
      markers: [
        { x: 360, y: 78, type: "dot" },
        { x: 820, y: 22, type: "dash" },
        { x: 1140, y: 26, type: "cross" },
      ],
    },
    // 7: Contact -> Footer
    7: {
      accent:
        "M0,38 L140,62 L300,28 L460,66 L620,30 L780,62 L940,26 L1100,58 L1260,32 L1440,54",
      accentSub:
        "M0,42 L140,66 L300,32 L460,70 L620,34 L780,66 L940,30 L1100,62 L1260,36 L1440,58",
      fill:
        "M0,90 L0,38 L140,62 L300,28 L460,66 L620,30 L780,62 L940,26 L1100,58 L1260,32 L1440,54 L1440,90 Z",
      yLeft: 38,
      yRight: 54,
      redDash: "75 480",
      redOffset: 170,
      yellowDash: "105 450",
      yellowOffset: 400,
      markers: [
        { x: 460, y: 66, type: "cross" },
        { x: 780, y: 62, type: "diamond" },
        { x: 1100, y: 58, type: "dot" },
      ],
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

        {/* Bottom section torn fill — perfectly meets toColor */}
        <path d={selected.fill} fill={toColor} />

        {/* Asymmetric secondary technical hairline */}
        <path
          d={selected.accentSub}
          fill="none"
          stroke={lineColor}
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.3"
        />

        {/* Primary thin black separator line */}
        <path
          d={selected.accent}
          fill="none"
          stroke={lineColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small Tomato-Red accent segments along the contour */}
        <path
          d={selected.accent}
          fill="none"
          stroke={accentColor}
          strokeWidth="3.2"
          strokeDasharray={selected.redDash}
          strokeDashoffset={selected.redOffset}
          strokeLinecap="square"
          opacity="0.95"
        />

        {/* Small Bright Yellow accent segments along the contour */}
        <path
          d={selected.accent}
          fill="none"
          stroke={accentSecondary}
          strokeWidth="3.2"
          strokeDasharray={selected.yellowDash}
          strokeDashoffset={selected.yellowOffset}
          strokeLinecap="square"
          opacity="0.95"
        />

        {/* Left subtle geometric corner elements */}
        <g opacity="0.85">
          {/* Left crosshair */}
          <line
            x1="18"
            y1={selected.yLeft}
            x2="30"
            y2={selected.yLeft}
            stroke={lineColor}
            strokeWidth="1.5"
          />
          <line
            x1="24"
            y1={selected.yLeft - 6}
            x2="24"
            y2={selected.yLeft + 6}
            stroke={lineColor}
            strokeWidth="1.5"
          />
          {/* Left tomato red square */}
          <rect
            x="36"
            y={selected.yLeft - 3}
            width="6"
            height="6"
            fill={accentColor}
            stroke={lineColor}
            strokeWidth="1"
          />
        </g>

        {/* Right subtle geometric corner elements */}
        <g opacity="0.85">
          {/* Right bright yellow rotated diamond */}
          <rect
            x="1404"
            y={selected.yRight - 3.5}
            width="7"
            height="7"
            fill={accentSecondary}
            stroke={lineColor}
            strokeWidth="1"
            transform={`rotate(45 1407.5 ${selected.yRight})`}
          />
          {/* Right technical double slash */}
          <line
            x1="1418"
            y1={selected.yRight + 5}
            x2="1424"
            y2={selected.yRight - 5}
            stroke={lineColor}
            strokeWidth="1.5"
          />
          <line
            x1="1424"
            y1={selected.yRight + 5}
            x2="1430"
            y2={selected.yRight - 5}
            stroke={lineColor}
            strokeWidth="1.5"
          />
        </g>

        {/* Subtle decorative markers along the seam */}
        {selected.markers.map((m, idx) => {
          if (m.type === "dot") {
            return (
              <circle
                key={idx}
                cx={m.x}
                cy={m.y}
                r="3"
                fill={accentColor}
                stroke={lineColor}
                strokeWidth="1"
                opacity="0.9"
              />
            );
          }
          if (m.type === "dash") {
            return (
              <rect
                key={idx}
                x={m.x - 7}
                y={m.y - 2}
                width="14"
                height="4"
                fill={accentSecondary}
                stroke={lineColor}
                strokeWidth="1"
                opacity="0.9"
              />
            );
          }
          if (m.type === "cross") {
            return (
              <g key={idx} opacity="0.75">
                <line
                  x1={m.x - 5}
                  y1={m.y}
                  x2={m.x + 5}
                  y2={m.y}
                  stroke={lineColor}
                  strokeWidth="1.5"
                />
                <line
                  x1={m.x}
                  y1={m.y - 5}
                  x2={m.x}
                  y2={m.y + 5}
                  stroke={lineColor}
                  strokeWidth="1.5"
                />
              </g>
            );
          }
          if (m.type === "diamond") {
            return (
              <rect
                key={idx}
                x={m.x - 3}
                y={m.y - 3}
                width="6"
                height="6"
                fill={accentSecondary}
                stroke={lineColor}
                strokeWidth="1"
                transform={`rotate(45 ${m.x} ${m.y})`}
                opacity="0.9"
              />
            );
          }
          return null;
        })}
      </motion.svg>
    </div>
  );
};
