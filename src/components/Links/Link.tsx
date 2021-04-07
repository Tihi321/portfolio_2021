import React from "react";
import styled from "styled-components";

import {
  EFontSizes,
  fontSizeThemeStyles,
  IFontSizes,
  resetLinkStyles
} from "../../styles";
import { linkColor, textColor } from "../../themes";

interface ILinkProps extends IFontSizes {
  text: string;
  to: string;
  className?: string;
}

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
  ${fontSizeThemeStyles}
`;

export const Link = ({
  text,
  to,
  className,
  size = EFontSizes.Regular
}: ILinkProps) => (
  <LinkStyled size={size} to={to} className={className}>
    {text}
  </LinkStyled>
);
