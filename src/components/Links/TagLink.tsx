import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import {
  featuredTagLinkBackgroundColor,
  featuredTagLinkColor,
  tagLinkColor
} from "../../themes";

interface ILinkProps {
  text: string;
  to: string;
}

const TagStyled = styled(Link)`
  cursor: pointer;
  display: inline-block;
  position: relative;
  &::before {
    content: "#";
    font-size: 0.7em;
    padding-right: 2px;
  }
`;

const LinkStyled = styled(TagStyled)`
  color: ${tagLinkColor};
`;

const FeaturedLinkStyled = styled(TagStyled)`
  color: ${featuredTagLinkColor};
`;

const FeaturedLinkContainerStyled = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  background-color: ${featuredTagLinkBackgroundColor};
`;

export const TagLink = ({ text, to }: ILinkProps) => (
  <LinkStyled to={to}>{text}</LinkStyled>
);

export const FeaturedTagLink = ({ text, to }: ILinkProps) => (
  <FeaturedLinkContainerStyled>
    <FeaturedLinkStyled to={to}>{text}</FeaturedLinkStyled>
  </FeaturedLinkContainerStyled>
);
