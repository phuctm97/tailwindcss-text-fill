const plugin = require("tailwindcss/plugin");
const flatten = require("flatten-tailwindcss-theme");

const textFill = plugin(
  ({ addUtilities, variants, theme, e }) => {
    const colors = flatten(theme("colors"));
    const utils = Object.entries(colors).reduce(
      (res, [key, value]) =>
        Object.assign(res, {
          [`.${e(`text-fill-${key}`)}`]: {
            "-webkit-text-fill-color": value,
          },
        }),
      {}
    );
    addUtilities(utils, variants("textFill"));
  },
  { variants: { textFill: [] } }
);

module.exports = textFill;
