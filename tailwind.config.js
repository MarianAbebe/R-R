/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080b12',
        panel: '#101624',
        panel2: '#151e30',
        cyan: '#67e8f9',
        violet: '#a78bfa',
        mint: '#86efac',
        danger: '#fb7185',
        amber: '#fbbf24',
      },
      boxShadow: {
        glow: '0 0 28px rgba(103, 232, 249, 0.18)',
        violet: '0 0 28px rgba(167, 139, 250, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
