/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        airnt: ["Airnt", "sans-serif"],
        dm_sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        custom_yellow: "#FFA500",
        custom_red: "#BB0000",
      },
    },
  },
  plugins: [],
};
