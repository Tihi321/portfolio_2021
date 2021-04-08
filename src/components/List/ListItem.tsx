import React from "react";
import styled from "styled-components";

import { ETextSizes, TextSize } from "../Common/TextSize";

interface IProjectListItemProps {
  text: string;
  children: React.ReactNode;
}

const ListItemStyled = styled.span`
  display: block;
  padding: 15px 0;
`;

const ListTermStyled = styled.dt`
  text-align: center;
  text-transform: capitalize;
  padding-bottom: 10px;
`;

const ListDefinitionStyled = styled.dd`
  text-align: center;
  margin: 0;
`;

export const ListItem = ({ text, children }: IProjectListItemProps) => (
  <ListItemStyled>
    <ListTermStyled>
      <TextSize size={ETextSizes.Large}>{text}</TextSize>
    </ListTermStyled>
    <ListDefinitionStyled>{children}</ListDefinitionStyled>
  </ListItemStyled>
);
