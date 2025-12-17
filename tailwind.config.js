export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lh-blue': '#0f172a',
        'lh-gold': '#d4af37',
      },
      // --- AQUI AGREGAMOS LAS FUENTES ---
      fontFamily: {
        sans: ['"Lato"', 'sans-serif'],        // Texto limpio
        heading: ['"Playfair Display"', 'serif'], // Títulos elegantes
      }
    },
  },
  plugins: [],
}