/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          50: '#fff9e6',
          100: '#fff0cc',
          200: '#ffe099',
          300: '#ffcc66',
          400: '#ffb833',
          500: '#d4a84b',
          600: '#a67c3a',
          700: '#785a2e',
          800: '#523f24',
          900: '#33281b',
        },
        'nude': {
          50: '#fdf8f6',
          100: '#f9f0eb',
          200: '#f5e2d8',
          300: '#f0d4c5',
          400: '#ebc6b2',
          500: '#d4a085',
          600: '#a67c5f',
          700: '#785842',
          800: '#523a2e',
          900: '#33251f',
        },
        'charcoal': {
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#b8b8b8',
          400: '#a0a0a0',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#303030',
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'serif': ['PT Serif', 'Georgia', 'serif'],
        'display': ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
