import { IContainerProps } from "@typings";
import React from "react";
import styled from "styled-components";

import { EBreakpoints } from "@enums";
import { media } from "@utils";

const ColumnsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${media(EBreakpoints.LAPTOP)} {
    grid-template-columns: minmax(150px, 200px) 1fr;
  }
`;

export const ColumnsContainer = ({ children }: IContainerProps) => (
  <ColumnsContainerStyled>{children}</ColumnsContainerStyled>
);
