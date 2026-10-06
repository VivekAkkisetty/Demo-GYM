import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        volt: "#b7f731",
        ink: "#080909",
        charcoal: "#111312",
        smoke: "#a4a8a2"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(183, 247, 49, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
