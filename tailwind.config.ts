
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blush: {
          light: '#FBEAEC',
          DEFAULT: '#F9E1E9',
        },
        cream: {
          light: '#FFF9F2',
          DEFAULT: '#F7EFD8',
        },
        teal: {
          light: '#D8EDF0',
          DEFAULT: '#A7D7D9',
        },
        gold: {
          DEFAULT: '#E9C46A',
        },
        rose: {
          DEFAULT: '#FCB2B6',
        }
      },
      backgroundImage: {
        'hero-craft': "linear-gradient(120deg, #FFF9F2 60%, #D8EDF0 100%)",
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(200,180,190,0.12)',
        'cta': '0 4px 30px 0 rgba(249, 225, 233, 0.19), 0 1.5px 16px 0 rgba(168, 215, 217, 0.17)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '3xl': '1.75rem',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
