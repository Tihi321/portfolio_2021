import React from "react";
import styled from "styled-components";

import { bottomLineBorderColor } from "../../themes";

const BottomLineContainerStyled = styled.div`
  padding: 2px 0;
  border-bottom: 1px solid ${bottomLineBorderColor};
`;

interface ILayoutProps {
  children: React.ReactNode;
}

export const BottomLineContainer = ({ children }: ILayoutProps) => (
  <BottomLineContainerStyled>{children}</BottomLineContainerStyled>
);