"use client";

import BeforeAndAfter from "@components/BeforeAndAfter";
import Benefits from "@components/Benefits";
import FAQ from "@components/FAQ/FAQ";
import Footer from "@components/Footer/Footer";
import Guarantee from "@components/Guarantee";
import Header from "@components/Header";
import Ingredients from "@components/Ingredients";
import Kits from "@components/Kits";
import Presentation from "@components/Presentation";
import Testimony from "@components/Testimony";
import Whatsapp from "@components/Whatsapp/Whatsapp";

export default () => {
  const kits = [
    {
      link: "https://bit.ly/3ZqOHTc",
      discount: "70%",
      quantity: "12 Frascos",
      tratamentDuration: "Tratamento para 12 meses",
      image: "/assets/imgs/kits/01.png",
      costPerBottle: "58",
      offers: ["Frete grátis para todo Brasil"],
      costKit:
        "De <span class='from'>R$ 2.364</span> por <span>R$ 697</span> à vista ou <span>12x</span> de <span>69,98</span>",
    },
    {
      link: "https://bit.ly/3LWJkrL",
      discount: "60%",
      quantity: "5 Frascos",
      tratamentDuration: "Tratamento para 5 meses",
      image: "/assets/imgs/kits/02.png",
      costPerBottle: "79",
      offers: ["Frete grátis para todo Brasil"],
      costKit:
        "De <span class='from'>R$ 985</span> por <span>R$ 397</span> à vista ou <span>12x</span> de <span>39,70</span>",
    },
    {
      link: "https://bit.ly/3KcAzsh",
      discount: "50%",
      quantity: "3 Frascos",
      tratamentDuration: "Tratamento para 3 meses",
      image: "/assets/imgs/kits/03.png",
      costPerBottle: "99",
      offers: ["Frete grátis para todo Brasil"],
      costKit:
        "De <span class='from'>R$ 591</span> por <span>R$ 297</span> à vista ou <span>12x</span> de <span>29,70</span>",
    },
    {
      link: "https://bit.ly/3KfP2UB",
      quantity: "1 Frasco",
      tratamentDuration: "Tratamento para 30 dias",
      image: "/assets/imgs/kits/04.png",
      costPerBottle: "197",
      offers: ["Frete grátis para todo Brasil"],
      costKit:
        "<span>R$ 197</span> à vista ou <span>12x</span> de <span>19,76</span>",
    },
  ];

  return (
    <>
      <Header />

      <Presentation />

      <Benefits />

      <BeforeAndAfter />

      <Ingredients />

      <Testimony />

      <Kits kits={kits} />

      <Guarantee />

      <FAQ />

      <Whatsapp />

      <Footer />
    </>
  );
};
