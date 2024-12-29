/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-linear": "linear-gradient(180deg, #3333A3 20%, #121212 100%)",
      },
    },
  },
  plugins: [],
};
