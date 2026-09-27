"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/ui/Badge";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/90 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-charcoal-900 border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-8 md:p-10 z-10 text-cream-100 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 pb-4 sm:pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-chartreuse mb-1.5">
                <span>// {project.category}</span>
                <span>•</span>
                <span>{project.period}</span>
              </div>
              <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white break-words">
                {project.title}
              </h2>
              <p className="mt-1 font-mono text-xs sm:text-sm text-slate-300">{project.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-6 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-vividOrange mb-2">
                [SYSTEM OVERVIEW]
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Metrics if present */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-chartreuse mb-3">
                  [VERIFIED METRICS & SPECIFICATIONS]
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-navy-950 border border-white/10 flex flex-col"
                    >
                      <span className="font-display font-extrabold text-2xl text-white">
                        {m.value}
                      </span>
                      <span className="font-mono text-xs text-slate-200 mt-1">{m.label}</span>
                      {m.sublabel && (
                        <span className="font-mono text-[10px] text-slate-400">{m.sublabel}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-electricBlue mb-3">
                [ARCHITECTURE & ENGINEERING HIGHLIGHTS]
              </h3>
              <ul className="space-y-2.5">
                {project.architectureHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-chartreuse flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                [DELIVERED CAPABILITIES]
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((kf, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-vividOrange font-mono text-xs font-bold">0{idx + 1}.</span>
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                [VERIFIED TECH STACK]
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full font-mono text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
