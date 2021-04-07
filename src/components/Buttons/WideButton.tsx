import React from "react";
import styled from "styled-components";

import { EFontSizes, resetButtonStyles } from "../../styles";
import { wideButtonColor } from "../../themes";
import { Span } from "../Text/Span";

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
`;

const TextStyled = styled(Span)`
  color: ${wideButtonColor};
`;

export const WideButton = ({ text, onClick }: IButtonProps) => (
  <ButtonStyled onClick={onClick}>
    <TextStyled text={text} size={EFontSizes.Medium} />
  </ButtonStyled>
);
