import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  category: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  description,
  theme = "dark",
  className,
}) => {
  const isLight = theme === "light";

  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-3 mb-3">
        <span
          className={cn(
            "font-mono text-xs md:text-sm font-bold tracking-widest px-2.5 py-1 rounded border",
            isLight
              ? "bg-charcoal-900/5 text-charcoal-900 border-charcoal-900/15"
              : "bg-white/5 text-chartreuse border-white/10"
          )}
        >
          {number}
        </span>
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-widest",
            isLight ? "text-charcoal-700" : "text-slate-400"
          )}
        >
          // {category}
        </span>
      </div>

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.05]",
          isLight ? "text-charcoal-900" : "text-cream-100"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg max-w-2xl font-normal leading-relaxed",
            isLight ? "text-charcoal-700" : "text-slate-300"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
