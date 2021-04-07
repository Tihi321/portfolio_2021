import React from "react";
import styled from "styled-components";

import { resetLinkStyles } from "../../styles";
import { linkColor, textColor } from "../../themes";
import {
  EFontSizes,
  FontSizeTheme,
  IFontSizes
} from "../Containers/FontSizeTheme";

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
`;

export const Link = ({
  text,
  to,
  className,
  size = EFontSizes.Regular
}: ILinkProps) => (
  <FontSizeTheme Component={LinkStyled} size={size} {...{ to, className }}>
    {text}
  </FontSizeTheme>
);
