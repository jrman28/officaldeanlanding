/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/layout.js",
    "./src/app/page.jsx",
    "./src/app/globals.css"
  ],
  "theme": {
    "extend": {
      "fontFamily": {
        "tangerine": ["Tangerine", "cursive"],
        "playfair": ["Playfair Display", "serif"]
      }
    },

    "plugins": []
  }
}
