/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F9FBFC",
        "lightBlue": "#29B7C5",
        "blueDark": "#07052F",
        "neutralBlue": "#0F8793",
        "deepBlue": "#181B3F"
      },
      fontFamily: {
        "anek": ["Anek Bangla", "sans-serif"]
      }
    }
  },
  plugins: []
};
