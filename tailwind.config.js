/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#FF6B6B',
        dark: '#0a0a0f',
        'dark-secondary': '#1a1a2e',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
}