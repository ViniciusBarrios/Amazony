import { Montserrat } from "next/font/google";

import { Container, Img, Title, Description } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type BenefitType = {
  image: string;
  title: string;
  description: string;
};

export default ({ image, title, description }: BenefitType) => (
  <Container>
    <Img alt={title} width={150} height={150} src={image} />

    <Title className={montserrat.className}>{title}</Title>

    <Description className={montserrat.className}>{description}</Description>
  </Container>
);
