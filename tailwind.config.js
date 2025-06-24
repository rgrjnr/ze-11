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
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 