/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      animation: {
        fade: 'fadeOut .4s ease-in-out',
        scale: 'scaleIn .2s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { scale: 0 },
          '100%': { scale: 1 },
        }
      }),
    },
    plugins: [],
  },
}

