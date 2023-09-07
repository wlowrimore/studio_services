/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        customabout: 'url("/images/stacked_stones.jpg")',
        customhome: 'url("/images/studio_lobby_chill.jpg")',
      },
    },
  },
  plugins: [],
};
