/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "lightBlue": "#29B7C5",
        "blueDark": "#07052F",
        "neutralBlue": "#0F8793"
      },
      fontFamily: {
        "anek": ["Anek Bangla", "sans-serif"]
      }
    }
  },
  plugins: []
};
