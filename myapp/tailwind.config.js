module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: { "fade-down": "0.6s ease forwards" },
      screens: { sm: { max: "910px" } },
      // md: { max: "910px" },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // require("tailwindcss"),
    // require("autoprefixer"),
  ],
};
