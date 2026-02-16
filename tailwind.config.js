/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kku-gold': '#b6e1e2ff',      // สีทอง มข.
        'kku-maroon': '#2e6fd1ff',    // สีแดงเลือดหมู มข.
      },
    },
  },
  plugins: [],
}