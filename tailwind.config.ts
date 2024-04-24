import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        900: "#480a7f",
        800: "#5a0c9f",
        700: "#6c0ebf",
        600: "#7e11de",
        500: "#9013FE",
        400: "#9e31fe",
        300: "#ac4efe",
        200: "#ba6cfe",
        100: "#c889ff",
        DEFAULT: "#9013FE"
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 315deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(105deg, rgba(204,146,255,1) 0%, rgba(144,19,254,1) 50%);"
      },
    },
  },
  plugins: [],
};
export default config;
