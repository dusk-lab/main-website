/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind where to look for class names
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dusk: {
          bg: '#020617',     // Slate 950
          card: '#0f172a',   // Slate 900
          border: '#1e293b', // Slate 800
          primary: '#6366f1', // Indigo 500
          secondary: '#06b6d4' // Cyan 500
        }
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
      }
    }
  },
  plugins: [],
}