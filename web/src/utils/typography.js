import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Rubik Mono One", "sans-serif"],
  bodyFontFamily: ["Work Sans", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
