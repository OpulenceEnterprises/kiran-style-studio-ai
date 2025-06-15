
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        marcellus: ['Marcellus', 'serif'], // Elegant, luxury serif
        nunito: ['Nunito', 'sans-serif'],  // Soft, rounded sans
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        sand: {
          light: '#FFF6EA',
          DEFAULT: '#F8ECD6',
        },
        sage: {
          light: '#DBECD1',
          DEFAULT: '#B5C7A7',
        },
        berry: {
          light: '#F8E4ED',
          DEFAULT: '#E9AEBF',
        },
        ink: {
          DEFAULT: '#2D2B45',
        },
        gold: {
          DEFAULT: '#F8D57E',
        },
        blush: {
          light: '#FFDDE4',
          DEFAULT: '#F6B7BD',
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#F8F6ED',
        },
        teal: {
          light: '#C5ECEA',
          DEFAULT: '#79B3B1',
        }
      },
      backgroundImage: {
        'handmade-paper': "url('https://www.transparenttextures.com/patterns/french-paper.png')", // Subtle paper texture
        'hero-fabric': "linear-gradient(120deg, #FFF6EA 60%, #DBECD1 100%)"
      },
      boxShadow: {
        'lux-soft': '0 8px 40px 0 rgba(213,173,188,0.10)',
        'lux-glass': '0 6px 40px 0 rgba(121, 179, 177, 0.18), 0 1.5px 12px 0 rgba(246, 183, 189, 0.10)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '3xl': '2rem',
        'circle': '9999px',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

