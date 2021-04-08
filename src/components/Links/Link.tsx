import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";
import { resetLinkStyles } from "../../styles";
import { linkColor, textColor } from "../../themes";
import { ETextSizes, ITextSizes, TextSize } from "../Common/TextSize";

interface ILinkProps extends ITextSizes, IStyledProps {
  text: string;
  to: string;
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
  size = ETextSizes.Regular
}: ILinkProps) => (
  <LinkStyled to={to} className={className}>
    <TextSize size={size}>{text}</TextSize>
  </LinkStyled>
);
