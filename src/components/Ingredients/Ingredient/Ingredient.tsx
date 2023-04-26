import { Montserrat } from "next/font/google";

import {
  Container,
  Ingredient,
  IngredientImg,
  Name,
  ScientificName,
  CheckList,
  ListItem,
  CheckIcon,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type IngredientProps = {
  image: string;
  name: string;
  scientificName: string;
  benefits: string[];
};

export default ({ image, name, scientificName, benefits }: IngredientProps) => (
  <Container>
    <Ingredient>
      <IngredientImg alt={name} width={150} height={150} src={image} />
    </Ingredient>

    <Name className={montserrat.className}>{name}</Name>

    <ScientificName className={montserrat.className}>
      {scientificName}
    </ScientificName>

    <CheckList>
      {benefits.map((benefit, index) => (
        <ListItem key={index}>
          <CheckIcon />
          <span className={montserrat.className}>{benefit}</span>
        </ListItem>
      ))}
    </CheckList>
  </Container>
);
