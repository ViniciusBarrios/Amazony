import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",
  maxWidth: "1200px",

  margin: "0 auto",

  padding: "60px 20px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h3", {
  fontSize: "40px",
  fontWeight: 500,

  textAlign: "center",

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

  "@bq-1200": {
    fontSize: "19px",
  },

  "@bq-700": {
    fontSize: "17px",
  },
});

export const Wrapper = styled("div", {
  width: "100%",

  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",

  "@bq-1200": {
    maxWidth: "700px",
  },
});
