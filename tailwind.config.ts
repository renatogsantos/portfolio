// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: any = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f9fcff",
        black: "#13161F",
        danger: "#f02d3a",
        main: {
          100: "#ff3600",
          200: "#FD1A5E",
          300: "#FA00FF",
          400: "#9317FF",
          500: "#0066FF",
          600: "#6401FF",
          700: "#1D222E",
          800: "#13161F",
        },
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
      },
      boxShadow: {
        "3xl": "0px 24px 48px 0px rgba(34, 58, 81, 0.10);",
      },
      borderRadius: {
        "3xl": "48px"
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#f9fcff", // or DEFAULT
            foreground: "#13161F", // or 50 to 900 DEFAULT
            primary: {
              foreground: "#f9fcff",
              DEFAULT: "#FF3600",
            },
            secondary: {
              foreground: "#f9fcff",
              DEFAULT: "#1D222E",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#13161F", // or DEFAULT
            foreground: "#f9fcff", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#f9fcff",
              DEFAULT: "#FF3600",
            },
            secondary: {
              foreground: "#f9fcff",
              DEFAULT: "#f9fcff",
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};

export default config;
