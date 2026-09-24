export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Machine Learning & AI" | "Full-Stack Systems" | "Algorithms & Systems";
  period: string;
  description: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  bgTheme: "cream" | "navy" | "charcoal" | "orange";
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    tag: string;
    context: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  organization: string;
  year?: string;
  category: "Data & AI" | "Cloud & Infrastructure" | "Software Engineering";
  topics: string[];
  badgeColor: string;
  verifyUrl?: string;
  fileUrl?: string;
  certCode?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  details: string[];
  highlight?: boolean;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  resumePath: string;
}
