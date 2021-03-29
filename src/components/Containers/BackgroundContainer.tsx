import React from "react";
import styled from "styled-components";

import { backgroundColor } from "../../themes";

export interface IBackgroundContainerProps {
  children: React.ReactNode;
}

const BackgroundContainerStyled = styled.div`
  background-color: ${backgroundColor};
  padding: 20px;
`;

export const BackgroundContainer = ({
  children
}: IBackgroundContainerProps): React.ReactElement => (
  <BackgroundContainerStyled>{children}</BackgroundContainerStyled>
);
