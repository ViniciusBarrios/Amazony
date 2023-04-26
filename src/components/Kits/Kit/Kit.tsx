import { Montserrat } from "next/font/google";

import { OfferStar } from "@statics/assets/svgs";

import {
  Container,
  Discount,
  Quantity,
  TratamentDurarion,
  KitImg,
  CostPerBottle,
  CheckList,
  ListItem,
  CheckIcon,
  Button,
  CostKit,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type KitProps = {
  link: string;
  discount?: string;
  quantity: string;
  tratamentDuration: string;
  image: string;
  costPerBottle: string;
  offers: string[];
  costKit: string;
};

export default ({
  link,
  discount,
  quantity,
  tratamentDuration,
  image,
  costPerBottle,
  offers,
  costKit,
}: KitProps) => (
  <Container href={link} target="_blank">
    {discount && (
      <Discount>
        <OfferStar css={{ width: "100%", height: "100%" }} />

        <div>
          <strong className={montserrat.className}>{discount}</strong>
          <span className={montserrat.className}>OFF</span>
        </div>
      </Discount>
    )}

    <Quantity className={montserrat.className}>{quantity}</Quantity>

    <TratamentDurarion className={montserrat.className}>
      {tratamentDuration}
    </TratamentDurarion>

    <KitImg alt={tratamentDuration} src={image} />

    <CostPerBottle className={montserrat.className}>
      <span className="bottle">Frasco |</span>

      <span className="currency">R$</span>

      <div className="cost">
        {costPerBottle.split(",")[0]}
        {costPerBottle.split(",")[1] && (
          <span className="float">,{costPerBottle.split(",")[1]}</span>
        )}
      </div>
    </CostPerBottle>

    {offers.length > 0 && (
      <CheckList>
        {offers.map((offer, index) => (
          <ListItem
            key={index}
            css={{ ...(index !== 0 && { marginTop: "5px" }) }}
          >
            <CheckIcon />
            <span className={montserrat.className}>{offer}</span>
          </ListItem>
        ))}
      </CheckList>
    )}

    <Button className={montserrat.className}>COMPRAR AGORA</Button>

    <CostKit
      className={montserrat.className}
      dangerouslySetInnerHTML={{ __html: costKit }}
    />
  </Container>
);
