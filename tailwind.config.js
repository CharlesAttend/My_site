/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      mauve: {
        50: "#f2eafd",
        100: "#d8bffa",
        200: "#bf94f6",
        300: "#a569f3",
        400: "#8b3eef",
        500: "#7113ec",
        600: "#5d10c1",
        700: "#480c96",
        800: "#33096b",
        900: "#1f0540",
        950: "#0a0215",
      },
      sapphire: {
        50: "#ebf9fc",
        100: "#c4edf5",
        200: "#9ce2ee",
        300: "#75d6e7",
        400: "#4ecae0",
        500: "#26bed9",
        600: "#1f9cb1",
        700: "#18798a",
        800: "#115662",
        900: "#0a343b",
        950: "#031114",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
  ],
};
