import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   // Mobile
    //   "xs": "320px", // Small phones (iPhone SE)
    //   "sm": "375px", // Modern phones (iPhone 12/13)
    //   "md": "414px", // Larger phones (iPhone XR)
    //   "md2": "480px", // Edge case for larger mobiles

    //   // Tablets
    //   "tab": "768px", // iPad Portrait (Tailwind "md")
    //   "tab-xl": "1024px", // iPad Landscape (Tailwind "lg")

    //   // Desktops
    //   "lg": "1280px", // Laptops (Tailwind "xl")
    //   "xl": "1440px", // Larger laptops
    //   "2xl": "1680px", // Wide monitors
    //   "3xl": "1920px", // Full HD desktops

    //   // Landscape
    //   "land-xs": {
    //     raw: "(min-width: 568px) and (max-width: 767px) and (orientation: landscape)",
    //   },
    //   "land-sm": {
    //     raw: "(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)",
    //   },
    // },
    screens: {
      "xs": "320px",
      "sm": "375px",
      "md": "414px",
      "md2": "480px",
      "tab": "768px",
      "tab-xl": "1024px",
      "lg": "1280px",
      "xl": "1440px",
      "2xl": "1680px",
    },
    extend: {
      fontSize: {
        "10rem": "10rem",
        "11rem": "11rem",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        "400": "400ms",
      },
      backgroundImage: {
        "blended-gradient": "linear-gradient(90deg, #fbc41c, #f97001, #f34d3a)",
      },
      backgroundColor: {
        "main-bg": "#fff7dc",
        "title-bg": "#fcd35f",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/container-queries"),
    scrollbarHide,
  ],
};
export default config;
