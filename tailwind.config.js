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
        'text-flow': 'text-flow 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'text-flow': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'shimmer': {
          '100%': { 'transform': 'translateX(100%)' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    }
  },
  plugins: [],
}