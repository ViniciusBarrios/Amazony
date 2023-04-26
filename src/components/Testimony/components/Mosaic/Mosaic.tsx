import { Container, Card, Img } from "./styles";

type MosaicProps = {
  images: string[];
};

export default ({ images }: MosaicProps) => {
  const angles = images.map(() => Math.floor(Math.random() * 21) - 10); // Array de ângulos aleatórios entre -10 e 10 graus

  const shuffledImages = images.sort(() => Math.random() - 0.5);

  return (
    <Container>
      {shuffledImages.map((image, index) => (
        <Card key={index} css={{ transform: `rotate(${angles[index]}deg)` }}>
          <Img
            width={150}
            height={150}
            alt="Usuário do sérum Rosa Amazônica"
            src={image}
          />
        </Card>
      ))}
    </Container>
  );
};
