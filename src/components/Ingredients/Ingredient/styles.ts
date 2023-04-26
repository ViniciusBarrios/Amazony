import { BsCheck2Circle } from "react-icons/bs";

import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "250px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginTop: "60px",
  padding: "0 10px",

  "@bq-1200": {
    maxWidth: "300px",
  },

  "@bq-700": {
    maxWidth: "450px",
  },
});

export const Ingredient = styled("div", {
  width: "160px",
  height: "160px",

  boxShadow: "$ingredient-card",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "$full",

  position: "relative",
});

export const IngredientImg = styled(Image, {
  borderRadius: "$full",
});

export const Name = styled("strong", {
  fontSize: "23px",
  fontWeight: 600,

  textAlign: "center",

  marginTop: "15px",
});

export const ScientificName = styled("span", {
  fontSize: "17px",
  fontWeight: 500,

  fontStyle: "italic",

  textAlign: "center",

  color: "$text-primary-100",

  marginTop: "5px",
});

export const CheckList = styled("div", {
  width: "100%",

  marginTop: "15px",
});

export const ListItem = styled("div", {
  display: "flex",
  alignItems: "center",

  "> span": {
    fontSize: "16px",
    fontWeight: 500,
  },

  marginTop: "10px",
});

export const CheckIcon = styled(BsCheck2Circle, {
  fontSize: "24px",

  flexShrink: 0,

  color: "$text-secondary",

  marginRight: "8px",
});
