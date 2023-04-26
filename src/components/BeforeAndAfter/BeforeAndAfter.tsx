import { Montserrat } from "next/font/google";

import { Wave } from "@statics/assets/svgs";

import CTA from "@components/CTA";

import {
  Container,
  Wrapper,
  BeforeAndAfter,
  BeforeAndAfterImg,
  Informations,
  Title,
  SubTitle,
  CheckList,
  ListItem,
  CheckIcon,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => {
  const characteristics = [
    "Revitaliza a pele",
    "Combate as rugas",
    "Hidratação e sustentação",
    "Ação preenchedora e anti-flacidez",
    "Estimula a renovação diária da pele",
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
        <Title className={montserrat.className}>
          Renove a beleza da sua pele e recupere sua auto estima!
        </Title>

        <SubTitle className={montserrat.className}>
          Você também merece ter uma pele maravilhosa todos os dias!
        </SubTitle>

        <Wrapper>
          <BeforeAndAfter>
            <BeforeAndAfterImg src="/assets/imgs/beforeandafter.png" />
          </BeforeAndAfter>

          <Informations>
            <CheckList>
              {characteristics.map((characteristic, index) => (
                <ListItem
                  key={index}
                  css={{ ...(index !== 0 && { marginTop: "25px" }) }}
                >
                  <CheckIcon />
                  <span className={montserrat.className}>{characteristic}</span>
                </ListItem>
              ))}
            </CheckList>

            <CTA
              css={{
                marginTop: "30px",
              }}
            >
              EU QUERO RESTAURAR A MINHA PELE
            </CTA>
          </Informations>
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
