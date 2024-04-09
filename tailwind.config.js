/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'press-start-2p': ['var(--font-press-start-2p)', 'sans-serif']
      },

      colors: {
        primary: '#ACC156'
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
