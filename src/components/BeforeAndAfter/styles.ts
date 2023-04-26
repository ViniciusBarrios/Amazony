import { BsCheck2Circle } from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",

  backgroundColor: "$primary-100",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  padding: "60px 20px",
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

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  display: "flex",

  marginTop: "40px",

  "@bq-800": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const BeforeAndAfter = styled("div", {
  width: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  paddingRight: "15px",

  "@bq-800": {
    width: "100%",

    paddingRight: 0,

    justifyContent: "center",
  },
});

export const BeforeAndAfterImg = styled("img", {
  width: "70%",

  borderRadius: "$md",

  "@bq-800": {
    width: "100%",
    maxWidth: "400px",
  },
});

export const Informations = styled("div", {
  width: "50%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  paddingLeft: "15px",

  "@bq-800": {
    width: "100%",
    maxWidth: "400px",

    paddingLeft: 0,

    marginTop: "30px",

    alignItems: "center",
  },
});

export const CheckList = styled("div", {
  width: "100%",
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
});

export const CheckIcon = styled(BsCheck2Circle, {
  fontSize: "25px",

  flexShrink: 0,

  color: "$text-secondary",

  marginRight: "5px",
});
