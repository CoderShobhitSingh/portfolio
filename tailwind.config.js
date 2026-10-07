/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090c0f',
        panel: '#101519',
        mint: '#91f2c3',
        muted: '#94a3a6',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1160px',
      },
    },
  },
  plugins: [],
}