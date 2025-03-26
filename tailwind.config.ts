import type { Config } from "tailwindcss";
import tailwind_scrollbar from "tailwind-scrollbar";
import { transform } from "next/dist/build/swc/generated-native";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			darkpurple: {
  				'100': '#7e6ea9',
  				'200': '#65558f',
					'210': '#524575',
  				'250': '#200d23',
  				'300': '#170d1d'
  			},
  			gray: {
  				'250': '#d9d9d9'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'round-sm': ' 0px 2px 10px 2px rgba(0, 0, 0, 0.25)',
  			'4xl': [
  				'0 35px 35px rgba(0, 0, 0, 0.25)',
  				'0 45px 65px rgba(0, 0, 0, 0.15)'
  			],
  			thin: '0px 0px 10px 2px rgba(0, 0, 0, 0.50)',
  			'inner-sm': ' inset 0px 2px 20px 4px rgba(0, 0, 0, 0.25)',
  			'inner-m': ' inset 0px 2px 20px 11px rgba(0, 0, 0, 0.25)'
  		},
  		fontSize: {
  			h1: '3.625rem',
  			h2: '2.625rem',
  			p1: '1.875rem'
  		},
  		keyframes: {
  			bounceInOut: {
  				'0%': {
  					transform: 'scale(1, 1)'
  				},
  				'50%': {
  					transform: 'scale(1.3, 1.3)'
  				},
  				'100%': {
  					transform: 'scale(1.3, 1.3)'
  				}
  			}
  		},
  		animation: {
  			bouncy: 'bounceInOut 0.3s cubic-bezier(1, 1.25, 0.5, 1)'
  		},
  		scale: {
  			'175': '1.75'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			maxWidth: {
				custom: '120rem'
			}
  	}
  },
  plugins: [
    tailwind_scrollbar({
      preferredStrategy: 'pseudoelements',
      nocompatible: true
    }),
      require("tailwindcss-animate")
],
} satisfies Config;
