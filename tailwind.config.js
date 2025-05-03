/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff8d00',
        'secondary': '#ffef00',
        'dark-bg': '#121212',
        'card-bg': '#1e1e1e',
        'border-color': '#333333',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, rgba(255, 141, 0, 1) 0%, rgba(255, 239, 0, 1) 100%)',
        'gradient-brand-transparent': 'linear-gradient(90deg, rgba(255, 141, 0, 0.8) 0%, rgba(251, 236, 17, 0.8) 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-brand': {
          'background': 'linear-gradient(90deg, rgba(255, 141, 0, 1) 0%, rgba(255, 239, 0, 1) 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    },
    require('tailwind-scrollbar')
  ],
}