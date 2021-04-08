import React from "react";
import styled from "styled-components";

import { EBreakpoints, ESide } from "../../enums";
import { resetButtonStyles } from "../../styles";
import { wideButtonColor } from "../../themes";
import { media } from "../../utils";
import { ETextSizes, TextSize } from "../Common/TextSize";

interface IButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonStyled = styled.button`
  ${resetButtonStyles}
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  border: 2px solid ${wideButtonColor};

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    border-radius: 5px;
  }
`;

const TextStyled = styled(TextSize)`
  color: ${wideButtonColor};
`;

export const WideButton = ({ text, onClick }: IButtonProps) => (
  <ButtonStyled onClick={onClick}>
    <TextStyled size={ETextSizes.Medium}>{text}</TextStyled>
  </ButtonStyled>
);
