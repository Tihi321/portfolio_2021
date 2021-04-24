import React from "react";
import styled, { keyframes } from "styled-components";

import { IContainerProps } from "~ts/typings";

const revealComponentAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const RevealContainerStyled = styled.div`
  animation: ${revealComponentAnimation} 1s ease-out;
`;

export const RevealContainer = ({ children }: IContainerProps) => (
  <RevealContainerStyled>{children}</RevealContainerStyled>
);
