import { Montserrat } from "next/font/google";

import { Wave } from "@statics/assets/svgs";

import CTA from "@components/CTA";

import {
  Container,
  Wrapper,
  Informations,
  Title,
  SubTitle,
  CheckList,
  ListItem,
  CheckIcon,
  Product,
  ProductImg,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type Presentation = {
  checkList: string[];
};

export default ({ checkList }: Presentation) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Informations>
            <Title className={montserrat.className}>
              Descubra o poder da Rosa Amazônica em Você...
            </Title>

            <SubTitle className={montserrat.className}>
              Com tecnologia Europeia que devolve a beleza a sua pele!
            </SubTitle>

            <CheckList>
              {checkList.map((item, index) => (
                <ListItem key={index}>
                  <CheckIcon />
                  <span className={montserrat.className}>{item}</span>
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

          <Product>
            <ProductImg src="/assets/imgs/presentation.webp" />
          </Product>
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
