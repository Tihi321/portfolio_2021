import React from "react";
import styled from "styled-components";

import { IContainerProps } from "~ts/typings";

const TableWrapperStyled = styled.div`
  overflow-x: auto;
`;

export const TableWrapper = ({ children }: IContainerProps) => (
  <TableWrapperStyled>{children}</TableWrapperStyled>
);
