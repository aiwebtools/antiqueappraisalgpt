
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					pink: '#ff00ff',
					blue: '#00f9ff',
					purple: '#b026ff',
					green: '#00ff9f',
					yellow: '#ffde03'
				},
				cyber: {
					dark: '#0d0e19',
					darker: '#07070f',
					light: '#1e1f3a',
					mid: '#131429'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'cyber': ['Orbitron', 'sans-serif'],
				'sans': ['Inter', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						'box-shadow': '0 0 15px 5px rgba(255, 0, 255, 0.5), 0 0 20px 7px rgba(0, 249, 255, 0.3)',
						'opacity': '1' 
					},
					'50%': { 
						'box-shadow': '0 0 25px 10px rgba(255, 0, 255, 0.7), 0 0 30px 15px rgba(0, 249, 255, 0.5)',
						'opacity': '0.8' 
					}
				},
				'text-flicker': {
					'0%, 100%': { opacity: '1' },
					'10%, 30%, 70%, 90%': { opacity: '0.9' },
					'20%, 60%, 80%': { opacity: '1' }
				},
				'shimmer': {
					'100%': { 'background-position': '200% center' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'text-flicker': 'text-flicker 3s linear infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'spin-slow': 'spin-slow 12s linear infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(176, 38, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(176, 38, 255, 0.1) 1px, transparent 1px)',
				'neon-gradient': 'linear-gradient(90deg, #ff00ff, #00f9ff, #ff00ff)',
				'cyber-gradient': 'radial-gradient(circle, rgba(14, 15, 31, 0.8) 0%, rgba(7, 7, 15, 1) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
