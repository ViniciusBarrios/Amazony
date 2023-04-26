import { styled } from "stitches";

export const Container = styled("button", {
  color: "$white",
  backgroundColor: "$primary-300",

  borderRadius: "$md",

  padding: "15px 20px",

  fontSize: "20px",
  fontWeight: 600,

  "@bq-1200": {
    fontSize: "19px",
  },

  "@bq-800": {
    fontSize: "17px",
  },
});
