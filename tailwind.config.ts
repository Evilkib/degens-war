import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void:    "#060009",
        abyss:   "#0b000f",
        deep:    "#110018",
        panel:   "#180020",
        arcane:  "#3a0f5e",
        violet:  "#9d2eff",
        "violet-2": "#c084fc",
        blood:   "#e8294a",
        gold:    "#ffc533",
        sky:     "#38bdf8",
        ash:     "#ddd0f5",
        "ash-2": "#f0e8ff",
        muted:   "#7a5c9e",
        "muted-2": "#a88ec0",
      },
      fontFamily: {
        display: ["'Cinzel'", "serif"],
        body:    ["'EB Garamond'", "serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
