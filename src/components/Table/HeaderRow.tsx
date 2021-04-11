import React from "react";
import styled from "styled-components";

import { IContainerProps } from "../../definitions";
import { EBreakpoints } from "../../enums";
import { media } from "../../utils";
import { Row } from "./Row";

const HeaderRowStyled = styled(Row)`
  padding-bottom: 10px;

  ${media(EBreakpoints.LAPTOP)} {
    padding-bottom: 20px;
  }
`;

export const HeaderRow = ({ children }: IContainerProps) => (
  <HeaderRowStyled>{children}</HeaderRowStyled>
);
