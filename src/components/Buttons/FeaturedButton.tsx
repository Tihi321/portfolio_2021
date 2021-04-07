import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import {
  featuredButtonResponsiveFontStyles,
  resetButtonStyles
} from "../../styles";
import {
  featuredButtonBackgroundColor,
  featuredButtonColor
} from "../../themes";
import { media } from "../../utils";

interface IFeaturedButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonStyled = styled.button`
  ${resetButtonStyles}
  padding: 10px 20px;
  cursor: pointer;
  color: ${featuredButtonColor};
  background-color: ${featuredButtonBackgroundColor};
  width: 100%;
  ${featuredButtonResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    border-radius: 5px;
    padding: 5px 20px;
    width: auto;
    ${featuredButtonResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export const FeaturedButton = ({ text, onClick }: IFeaturedButtonProps) => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
);
