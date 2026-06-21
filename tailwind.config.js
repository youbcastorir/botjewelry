/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C766",
          dark: "#A8862A",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          brown: "#2C1810",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Tajawal", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E8C766 50%, #A8862A 100%)",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212,175,55,0.25)",
      },
    },
  },
  plugins: [],
};
