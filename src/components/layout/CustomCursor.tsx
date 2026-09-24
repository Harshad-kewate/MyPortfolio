"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;
      const clickableEl = target?.closest("a, button, [role='button']") as HTMLElement | null;

      if (interactiveEl) {
        setCursorText(interactiveEl.getAttribute("data-cursor") || "VIEW");
        setIsHovered(true);
      } else if (clickableEl) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-vividOrange"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
        }}
      />

      {/* Trailing dynamic circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-mono font-bold uppercase transition-colors"
        animate={{
          x: mousePosition.x - (cursorText ? 42 : isHovered ? 24 : 16),
          y: mousePosition.y - (cursorText ? 42 : isHovered ? 24 : 16),
          width: cursorText ? 84 : isHovered ? 48 : 32,
          height: cursorText ? 84 : isHovered ? 48 : 32,
          backgroundColor: cursorText
            ? "rgba(255, 77, 0, 0.95)"
            : isHovered
            ? "rgba(212, 255, 0, 0.2)"
            : "rgba(255, 255, 255, 0.05)",
          borderColor: cursorText
            ? "#FF4D00"
            : isHovered
            ? "#D4FF00"
            : "rgba(255, 255, 255, 0.3)",
          color: cursorText ? "#FFFFFF" : "transparent",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          borderWidth: 1,
        }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-widest text-center px-1 font-mono">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
