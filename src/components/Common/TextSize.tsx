import { IStyledProps } from "@typings";
import React from "react";
import styled, { css } from "styled-components";

import { EBreakpoints, ESide } from "@enums";
import {
  largeFontThemeResponsiveFontStyles,
  mediumFontThemeResponsiveFontStyles,
  regularFontThemeResponsiveFontStyles,
  smallFontThemeResponsiveFontStyles,
  tinyFontThemeResponsiveFontStyles
} from "@styles";
import { media } from "@utils";

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

const tinyStyles = css`
  ${tinyFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${tinyFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export enum ETextSizes {
  Large = "large",
  Medium = "medium",
  Regular = "regular",
  Small = "small",
  Tiny = "tiny"
}

export type TTextSizes = ETextSizes;

export interface ITextSizes {
  size?: TTextSizes;
}

interface ITextSizeProps extends ITextSizes, IStyledProps {
  children?: React.ReactNode;
}

const FontSizesStyled = styled(({ children, ...props }: ITextSizeProps) => (
  <span {...props}>{children}</span>
))`
  ${props => {
    switch (props.size) {
      case ETextSizes.Large:
        return largeStyles;
      case ETextSizes.Medium:
        return mediumStyles;
      case ETextSizes.Small:
        return smallStyles;
      case ETextSizes.Tiny:
        return tinyStyles;

      default:
        return regularStyles;
    }
  }}
`;

export const TextSize = ({
  children,
  className,
  size = ETextSizes.Regular
}: ITextSizeProps) => (
  <FontSizesStyled className={className} size={size}>
    {children}
  </FontSizesStyled>
);
