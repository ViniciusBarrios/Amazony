import { SwiperSlide } from "swiper/react";

import Swiper from "@components/Swiper";

import { Container, Img } from "./styles";

type MosaicProps = {
  images: string[];
};

export default ({ images }: MosaicProps) => (
  <Swiper
    containerCSS={{
      maxWidth: "1100px",
      "@bq-1200": { maxWidth: "700px" },
      "@bq-800": { width: "95%", maxWidth: "500px" },
      margin: "0 auto",
    }}
    swiperCSS={{
      padding: "50px 15px",
    }}
    slidesPerView={1}
    spaceBetween={20}
    autoHeight
    breakpoints={{
      1200: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
    }}
  >
    {images.map((resultImage, index) => (
      <SwiperSlide key={index}>
        <Container>
          <Img
            width={500}
            height={400}
            alt="Antes e Depois"
            src={resultImage}
          />
        </Container>
      </SwiperSlide>
    ))}
  </Swiper>
);
