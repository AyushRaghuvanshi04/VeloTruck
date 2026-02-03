import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6600", // Safety Orange
          dark: "#E55A00",
          light: "#FF8533",
        },
        secondary: {
          DEFAULT: "#0066CC", // Strong Blue
          dark: "#0052A3",
          light: "#3385D6",
        },
        background: {
          DEFAULT: "#F5F5F5", // Light gray
          dark: "#E8E8E8",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
