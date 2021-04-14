import { IContainerProps } from "@typings";
import React from "react";
import styled from "styled-components";

const TableWrapperStyled = styled.div`
  overflow-x: auto;
`;

export const TableWrapper = ({ children }: IContainerProps) => (
  <TableWrapperStyled>{children}</TableWrapperStyled>
);
