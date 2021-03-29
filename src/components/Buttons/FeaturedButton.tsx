import React from "react";
import styled from "styled-components";

import {
  EBreakpoints,
  featuredButtonBackgroundColor,
  featuredButtonColor,
  featuredButtonResponsiveStyles
} from "../../themes";
import { addSelectorArguments, ESide, media } from "../../utils";

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
  ${addSelectorArguments(featuredButtonResponsiveStyles, EBreakpoints.MOBILE)};
  ${media(EBreakpoints.DESKTOP, ESide.UP)} {
    ${addSelectorArguments(
      featuredButtonResponsiveStyles,
      EBreakpoints.DESKTOP
    )}
  }
`;

export const FeaturedButton = ({ text, onClick }: IFeaturedButtonProps) => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
);
