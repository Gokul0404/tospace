/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      head: "55px",
      soon: "35px",
      icon: "25px",
      icon2:"29px",
      para: "36px",
      head: "45px",
      desk1: "44px",
      "head-mob": "22px",
      mob: " 10px",
      "4k": " 15px",
      mes: "14px",
      desk: "12px",
      heading: "26px",
      content: "16px",
      contentpara: "18px",
      paragraph: "20px",
      footerf: "12.5px",
    },
    screens: {
      "mobile-sm": "320px",
      "mobile-md": "360px",
      "mobile-lg": "420px",

      tablet: "640px",
      tabletmax: { max: "700px" },
      mobilemax: { max: "500px" },
      laptopmax: "1180px",
      laptop: "1024px",
      laptopad: "1179px",
      "laptop-lg": "1440px",

      desktop: "1280px",
      "desktop-lg": "1500px",
      "desktop-lg-4k": "1800px",
      "4k-first": "2100px",
      "4k": "2560px",
    },
    extend: {
      fontFamily: {
        space: ["spaceman"],
        spaceage: ["spaceage"],
        spacereg: ["spacereg"],
        Azonix: ["Azonix"],
        Ddt: ["Ddt"],
      },
      colors: {
        fblue: "black",
        in: "#C13584",
        fa: " #4867AA",
        lin: "#0077B5",
        twi: "#2bc4ff",
      },
    },
  },
  plugins: [require("daisyui")],
};
