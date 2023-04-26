import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",

  backgroundColor: "$primary-100",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "*": {
    color: "$text-secondary",
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  marginTop: "40px",

  paddingBottom: "30px",

  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",

  margin: "30px 15px 0 15px",

  a: {
    fontSize: "17px",
    fontWeight: 500,

    marginTop: "12px",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const Branding = styled("h3", {
  fontSize: "40px",
  fontWeight: "bold",

  marginBottom: "30px",
});

export const NotTestedOnAnimals = styled("div", {
  display: "flex",
  alignItems: "center",

  "> strong": {
    fontSize: "25px",

    maxWidth: "250px",
  },
});

export const ColumnTitle = styled("h4", {
  fontSize: "20px",
  fontWeight: 600,
});

export const Image = styled("img", {
  marginTop: "12px",
});

export const CopyWriting = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  padding: "30px 20px",

  borderTop: "1px solid $separate-secondary",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "> p": {
    fontSize: "16px",
    fontWeight: 500,

    textAlign: "center",
  },
});
