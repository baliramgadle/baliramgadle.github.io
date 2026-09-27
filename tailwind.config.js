/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"]
      },
      colors: {
        ink: "#080B14",
        panel: "#0D1220",
        cyanx: "#5CE1E6",
        violetx: "#8B7CFF",
        pinkx: "#FF67C7"
      },
      boxShadow: {
        glow: "0 0 60px rgba(92,225,230,.12)"
      }
    }
  },
  plugins: []
};