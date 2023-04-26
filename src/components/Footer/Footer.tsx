import { Montserrat } from "next/font/google";

import { NotTestedOnAnimalsIcon, Wave } from "@statics/assets/svgs";

import Link from "@infra/Link";

import {
  Container,
  Wrapper,
  Column,
  Branding,
  NotTestedOnAnimals,
  ColumnTitle,
  Image,
  CopyWriting,
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
        <Column>
          <Branding className={montserrat.className}>AMAZONY</Branding>

          <NotTestedOnAnimals>
            <NotTestedOnAnimalsIcon
              css={{ width: "80px", marginRight: "10px", flexShrink: 0 }}
            />

            <strong className={montserrat.className}>
              NÃO TESTAMOS EM ANIMAIS!
            </strong>
          </NotTestedOnAnimals>
        </Column>

        <Column>
          <ColumnTitle className={montserrat.className}>LINKS</ColumnTitle>

          <Link
            className={montserrat.className}
            href="https://amazonicarosa.com.br/aviso-legal"
          >
            Aviso Legal
          </Link>

          <Link className={montserrat.className} href="https://pedidozz.com">
            Rastrear Pedido
          </Link>

          <Link
            className={montserrat.className}
            href="https://amazonicarosa.com.br/politicas-de-privacidade"
          >
            Políticas de Privacidade
          </Link>

          <Link
            className={montserrat.className}
            href="https://amazonicarosa.com.br/termos-de-uso"
          >
            Termos e Condições
          </Link>
        </Column>

        <Column>
          <ColumnTitle className={montserrat.className}>
            ENTREGUE POR
          </ColumnTitle>

          <Image
            css={{ height: "80px", borderRadius: "$md" }}
            alt="Correios, sedex ou pac"
            src="/assets/imgs/shipping.png"
          />
        </Column>

        <Column>
          <ColumnTitle className={montserrat.className}>
            FORMAS DE PAGAMENTOS
          </ColumnTitle>

          <Image
            css={{ height: "80px" }}
            alt="Visa, Mastercard, Amex, Elo, Cabal, Hipercard, Ame ou Boleto"
            src="/assets/imgs/payments.png"
          />
        </Column>
      </Wrapper>

      <CopyWriting>
        <p className={montserrat.className}>
          &copy; {new Date().getFullYear()} Amazony - Todos os direitos
          reservados.
        </p>
      </CopyWriting>
    </Container>
  </>
);
