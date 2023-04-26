import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",
  maxWidth: "1200px",

  margin: "0 auto",

  padding: "60px 0",
});

export const Title = styled("h3", {
  fontSize: "40px",
  fontWeight: 500,

  textAlign: "center",

  padding: "0 15px",

  "@bq-1200": {
    fontSize: "35px",
  },

  "@bq-700": {
    fontSize: "30px",
  },
});

export const SubTitle = styled("h4", {
  fontSize: "22px",
  fontWeight: 500,

  textAlign: "center",

  marginTop: "8px",

  color: "$text-primary-100",

  padding: "0 15px",

  "@bq-1200": {
    fontSize: "19px",
  },

  "@bq-700": {
    fontSize: "17px",
  },
});
