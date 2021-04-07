import React from "react";
import styled, { css } from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import {
  largeFontThemeResponsiveFontStyles,
  mediumFontThemeResponsiveFontStyles,
  regularFontThemeResponsiveFontStyles,
  smallFontThemeResponsiveFontStyles
} from "../../styles";
import { media } from "../../utils";

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

interface IFontSizesProps extends IFontSizes {
  Component: React.ReactNode;
  children?: React.ReactNode;
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

const addFontSizesStyle = props => {
  switch (props.size) {
    case "large":
      return largeStyles;
    case "medium":
      return mediumStyles;
    case "small":
      return smallStyles;

    default:
      return regularStyles;
  }
};

const FontSizesChildrenStyled = styled(({ Component, children, ...props }) => (
  <Component {...props}>{children}</Component>
))`
  ${addFontSizesStyle}
`;

const FontSizesStyled = styled(({ Component, ...props }) => (
  <Component {...props} />
))`
  ${addFontSizesStyle}
`;

export const FontSizeTheme = ({
  Component,
  children,
  size = EFontSizes.Regular,
  ...props
}: IFontSizesProps) => (
  <>
    {children ? (
      <FontSizesChildrenStyled Component={Component} size={size} {...props}>
        {children}
      </FontSizesChildrenStyled>
    ) : (
      <FontSizesStyled Component={Component} size={size} {...props} />
    )}
  </>
);
