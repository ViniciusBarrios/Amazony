import { Montserrat } from "next/font/google";

import { Wave } from "@statics/assets/svgs";

import CTA from "@components/CTA";

import Mosaic from "./components/Mosaic";
import Results from "./components/Results/Results";
import { Container, Wrapper, Title, SubTitle } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => {
  const usersImages = [
    "/assets/imgs/users/01.png",
    "/assets/imgs/users/02.png",
    "/assets/imgs/users/03.png",
    "/assets/imgs/users/04.png",
    "/assets/imgs/users/05.png",
  ];

  const resultsImages = [
    "/assets/imgs/before-after/01.png",
    "/assets/imgs/before-after/02.png",
    "/assets/imgs/before-after/03.png",
    "/assets/imgs/before-after/04.png",
    "/assets/imgs/before-after/05.png",
    "/assets/imgs/before-after/06.png",
    "/assets/imgs/before-after/07.png",
    "/assets/imgs/before-after/08.png",
    "/assets/imgs/before-after/09.png",
    "/assets/imgs/before-after/10.png",
    "/assets/imgs/before-after/11.png",
  ];

  return (
    <>
      <Wave
        css={{
          transform: "rotateX(180deg)",
          marginBottom: "-5px",
        }}
      />

      <Container>
        <Wrapper>
          <Title className={montserrat.className}>
            Pessoas reais usam o sérum Rosa Amazônica.
          </Title>

          <SubTitle className={montserrat.className}>
            Com resultados que{" "}
            <span style={{ textDecoration: "underline" }}>
              mudam a vida de verdade!
            </span>
          </SubTitle>

          <Mosaic images={usersImages} />

          <Results images={resultsImages} />

          <CTA>EU QUERO RESTAURAR A MINHA PELE</CTA>
        </Wrapper>
      </Container>

      <Wave
        css={{
          marginTop: "-1px",
        }}
      />
    </>
  );
};
