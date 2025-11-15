/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'flashtech-purple': '#483078', // Roxo claro
        'flashtech-dark': '#301860',   // Roxo escuro
      }
    },
  },
  plugins: [],
};
export default config;