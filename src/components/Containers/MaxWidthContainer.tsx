import React from "react";
import styled from "styled-components";

import { ContainerWidth } from "../../enums";

const MaxWidthContainerStyled = styled.div`
  max-width: ${ContainerWidth}px;
`;

interface ILayoutProps {
  children: React.ReactNode;
}

export const MaxWidthContainer = ({ children }: ILayoutProps) => (
  <MaxWidthContainerStyled>{children}</MaxWidthContainerStyled>
);
