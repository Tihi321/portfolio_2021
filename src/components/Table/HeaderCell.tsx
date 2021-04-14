import React from "react";
import styled from "styled-components";

import { ETextSizes, TextSize } from "@components";

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
  size?: ETextSizes;
}

export const HeaderCell = ({
  text,
  size = ETextSizes.Medium
}: IHeaderCellProps) => (
  <HeaderCellStyled>
    <TextStyled size={size}>{text}</TextStyled>
  </HeaderCellStyled>
);
