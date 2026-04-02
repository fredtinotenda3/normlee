import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6600',
          hover: '#E55A00',
        },
        secondary: {
          DEFAULT: '#333333',
          light: '#4F4F4F',
        },
        accent: {
          DEFAULT: '#FFFFFF',
        },
        gray: {
          50: '#F8F8F8', 100: '#E0E0E0', 200: '#C0C0C0', 300: '#A0A0A0',
          400: '#808080', 500: '#666666', 600: '#4F4F4F', 700: '#333333',
          800: '#1F1F1F', 900: '#0D0D0D',
        },
        earth: { green: '#4CAF50' },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.1)',
        button: '0 2px 6px rgba(0,0,0,0.15)',
      },
      borderRadius: { card: '1rem', button: '0.5rem' },
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;