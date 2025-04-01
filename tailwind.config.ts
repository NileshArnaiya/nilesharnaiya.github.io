import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ App Router (if using App Router)
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ Pages Router (if using Pages Router)
    "./src/**/*.{js,ts,jsx,tsx}", // Optional if components are in /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
