import { BsCheck2Circle } from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",

  backgroundColor: "$primary-100",

  display: "flex",
  justifyContent: "center",

  paddingBottom: "60px",
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  display: "flex",

  padding: "0 20px",

  "@bq-800": {
    flexDirection: "column-reverse",
  },
});

export const Informations = styled("div", {
  width: "55%",

  "@bq-800": {
    width: "100%",

    marginTop: "20px",

    textAlign: "center",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Title = styled("h1", {
  fontSize: "40px",
  fontWeight: 500,

  "@bq-1200": {
    fontSize: "35px",
  },

  "@bq-700": {
    fontSize: "30px",
  },
});

export const SubTitle = styled("h2", {
  fontSize: "22px",
  fontWeight: 500,

  marginTop: "8px",

  color: "$text-secondary",

  "@bq-1200": {
    fontSize: "19px",
  },

  "@bq-700": {
    fontSize: "17px",
  },
});

export const CheckList = styled("div", {
  width: "100%",

  marginTop: "30px",
});

export const ListItem = styled("div", {
  display: "flex",
  alignItems: "center",

  "> span": {
    fontSize: "20px",
    fontWeight: 500,

    textAlign: "initial",

    "@bq-1200": {
      fontSize: "18px",
    },
  },

  marginTop: "15px",
});

export const CheckIcon = styled(BsCheck2Circle, {
  fontSize: "25px",

  flexShrink: 0,

  color: "$text-secondary",

  marginRight: "5px",
});

export const Product = styled("div", {
  width: "45%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@bq-800": {
    width: "100%",
  },
});

export const ProductImg = styled("img", {
  width: "100%",

  "@bq-800": {
    width: "100%",
    maxWidth: "500px",
  },
});
