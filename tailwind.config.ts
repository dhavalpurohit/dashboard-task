import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,png,jpg,svg}",
  ],
  darkMode: "class",
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
        theme_blue_10: "rgba(67, 24, 255, 0.1)",
        dark_grey: "#808080",
        ghost_white: "#F4F7FE",
        amber: " #FBBC05",
        light_bittersweet: "#EE5D50",
        mint: "#18CE98",
        silver: "rgba(204, 204, 204, 0.5)",
        jordy_blue: "#89B0EB",
        lavender_web: "#E5E6FF",
        black_opacity_80: "rgba(0, 0, 0, 8)",
        delft_blue: "#2B3674",
        coral_pink: "#FF847C",
        coral_pink_10: "rgba(255, 132, 124, 0.1)",
        jet: "#2F2924",
        slate_gray: "#72768B",
        palatinate_blue: "#4A3AFF",
        ultra_violet: " #615E83",
        space_cadet: "#1E1B39",
        honeydew: "#E6F8EF",
      },
      spacing: {
        90: "90px",
        306: "306px",
        18: "18px",
        60: "60px",
        92: "92px",
        7: "7px",
        46: "46px",
        "10px": "10px",
      },
      fontSize: {
        8: "8px",
        28: "28px",
        "10px": "10px",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      lineHeight: {
        "18px": "18px",
      },
      letterSpacing: {
        2: "2%",
      },
      boxShadow: {
        commonShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
