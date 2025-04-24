/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1a56db',
        'primary-orange': '#f59e0b',
        'premium-gold': '#d4af37',
        'dark-blue': '#0a1626',
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
        'pulse-animation': 'pulse 2s infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
