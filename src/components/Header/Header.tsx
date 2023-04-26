import { Logo } from "@statics/assets/svgs";

import Link from "@infra/Link";

import { Container } from "./styles";

export default () => (
  <Container>
    <Link href="/">
      <Logo css={{ height: "80px" }} />
    </Link>
  </Container>
);
