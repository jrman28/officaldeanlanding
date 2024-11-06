/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/layout.js",
    "./src/app/page.jsx"
  ],
  "theme": {
    "extend": {
      "fontFamily": {
        "tangerine": ["Tangerine", "cursive"],
        "playfair": ["Playfair Display", "serif"]
      }
    },
    "screens": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    }
  },
  "plugins": []
}
