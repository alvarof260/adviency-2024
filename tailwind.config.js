/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["roboto", "serif"],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/Christmas-seamless-pattern-vector-design-Graphics-36165377-1.jpg')"
      }
    },
  },
  plugins: [],
}

