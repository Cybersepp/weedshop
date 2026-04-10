/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ww: {
          bg: '#1a1c18',
          card: '#22241f',
          border: '#2e3029',
          hover: '#35372f',
          red: '#c85040',
          'red-light': '#d4614f',
          green: '#5a9a48',
          'green-light': '#6aad57',
          gold: '#d4940a',
          'gold-light': '#e5a50e',
        },
      },
    },
  },
  plugins: [],
};
