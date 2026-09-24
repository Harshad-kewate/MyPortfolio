import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFBF7",
          100: "#F7F5EE",
          200: "#EFECE1",
          300: "#E4DEC9",
          DEFAULT: "#F7F5EE",
        },
        navy: {
          950: "#050811",
          900: "#090E1A",
          800: "#0F172A",
          700: "#1E293B",
          DEFAULT: "#090E1A",
        },
        charcoal: {
          900: "#111215",
          800: "#181A1F",
          700: "#24272E",
          DEFAULT: "#111215",
        },
        vividOrange: {
          DEFAULT: "#FF4D00",
          hover: "#E04400",
          light: "#FFF0EB",
        },
        electricBlue: {
          DEFAULT: "#0055FF",
          hover: "#0044CC",
          light: "#EBF2FF",
        },
        chartreuse: {
          DEFAULT: "#D4FF00",
          hover: "#C0E800",
          dark: "#A3C700",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
