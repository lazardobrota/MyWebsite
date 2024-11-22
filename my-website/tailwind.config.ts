import type { Config } from "tailwindcss";
import tailwind_scrollbar from "tailwind-scrollbar";
import { transform } from "next/dist/build/swc/generated-native";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkpurple: {
          100: '#7e6ea9',
          200: '#65558f',
          250: '#200d23',
          300: '#170d1d'
        },
        gray: {
          250: '#d9d9d9'
        }
      },
      boxShadow: {
        'round-sm': ' 0px 2px 10px 2px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'thin': '0px 0px 10px 2px rgba(0, 0, 0, 0.50)',
        'inner-sm': ' inset 0px 2px 20px 4px rgba(0, 0, 0, 0.25)',
        'inner-m': ' inset 0px 2px 20px 11px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        'h1': '3.625rem',
        'p1': '1.875rem',
      },
      keyframes: {
        bounceInOut: {
          '0%': {transform: 'scale(1, 1)'},
          '50%': {transform: 'scale(1.3, 1.3)'},
          '100%': {transform: 'scale(1.3, 1.3)'}
        }
      },
      animation: {
        bouncy: 'bounceInOut 0.3s cubic-bezier(1, 1.25, 0.5, 1)'
      },
      scale: {
        '175': '1.75'
      }
    }
  },
  plugins: [
    tailwind_scrollbar({
      preferredStrategy: 'pseudoelements',
      nocompatible: true
    })
  ],
} satisfies Config;
