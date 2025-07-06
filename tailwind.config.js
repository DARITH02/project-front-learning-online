/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables toggling dark mode via a class on <html>
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // adjust paths to your project structure
  ],
  theme: {
    extend: {
      // Customize your theme here (colors, fonts, etc.)
    },
  },
  plugins: [
    // Add Tailwind plugins here if you want, e.g. forms, typography
  ],
};
