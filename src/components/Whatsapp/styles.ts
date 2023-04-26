import { BsWhatsapp } from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",
  maxWidth: "1200px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  borderTop: "1px solid $separate-primary",

  margin: "0 auto",

  padding: "60px 15px",
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

export const Button = styled("a", {
  fontSize: "20px",
  fontWeight: 600,

  backgroundColor: "$whatsapp",
  color: "$white",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "$md",

  padding: "15px 20px",

  marginTop: "40px",

  "@bq-1200": {
    fontSize: "19px",
  },

  "@bq-800": {
    fontSize: "17px",
  },
});

export const WhatsappIcon = styled(BsWhatsapp, {
  fontSize: "25px",
  marginRight: "10px",
});
