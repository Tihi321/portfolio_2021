import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import { resetFontStyles, tagsResponsiveFontStyles } from "../../styles";
import {
  featuredTagLinkBackgroundColor,
  featuredTagLinkColor,
  tagLinkColor
} from "../../themes";
import { media } from "../../utils";

interface ILinkProps {
  text: string;
  to: string;
  className?: string;
}

const TagStyled = styled(Link)`
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-style: italic;
  &::before {
    content: "#";
    font-size: 0.7em;
    padding-right: 2px;
  }

  ${tagsResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${tagsResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const LinkStyled = styled(TagStyled)`
  color: ${tagLinkColor};
`;

const FeaturedLinkStyled = styled(TagStyled)`
  color: ${featuredTagLinkColor};
`;

const FeaturedLinkContainerStyled = styled.div`
  ${resetFontStyles};
  padding: 2px 5px;
  border-radius: 5px;
  background-color: ${featuredTagLinkBackgroundColor};
`;

export const TagLink = ({ text, to, className }: ILinkProps) => (
  <LinkStyled className={className} to={to}>
    {text}
  </LinkStyled>
);

export const FeaturedTagLink = ({ text, to, className }: ILinkProps) => (
  <FeaturedLinkContainerStyled className={className}>
    <FeaturedLinkStyled to={to}>{text}</FeaturedLinkStyled>
  </FeaturedLinkContainerStyled>
);
