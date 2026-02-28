/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        border: "hsl(217.2 32.6% 17.5%)",
        input: "hsl(217.2 32.6% 17.5%)",
        ring: "hsl(224.3 76.3% 48%)",
        background: "hsl(222.2 84% 4.9%)",
        foreground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(210 40% 98%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        secondary: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(215 20.2% 65.1%)",
        },
        accent: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(210 40% 98%)",
        },
        card: {
          DEFAULT: "hsl(222.2 84% 4.9% / 0.88)",
          foreground: "hsl(210 40% 98%)",
        },
        brand: "hsl(217.2 91.2% 59.8%)",
      },
      boxShadow: {
        panel: "0 18px 50px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
