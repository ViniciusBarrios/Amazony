import { Montserrat } from "next/font/google";

import CTA from "@components/CTA";

import {
  Container,
  Title,
  SubTitle,
  AccordionRoot,
  AccordionItem,
  StyledTrigger,
  ArrowIcon,
  Content,
  ContentText,
} from "./styles";

type AccordionTriggerProps = React.ComponentProps<typeof StyledTrigger>;

type AccordionContentProps = React.ComponentProps<typeof Content> & {
  borderBottom: boolean;
};

const montserrat = Montserrat({ subsets: ["latin"] });

const AccordionTrigger = ({ children, ...props }: AccordionTriggerProps) => (
  <StyledTrigger {...props} className={montserrat.className}>
    {children}

    <ArrowIcon aria-hidden />
  </StyledTrigger>
);

const AccordionContent = ({
  borderBottom = true,
  children,
  ...props
}: AccordionContentProps) => (
  <Content
    {...props}
    className={montserrat.className}
    css={{ borderBottom: borderBottom ? "1px solid #E0E7ED" : "none" }}
  >
    <ContentText>{children}</ContentText>
  </Content>
);

export default () => {
  const questions = [
    {
      question: "Qual estoque mais vendido?",
      answer:
        "O estoque mais vendido e o mais recomendado é para 63 meses, porque apesar de você ter resultados imediatos com o Sérum, os melhores benefícios vem com o uso contínuo do produto. Além disso, você recebe até 50% de desconto quando você faz um estoque para 6 meses e se protege para quando a gente ficar sem produto.",
    },
    {
      question: "Tem contra-indicação e efeito colateral?",
      answer:
        "Não há contra-indicações ou efeitos colaterais, qualquer pessoa pode passar e aproveitar os benefícios do Sérum Rosa Amazônica. Entretanto é necessário observar se existe alguma alergia aos ingredientes do composto.",
    },
    {
      question: "A composição é natural?",
      answer:
        "A composição dele é em parte natural e em parte sintética. A Amazony acredita que existem ativos/ingredientes sintéticos (não naturais), que são muito bons e benéficos para a pele, como por exemplo, o Progeline™. Não é porque é artificial que é ruim, portanto não há com o que se preocupar. Natural ou sintético, toda a composição do Sérum Rosa Amazônica tem uma coisa em comum: ela faz maravilhas para sua pele sem agredir sua saúde.",
    },
    {
      question: "O produto é vegano ou cruelty-free?",
      answer:
        "Sim, na verdade, todos os produtos da Amazony são veganos e cruelty-free!",
    },
    {
      question: "O produto contém parabenos?",
      answer:
        "Não, o Sérum Rosa Amazônica é livre de parabenos, sulfatos e ftalatos. Sua saúde está protegida ao usar nossos produtos!",
    },
    {
      question: "Como fazer uso do produto?",
      answer:
        "Primeiro, lave o rosto com água e sabonete anti-oleosidade. Com o rosto limpo, coloque uma pequena quantidade na ponta do dedo indicador. Aplique com leves toques sem depositar muito produto em uma única região. Aguarde de 3 a 5 minutos enquanto o produto seca e age na pele. O recomendado é que você aplique pela manhã antes da maquiagem ou protetor solar devido ao efeito instantâneo.",
    },
    {
      question: "O sérum pode funcionar para o meu caso?",
      answer:
        "Sim! O Sérum Rosa Amazônica é feito com compostos que têm efeitos no curto e no longo prazo, funcionando em qualquer tipo de pele.",
    },
    {
      question: "Em quanto tempo posso ver os resultados?",
      answer:
        "Dentro de 10 minutos você já poderá perceber o efeito instantâneo do Sérum. As rugas, linhas de expressão e imperfeições ficarão praticamente invisíveis ao mesmo tempo em que você perceberá um efeito “lifting” na área aplicada. Esse efeito pode durar entre 4 a 6 horas. Ao longo prazo, a recomendação é que você utilize o produto por no mínimo 4 meses para os resultados serem melhores, mas logo no primeiro mês você já poderá notar suas linhas mais finas e a pele mais firme.",
    },
    {
      question: "Quanto produto vem no frasco?",
      answer:
        "Cada frasco contém 30 ml, o suficiente para um mês de tratamento.",
    },
    {
      question: "Qual prazo de entrega?",
      answer:
        "O prazo médio de entrega para o Brasil é de até 12 dias úteis. O produto só é enviado após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação do pagamento do boleto.",
    },
    {
      question: "Tem garantia de resultados?",
      answer:
        "Adquira o produto hoje e seja protegido automaticamente pela Garantia Incondicional Amazony, onde você tem 90 dias para testar nosso produto sem risco algum. Se por algum motivo, dentro do prazo de 90 dias, você achar que seu investimento não valeu a pena, nós não vamos deixar você ficar com o produto. Apenas nos avise por e-mail (contato@rosaamazonica.com.br) que nós compraremos todos os frascos de volta de você, pelo mesmo valor que você pagou. Simples assim!",
    },
  ];

  return (
    <Container>
      <Title className={montserrat.className}>Perguntas Frequentes</Title>

      <SubTitle className={montserrat.className}>
        Veja as principais perguntas de nossos clientes sobre a Rosa Amazônica:
      </SubTitle>

      <AccordionRoot type="single" defaultValue="item-1" collapsible>
        {questions.map(({ question, answer }, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{question}</AccordionTrigger>

            <AccordionContent borderBottom={index + 1 !== questions.length}>
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionRoot>

      <CTA css={{ marginTop: "50px" }}>EU QUERO COMPRAR</CTA>
    </Container>
  );
};
