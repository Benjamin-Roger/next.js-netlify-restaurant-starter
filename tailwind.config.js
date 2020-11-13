const { colors } = require("./utils/colorScheme.js");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  variants: {},
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.primary.main,
        secondary: colors.secondary.main,
        regular: colors.background.regular,
        'txt-regular': colors.text.regular,
        'navy-900':colors.text.dark,
        'dark-gray-900':colors.background.dark
        // ...
      }
    },
  },
};
