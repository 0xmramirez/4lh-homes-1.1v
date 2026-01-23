export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lh-blue': '#000000',  // Redefinimos el color base oscuro a NEGRO PURO
        'lh-dark': '#1c1c1c',
        'lh-gold': '#ffd400',  // Nuevo amarillo vibrante
        'lh-gray': '#f8f9fa',  // Un blanco/gris muy sutil para fondos claros
      },
      // --- AQUI AGREGAMOS LAS FUENTES ---
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],        // Texto limpio
        heading: ['"Playfair Display"', 'serif'], // Títulos elegantes
      }
    },
  },
  plugins: [],
}