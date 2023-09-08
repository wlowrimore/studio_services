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
        midoverlay: 'url("/images/control_room.jpg")',
        customhome: 'url("/images/comfy_control_room.jpg")',
        topoverlay: 'url("/images/studio_lobby_chill.jpg")',
        midoverlayalt: 'url("/images/rose_silk.jpg")',
        customabout: 'url("/images/imperial_studio_front.jpg")',
      },
    },
  },
  plugins: [],
};
