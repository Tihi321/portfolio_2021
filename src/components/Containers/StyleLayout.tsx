import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import { IContainerProps } from "../../definitions";
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

export const StyleLayout = ({ children }: IContainerProps) => (
  <>
    <Normalize />
    <CoreStyle />
    <MaxWidthContainer>
      <LayoutContainer>{children}</LayoutContainer>
    </MaxWidthContainer>
  </>
);
