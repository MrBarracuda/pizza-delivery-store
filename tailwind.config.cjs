module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui'), require('tailwindcss-debug-screens'), require('@tailwindcss/typography')],
}
