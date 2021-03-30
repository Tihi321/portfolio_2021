import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import { coreStyles } from "../../styles";
import { MaxWidthContainer } from "./MaxWidthContainer";

const CoreStyle = createGlobalStyle`
  ${coreStyles}
`;

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => (
  <>
    <Normalize />
    <CoreStyle />
    <MaxWidthContainer>{children}</MaxWidthContainer>
  </>
);
