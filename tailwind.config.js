// tailwind.config.js
import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #b0d48f, #89b35d, #6b8f3e, #456e2a)', // Degradado para modo claro
      },
      colors: {
        'dark-background': '#1a202c', // Color sólido para modo oscuro
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
            background:"#F8F8FF",
            gray: "#5b5757"
          },
        },
        dark: {
          colors: {
            primary: "#E6D38E",
            secondary: "#654321",
            foreground: "#f9f9f6",
            background: "#1E293B",
            gray: "#5b5757"
          },
        },
      },
    }),
  ],
};
