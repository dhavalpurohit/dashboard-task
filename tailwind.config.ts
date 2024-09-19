import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,png,jpg,svg}",
  ],
  theme: {
    extend: {
      colors: {
        lavender : "#EAEBFF",
        light_grey: "#D9D9D9",
        royal_blue : "#252762",
        bittersweet: "#FF5B5B",
        bittersweet_opacity: "rgba(255, 91, 91, 0.15)",
        night: "#0D0D0D"
      },
      spacing: {
        90: "90px",
        306:"306px",
        18: "18px"
      },
      fontSize: {
        8:"8px",
      },
      borderWidth: {
        "0.5": "0.5px"
      }
    },
  },
  plugins: [],
};
export default config;
