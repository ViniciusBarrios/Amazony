import { globalCss } from "stitches";

export default globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  li: {
    listStyle: "none",
  },
  a: {
    textDecoration: "none",

    color: "$text-primary-200",
  },
  "*, button, input, textarea": {
    border: "none",
    background: "none",
    outline: "none",
  },
  button: {
    cursor: "pointer",
  },
  textarea: {
    resize: "none",
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    backgroundColor: "$bg",
    color: "$text-primary-200",

    overflowX: "hidden",

    fontFamily: "sans-serif",

    textRendering: "optimizeLegibility !important",
    "-webkit-font-smoothing": "antialiased !important",
  },
});
