import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import {
  featuredHeadingResponsiveFontStyles,
  resetLinkStyles
} from "../../styles";
import { linkColor, textColor } from "../../themes";
import { media } from "../../utils";
import { Heading, THeadingSizes } from "../Common/Heading";

interface IHeadingLinkProps {
  text: string;
  to: string;
  size: THeadingSizes;
  className?: string;
}

const HeadingLinkStyled = styled(Link)`
  ${resetLinkStyles}
  cursor: pointer;
  display: block;
  color: ${textColor};
  transition: color 0.15s ease;
  &:hover {
    color: ${linkColor};
  }
`;

export const HeadingLink = ({
  text,
  to,
  size,
  className
}: IHeadingLinkProps) => (
  <Heading size={size} className={className}>
    <HeadingLinkStyled to={to}>{text}</HeadingLinkStyled>
  </Heading>
);

interface IFeaturedHeadingLinkProps {
  text: string;
  to: string;
}

const FeaturedHeadingLinkStyled = styled(HeadingLink)`
  ${featuredHeadingResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    padding-bottom: 30px;
    ${featuredHeadingResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export const FeaturedHeadingLink = ({
  text,
  to
}: IFeaturedHeadingLinkProps) => (
  <FeaturedHeadingLinkStyled text={text} to={to} size="large" />
);
