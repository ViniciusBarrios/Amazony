import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { css, styled } from "stitches";

import { Swiper } from "swiper/react";

export const Container = styled("div", { position: "relative" });

export const Wrapper = styled(Swiper);

const IconsCSS = css({
  fontSize: "27px",

  color: "$primary-300",
});

const ButtonCSS = {
  width: "55px",
  height: "55px",

  borderRadius: "$full",

  boxShadow: "$swiper-arrow",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$bg",

  zIndex: 10,

  transition: "100ms",

  "&.swiper-button-disabled": {
    opacity: 0,
  },
};

export const PrevArrow = styled("button", {
  ...ButtonCSS,

  position: "absolute",
  top: "50%",
  left: "-15px",

  transform: "translateY(-50%)",
});

export const PrevArrowIcon = styled(IoIosArrowBack, IconsCSS);

export const NextArrow = styled("button", {
  ...ButtonCSS,

  position: "absolute",
  top: "50%",
  right: "-15px",

  transform: "translateY(-50%)",
});

export const NextArrowIcon = styled(IoIosArrowForward, IconsCSS);
