import { BsCheck2Circle } from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("a", {
  width: "calc(100% / 4)",

  transform: "scale(0.91)",

  padding: "30px 20px",
  marginTop: "10px",

  boxShadow: "$kit-card",
  border: "2px solid $primary-300",

  borderRadius: "$md",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  textAlign: "center",

  position: "relative",

  transition: "200ms",

  "&:hover": {
    transform: "scale(0.93)",
  },

  "@bq-1200": {
    width: "100%",
    maxWidth: "330px",
  },

  "@bq-800": {
    maxWidth: "400px",
  },
});

export const Discount = styled("div", {
  width: "70px",
  height: "70px",

  position: "absolute",
  top: "-25px",
  right: "-20px",

  color: "$white",

  "> div": {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    textAlign: "center",

    "> strong": {
      fontSize: "17px",
      fontWeight: 600,
    },

    "> span": {
      fontSize: "11px",
      fontWeight: 600,

      marginTop: "-2px",
    },
  },
});

export const Quantity = styled("h3", {
  fontSize: "35px",
  fontWeight: 600,

  color: "$text-secondary",
});

export const TratamentDurarion = styled("h4", {
  fontSize: "17px",
  fontWeight: 500,

  color: "$text-primary-100",

  marginTop: "5px",
});

export const KitImg = styled("img", {
  width: "100%",
  maxHeight: "200px",

  objectFit: "contain",

  marginTop: "25px",
});

export const CostPerBottle = styled("strong", {
  fontSize: "40px",
  fontWeight: 500,

  display: "flex",
  alignItems: "center",

  marginTop: "20px",

  position: "relative",

  "> .currency": {
    marginRight: "4px",
  },

  "> .cost": {
    display: "flex",
    alignItems: "flex-start",

    "> .float": {
      fontSize: "18px",
      fontWeight: 600,

      marginTop: "5px",
    },
  },

  "> .bottle": {
    fontSize: "18px",

    marginRight: "4px",
  },
});

export const CheckList = styled("div", {
  marginTop: "10px",
});

export const ListItem = styled("div", {
  display: "flex",
  alignItems: "center",

  "> span": {
    fontSize: "16px",
    fontWeight: 500,

    textAlign: "initial",
  },
});

export const CheckIcon = styled(BsCheck2Circle, {
  fontSize: "23px",

  flexShrink: 0,

  color: "$text-secondary",

  marginRight: "5px",
});

export const Button = styled("button", {
  width: "100%",

  fontSize: "20px",
  fontWeight: 600,

  backgroundColor: "$primary-300",
  color: "$white",

  marginTop: "15px",

  padding: "15px 10px",

  borderRadius: "$md",
});

export const CostKit = styled("p", {
  fontSize: "17px",
  fontWeight: 500,

  color: "$text-primary-100",

  "> span": {
    color: "$text-primary-200",
  },

  "> .from": {
    position: "relative",

    "&::before": {
      content: "",

      height: "2px",

      backgroundColor: "$primary-300",

      position: "absolute",
      top: "50%",
      right: "-2px",
      left: "-2px",

      borderRadius: "$full",

      transform: "translateY(-50%)",
    },
  },

  marginTop: "15px",
});
