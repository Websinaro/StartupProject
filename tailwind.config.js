/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', 'Syne', 'sans-serif'],
        body: ['Cabinet Grotesk', 'Manrope', 'sans-serif'],
      },
      colors: {
        ink: '#0D0D12',
        'ink-800': '#16161F',
        'ink-700': '#1E1E2D',
        'ink-600': '#28283A',
        violet: '#7B5CF0',
        'violet-light': '#9B7FF5',
        'violet-glow': 'rgba(123, 92, 240, 0.4)',
        cyan: '#22D4F5',
        rose: '#F0547B',
        'text-muted': '#8B8BA7',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(258,84%,65%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,93%,54%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(338,80%,63%,0.1) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.7s ease forwards',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } },
        slideUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
