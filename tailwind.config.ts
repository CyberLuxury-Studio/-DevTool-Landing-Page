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
        background: "#050505",
        surface: "#0E0E0E",
        "surface-high": "#1C1B1B",
        primary: "#00F0FF",
        secondary: "#B026FF",
        tertiary: "#FF003C",
        muted: "#71717A",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-white": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
