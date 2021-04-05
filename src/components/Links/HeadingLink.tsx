import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { resetLinkStyles } from "../../styles";
import { linkColor, textColor } from "../../themes";
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
