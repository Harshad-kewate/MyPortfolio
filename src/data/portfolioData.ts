import { Certification, ContactInfo, EducationItem, Project, SkillCategory } from "@/types";

export const contactInfo: ContactInfo = {
  name: "Harshad Kewate",
  role: "AI & ML Engineer",
  email: "kewateharshad@gmail.com",
  phone: "+91 8839928951",
  location: "Bhopal, Madhya Pradesh, India",
  linkedin: "https://www.linkedin.com/in/harshad-kewate-87b718308",
  github: "https://github.com/Harshad-kewate",
  portfolio: "https://harshad-kewate.github.io/Portfoliyo",
  resumePath: "/Harshad_Kewate_Resume.pdf",
};

export const bioData = {
  summary:
    "Motivated AIML undergraduate seeking opportunities to apply programming, data handling, and problem-solving skills in real projects. Interested in software development, full-stack basics, and AI-based applications. Focused on improving technical expertise and delivering efficient, scalable solutions.",
  focusAreas: [
    "Machine Learning & Atmospheric Modeling",
    "Multilingual Audio & Generative AI Pipelines",
    "Modern Full-Stack Web Architecture",
    "High-Performance Algorithmic Logic (C / C++)",
  ],
  stats: [
    { label: "B.Tech AIML CGPA", value: "7.11", note: "Till 3rd Semester" },
    { label: "Hackathons & Sprints", value: "5+", note: "Collaborative builds" },
    { label: "Core C++ Programs", value: "10+", note: "Algorithmic logic" },
    { label: "Atmospheric ERA5 Data", value: "13 Yrs", note: "Reanalysis records" },
  ],
};

