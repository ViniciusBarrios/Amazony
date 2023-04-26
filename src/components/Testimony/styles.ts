import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",

  backgroundColor: "$primary-100",

  display: "flex",
  justifyContent: "center",

  padding: "60px 20px",
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",
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

  color: "$text-secondary",

  "@bq-1200": {
    fontSize: "19px",
  },

  "@bq-700": {
    fontSize: "17px",
  },
});
