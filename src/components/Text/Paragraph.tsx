import React from "react";
import styled from "styled-components";

import {
  EFontSizes,
  FontSizeTheme,
  IFontSizes
} from "../Containers/FontSizeTheme";

interface ITextProps extends IFontSizes {
  text: string;
  className?: string;
}

const TextStyled = styled.p`
  padding-bottom: 0;
`;

export const Paragraph = ({
  text,
  className,
  size = EFontSizes.Regular
}: ITextProps) => (
  <FontSizeTheme Component={TextStyled} size={size} {...{ className }}>
    {text}
  </FontSizeTheme>
);
