import { BsStarFill } from "react-icons/bs";

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

export const Wrapper = styled("div", {
  width: "100%",

  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",

  marginTop: "40px",

  "@bq-1200": {
    maxWidth: "700px",
  },
});

export const Reviews = styled("div", {
  marginTop: "60px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  textAlign: "center",

  "> strong": {
    fontSize: "22px",
    fontWeight: 600,
  },

  "> div": {
    margin: "10px 0",
  },

  "> span": {
    fontSize: "16px",
    fontWeight: 500,

    color: "$text-primary-100",
  },
});

export const StarIcon = styled(BsStarFill, {
  fontSize: "35px",

  color: "$star-color",

  margin: "0 3px",
});
