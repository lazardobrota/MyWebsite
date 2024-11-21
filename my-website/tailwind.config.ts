import type { Config } from "tailwindcss";
import tailwind_scrollbar from "tailwind-scrollbar";

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
        }
      },
      boxShadow: {
        'round-sm': ' 0px 2px 10px 2px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'inner-sm': ' inset 0px 2px 20px 4px rgba(0, 0, 0, 0.25)',
        'inner-m': ' inset 0px 2px 20px 11px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    tailwind_scrollbar({
      preferredStrategy: 'pseudoelements',
      nocompatible: true
    })
  ],
} satisfies Config;
