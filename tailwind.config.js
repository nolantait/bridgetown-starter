/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(min(100%, var(--grid-min, 20ch)), 1fr))"
      },
      gap: {
        xs: "var(--layout-gap-xs)",
        sm: "var(--layout-gap-sm)",
        md: "var(--layout-gap-md)",
        lg: "var(--layout-gap-lg)",
      },
      padding: {
        xs: "var(--padding-xs)",
        sm: "var(--padding-sm)",
        md: "var(--padding-md)",
        lg: "var(--padding-lg)",
        xl: "var(--padding-xl)",
      },
      margin: {
        xs: "var(--margin-xs)",
        sm: "var(--margin-sm)",
        md: "var(--margin-md)",
        lg: "var(--margin-lg)",
        xl: "var(--margin-xl)",
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
}

