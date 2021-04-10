import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import {
  coreStyles,
  headingStyles,
  tableStyles,
  textStyles
} from "../../styles";
import { LayoutContainer } from "./LayoutContainer";
import { MaxWidthContainer } from "./MaxWidthContainer";

const CoreStyle = createGlobalStyle`
  ${coreStyles}
  ${headingStyles}
  ${textStyles}
  ${tableStyles}
`;

interface ILayoutProps {
  children: React.ReactNode;
}

export const StyleLayout = ({ children }: ILayoutProps) => (
  <>
    <Normalize />
    <CoreStyle />
    <MaxWidthContainer>
      <LayoutContainer>{children}</LayoutContainer>
    </MaxWidthContainer>
  </>
);
