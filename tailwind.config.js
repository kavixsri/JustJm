/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Safelist dynamic color classes used in the app
  safelist: [
    { pattern: /bg-gradient-to-r/ },
    { pattern: /from-(indigo|blue|purple|green|orange)-(400|600)/ },
    { pattern: /to-(indigo|blue|purple|green|orange)-(400|600)/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
