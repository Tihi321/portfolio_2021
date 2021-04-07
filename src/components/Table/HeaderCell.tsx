import React from "react";
import styled from "styled-components";

import { EFontSizes } from "../Containers/FontSizeTheme";
import { Paragraph } from "../Text/Paragraph";

const HeaderCellStyled = styled.th`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TextStyled = styled(Paragraph)`
  text-transform: uppercase;
`;

interface IHeaderCellProps {
  text: string;
}

export const HeaderCell = ({ text }: IHeaderCellProps) => (
  <HeaderCellStyled>
    <TextStyled text={text} size={EFontSizes.Medium} />
  </HeaderCellStyled>
);
