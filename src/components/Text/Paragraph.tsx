import React from "react";
import styled from "styled-components";

import { EFontSizes, fontSizeThemeStyles, IFontSizes } from "../../styles";

interface ITextProps extends IFontSizes {
  text: string;
  className?: string;
}

const ParagraphStyled = styled(({ children, ...props }) => (
  <p {...props}>{children}</p>
))`
  padding-bottom: 0;
  ${fontSizeThemeStyles}
`;

export const Paragraph = ({
  text,
  className,
  size = EFontSizes.Regular
}: ITextProps) => (
  <ParagraphStyled size={size} className={className}>
    {text}
  </ParagraphStyled>
);
