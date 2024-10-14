/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgApp: "#121212",
        bgCard: "#202020",
      },
    },
  },
  plugins: [require("daisyui")],
};
