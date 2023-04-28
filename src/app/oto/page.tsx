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
      link: "https://bit.ly/3LyThv8",
      discount: "70%",
      quantity: "12 Frascos",
      tratamentDuration: "Tratamento para 12 meses",
      image: "/assets/imgs/kits/05.png",
      costPerBottle: "52,25",
      offers: [
        "+ 2 Frasco Grátis",
        "+ 1 Livro Digital",
        "Frete grátis para todo Brasil",
      ],
      costKit:
        "De <span class='from'>R$ 2.364</span> por <span>R$ 627</span> à vista ou <span>12x</span> de <span>62,98</span>",
    },
    {
      link: "https://bit.ly/3HcicSE",
      discount: "60%",
      quantity: "6 Frascos",
      tratamentDuration: "Tratamento para 6 meses",
      image: "/assets/imgs/kits/06.png",
      costPerBottle: "66,16",
      offers: [
        "+ 1 Frasco Grátis",
        "+ 1 Livro Digital",
        "Frete grátis para todo Brasil",
      ],
      costKit:
        "De <span class='from'>R$ 985</span> por <span>R$ 397</span> à vista ou <span>12x</span> de <span>39,70</span>",
    },
    {
      link: "https://bit.ly/3AwJn6F",
      discount: "50%",
      quantity: "4 Frascos",
      tratamentDuration: "Tratamento para 4 meses",
      image: "/assets/imgs/kits/07.png",
      costPerBottle: "74,25",
      offers: [
        "+ 1 Frasco Grátis",
        "+ 1 Livro Digital",
        "Frete grátis para todo Brasil",
      ],
      costKit:
        "De <span class='from'>R$ 591</span> por <span>R$ 297</span> à vista ou <span>12x</span> de <span>29,70</span>",
    },
    {
      link: "https://bit.ly/446gWKl",
      discount: "50%",
      quantity: "2 Frasco",
      tratamentDuration: "Tratamento para 2 meses",
      image: "/assets/imgs/kits/08.png",
      costPerBottle: "98,50",
      offers: [
        "+ 1 Frasco Grátis",
        "+ 1 Livro Digital",
        "Frete grátis para todo Brasil",
      ],
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
