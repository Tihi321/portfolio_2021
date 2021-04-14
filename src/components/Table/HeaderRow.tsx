import React from "react";
import styled from "styled-components";

import { EBreakpoints } from "~ts/enums";
import { IContainerProps } from "~ts/typings";
import { media } from "~ts/utils";

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
