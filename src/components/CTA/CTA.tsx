import { Montserrat } from "next/font/google";

import { Container } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type CTAType = React.ComponentProps<typeof Container> & {};

export default ({ children, ...props }: CTAType) => (
  <Container
    onClick={() => (location.href = "#kits")}
    className={montserrat.className}
    {...props}
  >
    {children}
  </Container>
);
