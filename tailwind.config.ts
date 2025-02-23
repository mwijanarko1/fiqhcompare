import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#d5f1e8',
          200: '#aee3d1',
          300: '#7dcdb3',
          400: '#4fb594',
          500: '#2e9677',
          600: '#1f785f',
          700: '#1b5c4b',
          800: '#18473c',
          900: '#153b32',
        },
        secondary: {
          50: '#fdf8ed',
          100: '#f9eccc',
          200: '#f3d689',
          300: '#edbf47',
          400: '#e7a81f',
          500: '#d18c0c',
          600: '#a66908',
          700: '#7d4c0b',
          800: '#663d0f',
          900: '#553410',
        },
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'geometric-pattern': "url('/patterns/geometric.svg')",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
      });
    }),
  ],
};
export default config;
