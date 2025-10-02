/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#06b6d4',
        'electric-blue': '#3b82f6',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'neon-emerald': '#10b981',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 4s',
        'gradient': 'gradient 15s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(6, 182, 212, 0.5)',
        'neon-lg': '0 0 40px rgba(6, 182, 212, 0.8)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        '3d': '0 20px 40px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
