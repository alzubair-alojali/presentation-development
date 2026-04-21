/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#060B1A',
          elevated: '#0B1226',
          inset: '#0F1A34',
        },
        ink: {
          primary: '#F4F7FF',
          secondary: '#A7B3CC',
          tertiary: '#6E7A94',
          inverse: '#060B1A',
        },
        accent: {
          primary: '#4CC4FF',
          primaryStrong: '#1E9FE8',
          secondary: '#7C8BFF',
          tertiary: '#B980FF',
          warm: '#FFB86B',
        },
        semantic: {
          success: '#4ADE80',
          warning: '#F5B752',
          danger: '#FF6B7A',
        },
      },
      fontFamily: {
        display: ['Satoshi', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 7vw, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'h1': ['clamp(2.5rem, 4.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 2.6vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 1.5vw, 1.625rem)', { lineHeight: '1.3' }],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '28px',
        '2xl': '36px',
      },
      boxShadow: {
        'e1': '0 1px 0 rgba(255,255,255,0.03) inset, 0 10px 30px -12px rgba(0,0,0,0.6)',
        'e2': '0 1px 0 rgba(255,255,255,0.05) inset, 0 18px 50px -18px rgba(76,196,255,0.25)',
        'e3': '0 24px 70px -20px rgba(124,139,255,0.35)',
        'glow-cyan': '0 0 40px 0 rgba(76,196,255,0.35)',
        'glow-violet': '0 0 40px 0 rgba(124,139,255,0.35)',
      },
      backdropBlur: {
        xs: '4px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-20px) scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
