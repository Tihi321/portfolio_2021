import React from "react";
import styled, { css } from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import {
  heading01ResponsiveFontStyles,
  heading02ResponsiveFontStyles,
  heading03ResponsiveFontStyles,
  heading04ResponsiveFontStyles,
  resetLinkStyles
} from "../../styles";
import { linkColor, textColor } from "../../themes";
import { media } from "../../utils";

export type TLinkSizes = "large" | "medium" | "regular" | "small";

interface ILinkProps {
  text: string;
  to: string;
  size: TLinkSizes;
}

const largeStyles = css`
  ${heading01ResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${heading01ResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const mediumStyles = css`
  ${heading02ResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${heading02ResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const regularStyles = css`
  ${heading03ResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${heading03ResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const smallStyles = css`
  ${heading04ResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${heading04ResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const LinkStyled = styled(({ to, children, ...props }) => (
  <a src={to} {...props}>
    {children}
  </a>
))`
  ${resetLinkStyles}
  cursor: pointer;
  display: block;
  color: ${textColor};
  transition: color 0.15s ease;
  &:hover {
    color: ${linkColor};
  }

  ${props => {
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
  }}
`;

export const Link = ({ text, to, size }: ILinkProps) => (
  <LinkStyled to={to} size={size}>
    {text}
  </LinkStyled>
);
