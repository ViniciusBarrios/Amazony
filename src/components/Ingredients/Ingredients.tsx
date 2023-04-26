import { Montserrat } from "next/font/google";

import CTA from "@components/CTA";

import Ingredient from "./Ingredient";
import { Container, Title, SubTitle, Wrapper } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => {
  const ingredients = [
    {
      image: "/assets/imgs/ingredients/01.png",
      name: "Rosa Mosqueta",
      scientificName: "Rosa Canina",
      benefits: [
        "Melhora a aparência de cicatrizes e estrias.",
        "Hidrata a pele e melhora sua elasticidade.",
        "Reduz a inflamação e vermelhidão da pele.",
        "Ajuda a clarear manchas na pele e melhorar a aparência de linhas finas e rugas.",
        "Ajuda a proteger a pele dos raios UV prejudiciais do sol.",
        "Ajuda a acalmar a pele irritada e com coceira.",
      ],
    },
    {
      image: "/assets/imgs/ingredients/02.png",
      name: "Ácido Hialurônico",
      scientificName: "Sodium Hyaluronate",
      benefits: [
        "Hidrata a pele, deixando-a mais jovem e saudável.",
        "Melhora a elasticidade e a firmeza da pele.",
        "Preenche rugas e linhas finas, deixando a pele mais lisa.",
        "Reduz a aparência de olheiras e bolsas sob os olhos.",
        "Protege a pele contra danos do sol e da poluição.",
        "Ajuda na cicatrização de feridas e inflamações na pele.",
      ],
    },
    {
      image: "/assets/imgs/ingredients/03.png",
      name: "Colágeno Verisol",
      scientificName: "Colagenina",
      benefits: [
        "Hidrata a pele e reduz linhas finas e rugas.",
        "Melhora a elasticidade e firmeza da pele.",
        "Protege a pele contra danos do sol e da poluição.",
        "Reduz manchas escuras e descoloração da pele.",
        "Melhora a textura da pele e reduz inflamação e vermelhidão.",
      ],
    },
    {
      image: "/assets/imgs/ingredients/04.png",
      name: "Retinol",
      scientificName: "Vitamina A",
      benefits: [
        "Redução de linhas finas e rugas. ",
        "Melhoria da textura, firmeza e elasticidade da pele.",
        "Redução da hiperpigmentação.",
        "Estímulo da renovação celular.",
        "Melhoria da aparência de cicatrizes e marcas.",
        "Aumento da hidratação da pele.",
      ],
    },
  ];

  return (
    <Container>
      <Title className={montserrat.className}>
        Desenvolvida e recomendada por especialistas!
      </Title>

      <SubTitle className={montserrat.className}>
        A fórmula da Rosa Mosqueta contém a exclusiva tecnologia PRO-MOS3D® que
        proporcionam um toque aveludado deixando sua pele mais lisa e
        revitalizada com uma mega hidratação 3D e resultados já nas primeiras
        semanas de uso.
      </SubTitle>

      <Wrapper>
        {ingredients.map(({ image, name, scientificName, benefits }, index) => (
          <Ingredient
            key={index}
            image={image}
            name={name}
            scientificName={scientificName}
            benefits={benefits}
          />
        ))}
      </Wrapper>

      <CTA css={{ marginTop: "60px" }}>EU QUERO RESTAURAR A MINHA PELE</CTA>
    </Container>
  );
};
