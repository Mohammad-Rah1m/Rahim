/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent:"var(--accent)",
        accentDark:"var(--accent-dark)",
        customGray: 'var(--gray)',
        customDarkGray:'var(--darkgray)'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("nth-child-even", "&:nth-child(even)");
    },
  ],
};
