const {nextui} = require('@nextui-org/theme');
// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    fontFamily: {
      header: ['Montserrat', 'sans-serif'],
      body: ['Gothic A1', 'serif'],
    },
    screens: {
      'sm': '10px',  // Small devices 
      'md': '700px',  // Medium devices 
      'lg': '1280px', // Large devices (desktops)
    }
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
        colors: {
          background: "#444444", // dark theme background color
          header_text: "#f4f6ff", // dark theme text color for headers
          text: "#c9cacf", // dark theme text color
          accent: "#5E60CE", // dark theme accent color
          secondary: "#44dcdd", // dark theme secondary color shadow color for page cards
          contrast: "#5390D9", // dark theme contrast color for links and buttons
          buttons: "#f4f6ff",
          nav: "#f4f6ff",
          navlinks: "#444444",
        }, // dark theme colors
      },
      light: {
        colors: {
          background: "#F0F4FF", // light theme background color
          header_text: "#444444", // light theme text color for headers
          text: "#707173", // light theme text color
          accent: "#d82401", // light theme accent color
          secondary: "#44dcdd", // light theme secondary color shadow color for page cards
          contrast: "#FAAF3A", // light theme contrast color for links and buttons
          buttons: "#f4f6ff",
          nav: "#444444",
          navlinks: "#f4f6ff",
        }, // light theme colors
      },
    },
  }),
];


export default {
  plugins: [
    require('@tailwindcss/line-clamp'),
    nextui()],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@nextui-org/theme/dist/components/(button|modal|ripple|spinner).js"
  ],
  theme,
  plugins,
};