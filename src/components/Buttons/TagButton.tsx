import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import { tagsResponsiveFontStyles } from "../../styles";
import { tagButtonColor } from "../../themes";
import { media } from "../../utils";

interface IButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const TagButtonStyled = styled.button`
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-style: italic;
  background: none;
  border: none;
  color: ${tagButtonColor};

  &:hover {
    top: 1px;
  }
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

export const TagButton = ({ text, onClick, className }: IButtonProps) => (
  <TagButtonStyled className={className} onClick={onClick}>
    {text}
  </TagButtonStyled>
);
