import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  width: "100%",
  maxHeight: "300px",

  display: "flex",

  overflow: "hidden",

  borderRadius: "$md",
});

export const Img = styled(Image, {
  width: "100%",
  height: "auto",
});
