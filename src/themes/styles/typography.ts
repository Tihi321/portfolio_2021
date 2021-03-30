import { EBreakpoints } from "../../enums";

export enum EFonts {
  Body = "body",
  Heading01 = "heading01",
  Heading02 = "heading02",
  FeaturedButtonResponsive = "featuredButtonResponsive"
}

export const fonts = {
  [EFonts.Body]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "16px",
      fontFamily: "Lato",
      fontWeight: "400",
      lineHeight: "1.5"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "18px",
      lineHeight: "1.625"
    }
  },
  [EFonts.Heading01]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "32px",
      fontFamily: "Lato",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "36px",
      lineHeight: "1.1"
    }
  },
  [EFonts.Heading02]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "22px",
      fontFamily: "Lato",
      fontWeight: "700",
      lineHeight: "1.1"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "28px",
      lineHeight: "1.625"
    }
  },
  [EFonts.FeaturedButtonResponsive]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "16px",
      fontFamily: "Lato",
      fontWeight: "700",
      lineHeight: "22px"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "28px",
      lineHeight: "36px"
    }
  }
};
