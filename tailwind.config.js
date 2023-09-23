/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
   './src/**/*.{js,ts,jsx,tsx}',
   'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat',
      },
      colors: {
        content: 'rgb(15 23 42/var(--tw-bg-opacity))',
        opaque: 'rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
],
};
