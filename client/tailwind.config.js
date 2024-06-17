/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9763ff',
        secondary: '#f0f2f5',
        green: '#42b72a',
        grey: '#8a8d91',
        inputBg: '#f5f6f7'
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
    
      }
    },
  },
  plugins: [],
};
