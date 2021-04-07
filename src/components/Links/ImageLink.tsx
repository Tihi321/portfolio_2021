import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";
import { resetLinkStyles } from "../../styles";

interface IImageLinkProps extends IStyledProps {
  alt: string;
  to: string;
  src: string;
}

const LinkStyled = styled(Link)`
  ${resetLinkStyles}
  cursor: pointer;
  display: block;
`;

const ImageStyled = styled.img`
  display: block;
`;

export const ImageLink = ({ alt, to, src, className }: IImageLinkProps) => (
  <LinkStyled className={className} to={to}>
    <ImageStyled src={src} alt={alt} />
  </LinkStyled>
);
