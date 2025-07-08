
import type { Config } from "tailwindcss" 

const config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			sm: '576px',
  			'sm-max': {
  				max: '576px'
  			},
  			md: '768px',
  			'md-max': {
  				max: '768px'
  			},
  			lg: '992px',
  			'lg-max': {
  				max: '992px'
  			},
  			xl: '1200px',
  			'xl-max': {
  				max: '1200px'
  			},
  			'2xl': '1320px',
  			'2xl-max': {
  				max: '1320px'
  			},
  			'3xl': '1600px',
  			'3xl-max': {
  				max: '1600px'
  			},
  			'4xl': '1850px',
  			'4xl-max': {
  				max: '1850px'
  			}
  		}
  	},
  	extend: {
  		fontFamily: {
  			jakarta: [
  				'Inter',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		height: {
  			'300px': '300px',
  			'500px': '500px',
  			sidebar: 'calc(100vh - 32px)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'hvac-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  			'hvac-services': 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
  			'hvac-trust': 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)'
  		},
  		animation: {
  			'fade-up': 'fadeUp 0.6s ease-out',
  			'fade-in': 'fadeIn 0.8s ease-out',
  			'slide-in-left': 'slideInLeft 0.6s ease-out',
  			'slide-in-right': 'slideInRight 0.6s ease-out',
  			'bounce-in': 'bounceIn 0.8s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  		},
  		keyframes: {
  			fadeUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideInLeft: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-50px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(50px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			bounceIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.3)'
  				},
  				'50%': {
  					opacity: '1',
  					transform: 'scale(1.05)'
  				},
  				'70%': {
  					transform: 'scale(0.9)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'50': '#f0f9ff',
  				'100': '#e0f2fe',
  				'200': '#bae6fd',
  				'300': '#7dd3fc',
  				'400': '#38bdf8',
  				'500': '#0ea5e9',
  				'600': '#0284c7',
  				'700': '#0369a1',
  				'800': '#075985',
  				'900': '#0c4a6e',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#fef2f2',
  				'100': '#fee2e2',
  				'200': '#fecaca',
  				'300': '#fca5a5',
  				'400': '#f87171',
  				'500': '#ef4444',
  				'600': '#dc2626',
  				'700': '#b91c1c',
  				'800': '#991b1b',
  				'900': '#7f1d1d',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))',
  				border: 'hsl(var(--border))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			hvac: {
  				blue: {
  					'50': '#eff6ff',
  					'100': '#dbeafe',
  					'200': '#bfdbfe',
  					'300': '#93c5fd',
  					'400': '#60a5fa',
  					'500': '#3b82f6',
  					'600': '#2563eb',
  					'700': '#1d4ed8',
  					'800': '#1e40af',
  					'900': '#1e3a8a'
  				},
  				orange: {
  					'50': '#fff7ed',
  					'100': '#ffedd5',
  					'200': '#fed7aa',
  					'300': '#fdba74',
  					'400': '#fb923c',
  					'500': '#f97316',
  					'600': '#ea580c',
  					'700': '#c2410c',
  					'800': '#9a3412',
  					'900': '#7c2d12'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('tailwindcss-rtl'), require('tailwindcss-animate')],
} satisfies Config

export default config