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
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: theme("0") },
          "100%": { opacity: theme("1") },
        },
      }),
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
