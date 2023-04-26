import { Montserrat } from "next/font/google";

import Kit from "./Kit";
import { Container, Title, Wrapper, Reviews, StarIcon } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type KitsProps = {
  kits: {
    link: string;
    discount?: string;
    quantity: string;
    tratamentDuration: string;
    image: string;
    costPerBottle: string;
    offers: string[];
    costKit: string;
  }[];
};

export default ({ kits }: KitsProps) => (
  <Container id="kits">
    <Title className={montserrat.className}>
      Adiquira seu frasco de Rosa Amazônica com descontos progressivos enquanto
      durarem os estoques!
    </Title>

    <Wrapper>
      {kits.map(
        (
          {
            link,
            discount,
            quantity,
            tratamentDuration,
            image,
            costPerBottle,
            offers,
            costKit,
          },
          index,
        ) => (
          <Kit
            key={index}
            link={link}
            discount={discount}
            quantity={quantity}
            tratamentDuration={tratamentDuration}
            image={image}
            costPerBottle={costPerBottle}
            offers={offers}
            costKit={costKit}
          />
        ),
      )}
    </Wrapper>

    <Reviews>
      <strong className={montserrat.className}>
        Avaliação dos nossos clientes
      </strong>

      <div>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>

      <span className={montserrat.className}>
        Baseado em avaliações reais de clientes!
      </span>
    </Reviews>
  </Container>
);
