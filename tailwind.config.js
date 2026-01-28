/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dulci-beige-50': '#f5f0ee',
        'dulci-beige-100': '#e0d5d3',
        'dulci-beige-200': '#dfd4d2',
        'dulci-beige-300': '#ded3d1',
        'dulci-pink-100': '#fce2ed',
        'dulci-pink-200': '#f9d5e5',
        'dulci-pink-300': '#f0b8d0',
        'dulci-pink-400': '#d4a5a5',
        'dulci-dark': '#0e0e0e',
      },
    },
  },
  plugins: [],
}
