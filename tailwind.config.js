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
        customhome: 'url("/images/control-room.jpg")',
        topoverlay: 'url("/images/studio_lobby_chill.jpg")',
        midoverlay: 'url("/images/rose_silk.jpg")',
        customblob: 'url("/images/stacked_stones.jpg")',
      },
    },
  },
  plugins: [],
};
