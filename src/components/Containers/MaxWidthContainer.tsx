import React from "react";
import styled from "styled-components";

import { IContainerProps } from "../../definitions";
import { ContainerWidth } from "../../enums";

const MaxWidthContainerStyled = styled.div`
  max-width: ${ContainerWidth}px;
  width: 100%;
`;

export const MaxWidthContainer = ({ children }: IContainerProps) => (
  <MaxWidthContainerStyled>{children}</MaxWidthContainerStyled>
);
