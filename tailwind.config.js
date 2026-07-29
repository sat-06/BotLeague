/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bot: {
          bg: '#08090D',
          card: '#0F111A',
          cardBorder: '#1F2436',
          red: '#FF3B5C',
          redHover: '#E02E4C',
          redGlow: 'rgba(255, 59, 92, 0.4)',
          gold: '#EAB308',
          goldGlow: 'rgba(234, 179, 8, 0.3)',
          blue: '#3B82F6',
          blueGlow: 'rgba(59, 130, 246, 0.4)',
          cyan: '#00E5FF',
          darkGray: '#161824',
          textMuted: '#94A3B8',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(255, 59, 92, 0.5)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'gold-glow': '0 0 20px rgba(234, 179, 8, 0.5)',
        'cyan-glow': '0 0 20px rgba(0, 229, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
