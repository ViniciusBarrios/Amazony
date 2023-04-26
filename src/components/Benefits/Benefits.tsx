import { Montserrat } from "next/font/google";

import { SwiperSlide } from "swiper/react";

import CTA from "@components/CTA";
import Swiper from "@components/Swiper";

import Benefit from "./Benefit";
import { Container, Title, SubTitle } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => {
  const benefits = [
    {
      image: "/assets/imgs/benefits/01.webp",
      title: "Reduz a aparência das rugas instantaneamente",
      description:
        "A Rosa Mosqueta Amazônica cria um efeito lifting que pode remover anos, senão décadas de rugas do seu rosto… na hora! Imagine o controle que você vai ter em suas mãos ao saber que, sempre que você quiser, você poderá aparentar ser anos mais jovem. Imagine poder ter um controle assim sobre sua aparência.",
    },
    {
      image: "/assets/imgs/benefits/02.webp",
      title: "Sua pele hidratada, viva e com aspecto saudável na hora!",
      description:
        "O Epidermosil® do Sérum Rosa Amazônica devolve instantaneamente a hidratação à sua pele, a deixando mais viçosa e com muito mais brilho! Quando você tocar sua pele, ela estará aveludada e lisinha como pêssego.",
    },
    {
      image: "/assets/imgs/benefits/04.webp",
      title: "Combate rugas e bigode chinês",
      description:
        "O Rosa Amazônica possui exclusivo sistema PROSIM3D® que combina Rosa Mosqueta + Ácido Hialurônico + Verisol, tecnologia que diminue a aparência das rugas deixando a pele do seu rosto mais lisa e sem as marcas do tempo.",
    },
    {
      image: "/assets/imgs/benefits/06.webp",
      title: "Antioxidante e combate os radicais livres",
      description:
        "Volte a ostentar uma pele Jovem, livre dos efeitos de radicais livre e do envelhecimento!",
    },
    {
      image: "/assets/imgs/benefits/03.webp",
      title: "Você envelhece mais devagar",
      description:
        "O Progeline™ do Sérum Rosa Amazônica ajuda a acelerar a renovação celular, substituindo as células velhas por novas e jovens. Isso significa que sua pele não ficará cada vez pior com o tempo e você se sentirá mais confiante ao olhar no espelho.",
    },
    {
      image: "/assets/imgs/benefits/05.webp",
      title: "Rejuvenesce seu organismo",
      description:
        "Graças ao Ácido Hialurônico que traz moléculas de água para células da derme, o Sérum Rosa Amazônica age como preenchedor, suaviza e rejuvenesce todo seu organismo.",
    },
  ];

  return (
    <Container>
      <Title className={montserrat.className}>
        Veja o poder da Rosa Amazônica na sua pele!
      </Title>

      <SubTitle className={montserrat.className}>
        Um produto rico em vitaminas que traz maciez, firmeza, rejuvenescimento
        e hidratação profunda!
      </SubTitle>

      <Swiper
        containerCSS={{
          maxWidth: "1100px",
          "@bq-1200": { maxWidth: "700px" },
          "@bq-800": { width: "85%" },
          margin: "0 auto",
        }}
        swiperCSS={{
          padding: "90px 15px 60px 15px",
        }}
        slidesPerView={1}
        spaceBetween={30}
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
        {benefits.map(({ image, title, description }, index) => (
          <SwiperSlide key={index}>
            <Benefit image={image} title={title} description={description} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        style={{
          width: "100%",

          display: "flex",
          justifyContent: "center",

          padding: "0 15px",
        }}
      >
        <CTA>EU QUERO RESTAURAR A MINHA PELE</CTA>
      </div>
    </Container>
  );
};
