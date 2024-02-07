import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#0F172A",
      secondary: "#19304E",
      blueMain: "#328AF1",
      blueSecondary: "#7199D4",
      lightPrimary: "#FFFFFF",
      textMain: "#94A3B8",
      lightText: "0F172A",
      transparent: "transparent",
      lightgreen: '#3AB351',
      lightMainText: "#0F172A",
      lightSubText: "#334155"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors
      },
      fontFamily: {
        'bevietnam': ['Be Vietnam', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
