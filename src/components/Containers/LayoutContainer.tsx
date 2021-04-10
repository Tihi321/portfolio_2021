import React from "react";
import styled from "styled-components";

const LayoutContainerStyled = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: max-content 1fr max-content;
`;

interface ILayoutProps {
  children: React.ReactNode;
}

export const LayoutContainer = ({ children }: ILayoutProps) => (
  <LayoutContainerStyled>{children}</LayoutContainerStyled>
);
