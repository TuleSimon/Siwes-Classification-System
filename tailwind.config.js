module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'arvo': ['Arvo', 'sans-serif'],
    },
    extend: {
      colors: {
        'bg': '#14b8a6',
        'text':'#ffff',
        'buttext':'#99f6e4',
        'butbg':'linear-gradient(to right, #00ffdd , #a9ece9)',
        'black2':'#797676'
    }
    },
  },
  plugins: [],
}
