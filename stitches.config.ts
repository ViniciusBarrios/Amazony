import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import { colors } from "@styles/colors";
import { shadows } from "@styles/shadows";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
    opacity: "opacity",
  },

  theme: {
    colors,

    fonts: {
      Montserrat: "'Montserrat', sans-serif",
    },

    radii: {
      xs: "2.5px",
      sm: "5px",
      md: "10px",
      lg: "20px",
      full: "99999px",
    },

    shadows,

    zIndices: {
      overlay: 9995,
      modal: 9999,
    },
  },

  media: {
    "bq-1200": "(max-width: 1200px)",
    "bq-800": "(max-width: 800px)",
    "bq-700": "(max-width: 700px)",
  },

  utils: {
    linearGradient: (value: Stitches.ScaleValue<"colors">) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

type StitchesCssType = Stitches.CSS<typeof config>;

export type { StitchesCssType };
