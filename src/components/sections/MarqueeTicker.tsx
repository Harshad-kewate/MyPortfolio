import React from "react";

const TICKER_ITEMS = [
  "MONSOON ATMOSPHERIC AI",
  "HISTGRADIENTBOOSTING // 0.25° MESH",
  "WHISPER SPEECH-TO-TEXT PIPELINE",
  "ECMWF ERA5 ATMOSPHERIC DATASET",
  "FASTAPI PREDICTION ENGINE",
  "KNN MUSIC MOOD RECOMMENDER",
  "5+ HACKATHONS & SPRINTS",
  "DELOITTE DATA SIMULATION",
  "POSTGRESQL & PRISMA ORM",
  "BANSAL INSTITUTE OF SCIENCE & TECHNOLOGY",
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#FFD928] text-[#111111] py-3 sm:py-3.5 border-y-2 border-[#111111] select-none z-20">
      <div className="animate-marquee motion-reduce:animate-none whitespace-nowrap flex items-center gap-8">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-display font-black text-sm sm:text-base tracking-wider uppercase">
              {item}
            </span>
            <span className="inline-block w-2.5 h-2.5 bg-[#111111] transform rotate-45" />
          </div>
        ))}
      </div>
    </div>
  );
};
