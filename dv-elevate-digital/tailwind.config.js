/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080B1F",
          800: "#0A0F2C",
          700: "#111737",
          600: "#1A2148",
        },
        brand: {
          DEFAULT: "#155EEF",
          50: "#EEF4FF",
          100: "#D9E6FF",
          400: "#3B82F6",
          500: "#155EEF",
          600: "#0B47C4",
        },
        sky: {
          DEFAULT: "#38BDF8",
        },
        paper: "#F6F8FC",
        slate: {
          DEFAULT: "#48506B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0B47C4 0%, #155EEF 45%, #38BDF8 100%)',
        'dot-grid': 'radial-gradient(circle, rgba(21,94,239,0.18) 1px, transparent 1px)',
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(10,15,44,0.15)',
        glow: '0 0 0 1px rgba(21,94,239,0.15), 0 20px 60px -20px rgba(21,94,239,0.45)',
      },
    },
  },
  plugins: [],
}
