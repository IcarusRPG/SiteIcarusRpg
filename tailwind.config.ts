import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#030706",
        obsidian: "#07110f",
        mystic: "#10d8cf",
        tealshade: "#0a7773",
        gold: "#d8a33a",
        ember: "#f0c66c",
        parchment: "#d6c29a",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "Georgia", "serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      boxShadow: {
        arcane: "0 0 35px rgba(16, 216, 207, 0.18)",
        gold: "0 0 24px rgba(216, 163, 58, 0.16)",
      },
      backgroundImage: {
        "rune-grid":
          "linear-gradient(rgba(16,216,207,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(216,163,58,0.035) 1px, transparent 1px)",
        "metal-radial":
          "radial-gradient(circle at 50% 0%, rgba(16,216,207,0.22), transparent 32%), radial-gradient(circle at 80% 18%, rgba(216,163,58,0.14), transparent 28%), linear-gradient(135deg, #030706 0%, #07110f 45%, #020303 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
