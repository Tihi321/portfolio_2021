import { IContainerProps } from "@typings";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import {
  coreStyles,
  headingStyles,
  tableStyles,
  textStyles
} from "@styles";
import { LayoutContainer, MaxWidthContainer } from "@components";

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
