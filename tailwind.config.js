/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1E3A8A",
        brandLight: "#DBEAFE",
        brandGray: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
