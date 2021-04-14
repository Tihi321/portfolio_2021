import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import { LayoutContainer, MaxWidthContainer } from "~ts/components/Containers";
import { coreStyles, headingStyles, tableStyles, textStyles } from "~ts/styles";
import { IContainerProps } from "~ts/typings";

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
