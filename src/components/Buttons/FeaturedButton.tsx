import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import { featuredButtonResponsiveFontStyles } from "../../styles";
import {
  featuredButtonBackgroundColor,
  featuredButtonColor
} from "../../themes";
import { media } from "../../utils";

export interface IFeaturedButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonStyled = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: ${featuredButtonColor};
  background-color: ${featuredButtonBackgroundColor};
  ${featuredButtonResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.DESKTOP, ESide.UP)} {
    ${featuredButtonResponsiveFontStyles(EBreakpoints.DESKTOP)}
  }
`;

export const FeaturedButton = ({ text, onClick }: IFeaturedButtonProps) => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
);