export const projects: Project[] = [
  {
    id: "monsoon-mitra",
    title: "Monsoon Mitra // MONSOON AI",
    tagline: "Hyperlocal Atmospheric Intelligence & Meteorological ML Platform",
    category: "Machine Learning & AI",
    period: "2026",
    description:
      "A research-grade meteorological intelligence platform modeling Indian Summer Monsoon onset, active transitions, and break conditions at 0.25° (~25km) spatial mesh using 13 years of ECMWF ERA5 atmospheric reanalysis data.",
    architectureHighlights: [
      "Rigorous time-aware temporal train/test split (2012–2020 train, 2021–2024 unseen test) preventing data leakage",
      "Spatial holdout validation across geographically unseen grid cells for genuine out-of-sample generalization",
      "HistGradientBoostingClassifier with probability calibration via CalibratedClassifierCV",
      "Explainability engine computing tree feature contribution attributions for dominant atmospheric drivers",
      "Historical analogue engine matching 14-day atmospheric trajectories via cosine vector similarity",
    ],
    keyFeatures: [
      "0.25° spatial grid resolution over 15 geographic grids",
      "Monsoon Onset model with F1 score of 0.7381 and ROC-AUC of 0.9928 on held-out test data",
      "Monsoon Break model with F1 score of 0.7290 and ROC-AUC of 0.9950",
      "FastAPI backend microservice with REST endpoints for predictions, explanations, and map grids",
      "Interactive Next.js dark observatory console with spatial mesh visualization",
    ],
    technologies: [
      "Python",
      "Scikit-Learn",
      "HistGradientBoosting",
      "ECMWF ERA5",
      "FastAPI",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    metrics: [
      { label: "Onset ROC-AUC", value: "0.9928", sublabel: "Held-out test set" },
      { label: "Onset F1 Score", value: "0.7381", sublabel: "Strict evaluation" },
      { label: "Break ROC-AUC", value: "0.9950", sublabel: "Held-out test set" },
      { label: "Grid Resolution", value: "0.25°", sublabel: "~25km spatial mesh" },
    ],
    featured: true,
    accentColor: "#0055FF",
    bgTheme: "navy",
  },
  {
    id: "polylingo-ai",
    title: "PolyLingo AI",
    tagline: "Multilingual Video Audio Processing & AI Lecture Translation Pipeline",
    category: "Machine Learning & AI",
    period: "2026",
    description:
      "An AI-powered video and lecture translation SaaS platform built to simplify multilingual access to educational video content by orchestrating automated speech recognition, neural translation, and synchronized audio synthesis.",
    architectureHighlights: [
      "Audio extraction and chunking pipeline interfacing with Whisper speech-to-text models",
      "Context-preserving translation layer powered by OpenAI API for nuanced educational vocabularies",
      "Prisma ORM schema with PostgreSQL relational store managing users, processing logs, and jobs",
      "Redis caching layer for high-throughput video metadata and processed transcription queries",
      "Full-stack Next.js architecture with modular API routes for audio processing and health monitoring",
    ],
    keyFeatures: [
      "Speech-to-text processing for automated subtitle creation and lecture transcription",
      "Multilingual audio translation pipeline with voice synthesis output",
      "AI Teacher Assistant feature for automated quiz and lesson plan generation",
      "Clean responsive dashboard built with modern component architecture and Tailwind CSS",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "OpenAI API",
      "Whisper STT",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Pipeline", value: "STT → LLM → TTS", sublabel: "End-to-end audio" },
      { label: "DB Engine", value: "PostgreSQL", sublabel: "With Prisma schema" },
      { label: "Domain", value: "EdTech AI", sublabel: "Multilingual access" },
    ],
    featured: true,
    accentColor: "#FF4D00",
    bgTheme: "cream",
  },
  {
    id: "krishi-cart",
    title: "KrishiCart",
    tagline: "Hyperlocal Agritech Direct Commerce & Geolocation Platform",
    category: "Full-Stack Systems",
    period: "May 2026",
    description:
      "An agriculture-based e-commerce platform connecting farmers directly with agricultural produce buyers, eliminating intermediary markups and enabling location-aware trade.",
    architectureHighlights: [
      "Client-side modern web application powered by Vite for instant Hot Module Replacement and bundle optimization",
      "OpenStreetMap and Leaflet geospatial integration for visual farm and mandi location mapping",
      "Firebase authentication layer securing farmer profiles, buyer logins, and session persistence",
      "Node.js and Express.js REST API providing fast product catalog indexing and search queries",
    ],
    keyFeatures: [
      "Farmer produce listing and inventory management dashboard",
      "Faceted product search with category filters and price discovery",
      "OpenStreetMap interactive geospatial map integration",
      "Mobile-responsive modern UI designed with Tailwind CSS",
    ],
    technologies: [
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "OpenStreetMap / Leaflet",
    ],
    githubUrl: "https://github.com/Harshad-kewate/krishi-cart-1",
    featured: false,
    accentColor: "#D4FF00",
    bgTheme: "charcoal",
  },
  {
    id: "music-mood-recommendation",
    title: "Music Mood Recommendation System",
    tagline: "Machine-Learning Music Mood Prediction & Song Recommendation Engine",
    category: "Machine Learning & AI",
    period: "2026",
    description:
      "A machine-learning based music recommendation system that predicts music mood and recommends suitable songs based on audio features.",
    architectureHighlights: [
      "Extracts and analyzes key music/audio features including BPM, energy, valence, and danceability",
      "K-Nearest Neighbors (KNN) classification model predicting Happy, Sad, Energetic, and Calm moods",
      "Flask backend orchestrating ML inference pipeline and real-time JioSaavn API communications",
      "Modern responsive React and Tailwind CSS user interface for mood discovery and playback curation",
    ],
    keyFeatures: [
      "Multi-mood classification (Happy, Sad, Energetic, Calm)",
      "Audio feature processing using BPM, energy, valence, and danceability",
      "Dynamic song recommendations via JioSaavn API integration",
      "Interactive modern UI built with React and Tailwind CSS",
    ],
    technologies: [
      "Python",
      "KNN",
      "Scikit-learn",
      "Pandas",
      "Flask",
      "React",
      "Tailwind CSS",
      "JioSaavn API",
    ],
    featured: false,
    accentColor: "#FFD84D",
    bgTheme: "navy",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for systems programming, data pipelines, and application logic.",
    skills: [
      {
        name: "Python",
        tag: "Primary",
        context: "Data pipelines, Scikit-learn, ERA5 processing, AI/ML scripting",
        highlight: true,
      },
      {
        name: "C++",
        tag: "Core Systems",
        context: "10+ problem-solving programs, memory management, algorithmic logic",
        highlight: true,
      },
      {
        name: "C",
        tag: "Low-Level",
        context: "Foundational memory structures, pointer arithmetic, logic building",
      },
      {
        name: "TypeScript",
        tag: "Type Safety",
        context: "Strict static typing, robust interfaces, and modern full-stack development",
        highlight: true,
      },
    ],
  },
  {
    category: "Machine Learning & Data Analytics",
    description: "Numerical computation, atmospheric modeling, and tabular data intelligence.",
    skills: [
      {
        name: "NumPy",
        tag: "Vectorized Math",
        context: "Matrix operations, ERA5 grid computations, multi-dimensional tensors",
        highlight: true,
      },
      {
        name: "Pandas",
        tag: "Data Manipulation",
        context: "Time-series atmospheric reanalysis, 47,490+ records cleaning & feature engineering",
        highlight: true,
      },
      {
        name: "SQL",
        tag: "Relational Queries",
        context: "Complex aggregations, indexing, data modeling for analytics",
        highlight: true,
      },
      {
        name: "Power BI",
        tag: "BI & Visualization",
        context: "Business reports, sales analytics dashboards, data storytelling",
      },
      {
        name: "Scikit-Learn",
        tag: "ML Pipelines",
        context: "HistGradientBoosting, probability calibration, temporal cross-validation",
        highlight: true,
      },
    ],
  },
  {
    category: "Web Architecture & Frameworks",
    description: "Production UI development, server-rendered components, and REST services.",
    skills: [
      {
        name: "FastAPI",
        tag: "High-Perf API",
        context: "Asynchronous Python microservices, Pydantic data validation, OpenAPI docs",
        highlight: true,
      },
      {
        name: "Next.js (App Router)",
        tag: "Modern SSR",
        context: "Server components, API endpoints, optimized routing, SEO metadata",
        highlight: true,
      },
      {
        name: "Tailwind CSS",
        tag: "Design Systems",
        context: "Editorial layouts, responsive tokens, fluid typography, clean micro-interactions",
        highlight: true,
      },
      {
        name: "Node.js & Express.js",
        tag: "Backend Runtime",
        context: "REST API microservices, middleware authentication, async I/O pipelines",
      },
      {
        name: "HTML5 & Modern CSS",
        tag: "Semantic Web",
        context: "Semantic layout hierarchies, accessible screen reader support, CSS Grid",
      },
    ],
  },
  {
    category: "Databases & Cloud Storage",
    description: "Persistent data structures, schemas, and cloud-backed stores.",
    skills: [
      {
        name: "MySQL",
        tag: "RDBMS",
        context: "Relational database schema design, transactions, relational keys",
        highlight: true,
      },
      {
        name: "MongoDB",
        tag: "Document Store",
        context: "JSON-native document collections, unstructured metadata handling",
      },
      {
        name: "PostgreSQL",
        tag: "Advanced RDBMS",
        context: "Prisma ORM schema backing, relational data models for SaaS apps",
        highlight: true,
      },
      {
        name: "Firebase",
        tag: "Cloud Backend",
        context: "Real-time client auth, token management in KrishiCart",
      },
    ],
  },
  {
    category: "Developer Toolchain & Workflow",
    description: "Version control, reproducible environments, and interactive notebooks.",
    skills: [
      {
        name: "Git & GitHub",
        tag: "Version Control",
        context: "Branching strategies, collaborative repositories, open-source workflow",
        highlight: true,
      },
      {
        name: "Visual Studio Code",
        tag: "Primary IDE",
        context: "TypeScript linting, debugging, modern development workflow",
      },
      {
        name: "Jupyter Notebook",
        tag: "Interactive Data",
        context: "Exploratory data analysis, ML feature prototyping, Matplotlib charts",
        highlight: true,
      },
      {
        name: "Vite",
        tag: "Build Tool",
        context: "High-speed frontend development bundling and HMR",
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "harvard-cs50p",
    title: "CS50's Introduction to Programming with Python",
    issuer: "Harvard University",
    organization: "CS50 / David J. Malan",
    year: "2026",
    category: "Software Engineering",
    topics: ["Python Fundamentals", "Algorithmic Thinking", "OOP", "File I/O & Unit Testing"],
    badgeColor: "#A51C30", // Harvard Crimson
    fileUrl: "/certificates/harvard-cs50p.pdf",
  },
  {
    id: "deloitte-cyber",
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    organization: "Forage",
    year: "August 2026",
    category: "Software Engineering",
    topics: ["Cybersecurity Fundamentals", "Threat Analysis", "Incident Response Protocols"],
    badgeColor: "#86BC25", // Deloitte Green
    fileUrl: "/certificates/deloitte-cyber.pdf",
  },
  {
    id: "google-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    organization: "Simplilearn SkillUp",
    year: "May 2026",
    category: "Data & AI",
    topics: ["Foundation Models", "Large Language Models", "Transformer Principles", "Prompt Engineering"],
    badgeColor: "#EA4335", // Google Red
    fileUrl: "/certificates/google-cloud-genai.pdf",
    certCode: "10288589",
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    organization: "Forage",
    category: "Data & AI",
    topics: ["Data Discovery", "Data Modeling", "Exploratory Analysis", "Strategic Insights"],
    badgeColor: "#000000",
  },
  {
    id: "numpy-cert",
    title: "Introduction to NumPy",
    issuer: "Simplilearn SkillUp",
    organization: "SkillUp Academy",
    year: "March 2026",
    category: "Data & AI",
    topics: ["Vectorized Math", "Array Slicing", "Mathematical Operations"],
    badgeColor: "#013243",
    fileUrl: "/certificates/numpy-cert.pdf",
    certCode: "9973254",
  },
  {
    id: "pandas-cert",
    title: "Python Pandas Basics Course",
    issuer: "Simplilearn SkillUp",
    organization: "SkillUp Academy",
    year: "March 2026",
    category: "Data & AI",
    topics: ["DataFrames", "Data Cleaning", "Time-Series Aggregations"],
    badgeColor: "#150458",
    fileUrl: "/certificates/pandas-cert.pdf",
    certCode: "9990351",
  },
  {
    id: "microsoft-cloud",
    title: "Describe Cloud Computing",
    issuer: "Microsoft",
    organization: "Microsoft Learn",
    category: "Cloud & Infrastructure",
    topics: ["IaaS / PaaS / SaaS", "Cloud Security", "High Availability & Scalability"],
    badgeColor: "#00A4EF", // Microsoft Blue
  },
  {
    id: "cisco-python",
    title: "Python Essential 1",
    issuer: "Cisco",
    organization: "Cisco Networking Academy",
    category: "Software Engineering",
    topics: ["Core Syntax", "Data Structures", "Algorithmic Logic", "OOP"],
    badgeColor: "#00BCEB", // Cisco Cyan
  },
];

export const educationList: EducationItem[] = [
  {
    id: "bist-bhopal",
    degree: "B.Tech in Artificial Intelligence & Machine Learning (AIML)",
    institution: "Bansal Institute Of Science & Technology",
    affiliation: "Affiliated to RGPV, Bhopal",
    location: "Bhopal, Madhya Pradesh",
    period: "2024 — 2028",
    score: "7.11 CGPA",
    scoreType: "Cumulative (till 3rd Semester)",
    highlight: true,
    details: [
      "Specialized undergraduate curriculum in Artificial Intelligence and Machine Learning.",
      "Core coursework in Data Structures, Object-Oriented Programming, Database Management Systems, and Discrete Mathematics.",
      "Hands-on technical participation in 5+ hackathons and collaborative campus engineering projects.",
      "Active exploration of Generative AI, atmospheric climate modeling, and scalable full-stack web applications.",
    ],
  },
  {
    id: "school-12",
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "Govt. Excellence School",
    affiliation: "NCERT Curriculum",
    location: "Pandhurna, Madhya Pradesh",
    period: "2023 — 2024",
    score: "74%",
    scoreType: "Board Aggregate",
    details: [
      "Rigorous science discipline curriculum focusing on Physics, Chemistry, and Mathematics (PCM).",
      "Developed foundational analytical logic and scientific problem-solving abilities.",
    ],
  },
  {
    id: "school-10",
    degree: "Secondary School Certificate (Class X)",
    institution: "Govt. Excellence School",
    affiliation: "NCERT Curriculum",
    location: "Pandhurna, Madhya Pradesh",
    period: "2021 — 2022",
    score: "65%",
    scoreType: "Board Aggregate",
    details: [
      "Comprehensive secondary education with strong fundamentals in Mathematics and General Sciences.",
    ],
  },
];

export const additionalHighlights = [
  {
    metric: "10+ Programs",
    title: "C++ Algorithmic Logic Building",
    description:
      "Independently wrote and tested 10+ core C++ programs emphasizing algorithms, custom logic, memory pointers, and problem-solving fundamentals.",
  },
  {
    metric: "5+ Hackathons",
    title: "Collaborative Sprints & Competitions",
    description:
      "Actively competed in 5+ hackathons and rapid prototype challenges, building end-to-end applications within high-velocity team environments.",
  },
  {
    metric: "Continuous R&D",
    title: "Generative AI & Climate ML",
    description:
      "Actively exploring advanced Generative AI concepts, transformer attention mechanisms, and atmospheric meteorological intelligence with ECMWF reanalysis data.",
  },
];
