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

export const Content = styled("div", {
  maxWidth: "850px",

  display: "flex",
  alignItems: "center",

  padding: "40px 0",

  "@bq-700": {
    flexDirection: "column",

    textAlign: "center",
  },
});

export const Image = styled("img", {
  maxWidth: "250px",

  marginRight: "30px",

  "@bq-700": {
    marginRight: 0,
  },
});

export const Description = styled("p", {
  fontSize: "22px",
  fontWeight: 500,

  color: "$text-secondary",

  "@bq-700": {
    marginTop: "20px",
  },
});
