import React from "react";
import styled, { css } from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";
import { EBreakpoints, ESide } from "../../enums";
import {
  largeFontThemeResponsiveFontStyles,
  mediumFontThemeResponsiveFontStyles,
  regularFontThemeResponsiveFontStyles,
  smallFontThemeResponsiveFontStyles
} from "../../styles";
import { media } from "../../utils";

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

export enum ETextSizes {
  Large = "large",
  Medium = "medium",
  Regular = "regular",
  Small = "small"
}

export type TTextSizes =
  | ETextSizes.Large
  | ETextSizes.Medium
  | ETextSizes.Regular
  | ETextSizes.Small;

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
