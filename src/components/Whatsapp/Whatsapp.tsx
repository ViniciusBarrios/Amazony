import { Montserrat } from "next/font/google";

import { Container, Title, SubTitle, Button, WhatsappIcon } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Title className={montserrat.className}>
      Quer falar com um de nossos atendentes?
    </Title>

    <SubTitle className={montserrat.className}>
      Se você possui dúvidas e quer falar direto com uma de nossas consultoras,
      disponibilizamos um Whatsapp Exclusivo, para você acessar clique no botão
      abaixo.
    </SubTitle>

    <Button
      target="_blank"
      className={montserrat.className}
      href="https://api.whatsapp.com/send?phone=5521984822877&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20do%20Rosa%20Amaz%C3%B4nica!"
    >
      <WhatsappIcon />
      CHAMAR NO WHATSAPP
    </Button>
  </Container>
);
