// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-extrabold': ['Gilroy-ExtraBold', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
