module.exports = {
  singleQuote: true,
  trailingComma: "es5",
  htmlWhitespaceSensitivity: "ignore",
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.cjs"
};
