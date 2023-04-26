import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  marginTop: "30px",

  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const Card = styled("div", {
  backgroundColor: "$white",

  padding: "5px",

  boxShadow: "-1px 6px 15px -3px #0000007a",

  "&:hover": {
    transform: "scale(1.15)",

    zIndex: 2,
  },

  transition: "200ms",
});

export const Img = styled(Image, {
  display: "flex",
});
