/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      head: "55px",
      soon: "35px",
      icon: "25px",
      para: "36px",
      head: "45px",
      desk1: "44px",
      "head-mob": "22px",
      mob: " 10px",
      "4k": " 15px",
      mes: "14px",
      desk: "12px",
      heading: "26px",
      paragraph: "20px",
      footerf: "12.5px",
    },
    screens: {
      "mobile-sm": "320px",
      "mobile-md": "360px",
      "mobile-lg": "420px",

      tablet: "640px",

      laptop: "1024px",

      "laptop-lg": "1440px",

      desktop: "1280px",
      "desktop-lg": "1500px",
      "desktop-lg-4k": "1800px",

      "4k": "2560px",
    },
    extend: {
      fontFamily: {
        space: ["spaceman"],
        spaceage: ["spaceage"],
        spacereg: ["spacereg"],
        Azonix: ["Azonix"],
      },
      colors: {
        fblue: "#216eff",
        in: "#C13584",
        fa: " #1877F2",
        lin: "#0A66C2",
        twi: "#2bc4ff",
      },
    },
  },
  plugins: [require("daisyui")],
};
