/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        turquoise: {
          400: '#4ABFBD',
          500: '#2AB3B1'
        },
        moss: {
          400: '#C0DF33'
        },
        gray: {
          100: '#E6EFF5',
          500: '#9AA7BE'
        }
      },
      boxShadow: {
        card: '0px 15px 30px 0px rgba(0, 81, 171, 0.15)',
        button: '0px 10px 10px 0px rgba(0, 0, 0, 0.10)'
      },
      spacing: {
        18: '4.5rem',
        100: '25rem'
      }
    }
  },
  plugins: []
};
