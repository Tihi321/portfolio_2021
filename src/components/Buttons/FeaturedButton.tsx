import React from "react";
import styled from "styled-components";

import {
  featuredButtonBackgroundColor,
  featuredButtonColor,
  featuredButtonFontFamily,
  featuredButtonFontSize,
  featuredButtonFontWeight,
  featuredButtonLineHeight
} from "../../themes";

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
  font-family: ${featuredButtonFontFamily};
  font-size: ${featuredButtonFontSize};
  font-weight: ${featuredButtonFontWeight};
  line-height: ${featuredButtonLineHeight};
  @media (max-width: 800px) {
    display: none;
  }
`;

export const FeaturedButton = ({ text, onClick }: IFeaturedButtonProps) => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
);
