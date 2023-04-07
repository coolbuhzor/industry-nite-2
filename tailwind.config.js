/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oddVal: ["var(--font-Oddval)"],
        satoshi: ["var(--font-Satoshi)"],
        bartina: ["var(--font-bartina)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        "int-red": "#FF220C",
      },
    },
  },
  plugins: [],
};
