import { IContainerProps } from "@typings";
import React from "react";
import styled from "styled-components";

const LayoutContainerStyled = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: max-content 1fr max-content;
`;

export const LayoutContainer = ({ children }: IContainerProps) => (
  <LayoutContainerStyled>{children}</LayoutContainerStyled>
);
