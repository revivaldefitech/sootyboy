/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brand': "url('/img/bg.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      rvl: {
        "primary": "#FF0069",
        "secondary": "#0D0C2B",
        "accent": "#e6005f",
        "neutral": "#262641",
        "base-100": "#FFFFFF",
        "info": "#3ABFF8",
        "success": "#cd0054",
        "warning": "#FBBD23",
        "error": "#F87272",
      }
    },],// "light", "dark"],
  },
}
