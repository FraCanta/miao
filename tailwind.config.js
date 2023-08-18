/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1500px",
        // => @media (min-width: 1536px) { ... }
        fxl: "1920px",
        // => @media (min-width: 1920px) { ... }

        "3xl": "2560px",
        // => @media (min-width: 2560px) { ... }
        "4xl": "3840px",
        // => @media (min-width: 3840px) { ... }
      },
    },
    colors: {
      second: "#606060",
      red: "#de4928",
      white: "#ffffff",
      main: "#39373c",
    },
  },

  plugins: [require("tailwindcss-animate")],
};
