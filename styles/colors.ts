const baseColors = {
  "primary-100": "#FCDBEA",
  "primary-300": "#EF5E9D",

  white: "#ffffff",
  black: "#000000",
};

const aliases = {
  bg: baseColors["white"],

  "text-primary-200": "#464F59",
  "text-primary-100": "#7D848B",
  "text-secondary": "#C95E90",

  "star-color": "#FFC700",

  "separate-primary": "#EBEBEB",
  "separate-secondary": "#FFB9DA",

  whatsapp: "#25D366",
};

export const colors = { ...baseColors, ...aliases };
