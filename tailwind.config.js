/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark2: "#444444",
        dark3: "#706F6F",
        dark4: "#9F9F9F",
        dark5: "#f2f2f2",
        dark6: "#E7E7E7",
        dark7: "#F3F3F3",
      },
    },
  },
  plugins: [require("daisyui")],
};
