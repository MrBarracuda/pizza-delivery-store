module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwindcss-debug-screens'), require('@tailwindcss/typography'),],
};
