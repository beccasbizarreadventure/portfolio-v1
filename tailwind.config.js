// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    fontFamily: {
      header: ['Anton SC', 'sans-serif'],
      main: ['Gothic A1', 'sans-serif'],
    },
  },
};
export const plugins = [
  nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          background: "#444444", // dark theme background color
          header_text: "#f4f6ff", // dark theme text color for headers
          text: "#c9cacf", // dark theme text color
          accent: "#faaf3a", // dark theme accent color
          secondary: "#e15a3d", // dark theme secondary color shadow color for page cards
          contrast: "#44dcdd", // dark theme contrast color for links and buttons
        }, // dark theme colors
      },
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          background: "#f4f6ff", // light theme background color
          header_text: "#444444", // light theme text color for headers
          text: "#707173", // light theme text color
          accent: "#d82401", // light theme accent color
          secondary: "#44dcdd", // light theme secondary color shadow color for page cards
          contrast: "#faaf3a", // light theme contrast color for links and buttons
        }, // light theme colors
      },
    },
  }),
];


export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths according to your project structure
    "./public/index.html",
  ],
  theme,
  plugins,
};