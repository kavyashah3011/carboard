/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F5FF',
          100: '#E0EAFF',
          200: '#C7D7FE',
          300: '#A4BCFD',
          400: '#7392FA',
          500: '#3B60F6',
          600: '#2544E6',
          700: '#1D32C5',
          800: '#1B299E',
          900: '#0F172A',
          950: '#0B0F19',
        },
        cobalt: {
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        industrial: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        eco: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'corporate': '0 4px 20px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'corporate-hover': '0 20px 35px -5px rgba(15, 23, 42, 0.12), 0 10px 15px -3px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}
