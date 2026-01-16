import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E31E24",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#BCC5CE",
          foreground: "#0B1221"
        },
        muted: {
          DEFAULT: "#EFF3F6",
          foreground: "#5B6474"
        },
        accent: {
          DEFAULT: "#2196D6",
          foreground: "#ffffff"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        card: "0 4px 24px rgba(15, 23, 42, 0.06)"
      }
    }
  },
  plugins: []
}
export default config
