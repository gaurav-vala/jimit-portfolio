/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        daker_grotesk: ["Darker Grotesque", "sans-serif"],
        teko_sans: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [],
};
