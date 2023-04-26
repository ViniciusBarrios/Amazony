import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { SwiperProps } from "swiper/react";

import {
  Container,
  Wrapper,
  NextArrow,
  NextArrowIcon,
  PrevArrow,
  PrevArrowIcon,
} from "./styles";

type SwiperType = SwiperProps & {
  containerCSS?: React.ComponentProps<typeof Container>["css"];
  swiperCSS?: React.ComponentProps<typeof Wrapper>["css"];
};

export default ({
  children,
  containerCSS = {},
  swiperCSS = {},

  ...props
}: SwiperType) => (
  <Container css={containerCSS}>
    <Wrapper
      loop
      modules={[Navigation]}
      navigation={{
        prevEl: "#prev",
        nextEl: "#next",
      }}
      css={swiperCSS}
      {...props}
    >
      {children}
    </Wrapper>

    <PrevArrow id="prev">
      <PrevArrowIcon />
    </PrevArrow>

    <NextArrow id="next">
      <NextArrowIcon />
    </NextArrow>
  </Container>
);
