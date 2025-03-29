// tailwind.config.js
import { nextui } from "@nextui-org/theme";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      spacing: {
        indent: "2rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#456E2A",
            secondary: "#E6D38E",
            foreground: "#565656",
            background: "#F8F8FF",
            gray: "#5b5757",
          },
        },
        dark: {
          colors: {
            primary: "#E6D38E",
            secondary: "#654321",
            foreground: "#f9f9f6",
            background: "#1E293B",
            gray: "#5b5757",
          },
        },
      },
    }),
  ],
};
