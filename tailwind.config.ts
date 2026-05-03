import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#571F81",
          "purple-soft": "#3D1559",
          "purple-deep": "#2A0E3D",
          gold: "#DFB24A",
          teal: "#2C97AF",
          ink: "#0F0A14",
          paper: "#FAF7F2",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "purple-gradient":
          "radial-gradient(ellipse at top, #571F81 0%, #3D1559 45%, #2A0E3D 100%)",
        "purple-gradient-flat":
          "linear-gradient(180deg, #3D1559 0%, #2A0E3D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
