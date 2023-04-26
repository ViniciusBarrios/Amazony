import { IoIosArrowDown } from "react-icons/io";

import { styled, keyframes } from "stitches";

import * as Accordion from "@radix-ui/react-accordion";

export const Container = styled("section", {
  width: "100vw",
  maxWidth: "1200px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  margin: "0 auto",

  padding: "60px 20px",
});

export const Title = styled("h3", {
  fontSize: "40px",
  fontWeight: 500,

  textAlign: "center",

  "@bq-1200": {
    fontSize: "35px",
  },

  "@bq-700": {
    fontSize: "30px",
  },
});

export const SubTitle = styled("h4", {
  fontSize: "22px",
  fontWeight: 500,

  textAlign: "center",

  marginTop: "8px",

  color: "$text-primary-100",

  "@bq-1200": {
    fontSize: "19px",
  },

  "@bq-700": {
    fontSize: "17px",
  },
});

export const AccordionRoot = styled(Accordion.Root, {
  width: "100%",
  maxWidth: "800px",

  borderRadius: "$md",

  backgroundColor: "$white",

  boxShadow: "0 0px 15px #00000030",

  marginTop: "40px",
});

export const AccordionItem = styled(Accordion.Item, {
  overflow: "hidden",

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: "$md",
    borderTopRightRadius: "$md",
  },

  "&:last-child": {
    borderBottomLeftRadius: "$md",
    borderBottomRightRadius: "$md",
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: "0 0 0 2px #c6d1da",
  },
});

export const StyledTrigger = styled(Accordion.Trigger, {
  width: "100%",

  padding: "18px 20px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  textAlign: "start",

  fontSize: "17px",
  fontWeight: 500,

  cursor: "pointer",

  "@bp2": {
    fontSize: "16px",
  },

  borderBottom: "1px solid #E0E7ED",
});

export const ArrowIcon = styled(IoIosArrowDown, {
  fontSize: "20px",

  fill: "#939EA9",

  flexShrink: 0,

  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",

  marginLeft: "5px",

  "[data-state=open] &": {
    transform: "rotate(180deg)",
  },
});

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

export const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const Content = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: "15ox",

  backgroundColor: "#f9f8f9",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const ContentText = styled("p", {
  padding: "15px 20px",

  fontSize: "15px",
  fontWeight: 500,
});
