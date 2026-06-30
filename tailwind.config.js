/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wh-cream': '#FAF8F5',
        'wh-warm': '#F5F0EB',
        'wh-terracotta': '#C67B5C',
        'wh-terracotta-dark': '#A85D3E',
        'wh-terracotta-light': '#E8A87C',
        'wh-olive': '#6B8E6E',
        'wh-olive-dark': '#4A6B4D',
        'wh-olive-light': '#8FB092',
        'wh-sand': '#E6DCC3',
        'wh-sand-dark': '#C4B896',
        'wh-stone': '#8B7F73',
        'wh-charcoal': '#3D3A37',
        'wh-brown': '#5C4A3D',
        'wh-sage': '#A8B5A0',
        'wh-mustard': '#D4A843',
        'wh-soft': '#ECE7E1',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
