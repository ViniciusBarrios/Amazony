import { Montserrat } from "next/font/google";

import { Wave } from "@statics/assets/svgs";

import CTA from "@components/CTA";

import {
  Container,
  Wrapper,
  Title,
  Content,
  Image,
  Description,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
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
          Desafio 90 dias ou seu dinheiro de volta!
        </Title>

        <Content>
          <Image alt="Garantia de 90 dias" src="/assets/imgs/guarantee.png" />

          <Description className={montserrat.className}>
            Confiamos tanto na eficácia do sérum Rosa Amazônica que caso você
            utilize ela durante 90 dias e não tenha resultados, devolvemos o seu
            dinheiro. Isso mesmo! Resultados em 90 Dias ou seu dinheiro de
            volta.
          </Description>
        </Content>

        <CTA>EU QUERO COMPRAR</CTA>
      </Wrapper>
    </Container>

    <Wave
      css={{
        marginTop: "-1px",
      }}
    />
  </>
);
