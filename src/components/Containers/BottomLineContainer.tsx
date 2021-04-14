import React from "react";
import styled from "styled-components";

import { bottomLineBorderColor } from "~ts/themes";
import { IContainerProps } from "~ts/typings";

const BottomLineContainerStyled = styled.div`
  padding: 2px 0;
  border-bottom: 1px solid ${bottomLineBorderColor};
`;

export const BottomLineContainer = ({ children }: IContainerProps) => (
  <BottomLineContainerStyled>{children}</BottomLineContainerStyled>
);
