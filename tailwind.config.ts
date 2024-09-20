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
        lavender: "#EAEBFF",
        light_grey: "#D9D9D9",
        royal_blue: "#252762",
        bittersweet: "#FF5B5B",
        bittersweet_opacity: "rgba(255, 91, 91, 0.15)",
        night: "#0D0D0D",
        theme_blue: "#4318FF",
        dark_grey: "#808080",
        ghost_white: "#F4F7FE",
        amber: " #FBBC05",
        light_bittersweet: "#EE5D50",
        mint: "#18CE98",
        silver: "rgba(204, 204, 204, 0.5)",
        jordy_blue: "#89B0EB",
      },
      spacing: {
        90: "90px",
        306: "306px",
        18: "18px",
        60: "60px",
        92: "92px",
      },
      fontSize: {
        8: "8px",
        28: "28px",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
    },
  },
  plugins: [],
};
export default config;
