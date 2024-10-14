import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1296px",
      },
    },
    extend: {
      textColor: {
        DEFAULT: "#09090B",
      },
      keyframes: {
        fadeIn: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s infinite",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#40E0D0",
          foreground: "hsl(var(--primary-foreground))",
          "primary-hover": "#0F514E",
        },
        secondary: {
          DEFAULT: "#FE4710",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "#0F514E",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        gray: {
          DEFAULT: "#71717A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-to-top-desktop": "linear-gradient(to top, #d6f4f0 267px, transparent 0%)",
        "gradient-to-top-mobile": "linear-gradient(to top, #d6f4f0 363px, transparent 0%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-primary": {
          color: "#40E0D0",
          "&:hover": {
            color: "#0F514E",
          },
          "&:active": {
            color: "#07302f",
          },
        },
        ".bg-primary": {
          backgroundColor: "#40E0D0",
          "&:hover": {
            backgroundColor: "#0F514E",
          },
          "&:active": {
            backgroundColor: "#07302f",
          },
        },
        ".text-secondary": {
          color: "#FE4710",
          "&:hover": {
            color: "#EF2D07",
          },
          "&:active": {
            color: "#C61B09",
          },
        },
        ".bg-secondary": {
          backgroundColor: "#FE4710",
          "&:hover": {
            backgroundColor: "#EF2D07",
          },
          "&:active": {
            backgroundColor: "#C41F05",
          },
        },
      });
    }),
  ],
};
export default config;
