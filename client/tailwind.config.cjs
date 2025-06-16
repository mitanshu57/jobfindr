// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",        // ← add this
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // …any other custom colors you use…
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
