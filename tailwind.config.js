/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./src/_includes/**/*.{html,js,njk,md}",
    "./src/_layouts/**/*.{html,js,njk,md}",
    "./src/cases/**/*.{html,js,njk,md}",
    "./src/components/**/*.{html,js,njk,md}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
