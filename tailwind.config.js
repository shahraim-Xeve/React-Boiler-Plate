/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "2lg": { max: "1120px" },
      // => @media (max-width: 1120px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "3md": { max: "900px" },
      // => @media (max-width: 900px) { ... }

      "2md": { max: "800px" },
      // => @media (max-width: 767px) { ... }

      md: { max: "700px" },
      // => @media (max-width: 767px) { ... }

      "5sm": { max: "659px" },
      // => @media (max-width: 659px) { ... }

      "4sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }

      "3sm": { max: "500px" },
      // => @media (max-width: 500px) { ... }

      "2sm": { max: "460px" },
      // => @media (max-width: 460px) { ... }

      sm: { max: "400px" },
      // => @media (max-width: 460px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
