import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "blue" | "lime" | "outline" | "subtle";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  className,
}) => {
  const variantStyles = {
    default: "bg-white/10 text-cream-100 border-white/10",
    orange: "bg-vividOrange/15 text-vividOrange border-vividOrange/30",
    blue: "bg-electricBlue/15 text-electricBlue border-electricBlue/30",
    lime: "bg-chartreuse/15 text-chartreuse border-chartreuse/30",
    outline: "bg-transparent text-slate-300 border-white/20",
    subtle: "bg-charcoal-800 text-slate-300 border-charcoal-700",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-mono",
    md: "text-xs sm:text-sm px-3 py-1 font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
