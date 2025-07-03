import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["var(--font-abel)", "sans-serif"],
        acme: ["var(--font-acme)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
