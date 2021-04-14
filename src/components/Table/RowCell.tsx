import { IContainerProps } from "@typings";
import React from "react";
import styled from "styled-components";

const RowCellStyled = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const RowCell = ({ children }: IContainerProps) => (
  <RowCellStyled>{children}</RowCellStyled>
);

export const EmptyRowCell = () => <RowCellStyled />;
