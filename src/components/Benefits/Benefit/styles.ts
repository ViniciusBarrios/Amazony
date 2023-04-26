import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  width: "100%",

  padding: "30px 25px",

  borderRadius: "$md",

  boxShadow: "$benefit-card",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const Img = styled(Image, {
  marginTop: "-80px",
});

export const Title = styled("strong", {
  textAlign: "center",

  fontSize: "22px",
  fontWeight: 400,

  marginTop: "20px",
});

export const Description = styled("p", {
  textAlign: "center",

  fontSize: "16px",
  fontWeight: 400,

  marginTop: "15px",

  color: "$text-primary-100",
});
