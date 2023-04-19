import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#943705",
        secondary: "#0d3954",
        base: "#dfe2e1",
        "base-accent": "#656461",
        "base-content": "#4a4a4a",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
