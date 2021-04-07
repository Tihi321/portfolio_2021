import { css } from "styled-components";

import { EBreakpoints, ESide } from "../enums";
import { media } from "../utils";
import {
  largeFontThemeResponsiveFontStyles,
  mediumFontThemeResponsiveFontStyles,
  regularFontThemeResponsiveFontStyles,
  smallFontThemeResponsiveFontStyles
} from "./fonts";

export enum EFontSizes {
  Large = "large",
  Medium = "medium",
  Regular = "regular",
  Small = "small"
}

export type TFontSizes =
  | EFontSizes.Large
  | EFontSizes.Medium
  | EFontSizes.Regular
  | EFontSizes.Small;

export interface IFontSizes {
  size?: TFontSizes;
}

const largeStyles = css`
  ${largeFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${largeFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const mediumStyles = css`
  ${mediumFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${mediumFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const regularStyles = css`
  ${regularFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${regularFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const smallStyles = css`
  ${smallFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${smallFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export const fontSizeThemeStyles = props => {
  switch (props.size) {
    case EFontSizes.Large:
      return largeStyles;
    case EFontSizes.Medium:
      return mediumStyles;
    case EFontSizes.Small:
      return smallStyles;

    default:
      return regularStyles;
  }
};
