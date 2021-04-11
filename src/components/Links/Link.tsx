import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";

import { IStyledProps } from "../../definitions";
import { resetLinkStyles } from "../../styles";
import { linkColor, textColor } from "../../themes";
import { ETextSizes, ITextSizes, TextSize } from "../Common";

interface ILinkProps extends ITextSizes, IStyledProps {
  children: React.ReactNode;
  to: string;
}

const LinkStyles = css`
  ${resetLinkStyles}
  cursor: pointer;
  display: block;
  color: ${textColor};
  transition: color 0.15s ease;
  &:hover {
    color: ${linkColor};
  }
`;

const LinkStyled = styled(({ to, children, ...props }) => (
  <a src={to} {...props}>
    {children}
  </a>
))`
  ${LinkStyles}
`;

const InternalStyled = styled(GatsbyLink)`
  ${LinkStyles}
`;

export const Link = ({
  children,
  to,
  className,
  size = ETextSizes.Regular
}: ILinkProps) => (
  <LinkStyled to={to} className={className}>
    <TextSize size={size}>{children}</TextSize>
  </LinkStyled>
);

export const InternalLink = ({
  children,
  to,
  className,
  size = ETextSizes.Regular
}: ILinkProps) => (
  <InternalStyled to={to} className={className}>
    <TextSize size={size}>{children}</TextSize>
  </InternalStyled>
);
