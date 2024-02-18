/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        tertiary: "#00ADB5",
        quaternary: "#EEEEEE",
      },
      animation: {
        "nav-open": "navOpen 1s",
        "nav-close": "navClose 1s",
      },
      keyframes: {
        navOpen: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(4rem)" },
        },
        navClose: {
          "0%": { transform: "translateY(4rem)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
