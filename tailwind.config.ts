import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'media', // respects prefers-color-scheme
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6600',  // Deep Orange / Amber for CTAs
          dark: '#FF7F11',     // Hover/focus
        },
        secondary: {
          DEFAULT: '#333333',  // Charcoal / Dark Gray for headers/text
          light: '#4F4F4F',    // Subtle text or secondary UI
        },
        accent: {
          DEFAULT: '#FFFFFF',  // White for contrast/background
        },
        gray: {
          50: '#F8F8F8',
          100: '#E0E0E0',
          200: '#C0C0C0',
          300: '#A0A0A0',
          400: '#808080',
          500: '#666666',
          600: '#4F4F4F',
          700: '#333333',
          800: '#1F1F1F',
          900: '#0D0D0D',
        },
        earth: {
          green: '#4CAF50', // Optional accent for eco/fill materials
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.1)',
        button: '0 2px 6px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        card: '1rem',
        button: '0.5rem',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),      // For PriceCalculator inputs/selects
    require('@tailwindcss/typography'), // Optional for product/service descriptions
  ],
};

export default config;