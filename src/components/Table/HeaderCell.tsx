import React from "react";
import styled from "styled-components";

import { ETextSizes, TextSize } from "../Common";

const HeaderCellStyled = styled.th`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TextStyled = styled(TextSize)`
  text-transform: uppercase;
`;

interface IHeaderCellProps {
  text: string;
}

export const HeaderCell = ({ text }: IHeaderCellProps) => (
  <HeaderCellStyled>
    <TextStyled size={ETextSizes.Medium}>{text}</TextStyled>
  </HeaderCellStyled>
);
